export interface CodeItem {
  code: string;
  reward: string;
  itemType: 'Clothing' | 'Accessory' | 'Makeup' | 'Cash';
  status: 'Active' | 'Expired';
  addedDate?: string;
}

export interface DtiThemeItem {
  themeName: string;
  vibe: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  colorPalette: string[];
  essentialItems: string[];
  recommendedCodes: string[];
  bestPosePack: string;
}

export interface LayeringHackItem {
  title: string;
  category: 'Dresses' | 'Tops & Corsets' | 'Hats & Hair' | 'Accessories';
  itemsNeeded: string[];
  resultDescription: string;
  proTip: string;
}

export interface PosePackItem {
  name: string;
  tier: 'S+' | 'S' | 'A' | 'B';
  price: string;
  bestForThemes: string;
  ratingReason: string;
}

export const ACTIVE_CODES: CodeItem[] = [
  { code: 'LANADOLLDRESS', reward: 'Lana Tutu Dress', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'PROUD', reward: 'Pride 2026 Rainbow Dress', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'CA11MEHHALEY', reward: 'Bear Ears, Dress, and Onesie', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'CH00P1E_B4CK_AGA1N', reward: 'Choopie Outfit Set Rework', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'VANILLAMACE', reward: 'Head Accessory / Headscarf', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'PIXIIUWU', reward: 'Flowing Long Dress', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'ANGELT4NKED', reward: 'Special Helmet', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: '3NCHANTEDD1ZZY', reward: 'Magical Wand', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: '1CON1CF4TMA', reward: 'Sweater / Sweater Dress', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'MEGANPLAYSBOOTS', reward: 'MeganPlays Boots', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'LANA', reward: 'White Shorts, Shirt, and Legwarmers', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'LANABOW', reward: 'White Bow Accessory', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'BELALASLAY', reward: 'Black Jacket with Pink Halter Top', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'UMOYAE', reward: 'Blue Minidress', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'D1ORST4R', reward: 'Designer Bag and Bow', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'ELLA', reward: 'Pink Skirt', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'ASHLEYBUNNI', reward: 'Bunny Slippers', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'LEAHASHE', reward: 'Sweatshirt and Sweatpants Set', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'KREEK', reward: 'KreekCraft Bear Hat', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'KITTYUUHH', reward: 'Black Pet Cat', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'LABOOTS', reward: 'Black Cyber Boots', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'TEKKYOOZ', reward: 'Pearl Handbag', itemType: 'Accessory', status: 'Active', addedDate: 'August 17, 2026' },
  { code: 'M3RM4ID', reward: 'Orange Mermaid Set', itemType: 'Clothing', status: 'Active', addedDate: 'August 17, 2026' },
];

export const EXPIRED_CODES: CodeItem[] = [
  { code: 'VALENTINES2025', reward: 'Heart Bag', itemType: 'Accessory', status: 'Expired' },
  { code: 'CHRISTMAS2024', reward: 'Santa Coat', itemType: 'Clothing', status: 'Expired' },
  { code: 'HALLOWEEN2024', reward: 'Witch Broom', itemType: 'Accessory', status: 'Expired' },
];

