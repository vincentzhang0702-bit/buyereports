/* ============================================
   Product Data - Mock Database
   ============================================ */

const PRODUCTS = [
  // ==================== Consumer Electronics ====================
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5',
    category: 'electronics',
    categoryName: 'Consumer Electronics',
    subcategory: 'Headphones',
    image: '🎧',
    rating: 4.8,
    reviewCount: 1247,
    price: '$349',
    priceRange: '$299 - $399',
    description: 'Industry-leading noise canceling headphones with exceptional sound quality, crystal-clear hands-free calling, and all-day comfort.',
    pros: [
      'Best-in-class noise cancellation',
      'Exceptional sound quality with LDAC support',
      '30-hour battery life',
      'Lightweight and comfortable for long sessions'
    ],
    cons: [
      'Premium price point',
      'No IP rating for water resistance',
      'Doesn\'t fold flat for travel'
    ],
    specs: {
      'Driver Size': '30mm',
      'Battery Life': '30 hours',
      'Noise Cancellation': 'Adaptive ANC',
      'Connectivity': 'Bluetooth 5.2, 3.5mm',
      'Weight': '250g',
      'Charging': 'USB-C, Quick Charge',
      'Codec Support': 'LDAC, AAC, SBC'
    },
    review: `The Sony WH-1000XM5 represents the pinnacle of consumer headphone technology. Building on the success of the XM4, Sony has refined every aspect of the listening experience.

The noise cancellation is simply remarkable — it adapts to your environment in real-time, blocking out everything from airplane engine rumble to office chatter. The sound signature is warm and detailed, with punchy bass that doesn't overpower the mids and highs.

Comfort has been significantly improved with a redesigned headband and lighter overall weight. You can wear these for an entire workday without fatigue. The microphone array for calls has also been upgraded, making your voice sound natural even in noisy environments.

For the price, these are simply the best wireless headphones you can buy in 2025.`
  },
  {
    id: 'apple-airpods-pro-2',
    name: 'Apple AirPods Pro 2',
    category: 'electronics',
    categoryName: 'Consumer Electronics',
    subcategory: 'Earbuds',
    image: '🎵',
    rating: 4.7,
    reviewCount: 2356,
    price: '$249',
    priceRange: '$199 - $249',
    description: 'Premium true wireless earbuds with active noise cancellation, spatial audio, and seamless Apple ecosystem integration.',
    pros: [
      'Excellent transparency mode',
      'Seamless Apple device switching',
      'Impressive spatial audio experience',
      'Improved battery life over Gen 1'
    ],
    cons: [
      'Best features limited to Apple devices',
      'No high-res audio codec support',
      'Ear tips may not fit all users'
    ],
    specs: {
      'Chip': 'Apple H2',
      'Battery Life': '6 hours (30 with case)',
      'Noise Cancellation': 'Active ANC',
      'Water Resistance': 'IPX4',
      'Connectivity': 'Bluetooth 5.3',
      'Charging': 'Lightning / MagSafe / Qi',
      'Weight': '5.3g per bud'
    },
    review: `The AirPods Pro 2 are Apple's most advanced earbuds yet, and they deliver an audio experience that's hard to beat — especially if you're already in the Apple ecosystem.

The H2 chip powers impressive computational audio that makes music sound rich and immersive. Active Noise Cancellation is doubled compared to the first generation, and the new Adaptive Transparency mode intelligently reduces harsh environmental noise while keeping you aware of your surroundings.

Spatial Audio with dynamic head tracking creates a theater-like experience for movies and music. The new XS ear tip size ensures a better fit for more users. Battery life has been bumped to 6 hours per charge, and the case now includes a speaker for Find My support and a lanyard loop.

For iPhone users, these are simply the best true wireless earbuds available.`
  },
  {
    id: 'macbook-air-m3',
    name: 'MacBook Air M3',
    category: 'electronics',
    categoryName: 'Consumer Electronics',
    subcategory: 'Laptops',
    image: '💻',
    rating: 4.9,
    reviewCount: 892,
    price: '$1,099',
    priceRange: '$999 - $1,499',
    description: 'Incredibly thin and light laptop with the M3 chip, stunning Liquid Retina display, and all-day battery life.',
    pros: [
      'Blazing fast M3 chip performance',
      '18-hour battery life',
      'Fanless, completely silent design',
      'Gorgeous Liquid Retina display'
    ],
    cons: [
      'Limited to two external displays',
      'Only two USB-C ports',
      'No user-upgradeable RAM or SSD'
    ],
    specs: {
      'Processor': 'Apple M3 (8-core CPU, 10-core GPU)',
      'RAM': '8GB / 16GB / 24GB',
      'Storage': '256GB - 2TB SSD',
      'Display': '13.6" Liquid Retina (2560x1664)',
      'Battery': 'Up to 18 hours',
      'Weight': '1.24 kg',
      'Ports': '2x Thunderbolt / USB 4, MagSafe, 3.5mm'
    },
    review: `The MacBook Air M3 is arguably the best laptop for most people. It combines incredible performance with an impossibly thin and light design that makes it a joy to carry anywhere.

Apple's M3 chip delivers a significant performance leap over the M2, handling everything from web browsing to video editing with ease. The fanless design means complete silence — you'll never hear a fan spin up, even under heavy loads. The 13.6-inch Liquid Retina display is bright, color-accurate, and a pleasure to work on.

Battery life is staggering at up to 18 hours of real-world use. MagSafe charging frees up both USB-C ports. The 1080p webcam, four-speaker sound system, and three-mic array make it perfect for remote work.

At $1,099, it's not cheap, but the value proposition is outstanding for what you get. This laptop will serve you well for years.`
  },
  {
    id: 'samsung-galaxy-s25',
    name: 'Samsung Galaxy S25 Ultra',
    category: 'electronics',
    categoryName: 'Consumer Electronics',
    subcategory: 'Smartphones',
    image: '📱',
    rating: 4.6,
    reviewCount: 1543,
    price: '$1,299',
    priceRange: '$1,099 - $1,299',
    description: 'Premium flagship smartphone with advanced AI features, pro-grade camera system, and stunning Dynamic AMOLED display.',
    pros: [
      'Versatile quad-camera system',
      'Stunning 120Hz AMOLED display',
      'S Pen included',
      '7 years of software updates'
    ],
    cons: [
      'Very expensive',
      'Large and heavy',
      'Battery life could be better'
    ],
    specs: {
      'Processor': 'Snapdragon 8 Gen 4',
      'RAM': '12GB / 16GB',
      'Storage': '256GB - 1TB',
      'Display': '6.8" Dynamic AMOLED 2X, 120Hz',
      'Battery': '5000 mAh',
      'Camera': '200MP + 50MP + 12MP + 10MP',
      'OS': 'Android 15, One UI 7'
    },
    review: `Samsung's Galaxy S25 Ultra is a technological tour de force that pushes the boundaries of what a smartphone can do. The camera system is the star here — a 200MP main sensor captures incredible detail, while the periscope zoom lets you get close to subjects from far away.

The 6.8-inch Dynamic AMOLED display is simply gorgeous, with a buttery smooth 120Hz refresh rate and peak brightness that makes outdoor use effortless. Samsung's commitment to 7 years of OS and security updates means this phone will stay current for a long time.

Galaxy AI features add genuinely useful capabilities like real-time translation, photo editing, and smart summarization. The integrated S Pen remains a unique advantage for note-takers and creatives.

The main drawbacks are the sheer size and weight — this is not a phone for one-handed use — and the premium price tag. But if you want the most capable Android phone on the market, this is it.`
  },
  {
    id: 'dell-ultrasharp-u2723qe',
    name: 'Dell UltraSharp U2723QE',
    category: 'electronics',
    categoryName: 'Consumer Electronics',
    subcategory: 'Monitors',
    image: '🖥️',
    rating: 4.7,
    reviewCount: 489,
    price: '$619',
    priceRange: '$549 - $679',
    description: 'Professional 27-inch 4K USB-C monitor with IPS Black technology for exceptional contrast and color accuracy.',
    pros: [
      'IPS Black for 2000:1 contrast ratio',
      'Built-in USB-C hub with 90W charging',
      'Factory calibrated Delta E < 2',
      'Excellent connectivity options'
    ],
    cons: [
      '60Hz refresh rate only',
      'No built-in speakers',
      'HDR performance is average'
    ],
    specs: {
      'Size': '27 inches',
      'Resolution': '3840 x 2160 (4K)',
      'Panel': 'IPS Black',
      'Contrast': '2000:1',
      'Brightness': '400 nits',
      'Ports': 'USB-C (90W), HDMI, DP, 5x USB-A, RJ45',
      'Color': '98% DCI-P3'
    },
    review: `The Dell UltraSharp U2723QE sets a new standard for productivity monitors. The star feature is IPS Black technology, which doubles the contrast ratio compared to traditional IPS panels, delivering deeper blacks and more vibrant colors that make everything from spreadsheets to photo editing look fantastic.

The built-in USB-C hub is a game-changer for laptop users — a single cable delivers 4K video, 90W charging, and connects all your peripherals through the monitor's built-in USB-A ports and Ethernet. Color accuracy is outstanding straight out of the box with factory calibration ensuring Delta E < 2.

This monitor is purpose-built for work, not gaming — the 60Hz refresh rate and lack of variable refresh rate support mean gamers should look elsewhere. But for programmers, designers, and anyone who spends hours staring at a screen, the U2723QE is a worthwhile investment.`
  },
  {
    id: 'ipad-air-m2',
    name: 'iPad Air M2',
    category: 'electronics',
    categoryName: 'Consumer Electronics',
    subcategory: 'Tablets',
    image: '📋',
    rating: 4.6,
    reviewCount: 678,
    price: '$599',
    priceRange: '$549 - $899',
    description: 'Versatile tablet with M2 chip, Liquid Retina display, Apple Pencil Pro support, and all-day battery life.',
    pros: [
      'Powerful M2 chip for any task',
      'Apple Pencil Pro support',
      'Great value vs iPad Pro',
      'All-day battery life'
    ],
    cons: [
      'No Face ID (Touch ID only)',
      '60Hz display vs 120Hz on Pro',
      'Base 128GB storage on 11-inch'
    ],
    specs: {
      'Processor': 'Apple M2',
      'Display': '11" / 13" Liquid Retina',
      'Storage': '128GB - 1TB',
      'Camera': '12MP wide, 12MP ultra wide',
      'Battery': 'Up to 10 hours',
      'Connectivity': 'Wi-Fi 6E, 5G (optional)',
      'Weight': '462g (11-inch)'
    },
    review: `The iPad Air M2 hits the sweet spot in Apple's tablet lineup. It packs the same M2 chip found in the previous-generation iPad Pro, making it more than powerful enough for creative work, gaming, and multitasking — all at a significantly lower price than the Pro models.

The Liquid Retina display is bright and color-accurate, and support for the new Apple Pencil Pro opens up creative possibilities with hover detection and squeeze gestures. The front camera is now landscape-oriented, making video calls feel more natural.

While it lacks the Pro's 120Hz ProMotion display and Face ID, most users won't miss these features day-to-day. The iPad Air M2 is the tablet we recommend to almost everyone — it delivers 90% of the Pro experience at 70% of the price.`
  },
  {
    id: 'kindle-paperwhite',
    name: 'Kindle Paperwhite Signature',
    category: 'electronics',
    categoryName: 'Consumer Electronics',
    subcategory: 'E-Readers',
    image: '📖',
    rating: 4.5,
    reviewCount: 921,
    price: '$189',
    priceRange: '$149 - $189',
    description: 'Premium e-reader with a 6.8-inch glare-free display, adjustable warm light, wireless charging, and weeks of battery life.',
    pros: [
      'Sharp, glare-free 300 PPI display',
      'Waterproof (IPX8)',
      'Warm light for night reading',
      'Weeks-long battery life'
    ],
    cons: [
      'No physical page-turn buttons',
      'Audible support limited in some regions',
      'Slightly heavier than basic Kindle'
    ],
    specs: {
      'Display': '6.8" E Ink Carta 1200, 300 PPI',
      'Storage': '32GB',
      'Light': '17 LEDs, adjustable warm light',
      'Water Resistance': 'IPX8',
      'Battery': 'Up to 10 weeks',
      'Charging': 'USB-C, Qi wireless',
      'Weight': '208g'
    },
    review: `The Kindle Paperwhite Signature Edition is the ultimate e-reader for book lovers. The 6.8-inch display is razor-sharp at 300 PPI, and the adjustable warm light makes reading in bed a comfortable experience that won't disrupt your sleep.

The flush-front design and IPX8 waterproofing mean you can read worry-free at the beach or in the bathtub. The Signature Edition adds an auto-adjusting front light, wireless charging, and 32GB of storage — enough for thousands of books.

Battery life is measured in weeks, not days, which means less time worrying about charging and more time reading. The Kindle ecosystem gives you access to millions of books, and Kindle Unlimited subscribers get a Netflix-like all-you-can-read experience.

If you love reading, the Paperwhite Signature Edition is the best way to carry an entire library in your bag.`
  },

  // ==================== Home Appliances ====================
  {
    id: 'dyson-v15-detect',
    name: 'Dyson V15 Detect',
    category: 'appliances',
    categoryName: 'Home Appliances',
    subcategory: 'Vacuum Cleaners',
    image: '🧹',
    rating: 4.7,
    reviewCount: 783,
    price: '$749',
    priceRange: '$649 - $799',
    description: 'Intelligent cordless vacuum with laser dust detection, piezo sensor, and up to 60 minutes of fade-free suction.',
    pros: [
      'Laser reveals microscopic dust',
      'Piezo sensor counts particles',
      'Powerful suction that doesn\'t fade',
      'Converts to handheld for versatility'
    ],
    cons: [
      'Expensive for a vacuum',
      'Trigger must be held continuously',
      'Battery not hot-swappable'
    ],
    specs: {
      'Suction': '240 AW',
      'Runtime': 'Up to 60 minutes',
      'Bin Volume': '0.76L',
      'Filtration': 'Whole-machine HEPA',
      'Weight': '3.07 kg',
      'Charging': '4.5 hours',
      'Warranty': '2 years'
    },
    review: `The Dyson V15 Detect is the smartest cordless vacuum we've ever tested. Its standout feature is the laser that reveals dust particles invisible to the naked eye — once you see what's on your supposedly clean floor, you'll never go back.

The piezo sensor counts and categorizes particles by size, displaying real-time data on the LCD screen. This isn't just a gimmick; it provides genuine feedback that your floors are getting cleaner. Suction power is excellent across all floor types, and the anti-tangle brush bar genuinely prevents hair wrap.

Battery life at 60 minutes is adequate for most homes, though it varies significantly by power mode and attachment. The trigger-based operation divides opinion — some prefer the instant on/off control, others wish for an on/off switch.

At $749, it's a significant investment, but the build quality and cleaning performance justify the price for those who want the best.`
  },
  {
    id: 'roomba-j9-plus',
    name: 'iRobot Roomba j9+',
    category: 'appliances',
    categoryName: 'Home Appliances',
    subcategory: 'Robot Vacuums',
    image: '🤖',
    rating: 4.4,
    reviewCount: 567,
    price: '$899',
    priceRange: '$699 - $999',
    description: 'Premium robot vacuum and mop with precision navigation, automatic dirt disposal, and smart home integration.',
    pros: [
      'Automatic dirt disposal for 60 days',
      'PrecisionVision navigation avoids obstacles',
      'Smart mapping with room-specific cleaning',
      'Mops and vacuums in one pass'
    ],
    cons: [
      'Premium price',
      'Mop function is basic (no scrubbing)',
      'Can struggle with very dark carpets'
    ],
    specs: {
      'Navigation': 'PrecisionVision + iAdapt 3.0',
      'Suction': '3-Stage Cleaning System',
      'Runtime': 'Up to 120 minutes',
      'Bin': 'Self-emptying base (60 days)',
      'Mapping': 'Smart Map with room labels',
      'Mopping': 'Precision Jet Spray',
      'Voice': 'Alexa, Google, Siri compatible'
    },
    review: `The Roomba j9+ represents iRobot's most refined robot vacuum yet. The PrecisionVision navigation system uses a camera and 3D sensors to identify and avoid obstacles like cords, pet waste, and shoes — no more pre-cleaning before your robot cleans.

The Clean Base automatic dirt disposal system is genuinely transformative. The robot empties itself into a bag that holds up to 60 days of debris, so you barely need to think about vacuuming. Smart mapping lets you label rooms and set specific cleaning schedules or no-go zones.

The integrated mopping is good for light maintenance but won't replace a dedicated mop for deep cleaning. At $899, it's expensive, but the convenience factor for busy households is enormous — coming home to clean floors every day without lifting a finger is hard to put a price on.`
  },
  {
    id: 'kitchenaid-stand-mixer',
    name: 'KitchenAid Artisan Stand Mixer',
    category: 'appliances',
    categoryName: 'Home Appliances',
    subcategory: 'Kitchen Appliances',
    image: '🍳',
    rating: 4.8,
    reviewCount: 2103,
    price: '$449',
    priceRange: '$379 - $499',
    description: 'Iconic 5-quart stand mixer with 10 speeds, tilt-head design, and compatibility with dozens of attachments.',
    pros: [
      'Powerful and reliable motor',
      'Dozens of available attachments',
      'Beautiful design, many colors',
      'Built to last decades'
    ],
    cons: [
      'Heavy and takes up counter space',
      'Expensive attachments sold separately',
      'Bowl lift models better for heavy dough'
    ],
    specs: {
      'Capacity': '5 quarts (4.7L)',
      'Speeds': '10',
      'Motor': '325 watts',
      'Material': 'Metal construction',
      'Attachments': 'Flat beater, dough hook, wire whip',
      'Weight': '11.8 kg',
      'Warranty': '5 years'
    },
    review: `The KitchenAid Artisan Stand Mixer is more than an appliance — it's a kitchen icon. For decades, it has been the gold standard for home bakers, and for good reason. The 325-watt motor handles everything from whipped cream to thick cookie dough without breaking a sweat.

The tilt-head design makes it easy to add ingredients and swap attachments. The included flat beater, dough hook, and wire whip cover the basics, but the real magic is in the attachment ecosystem — pasta makers, food grinders, spiralizers, ice cream makers, and more transform this mixer into a complete kitchen system.

Available in over 30 colors, it's as much a countertop statement piece as a tool. The build quality is exceptional — many owners report their mixers lasting 20+ years. At $449, it's not cheap, but spread over decades of reliable service, it's one of the best kitchen investments you can make.`
  },
  {
    id: 'breville-barista-express',
    name: 'Breville Barista Express Impress',
    category: 'appliances',
    categoryName: 'Home Appliances',
    subcategory: 'Coffee Machines',
    image: '☕',
    rating: 4.5,
    reviewCount: 432,
    price: '$899',
    priceRange: '$749 - $999',
    description: 'All-in-one espresso machine with integrated grinder, assisted tamping, and precise temperature control for café-quality coffee at home.',
    pros: [
      'Integrated conical burr grinder',
      'Assisted tamping for consistency',
      'ThermoJet fast heat-up (3 seconds)',
      'Dose control for perfect extraction'
    ],
    cons: [
      'Learning curve for beginners',
      'Grinder could be finer for some beans',
      'Takes up significant counter space'
    ],
    specs: {
      'Pump': '15 bar Italian pump',
      'Grinder': '30-setting conical burr',
      'Heating': 'ThermoJet (3-second heat-up)',
      'Capacity': '67oz water tank',
      'Portafilter': '54mm stainless steel',
      'Milk': 'Manual steam wand',
      'Warranty': '2 years'
    },
    review: `The Breville Barista Express Impress brings café-quality espresso into your home with a clever all-in-one design. The integrated grinder doses fresh grounds directly into the portafilter, and the assisted tamping system ensures consistent pressure every time — a common pain point for home baristas.

The ThermoJet heating system reaches extraction temperature in just 3 seconds, and the PID temperature control maintains stability throughout the shot. The result is rich, crema-topped espresso that rivals what you'd get at a specialty café.

The manual steam wand gives you full control over milk texturing for lattes and cappuccinos. There's definitely a learning curve to pulling the perfect shot, but the Impress's guided system shortens it considerably. For coffee lovers willing to invest time in learning the craft, this machine pays for itself within months compared to daily café visits.`
  },
  {
    id: 'air-purifier-blueair',
    name: 'Blueair Blue Pure 211+',
    category: 'appliances',
    categoryName: 'Home Appliances',
    subcategory: 'Air Purifiers',
    image: '🌬️',
    rating: 4.6,
    reviewCount: 345,
    price: '$319',
    priceRange: '$279 - $349',
    description: 'High-performance air purifier for large rooms with HEPASilent filtration, washable pre-filter, and Scandinavian design.',
    pros: [
      'Excellent for large rooms (540 sq ft)',
      'Quiet operation even on higher speeds',
      'Washable fabric pre-filter',
      'Energy Star certified'
    ],
    cons: [
      'No smart features or app',
      'Replacement filters are expensive',
      'No air quality sensor display'
    ],
    specs: {
      'Room Size': 'Up to 540 sq ft',
      'CADR': '350 (smoke/dust/pollen)',
      'Filtration': 'HEPASilent + Carbon',
      'Noise': '31-56 dB',
      'Power': '30-61 watts',
      'Filter Life': '6 months',
      'Weight': '5.7 kg'
    },
    review: `The Blueair Blue Pure 211+ is a no-nonsense air purifier that excels at its primary job: cleaning the air in large rooms quickly and quietly. The HEPASilent filtration technology combines electrostatic and mechanical filtration to capture 99.97% of airborne particles while using less energy and producing less noise than traditional HEPA purifiers.

The colorful washable fabric pre-filter is a clever design touch — it catches larger particles like pet hair and dust, extending the life of the main filter, and comes in multiple colors to match your décor. Performance on the highest setting clears a 540-square-foot room in about 12 minutes.

What you don't get are smart features — no app, no air quality sensor, no auto mode. If you want those, consider the more expensive Blueair HealthProtect line. But for pure, straightforward air cleaning, the 211+ is hard to beat at this price.`
  },
  {
    id: 'bosch-800-dishwasher',
    name: 'Bosch 800 Series Dishwasher',
    category: 'appliances',
    categoryName: 'Home Appliances',
    subcategory: 'Dishwashers',
    image: '🧼',
    rating: 4.6,
    reviewCount: 567,
    price: '$1,199',
    priceRange: '$999 - $1,299',
    description: 'Ultra-quiet dishwasher at 40 dBA with CrystalDry technology, flexible 3rd rack, and Wi-Fi connectivity.',
    pros: [
      'Incredibly quiet at 40 dBA',
      'CrystalDry gets plastics dry',
      'Flexible rack system fits more',
      'Energy Star Most Efficient'
    ],
    cons: [
      'Expensive upfront cost',
      'Long cycle times (2+ hours)',
      'Installation can be tricky'
    ],
    specs: {
      'Noise': '40 dBA',
      'Capacity': '16 place settings',
      'Racks': '3 (Flexible 3rd Rack)',
      'Drying': 'CrystalDry (zeolite)',
      'Cycles': '6 wash + options',
      'Connectivity': 'Wi-Fi, Home Connect',
      'Energy': 'Energy Star Most Efficient'
    },
    review: `The Bosch 800 Series is widely considered the best dishwasher you can buy, and for good reason. The first thing you'll notice is how incredibly quiet it is — at 40 dBA, you'll sometimes need to check the red light on the floor to know it's running.

CrystalDry technology uses zeolite minerals to generate heat and absorb moisture, finally solving the problem of wet plastic items at the end of a cycle. The flexible 3rd rack adds loading capacity for utensils and small items, and the adjustable tines in the lower rack accommodate everything from slim plates to large pots.

The Home Connect app offers useful features like cycle notifications and remote start, though it's not essential to the experience. At $1,199, it's an investment, but one that should last 10+ years of quiet, reliable, spotless cleaning.`
  },

  // ==================== Health & Beauty ====================
  {
    id: 'dyson-airwrap',
    name: 'Dyson Airwrap Multi-Styler',
    category: 'health',
    categoryName: 'Health & Beauty',
    subcategory: 'Hair Styling',
    image: '💇',
    rating: 4.5,
    reviewCount: 1567,
    price: '$599',
    priceRange: '$499 - $599',
    description: 'Revolutionary hair styling tool using Coanda airflow to curl, wave, smooth, and dry without extreme heat.',
    pros: [
      'No extreme heat damage',
      'Versatile styling options',
      'Faster than traditional methods',
      'Leaves hair smooth and shiny'
    ],
    cons: [
      'Very expensive',
      'Steep learning curve',
      'Results vary by hair type'
    ],
    specs: {
      'Technology': 'Coanda airflow, intelligent heat',
      'Attachments': '6+ barrels and brushes',
      'Heat': 'Intelligent heat control',
      'Airflow': '3 speed settings',
      'Heat Settings': '3 (plus cold shot)',
      'Weight': '0.65 kg',
      'Warranty': '2 years'
    },
    review: `The Dyson Airwrap has changed how many people think about hair styling. Instead of relying on extreme heat that can damage hair over time, it uses the Coanda effect — a powerful airflow that attracts and wraps hair around the barrel, styling it with air rather than heat damage.

The kit comes with multiple attachments for different styles: barrels in two sizes for curls and waves, brushes for smoothing and volumizing, and a dryer attachment. The intelligent heat control measures temperature 40 times per second to ensure it never exceeds safe levels.

There is absolutely a learning curve — your first few attempts may not look salon-perfect. The price is also hard to swallow at $599. But for those who style their hair regularly and want to avoid heat damage, the Airwrap can be transformative. Many users report their hair feeling healthier within weeks of switching from traditional hot tools.`
  },
  {
    id: 'foreo-luna-4',
    name: 'FOREO LUNA 4',
    category: 'health',
    categoryName: 'Health & Beauty',
    subcategory: 'Skincare',
    image: '✨',
    rating: 4.4,
    reviewCount: 678,
    price: '$279',
    priceRange: '$229 - $299',
    description: 'Sonic facial cleansing brush with ultra-hygienic silicone bristles, 16 pulsation intensities, and a firming massage mode.',
    pros: [
      'Ultra-hygienic silicone (no bacteria)',
      'No replacement brush heads needed',
      '100% waterproof',
      'Long battery life (up to 650 uses)'
    ],
    cons: [
      'Expensive for a cleansing brush',
      'App connectivity is unnecessary',
      'Not ideal for very sensitive skin'
    ],
    specs: {
      'Material': 'Medical-grade silicone',
      'Pulsations': 'Up to 8,000 per minute',
      'Intensities': '16',
      'Battery': 'USB rechargeable, 650 uses',
      'Waterproof': '100%',
      'Modes': 'Cleansing + Firming massage',
      'Colors': '6 options'
    },
    review: `The FOREO LUNA 4 elevates the daily face-washing routine into a spa-like experience. Unlike traditional brush-head devices that need regular replacement and can harbor bacteria, the LUNA's medical-grade silicone bristles are naturally resistant to bacteria buildup and never need replacing.

The sonic pulsations (up to 8,000 per minute) effectively dislodge dirt, oil, and makeup from pores without being abrasive. With 16 intensity levels accessible through the companion app (or directly on the device), you can customize the experience from gentle to deep cleansing. The reverse side offers a firming massage mode that feels wonderful with serum or moisturizer.

The 650-use battery life means you'll charge it roughly twice a year. At $279, it's a luxury purchase, but the build quality, zero ongoing costs (no replacement heads), and noticeable improvement in skin texture make it worthwhile for skincare enthusiasts.`
  },
  {
    id: 'oral-b-io10',
    name: 'Oral-B iO Series 10',
    category: 'health',
    categoryName: 'Health & Beauty',
    subcategory: 'Oral Care',
    image: '🦷',
    rating: 4.6,
    reviewCount: 543,
    price: '$349',
    priceRange: '$299 - $399',
    description: 'Premium electric toothbrush with AI-powered brushing guidance, interactive display, and 7 smart brushing modes.',
    pros: [
      'AI-driven brushing coach',
      'Magnetic, whisper-quiet drive',
      'Real-time 3D teeth tracking',
      'Pressure sensor with colored light'
    ],
    cons: [
      'Expensive brush heads',
      'Base station is bulky',
      'App overkill for some users'
    ],
    specs: {
      'Technology': 'iO magnetic drive, AI recognition',
      'Modes': '7 (Daily Clean, Sensitive, Whiten, etc.)',
      'Pressure': 'Smart pressure sensor',
      'Battery': 'Up to 2 weeks',
      'Charging': 'Magnetic charging base',
      'Display': 'Interactive color display',
      'App': 'Oral-B app with 3D tracking'
    },
    review: `The Oral-B iO Series 10 is the smartest toothbrush we've ever used. The redesigned magnetic drive system is whisper-quiet compared to previous Oral-B models, while still delivering the oscillating-rotating cleaning action that dentists recommend.

The AI-powered brushing coach is genuinely useful — it uses sensors to track which areas of your mouth you're brushing and provides real-time guidance via the interactive display and colored pressure ring. Green means perfect pressure, red means you're pressing too hard (a common cause of gum recession).

The companion app shows a 3D model of your teeth with coverage data — it's eye-opening to see which areas you consistently miss. The IOS 10 charging base doubles as a magnetic stand with a clock display. At $349, it's a significant premium over basic electric toothbrushes, but the coaching features can genuinely improve your brushing habits.`
  },
  {
    id: 'theragun-pro',
    name: 'Theragun PRO 6th Gen',
    category: 'health',
    categoryName: 'Health & Beauty',
    subcategory: 'Massage Guns',
    image: '💪',
    rating: 4.7,
    reviewCount: 890,
    price: '$599',
    priceRange: '$499 - $599',
    description: 'Professional-grade percussive massage device with QuietForce technology, OLED screen, and 6 attachments for deep muscle relief.',
    pros: [
      'Powerful 60 lbs of force',
      'QuietForce motor at just 55 dB',
      'OLED screen with force meter',
      'Bluetooth + app with guided routines'
    ],
    cons: [
      'Very expensive for home use',
      'Heavy at 1.2 kg',
      'Overkill for casual users'
    ],
    specs: {
      'Force': 'Up to 60 lbs (27 kg)',
      'Speed': '1750-2400 PPM, 5 speeds',
      'Noise': '55-65 dB (QuietForce)',
      'Battery': '150 minutes (2 batteries)',
      'Attachments': '6',
      'Display': 'OLED with force meter',
      'Weight': '1.2 kg'
    },
    review: `The Theragun PRO is the gold standard for percussive massage therapy. It delivers up to 60 pounds of force without stalling — enough to reach deep into large muscle groups like quads, glutes, and back muscles. The unique triangular ergonomic handle lets you reach every part of your body, including your own back without assistance.

The 6th generation QuietForce technology has dramatically reduced noise — it's now about as loud as an electric shaver rather than the jackhammer-like sound of early models. The OLED screen displays speed, force applied, and battery life. The Bluetooth app offers guided routines tailored to your activities and specific muscle groups.

Two swappable batteries provide up to 150 minutes total, enough for weeks of use. At $599, it's a serious investment, but for athletes, fitness enthusiasts, or anyone with chronic muscle tension, it delivers professional-quality massage on demand — paying for itself compared to regular massage appointments.`
  },
  {
    id: 'philips-lumea',
    name: 'Philips Lumea 9000 IPL',
    category: 'health',
    categoryName: 'Health & Beauty',
    subcategory: 'Hair Removal',
    image: '💡',
    rating: 4.3,
    reviewCount: 1234,
    price: '$549',
    priceRange: '$449 - $599',
    description: 'At-home IPL hair removal device with SenseIQ technology, cordless use, and clinically proven long-lasting results.',
    pros: [
      'Clinically proven results',
      'SenseIQ adapts to skin tone',
      'Cordless convenience',
      'Up to 92% hair reduction in 3 treatments'
    ],
    cons: [
      'Not suitable for dark skin tones',
      'Takes time to treat large areas',
      'Results require patience (12+ weeks)'
    ],
    specs: {
      'Technology': 'IPL with SenseIQ',
      'Flashes': '450,000+ (lifetime)',
      'Settings': '5 light intensity levels',
      'Skin Tones': 'I-V (not for very dark skin)',
      'Use': 'Corded or cordless',
      'Attachments': '4 (body, face, bikini, underarm)',
      'Treatment': 'Full body in ~30 minutes'
    },
    review: `The Philips Lumea 9000 brings professional-grade IPL (Intense Pulsed Light) hair removal into your home. Unlike shaving or waxing, IPL targets the hair root to reduce regrowth over time. Philips' SenseIQ technology automatically detects your skin tone and adjusts the light intensity for safe and effective treatment.

Clinical studies show up to 92% hair reduction after just 3 treatments, with results lasting months. The four curved attachments are designed for different body areas, ensuring good skin contact everywhere. The cordless operation makes it easy to use in any position.

There are important limitations: IPL works best on light-to-medium skin tones with darker hair, and isn't suitable for very dark skin or white/grey hair. Results take patience — expect to use it every 2 weeks for the first 4-5 sessions, then monthly maintenance. At $549, it's comparable to a few professional laser sessions, but you can use it indefinitely at home.`
  },

  // ==================== Additional Products ====================
  {
    id: 'lg-oled-c4',
    name: 'LG OLED C4 65"',
    category: 'electronics',
    categoryName: 'Consumer Electronics',
    subcategory: 'TVs',
    image: '📺',
    rating: 4.8,
    reviewCount: 678,
    price: '$1,799',
    priceRange: '$1,499 - $1,999',
    description: 'Stunning 65-inch OLED TV with perfect blacks, infinite contrast, AI-powered processor, and gaming features at 120Hz.',
    pros: [
      'Perfect blacks and infinite contrast',
      'Excellent for gaming (4K/120Hz, VRR)',
      'α9 AI processor upscales beautifully',
      'Sleek, nearly bezel-less design'
    ],
    cons: [
      'Risk of burn-in with static content',
      'Not as bright as QLED in bright rooms',
      'WebOS has ads in interface'
    ],
    specs: {
      'Panel': '65" OLED evo',
      'Resolution': '3840 x 2160 (4K)',
      'Refresh': '120Hz, VRR, G-Sync, FreeSync',
      'Processor': 'α9 AI Processor 4K Gen7',
      'HDR': 'Dolby Vision, HDR10, HLG',
      'HDMI': '4x HDMI 2.1',
      'Smart TV': 'webOS 24'
    },
    review: `The LG OLED C4 continues LG's dominance in the OLED TV space. The self-lit pixels deliver perfect blacks — when a pixel is off, it emits zero light, creating contrast that no LED TV can match. The α9 AI processor does a remarkable job upscaling HD and even standard-definition content to near-4K quality.

For gamers, this is one of the best TVs available: four HDMI 2.1 ports all support 4K at 120Hz, with VRR, G-Sync, and FreeSync compatibility. Input lag is vanishingly low at under 10ms in game mode.

The main consideration is brightness — while the C4 is brighter than previous generations, it still can't match premium QLED TVs in very bright rooms. For most viewing environments, however, the picture quality is simply stunning. Movie night will never be the same.`
  }
];
