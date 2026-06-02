export const CATEGORIES = [
  { id: "fresh-fruits", label: "Fresh Fruits" },
  { id: "fresh-vegetables", label: "Fresh Vegetables" },
  { id: "spices", label: "Spices" },
  { id: "dehydrated", label: "Dehydrated Products" },
  { id: "rice", label: "Rice" },
  { id: "wheat-flour", label: "Wheat & Flour" },
];

export const PRODUCTS = [
  // ==================== FRESH FRUITS ====================
  {
    slug: "pomegranate",
    name: "Pomegranate (Bhagwa Variety)",
    category: "fresh-fruits",
    image: "https://images.unsplash.com/photo-1541344999736-83cdc25889bf?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium quality Bhagwa pomegranates, globally famous for their deep red arils, soft seeds, sweet taste, and high juice content. Sourced directly from certified orchards of Maharashtra.",
    origin: "India",
    packaging: "3.5 kg / 4 kg carton boxes",
    moq: "1 x 20 ft Reefer Container",
    shipping: "Reefer container (5-7°C), 10–12 days to Gulf / Europe",
  },
  {
    slug: "banana",
    name: "Banana (G9 Premium)",
    category: "fresh-fruits",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium Grand Naine (G9) bananas. Grade-A quality, hand-picked, washed and treated for export. Features large uniform size, delicious sweet flavor, and excellent shelf life.",
    origin: "India",
    packaging: "13.5 kg / 18 kg carton boxes",
    moq: "1 x 40 ft Reefer Container",
    shipping: "Reefer container (13.5°C), 12–15 days",
  },
  {
    slug: "kesar-mango",
    name: "Kesar Mango",
    category: "fresh-fruits",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=2070&auto=format&fit=crop",
    description:
      "The queen of mangoes, Gir Kesar mangoes are known for their intense aroma, fiberless saffron pulp, and exceptional sweetness. Certified for export to USA, UK, and Gulf.",
    origin: "India",
    packaging: "3.5 kg / 4 kg open top cartons",
    moq: "1 x 20 ft Reefer Container / Air Shipment",
    shipping: "Reefer container / Air Cargo, 3–15 days globally",
  },
  {
    slug: "alphanso-mango",
    name: "Alphonso Mango",
    category: "fresh-fruits",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2070&auto=format&fit=crop",
    description:
      "The legendary Hapus (Alphonso) mango, characterized by its rich golden-yellow skin, smooth texture, and unrivaled sweet flavor profile. Carefully selected and hot-water treated.",
    origin: "India",
    packaging: "3 kg / 4 kg carton boxes",
    moq: "1 x 20 ft Reefer Container / Air Cargo",
    shipping: "Reefer container / Air Cargo, 3–15 days globally",
  },
  {
    slug: "semi-husked-coconut",
    name: "Semi Husked Coconut",
    category: "fresh-fruits",
    image: "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?q=80&w=2070&auto=format&fit=crop",
    description:
      "Fresh semi-husked mature coconuts. Sourced from coastal southern India, featuring high water content, thick white kernel, and rich in natural oil. Ideal for wholesale, retail, and food processing.",
    origin: "India",
    packaging: "25 piece PP mesh bags (Approx 13-15 kg)",
    moq: "1 x 40 ft HC Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "peanuts",
    name: "Premium Raw Peanuts (Groundnuts)",
    category: "fresh-fruits",
    image: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium quality Bold and Java peanuts. Hand-selected, high oil content, and completely aflatoxin-tested. Ideal for confectionery, roasting, butter manufacture, and snacking.",
    origin: "India",
    packaging: "25 kg / 50 kg jute bags or PP bags",
    moq: "1 x 20 ft container (Approx 19 MT)",
    shipping: "Dry container, 15–20 days to global ports",
  },

  // ==================== FRESH VEGETABLES ====================
  {
    slug: "onion",
    name: "Fresh Red Onion",
    category: "fresh-vegetables",
    image: "https://images.unsplash.com/photo-1618268331562-b9cf78a1bc1b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium Nashik red onions, globally preferred for their strong flavor, crisp texture, and excellent storage life. Hand-graded for size, color, and skin quality.",
    origin: "India",
    packaging: "10 kg / 20 kg / 25 kg mesh bags",
    moq: "1 x 40 ft Container (approx 28 MT)",
    shipping: "Reefer / Well-ventilated container, 12–15 days to Gulf",
  },
  {
    slug: "green-chilli",
    name: "Fresh Green Chilli (G4/Teja)",
    category: "fresh-vegetables",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=2070&auto=format&fit=crop",
    description:
      "Extremely fresh, vibrant green chillies with high heat quotient. Selected for consistent length, deep green color, and high shelf stability under cold chain transport.",
    origin: "India",
    packaging: "4 kg / 5 kg thermocol boxes with ice packs",
    moq: "1 x 20 ft Reefer Container / Air Shipment",
    shipping: "Reefer container (4-6°C) or Air, 3–12 days",
  },
  {
    slug: "drumstick",
    name: "Fresh Drumstick (Moringa Pods)",
    category: "fresh-vegetables",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium fresh green drumsticks (Moringa pods). Tender, rich in iron, protein, and essential nutrients. Ideal for culinary use and herbal applications.",
    origin: "India",
    packaging: "10 kg corrugated fiber carton boxes",
    moq: "1 ton (Air Shipment) / 1 x 20 ft Reefer",
    shipping: "Air Cargo / Reefer Container, 2–10 days",
  },
  {
    slug: "suran",
    name: "Suran (Elephant Foot Yam)",
    category: "fresh-vegetables",
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=2070&auto=format&fit=crop",
    description:
      "Fresh, high-density Elephant Foot Yam (Suran). Sourced from fertile soils, thoroughly cleaned, and cured for long-distance transport and shelf life stability.",
    origin: "India",
    packaging: "20 kg / 25 kg jute mesh bags",
    moq: "1 x 20 ft Container",
    shipping: "Dry well-ventilated container, 15–20 days",
  },
  {
    slug: "tomato",
    name: "Fresh Hybrid Tomato",
    category: "fresh-vegetables",
    image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=2070&auto=format&fit=crop",
    description:
      "High-grade fresh red tomatoes. Handpicked at the perfect maturity index to ensure maximum shelf-life and robust texture during transit. Fully compliant with import phytosanitary standards.",
    origin: "India",
    packaging: "10 kg plastic crates / carton boxes",
    moq: "1 x 20 ft Reefer Container",
    shipping: "Reefer container (8-10°C), 10–12 days",
  },

  // ==================== SPICES ====================
  {
    slug: "red-chilli-powder",
    name: "Premium Red Chilli Powder",
    category: "spices",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=2070&auto=format&fit=crop",
    description:
      "Pure ground red chilli powder sourced from premium dried red chillies (Guntur/Byadgi varieties). Deep red color, intense aroma, and consistent heat (SHU) levels.",
    origin: "India",
    packaging: "25 kg / 50 kg laminated paper bags",
    moq: "1 x 20 ft Container (approx 15 MT)",
    shipping: "Dry container, 15–20 days to global ports",
  },
  {
    slug: "turmeric-powder",
    name: "Pure Turmeric Powder",
    category: "spices",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070&auto=format&fit=crop",
    description:
      "High curcumin content turmeric powder. Sourced from the finest Nizamabad & Salem turmeric bulbs, finely ground under strict hygienic protocols.",
    origin: "India",
    packaging: "25 kg multi-wall paper bags or PP bags",
    moq: "1 x 20 ft Container (approx 18 MT)",
    shipping: "Dry container, 15–20 days to global ports",
  },
  {
    slug: "green-cardamon",
    name: "Green Cardamom (Elaichi)",
    category: "spices",
    image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium bold green cardamom pods (sizes 7mm to 8mm+). Highly aromatic, rich olive green color, harvested from Kerala's Western Ghats. Fully graded for export quality.",
    origin: "India",
    packaging: "10 kg / 20 kg jute bags with poly lining inside cartons",
    moq: "1 x 20 ft Container or Air Consignment",
    shipping: "Dry container / Air, 10–15 days",
  },
  {
    slug: "cumin",
    name: "Premium Cumin Seeds (Jeera)",
    category: "spices",
    image: "https://images.unsplash.com/photo-1615485737457-f0709e03650c?q=80&w=2070&auto=format&fit=crop",
    description:
      "High purity (99%+) machine-cleaned cumin seeds. Features deep earthy flavor, rich aroma, and high essential oil content, ideal for global spice blenders and cuisines.",
    origin: "India",
    packaging: "25 kg / 50 kg PP bags or Jute bags",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "black-pepper",
    name: "Whole Black Pepper (Malabar Grade)",
    category: "spices",
    image: "https://images.unsplash.com/photo-1508737804141-4c9b68c7a0b6?q=80&w=2070&auto=format&fit=crop",
    description:
      "Malabar high-density whole black pepper seeds. Robust pungency, strong piperine kick, and carefully cleaned to meet FDA, FSSAI, and EU guidelines.",
    origin: "India",
    packaging: "25 kg / 50 kg jute bags or PP bags",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "clove",
    name: "Premium Whole Cloves",
    category: "spices",
    image: "https://images.unsplash.com/photo-1599940794943-7f3c4c9fa30f?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium hand-selected whole cloves. High essential oil concentration (eugenol), warm spicy flavor, and perfectly dried for culinary, baking, and medicinal exports.",
    origin: "India",
    packaging: "25 kg carton boxes with inner liner",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "garam-masala",
    name: "Signature Garam Masala Blend",
    category: "spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
    description:
      "Authentic Indian spice blend crafted from premium cardamom, cloves, cinnamon, cumin, and black pepper. Perfect balancing agent for diverse global cuisines.",
    origin: "India",
    packaging: "10 kg / 20 kg corrugated carton boxes with retail pouch options",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },

  // ==================== RICE ====================
  {
    slug: "basmati-rice-1121",
    name: "1121 Basmati Rice (XXL Grain)",
    category: "rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop",
    description:
      "World-famous 1121 Steam/Sella Basmati Rice. Features extra-long grains (average length 8.35mm+), delightful natural aroma, and a non-sticky fluffiness when cooked.",
    origin: "India",
    packaging: "5 kg / 10 kg / 20 kg / 25 kg premium PP / Jute bags",
    moq: "1 x 20 ft Container (approx 20 MT)",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "non-basmati-rice",
    name: "Premium Non-Basmati Rice",
    category: "rice",
    image: "https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Premium polished long-grain non-basmati rice (PR11/Sona Masoori varieties). Highly popular across Middle East and African markets for daily consumption.",
    origin: "India",
    packaging: "25 kg / 50 kg PP bags",
    moq: "1 x 20 ft Container (approx 24 MT)",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "ir64-rice",
    name: "IR64 Long Grain White/Parboiled Rice",
    category: "rice",
    image: "https://images.unsplash.com/photo-1536304997881-a372c179924b?q=80&w=2070&auto=format&fit=crop",
    description:
      "High-yield IR64 Parboiled Rice, characterized by long grains and high nutritional retention. Extremely competitive pricing for bulk procurement and food security.",
    origin: "India",
    packaging: "50 kg PP bags",
    moq: "1 x 20 ft Container (approx 25 MT)",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "broken-rice",
    name: "Broken Rice (100% Broken)",
    category: "rice",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop",
    description:
      "Double polished 100% broken rice. Widely exported for food processing, starch manufacture, brewing, and pet food industries.",
    origin: "India",
    packaging: "50 kg PP bags",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },

  // ==================== DEHYDRATED & OTHERS ====================
  {
    slug: "onion-flakes",
    name: "Dehydrated Onion Flakes",
    category: "dehydrated",
    image: "https://images.unsplash.com/photo-1508747703725-719ae2c73ee8?q=80&w=2070&auto=format&fit=crop",
    description:
      "High quality dehydrated onion flakes. Perfect moisture control, authentic sharp onion taste, and ideal for food packaging, ready-to-eat mixes, and culinary seasoning.",
    origin: "India",
    packaging: "20 kg / 25 kg double-walled paper bags with inner polybag",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "garlic-flakes",
    name: "Dehydrated Garlic Flakes",
    category: "dehydrated",
    image: "https://images.unsplash.com/photo-1581062039912-32b03fb4050e?q=80&w=2070&auto=format&fit=crop",
    description:
      "Dehydrated garlic slices of premium Grade-A quality. Aromatic, clean, and free of defects, prepared under state-of-the-art dehydration facilities.",
    origin: "India",
    packaging: "25 kg paper bags or carton boxes",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "chilli-flakes",
    name: "Dehydrated Chilli Flakes",
    category: "dehydrated",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=2070&auto=format&fit=crop",
    description:
      "Crushed red pepper chilli flakes. Perfect seed ratio, vibrant color, and standard spice heat, widely exported to international gourmet markets.",
    origin: "India",
    packaging: "20 kg / 25 kg paper bags",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "onion-powder",
    name: "Dehydrated Onion Powder",
    category: "dehydrated",
    image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2070&auto=format&fit=crop",
    description:
      "Free-flowing fine dehydrated onion powder. No artificial additives, intense natural flavor, and highly soluble in water, popular in industrial food seasoning.",
    origin: "India",
    packaging: "25 kg paper bags",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },
  {
    slug: "garlic-powder",
    name: "Dehydrated Garlic Powder",
    category: "dehydrated",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop",
    description:
      "Pure dehydrated garlic powder with powerful aromatic characteristics. Ideal for sauces, soups, meat processing, and high-fidelity spice blending.",
    origin: "India",
    packaging: "25 kg multi-wall paper bags",
    moq: "1 x 20 ft Container",
    shipping: "Dry container, 15–20 days to destination ports",
  },

  // ==================== WHEAT & FLOUR ====================
  {
    slug: "wheat-flour",
    name: "Premium Whole Wheat Flour (Atta)",
    category: "wheat-flour",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2070&auto=format&fit=crop",
    description:
      "100% natural, premium stone-ground whole wheat flour. Sourced from high-gluten Sharbati and Lokwan wheat varieties of Madhya Pradesh, perfect for flatbreads and bakery goods.",
    origin: "India",
    packaging: "25 kg / 50 kg PP / paper bags",
    moq: "1 x 20 ft Container (approx 20 MT)",
    shipping: "Dry container, 15–20 days to destination ports",
  },
];