export const DTI_THEMES: DtiThemeItem[] = [
  {
    themeName: 'Gothic Romance',
    vibe: 'Dark, Elegant, Victorian Vampire',
    difficulty: 'Medium',
    colorPalette: ['#1e1022', '#8b0000', '#000000', '#e6c280'],
    essentialItems: ['Black Lace Corset', 'Layered Velvet Maxi Skirt', 'Red Rose Choker', 'Veil Headpiece'],
    recommendedCodes: ['LANABODY', 'LANA', 'TEARS'],
    bestPosePack: 'Vintage Hollywood & Runway 3',
  },
  {
    themeName: 'Y2K Cyberpunk',
    vibe: 'Futuristic, Metallic, Early 2000s Pop',
    difficulty: 'Easy',
    colorPalette: ['#ff007f', '#00f0ff', '#c0c0c0', '#111111'],
    essentialItems: ['Low Rise Cargo Pants', 'Metallic Halter Crop Top', 'Platform Boots', 'Cyber Visor'],
    recommendedCodes: ['LABOTS', 'M3GAN'],
    bestPosePack: 'K-Pop Idol Pose Pack',
  },
  {
    themeName: 'Met Gala High Fashion',
    vibe: 'Avant-Garde, Extravagant Ball Gown, Sculptural',
    difficulty: 'Hard',
    colorPalette: ['#e5c158', '#ffffff', '#221e25', '#b87333'],
    essentialItems: ['Tiered Mermaid Ball Gown', 'Long Silk Gloves', 'Diamond Tiara', 'High Stiletto Heels'],
    recommendedCodes: ['LANABODY', 'CHOPPING'],
    bestPosePack: 'Model Walk Pose Pack',
  },
  {
    themeName: 'Coquette Aesthetic',
    vibe: 'Soft Pink, Ribbons, Cute, Vintage Lolita',
    difficulty: 'Easy',
    colorPalette: ['#ffb6c1', '#ffffff', '#fff0f5', '#db7093'],
    essentialItems: ['Pink Lace Ribbon Top', 'Layered Mini Frill Skirt', 'Heart Choker', 'Lace Socks with Mary Janes'],
    recommendedCodes: ['TEARS', 'LANA'],
    bestPosePack: 'Cute Idol Pose Pack',
  },
  {
    themeName: 'Dark Academia',
    vibe: 'Scholarly, Plaid, Wool Coat, Vintage Library',
    difficulty: 'Medium',
    colorPalette: ['#3b2f2f', '#4a3b32', '#d2b48c', '#1c2833'],
    essentialItems: ['Plaid Pleated Skirt', 'Knit Cable Sweater', 'Long Wool Trench', 'Leather Oxford Shoes'],
    recommendedCodes: ['KREEK'],
    bestPosePack: 'Editorial Model Poses',
  },
  {
    themeName: 'Enchanted Forest Fairy',
    vibe: 'Ethereal, Nature, Glowing Wings, Pastel',
    difficulty: 'Hard',
    colorPalette: ['#e6e6fa', '#98ff98', '#fff8dc', '#ffb3ba'],
    essentialItems: ['Flowing Sheer Gown', 'Fairy Wings', 'Floral Crown', 'Glitter Body Shimmer'],
    recommendedCodes: ['TEARS', 'LANABODY'],
    bestPosePack: 'Ethereal Grace Pose Pack',
  },
];

export const LAYERING_HACKS: LayeringHackItem[] = [
  {
    title: 'Custom Ball Gown Layering',
    category: 'Dresses',
    itemsNeeded: ['Off-Shoulder Silk Corset', 'Tiered Mermaid Skirt', 'TuTu Petticoat'],
    resultDescription: 'Combines 3 basic items into a royal, fluffy Met Gala ball gown with 4 distinct color slots.',
    proTip: 'Color the TuTu black and the top gown champagne gold for a dramatic contrast effect!',
  },
  {
    title: 'Victorian Layered Corset Top',
    category: 'Tops & Corsets',
    itemsNeeded: ['White Ruffled Button Blouse', 'Lace-Up Black Corset', 'Silk Ribbon Choker'],
    resultDescription: 'Creates an authentic 19th-century Victorian waist-cinched blouse.',
    proTip: 'Use code LANA for the choker base to avoid clipping artifacts.',
  },
  {
    title: 'Cyberpunk Shield Glasses & Beanie',
    category: 'Hats & Hair',
    itemsNeeded: ['Slouchy Knit Beanie', 'Cyber Visor (Code: LABOTS)', 'High Ponytail Hair'],
    resultDescription: 'Blends street beanie culture with futuristic visor goggles.',
    proTip: 'Set the visor opacity to 50% for a glowing translucent look.',
  },
];

export const POSE_PACK_DATA: PosePackItem[] = [
  {
    name: 'K-Pop Idol Pose Pack',
    tier: 'S+',
    price: '1,200 Pink Cash',
    bestForThemes: 'Y2K, Coquette, Popstar, Party',
    ratingReason: 'Features 6 high-energy dynamic poses that get voted 5 stars consistently on the runway.',
  },
  {
    name: 'Model Walk Pose Pack',
    tier: 'S+',
    price: '1,500 Pink Cash',
    bestForThemes: 'Met Gala, High Fashion, Formal, Red Carpet',
    ratingReason: 'Slow dramatic runway turns that allow judges to view all 360 degrees of your outfit.',
  },
  {
    name: 'Vintage Hollywood Pack',
    tier: 'S',
    price: '900 Pink Cash',
    bestForThemes: 'Gothic Romance, Dark Academia, Retro',
    ratingReason: 'Classic dramatic head tilts and cigarette holder postures.',
  },
];
