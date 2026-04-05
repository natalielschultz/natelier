export interface Product {
  id: string;
  handle: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  collection: string;
  collectionHandle: string;
  stone: string;
  stoneOrigin: string;
  stoneCarats: string;
  stoneTreatment: string;
  metal: string;
  metalPurity: string;
  category: string;
  connectsWith: string[];
  images: string[];
  featured: boolean;
}

export interface Collection {
  handle: string;
  name: string;
  description: string;
  image: string;
}

export const collections: Collection[] = [
  {
    handle: "sapphires",
    name: "Sapphires",
    description:
      "Stones chosen for depth of color and clarity. Each sapphire is hand-selected from trusted sources in Sri Lanka and Madagascar.",
    image: "/images/placeholder-collection.jpg",
  },
  {
    handle: "rubies",
    name: "Rubies",
    description:
      "The rarest of the classical stones. Our rubies come from Mozambique and Myanmar, selected for their natural saturation.",
    image: "/images/placeholder-collection.jpg",
  },
  {
    handle: "emeralds",
    name: "Emeralds",
    description:
      "Colombian and Zambian emeralds with the inclusions that make each one unrepeatable. We don't hide the jardins — they're part of the story.",
    image: "/images/placeholder-collection.jpg",
  },
  {
    handle: "diamonds",
    name: "Diamonds",
    description:
      "Conflict-free, traceable. We favor warmer tones and interesting cuts over flawless perfection.",
    image: "/images/placeholder-collection.jpg",
  },
  {
    handle: "chakra-collection",
    name: "Chakra Collection",
    description:
      "Seven stones, seven centers. A system of pieces designed to work together — or stand alone.",
    image: "/images/placeholder-collection.jpg",
  },
];

