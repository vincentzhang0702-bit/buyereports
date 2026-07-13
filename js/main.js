/* ============================================
   Main JavaScript - Core Functionality
   ============================================ */

// ---------- Compare List Management ----------
function getCompareList() {
  try {
    return JSON.parse(localStorage.getItem('compareList') || '[]');
  } catch { return []; }
}

function saveCompareList(list) {
  localStorage.setItem('compareList', JSON.stringify(list));
}

function addToCompare(productId) {
  const list = getCompareList();
  if (list.includes(productId)) {
    showToast('Product already in comparison!', 'error');
    return;
  }
  if (list.length >= 4) {
    showToast('Maximum 4 products for comparison', 'error');
    return;
  }
  list.push(productId);
  saveCompareList(list);
  updateCompareCount();
  showToast('Added to comparison ✓', 'success');
}

function removeFromCompare(productId) {
  const list = getCompareList().filter(id => id !== productId);
  saveCompareList(list);
  updateCompareCount();
  showToast('Removed from comparison', 'success');
}

function updateCompareCount() {
  const count = getCompareList().length;
  document.querySelectorAll('.compare-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline-flex' : 'none';
  });
}

function getCompareProducts() {
  const list = getCompareList();
  return list.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
}

// ---------- Toast ----------
function showToast(message, type) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = `toast ${type || ''}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ---------- Star Rating Rendering ----------
function renderStars(rating, size) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  let html = '';
  for (let i = 0; i < full; i++) html += '<span>★</span>';
  if (half) html += '<span>★</span>'; // simplified: using full star for half
  for (let i = 0; i < empty; i++) html += '<span class="star-empty">★</span>';
  return `<span class="stars ${size || ''}">${html}</span>`;
}

// ---------- Product Card HTML ----------
function renderProductCard(product) {
  const compareChecked = getCompareList().includes(product.id) ? 'checked' : '';
  return `
    <div class="product-card">
      <div class="product-card-img ${product.category}">
        <span>${product.image}</span>
        ${product.rating >= 4.7 ? '<span class="product-card-badge"><span class="badge badge-green">Top Pick</span></span>' : ''}
      </div>
      <div class="product-card-body">
        <span class="product-card-cat">${product.subcategory}</span>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-card-rating">
          ${renderStars(product.rating, 'sm')}
          <span class="rating-score">${product.rating}</span>
          <span style="color:#94A3B8;font-size:0.8rem;margin-left:4px;">(${product.reviewCount.toLocaleString()})</span>
        </div>
        <p class="product-card-desc">${product.description}</p>
        <div class="product-card-footer">
          <span class="product-card-price"><span class="prefix">From </span>${product.price}</span>
          <label class="compare-checkbox" onclick="event.stopPropagation(); toggleCompareCard('${product.id}', this)">
            <input type="checkbox" ${compareChecked} onchange="toggleCompare('${product.id}', this)">
            ⚖️ Compare
          </label>
        </div>
      </div>
    </div>
  `;
}

// ---------- Compare Toggle ----------
function toggleCompare(productId, checkbox) {
  if (checkbox.checked) {
    addToCompare(productId);
  } else {
    removeFromCompare(productId);
  }
  checkbox.checked = getCompareList().includes(productId);
}

function toggleCompareCard(productId, label) {
  const checkbox = label.querySelector('input');
  if (checkbox.checked) {
    checkbox.checked = false;
    removeFromCompare(productId);
  } else {
    checkbox.checked = true;
    addToCompare(productId);
  }
}

// ---------- Search ----------
function setupSearch() {
  const searchInputs = document.querySelectorAll('.hero-search input, .nav-search input');
  searchInputs.forEach(input => {
    if (!input) return;
    input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
          window.location.href = `category.html?search=${encodeURIComponent(query)}`;
        }
      }
    });
    // Also trigger on clicking the search button
    const btn = input.closest('.hero-search, .nav-search');
    if (btn) {
      const searchBtn = btn.querySelector('button, .search-btn');
      if (searchBtn) {
        searchBtn.addEventListener('click', () => {
          const query = input.value.trim();
          if (query) {
            window.location.href = `category.html?search=${encodeURIComponent(query)}`;
          }
        });
      }
    }
  });
}

// ---------- Mobile Menu ----------
function setupMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-nav');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    btn.textContent = menu.classList.contains('active') ? '✕' : '☰';
  });

  // Close menu on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      btn.textContent = '☰';
    });
  });
}

// ---------- URL Params ----------
function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  updateCompareCount();
  setupSearch();
  setupMobileMenu();
});