export const products: Product[] = [
  {
    id: "1",
    handle: "ceylon-pendant",
    name: "Ceylon Pendant",
    price: 4850,
    description:
      "A 2.3-carat Sri Lankan sapphire set in 18-karat yellow gold. The stone was cut to preserve its natural depth of color — a decision that sacrificed weight for beauty. The setting is minimal: four prongs, nothing more. The chain is 18 inches, hand-finished with a lobster clasp.",
    shortDescription:
      "Sri Lankan sapphire, 18k yellow gold. Cut for color, not weight.",
    collection: "Sapphires",
    collectionHandle: "sapphires",
    stone: "Blue Sapphire",
    stoneOrigin: "Sri Lanka",
    stoneCarats: "2.3ct",
    stoneTreatment: "Heat-treated",
    metal: "Yellow Gold",
    metalPurity: "18k",
    category: "Necklace",
    connectsWith: ["sapphire-studs", "ceylon-ring"],
    images: ["/images/placeholder-product.jpg"],
    featured: true,
  },
  {
    id: "2",
    handle: "sapphire-studs",
    name: "Sapphire Studs",
    price: 3200,
    description:
      "Matched pair of round-cut blue sapphires, 1.1 carats total. Set in 18-karat white gold with screw-back posts for security. These are the kind of earrings you put on and forget about — in the best way.",
    shortDescription:
      "Matched sapphire pair, 18k white gold. Quiet confidence.",
    collection: "Sapphires",
    collectionHandle: "sapphires",
    stone: "Blue Sapphire",
    stoneOrigin: "Sri Lanka",
    stoneCarats: "1.1ct total",
    stoneTreatment: "Heat-treated",
    metal: "White Gold",
    metalPurity: "18k",
    category: "Earrings",
    connectsWith: ["ceylon-pendant"],
    images: ["/images/placeholder-product.jpg"],
    featured: false,
  },
  {
    id: "3",
    handle: "ceylon-ring",
    name: "Ceylon Ring",
    price: 6800,
    description:
      "A 3.1-carat oval sapphire flanked by two tapered baguette diamonds. The sapphire has the velvety blue that Sri Lankan stones are known for. Set in platinum with a low profile — designed to be worn every day, not saved for occasions.",
    shortDescription:
      "Oval sapphire with diamond baguettes. Made for daily wear.",
    collection: "Sapphires",
    collectionHandle: "sapphires",
    stone: "Blue Sapphire",
    stoneOrigin: "Sri Lanka",
    stoneCarats: "3.1ct",
    stoneTreatment: "Unheated",
    metal: "Platinum",
    metalPurity: "950",
    category: "Ring",
    connectsWith: ["ceylon-pendant", "sapphire-studs"],
    images: ["/images/placeholder-product.jpg"],
    featured: true,
  },
  {
    id: "4",
    handle: "mozambique-drop-earrings",
    name: "Mozambique Drops",
    price: 8500,
    description:
      "Two pear-shaped Mozambique rubies, 2.8 carats total, suspended from delicate 18-karat rose gold chains. The rubies have a warm, slightly pinkish red — the kind of color that catches light from across a room without trying.",
    shortDescription:
      "Pear-cut ruby drops in 18k rose gold. Light-catching, effortless.",
    collection: "Rubies",
    collectionHandle: "rubies",
    stone: "Ruby",
    stoneOrigin: "Mozambique",
    stoneCarats: "2.8ct total",
    stoneTreatment: "Heat-treated",
    metal: "Rose Gold",
    metalPurity: "18k",
    category: "Earrings",
    connectsWith: ["ruby-solitaire"],
    images: ["/images/placeholder-product.jpg"],
    featured: true,
  },
  {
    id: "5",
    handle: "ruby-solitaire",
    name: "Ruby Solitaire",
    price: 12500,
    description:
      "A single Burmese ruby, 2.1 carats, set in a hand-forged 18-karat yellow gold band. The ruby is pigeon-blood red with exceptional clarity. The band tapers slightly toward the stone — a subtle detail that draws the eye upward.",
    shortDescription:
      "Burmese ruby solitaire. Pigeon-blood red. 18k yellow gold.",
    collection: "Rubies",
    collectionHandle: "rubies",
    stone: "Ruby",
    stoneOrigin: "Myanmar",
    stoneCarats: "2.1ct",
    stoneTreatment: "Unheated",
    metal: "Yellow Gold",
    metalPurity: "18k",
    category: "Ring",
    connectsWith: ["mozambique-drop-earrings"],
    images: ["/images/placeholder-product.jpg"],
    featured: false,
  },
  {
    id: "6",
    handle: "colombian-pendant",
    name: "Colombian Pendant",
    price: 7200,
    description:
      "A 1.9-carat Colombian emerald in a bezel setting of 18-karat yellow gold. The stone has the characteristic jardins — natural inclusions that tell the story of how this emerald formed over millions of years. We chose this stone for its warmth, not despite its imperfections but because of them.",
    shortDescription:
      "Colombian emerald with natural jardins. 18k yellow gold bezel.",
    collection: "Emeralds",
    collectionHandle: "emeralds",
    stone: "Emerald",
    stoneOrigin: "Colombia",
    stoneCarats: "1.9ct",
    stoneTreatment: "Minor oil",
    metal: "Yellow Gold",
    metalPurity: "18k",
    category: "Necklace",
    connectsWith: ["emerald-band"],
    images: ["/images/placeholder-product.jpg"],
    featured: true,
  },
  {
    id: "7",
    handle: "emerald-band",
    name: "Emerald Band",
    price: 4200,
    description:
      "Five channel-set Zambian emeralds in an 18-karat yellow gold band. The emeralds graduate slightly in size — largest at center, tapering at each end. A quiet piece that works alone or stacked.",
    shortDescription:
      "Five Zambian emeralds, channel-set in 18k yellow gold.",
    collection: "Emeralds",
    collectionHandle: "emeralds",
    stone: "Emerald",
    stoneOrigin: "Zambia",
    stoneCarats: "0.9ct total",
    stoneTreatment: "Minor oil",
    metal: "Yellow Gold",
    metalPurity: "18k",
    category: "Ring",
    connectsWith: ["colombian-pendant"],
    images: ["/images/placeholder-product.jpg"],
    featured: false,
  },
  {
    id: "8",
    handle: "cushion-diamond-ring",
    name: "Cushion Diamond Ring",
    price: 15800,
    description:
      "A 2.5-carat cushion-cut diamond with a warm J color and VS1 clarity. Set in platinum with a thin, knife-edge band. We chose this stone for its warmth — it glows in candlelight. The cut maximizes brilliance without the optical tricks of modern super-ideal cuts.",
    shortDescription:
      "Cushion-cut diamond in platinum. Warm, brilliant, honest.",
    collection: "Diamonds",
    collectionHandle: "diamonds",
    stone: "Diamond",
    stoneOrigin: "Botswana",
    stoneCarats: "2.5ct",
    stoneTreatment: "None",
    metal: "Platinum",
    metalPurity: "950",
    category: "Ring",
    connectsWith: ["diamond-studs"],
    images: ["/images/placeholder-product.jpg"],
    featured: true,
  },
  {
    id: "9",
    handle: "diamond-studs",
    name: "Diamond Studs",
    price: 5600,
    description:
      "Matched pair of round brilliant diamonds, 1.4 carats total. I-color, VS2 clarity. Set in 18-karat yellow gold with screw backs. Classic for a reason — these are the earrings you never take off.",
    shortDescription:
      "Matched round brilliants, 18k yellow gold. The ones you keep.",
    collection: "Diamonds",
    collectionHandle: "diamonds",
    stone: "Diamond",
    stoneOrigin: "Botswana",
    stoneCarats: "1.4ct total",
    stoneTreatment: "None",
    metal: "Yellow Gold",
    metalPurity: "18k",
    category: "Earrings",
    connectsWith: ["cushion-diamond-ring"],
    images: ["/images/placeholder-product.jpg"],
    featured: false,
  },
  {
    id: "10",
    handle: "chakra-necklace",
    name: "Chakra Necklace",
    price: 24500,
    description:
      "Seven stones, seven centers. This necklace carries garnet, carnelian, citrine, emerald, sapphire, tanzanite, and amethyst — each stone representing a chakra. Set in 18-karat yellow gold with each stone in its own bezel, connected by hand-finished links. The centerpiece of the Chakra Collection.",
    shortDescription:
      "Seven stones, seven centers. The centerpiece of the system.",
    collection: "Chakra Collection",
    collectionHandle: "chakra-collection",
    stone: "Multi-stone",
    stoneOrigin: "Various",
    stoneCarats: "8.2ct total",
    stoneTreatment: "Varies by stone",
    metal: "Yellow Gold",
    metalPurity: "18k",
    category: "Necklace",
    connectsWith: ["chakra-ring", "chakra-bracelet"],
    images: ["/images/placeholder-product.jpg"],
    featured: true,
  },
  {
    id: "11",
    handle: "chakra-ring",
    name: "Chakra Ring",
    price: 3800,
    description:
      "A single chakra stone of your choosing, set in an 18-karat yellow gold band. The band is designed to stack — collect all seven, or choose the one that speaks to you. Each ring is made to order.",
    shortDescription:
      "Choose your stone. Stack your story. Made to order.",
    collection: "Chakra Collection",
    collectionHandle: "chakra-collection",
    stone: "Your choice",
    stoneOrigin: "Various",
    stoneCarats: "0.5ct",
    stoneTreatment: "Varies by stone",
    metal: "Yellow Gold",
    metalPurity: "18k",
    category: "Ring",
    connectsWith: ["chakra-necklace", "chakra-bracelet"],
    images: ["/images/placeholder-product.jpg"],
    featured: false,
  },
  {
    id: "12",
    handle: "chakra-bracelet",
    name: "Chakra Bracelet",
    price: 9800,
    description:
      "Seven cabochon stones set along a delicate 18-karat yellow gold chain bracelet. Each stone sits in a minimal bezel — close to the skin, warm to the touch. The bracelet adjusts from 6.5 to 7.5 inches.",
    shortDescription:
      "Seven cabochons on a delicate gold chain. Close to the skin.",
    collection: "Chakra Collection",
    collectionHandle: "chakra-collection",
    stone: "Multi-stone",
    stoneOrigin: "Various",
    stoneCarats: "3.5ct total",
    stoneTreatment: "Varies by stone",
    metal: "Yellow Gold",
    metalPurity: "18k",
    category: "Bracelet",
    connectsWith: ["chakra-necklace", "chakra-ring"],
    images: ["/images/placeholder-product.jpg"],
    featured: false,
  },
];

export function getProductByHandle(handle: string): Product | undefined {
  return products.find((p) => p.handle === handle);
}

export function getCollectionByHandle(handle: string): Collection | undefined {
  return collections.find((c) => c.handle === handle);
}

export function getProductsByCollection(collectionHandle: string): Product[] {
  return products.filter((p) => p.collectionHandle === collectionHandle);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
