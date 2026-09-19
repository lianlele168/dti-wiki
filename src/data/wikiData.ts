export interface CodeItem {
  code: string;
  reward: string;
  itemType: 'Clothing' | 'Accessory' | 'Makeup' | 'Cash';
  status: 'Active' | 'Expired';
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
  { code: '10BILLION', reward: 'Heart Fork', itemType: 'Accessory', status: 'Active' },
  { code: '1CON1CF4TMA', reward: 'Sweater Dress', itemType: 'Clothing', status: 'Active' },
  { code: '3NCHANTEDD1ZZY', reward: 'Magical Wand', itemType: 'Accessory', status: 'Active' },
  { code: 'ANGELT4NKED', reward: 'Purple Cat Helmet', itemType: 'Accessory', status: 'Active' },
  { code: 'ASHLEYBUNNI', reward: 'Bunny Slippers', itemType: 'Accessory', status: 'Active' },
  { code: 'BELALASLAY', reward: 'Black Jacket with Pink Halter Top', itemType: 'Clothing', status: 'Active' },
  { code: 'BHM26', reward: 'Dress and Jacket', itemType: 'Clothing', status: 'Active' },
  { code: 'C4LLMEHH4LEY', reward: 'Puffy Dress and Bear Headband', itemType: 'Accessory', status: 'Active' },
  { code: 'CA11MEHHALEY', reward: 'Bear Ears, Dress and Onesie', itemType: 'Clothing', status: 'Active' },
  { code: 'CH00P1E_1S_B4CK', reward: 'Jacket, Skirt and Shoes', itemType: 'Clothing', status: 'Active' },
  { code: 'CH00P1E_B4CK_AGA1N', reward: 'Choopie Set', itemType: 'Clothing', status: 'Active' },
  { code: 'D1ORST4R', reward: 'Star Bag and Bow', itemType: 'Accessory', status: 'Active' },
  { code: 'ELLA', reward: 'Pink Skirt', itemType: 'Clothing', status: 'Active' },
  { code: 'IBELLASLAY', reward: 'Dyed Hairstyle', itemType: 'Makeup', status: 'Active' },
  { code: 'ITSJUSTNICHOLAS', reward: 'Biker Jacket', itemType: 'Clothing', status: 'Active' },
  { code: 'KATSEYE', reward: 'Katseye Set', itemType: 'Clothing', status: 'Active' },
  { code: 'KITTYUUHH', reward: "Caseoh's Cat", itemType: 'Accessory', status: 'Active' },
  { code: 'KREEK', reward: 'KreekCraft Bear Hat', itemType: 'Accessory', status: 'Active' },
  { code: 'LABOOTS', reward: 'Heeled Boots', itemType: 'Accessory', status: 'Active' },
  { code: 'LANA', reward: 'Top, Shorts and Leg Warmers', itemType: 'Clothing', status: 'Active' },
  { code: 'LANABOW', reward: 'White Hair Bow', itemType: 'Accessory', status: 'Active' },
  { code: 'LANADOLLDRESS', reward: 'Reworked Lana Tutu', itemType: 'Clothing', status: 'Active' },
  { code: 'LANATUTU', reward: 'White Dress', itemType: 'Clothing', status: 'Active' },
  { code: 'LEAHASHE', reward: 'Jacket and Sweatpants', itemType: 'Clothing', status: 'Active' },
  { code: 'LIONDANCER', reward: 'Lion Dancer Set', itemType: 'Clothing', status: 'Active' },
  { code: 'LNY', reward: 'Lunar New Year Dresses', itemType: 'Clothing', status: 'Active' },
  { code: 'M3RM4ID', reward: 'Mermaid Tail and Shell Top', itemType: 'Clothing', status: 'Active' },
  { code: 'MEGANPLAYSBOOTS', reward: 'Sparkly Silver Boots', itemType: 'Accessory', status: 'Active' },
  { code: 'PIXIIUWU', reward: "Pixiiuwu's Iridescent Dress", itemType: 'Clothing', status: 'Active' },
  { code: 'RDC2026', reward: 'Pearl Dress', itemType: 'Clothing', status: 'Active' },
  { code: 'S3M_0W3N_Y4Y', reward: 'Staff, Scythe and Axe', itemType: 'Accessory', status: 'Active' },
  { code: 'SUBM15CY', reward: 'Eyelashes and Pearl Necklace', itemType: 'Accessory', status: 'Active' },
  { code: 'TEKKYOOZ', reward: 'Pearl Handbag', itemType: 'Accessory', status: 'Active' },
  { code: 'UMOYAE', reward: 'Chappell Roan-inspired Mini Dress', itemType: 'Clothing', status: 'Active' },
  { code: 'VANILLAMACE', reward: 'Headscarf and Pattern', itemType: 'Accessory', status: 'Active' },
];

const EXPIRED_ITEM = 'Expired — item no longer obtainable';

export const EXPIRED_CODES: CodeItem[] = [
  { code: 'PROUD', reward: 'Pride Dress', itemType: 'Clothing', status: 'Expired' },
  { code: 'FACECARD', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'BADDIE4LIFE', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: '2026BADDIES', reward: '2026 Balloons, Star Headpiece and Glasses', itemType: 'Accessory', status: 'Expired' },
  { code: '2YEARS', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: '2GETHER', reward: 'Classic DTI Doll', itemType: 'Clothing', status: 'Expired' },
  { code: 'ELPHABA', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'GLINDA', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'CUPIDSCLOUD', reward: EXPIRED_ITEM, itemType: 'Accessory', status: 'Expired' },
  { code: 'RDC2025', reward: 'Lanyard and Belt Accessory', itemType: 'Accessory', status: 'Expired' },
  { code: 'B3APL4YS_D0L1E', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'LNY2025', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'HAPPYNEWYEAR', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'FASHION', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'M0T0PRINCESSWAV', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'YEAROFTHESNAKE', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'SWEETHEART', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'NY2025', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: '4BILLION', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'WINTERUPDATE', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'CHOOPIE10K', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'THEGAMES', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'EYELASHES', reward: EXPIRED_ITEM, itemType: 'Makeup', status: 'Expired' },
  { code: 'REWARD4CLASS1C', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'DOLLISTA', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'DOLLISTAGRAM', reward: EXPIRED_ITEM, itemType: 'Clothing', status: 'Expired' },
  { code: 'VALENTINESDAY', reward: EXPIRED_ITEM, itemType: 'Accessory', status: 'Expired' },
  { code: 'CHERRY', reward: EXPIRED_ITEM, itemType: 'Accessory', status: 'Expired' },
];

// Theme names below use the official in-game spellings, verified word-for-word
// against the DTI Wiki themes list and the Try Hard Guides full theme
// classification table (790+ themes in game as of 2026-07).
export const DTI_THEMES: DtiThemeItem[] = [
  {
    themeName: 'Met gala',
    vibe: 'Avant-Garde, Sculptural, Red-Carpet Extravagance',
    difficulty: 'Hard',
    colorPalette: ['#e5c158', '#ffffff', '#221e25', '#b87333'],
    essentialItems: ['Tiered Mermaid Ball Gown', 'Long Silk Gloves', 'Diamond Tiara', 'High Stiletto Heels'],
    recommendedCodes: ['D1ORST4R', 'SUBM15CY', 'TEKKYOOZ'],
    bestPosePack: 'Editorial Pose Pack (2,500 Cash)',
  },
  {
    themeName: 'Y2K',
    vibe: 'Futuristic, Metallic, Early-2000s Pop',
    difficulty: 'Easy',
    colorPalette: ['#ff007f', '#00f0ff', '#c0c0c0', '#111111'],
    essentialItems: ['Low-Rise Cargo Pants', 'Metallic Halter Crop Top', 'Platform Boots', 'Tinted Sunglasses'],
    recommendedCodes: ['MEGANPLAYSBOOTS', 'LABOOTS', 'KATSEYE'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Coquette',
    vibe: 'Soft Pink, Ribbons, Bows, Vintage Lolita',
    difficulty: 'Easy',
    colorPalette: ['#ffb6c1', '#ffffff', '#fff0f5', '#db7093'],
    essentialItems: ['Pink Lace Ribbon Top', 'Layered Mini Frill Skirt', 'Heart Choker', 'Lace Socks with Mary Janes'],
    recommendedCodes: ['LANABOW', 'ELLA', 'LANATUTU'],
    bestPosePack: 'Summer Pose Pack (4,300 Cash)',
  },
  {
    themeName: 'Grunge',
    vibe: 'Edgy, Layered 90s Alternative Look',
    difficulty: 'Medium',
    colorPalette: ['#4b4b4b', '#6b2d2d', '#2f2f2f', '#8a8a8a'],
    essentialItems: ['Oversized Flannel Shirt', 'Distressed Band Tee', 'Ripped Jeans', 'Chunky Combat Boots'],
    recommendedCodes: ['ITSJUSTNICHOLAS', 'LEAHASHE', 'KREEK'],
    bestPosePack: 'Default free poses',
  },
  {
    themeName: 'Dark Academia',
    vibe: 'Scholarly, Plaid, Wool Coats, Vintage Library',
    difficulty: 'Medium',
    colorPalette: ['#3b2f2f', '#4a3b32', '#d2b48c', '#1c2833'],
    essentialItems: ['Plaid Pleated Skirt', 'Knit Cable Sweater', 'Long Wool Trench', 'Leather Oxford Shoes'],
    recommendedCodes: ['KREEK', 'LEAHASHE', 'BELALASLAY'],
    bestPosePack: 'Ivy League Walk Pack (1,400 Seashells, event)',
  },
  {
    themeName: 'Cottagecore',
    vibe: 'Pastoral, Floral, Soft Linen Countryside',
    difficulty: 'Easy',
    colorPalette: ['#e8f5e0', '#f5e6c8', '#c98a8a', '#7fa86b'],
    essentialItems: ['Puff-Sleeve Milkmaid Dress', 'Floral Apron', 'Straw Hat', 'Wicker Basket Accessory'],
    recommendedCodes: ['LANA', 'ELLA', 'LANABOW'],
    bestPosePack: 'Default free poses',
  },
  {
    themeName: 'Old Money',
    vibe: 'Quiet Luxury, Tailored, Heritage Fabrics',
    difficulty: 'Medium',
    colorPalette: ['#f5f0e6', '#8c7351', '#1f2a24', '#b87333'],
    essentialItems: ['Tweed Blazer Set', 'Silk Scarf', 'Pearl Necklace', 'Loafers'],
    recommendedCodes: ['TEKKYOOZ', 'SUBM15CY', 'BELALASLAY'],
    bestPosePack: 'Editorial Pose Pack (2,500 Cash)',
  },
  {
    themeName: 'Cyberpunk',
    vibe: 'Neon, Techwear, Dystopian Futurism',
    difficulty: 'Medium',
    colorPalette: ['#00f0ff', '#ff00ff', '#0f0f1a', '#39ff14'],
    essentialItems: ['Techwear Harness Jacket', 'LED Choker', 'Cargo Strap Pants', 'Cyber Visor'],
    recommendedCodes: ['MEGANPLAYSBOOTS', 'KATSEYE', 'ITSJUSTNICHOLAS'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Gothic',
    vibe: 'Dark Elegance, Lace, Velvet, Victorian Shadows',
    difficulty: 'Medium',
    colorPalette: ['#1e1022', '#8b0000', '#000000', '#e6c280'],
    essentialItems: ['Black Lace Corset', 'Layered Velvet Maxi Skirt', 'Red Rose Choker', 'Veil Headpiece'],
    recommendedCodes: ['SUBM15CY', 'ITSJUSTNICHOLAS', 'LANADOLLDRESS'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Emo',
    vibe: 'Skater, Studded, Side-Swept Fringe',
    difficulty: 'Easy',
    colorPalette: ['#111111', '#ff00ff', '#7b0f0f', '#c0c0c0'],
    essentialItems: ['Band Tee with Mesh Sleeves', 'Studded Belt', 'Skinny Jeans', 'Checkered Sneakers'],
    recommendedCodes: ['LEAHASHE', 'KREEK', 'ITSJUSTNICHOLAS'],
    bestPosePack: 'Default free poses',
  },
  {
    themeName: 'Steampunk',
    vibe: 'Brass Gears, Leather Straps, Victorian Inventor',
    difficulty: 'Hard',
    colorPalette: ['#8c5a2b', '#b87333', '#3e2f1c', '#d2b48c'],
    essentialItems: ['Corset with Buckled Straps', 'Goggles Headpiece', 'High-Neck Ruffle Blouse', 'Pocket-Watch Accessory'],
    recommendedCodes: ['KREEK', 'VANILLAMACE', 'SUBM15CY'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Rococo',
    vibe: 'Ornate Pastel Court, Powdered Wigs, Gilded Frills',
    difficulty: 'Hard',
    colorPalette: ['#f3d9e6', '#cfe3f5', '#e6c280', '#ffffff'],
    essentialItems: ['Pannier Court Gown', 'Jeweled Fan', 'Ribboned Wig', 'Lace Gloves'],
    recommendedCodes: ['LANADOLLDRESS', 'LANABOW', 'TEKKYOOZ'],
    bestPosePack: 'Editorial Pose Pack (2,500 Cash)',
  },
  {
    themeName: 'Preppy',
    vibe: 'Tennis Club, Pastels, Polished Collegiate',
    difficulty: 'Easy',
    colorPalette: ['#ffd6e7', '#ffffff', '#bfe3ff', '#ffe9a8'],
    essentialItems: ['Pleated Tennis Skirt', 'Collared Knit Vest', 'Headband', 'Mary Jane Flats'],
    recommendedCodes: ['TEKKYOOZ', 'ELLA', 'LANABOW'],
    bestPosePack: 'Ivy League Walk Pack (1,400 Seashells, event)',
  },
  {
    themeName: 'Office Siren',
    vibe: 'Corporate Chic, Pencil Skirts, Sheer Blouses',
    difficulty: 'Medium',
    colorPalette: ['#e9e4f0', '#3c3a4a', '#8a7f9d', '#c9b6d9'],
    essentialItems: ['Sheer Button-Up Blouse', 'Pencil Midi Skirt', 'Slim Glasses', 'Pointed Heels'],
    recommendedCodes: ['SUBM15CY', 'D1ORST4R', 'BELALASLAY'],
    bestPosePack: 'Editorial Pose Pack (2,500 Cash)',
  },
  {
    themeName: 'Baddie',
    vibe: 'Confident, Monochrome, Street Glam',
    difficulty: 'Medium',
    colorPalette: ['#111111', '#f5b5c8', '#8b5cf6', '#e5e5e5'],
    essentialItems: ['Cropped Puffer Jacket', 'Bodycon Midi Dress', 'Hoop Earrings', 'Chunky Sneakers'],
    recommendedCodes: ['KATSEYE', 'MEGANPLAYSBOOTS', 'BELALASLAY'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Euphoria',
    vibe: 'Glitter, Graphic Liner, Neon Skin Accents',
    difficulty: 'Medium',
    colorPalette: ['#a34fff', '#ff5ea8', '#38f8d4', '#1a0f2b'],
    essentialItems: ['Sequined Mesh Top', 'Rhinestone Eye Makeup', 'Gem Face Accents', 'Metallic Mini Skirt'],
    recommendedCodes: ['SUBM15CY', 'KATSEYE', 'UMOYAE'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Fairy Costume',
    vibe: 'Ethereal, Nature, Glowing Wings, Pastel',
    difficulty: 'Medium',
    colorPalette: ['#e6e6fa', '#98ff98', '#fff8dc', '#ffb3ba'],
    essentialItems: ['Flowing Sheer Gown', 'Fairy Wings', 'Floral Crown', 'Glitter Body Shimmer'],
    recommendedCodes: ['LANATUTU', 'LANABOW', '3NCHANTEDD1ZZY'],
    bestPosePack: 'Summer Pose Pack (4,300 Cash)',
  },
  {
    themeName: 'Vampire',
    vibe: 'Immortal Aristocrat, Capes, Blood Accents',
    difficulty: 'Medium',
    colorPalette: ['#5c0a0a', '#1a1a1a', '#e6e6e6', '#8b0000'],
    essentialItems: ['High-Collar Cape', 'Velvet Waistcoat', 'Fangs Accessory', 'Gothic Boots'],
    recommendedCodes: ['ITSJUSTNICHOLAS', 'SUBM15CY', 'S3M_0W3N_Y4Y'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Popstar',
    vibe: 'Stage Lights, Sequins, Chart-Topping Glam',
    difficulty: 'Medium',
    colorPalette: ['#ff5ea8', '#ffd700', '#c0c0c0', '#7b2ff7'],
    essentialItems: ['Sequined Bodysuit', 'Sparkle Microphone', 'Thigh-High Boots', 'Statement Earrings'],
    recommendedCodes: ['KATSEYE', 'UMOYAE', 'M3RM4ID'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Rock Star',
    vibe: 'Leather, Studs, Electric Stage Energy',
    difficulty: 'Easy',
    colorPalette: ['#1a1a1a', '#b00b0b', '#c0c0c0', '#2f4f2f'],
    essentialItems: ['Biker Leather Jacket', 'Graphic Band Tee', 'Ripped Skinny Jeans', 'Doc Marten Boots'],
    recommendedCodes: ['ITSJUSTNICHOLAS', 'KREEK', 'LEAHASHE'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Secret Agent',
    vibe: 'Sleek Spy, Tactical Blacks, Sunglasses',
    difficulty: 'Medium',
    colorPalette: ['#0f0f0f', '#2b2b2b', '#7f7f7f', '#c0c0c0'],
    essentialItems: ['Tailored Black Suit', 'Slim Sunglasses', 'Utility Belt', 'Ankle Boots'],
    recommendedCodes: ['LEAHASHE', 'VANILLAMACE', 'ITSJUSTNICHOLAS'],
    bestPosePack: 'Editorial Pose Pack (2,500 Cash)',
  },
  {
    themeName: 'Red Carpet',
    vibe: 'Old Hollywood Glamour, Satin, Flashbulbs',
    difficulty: 'Easy',
    colorPalette: ['#b00020', '#f5e6c8', '#ffffff', '#111111'],
    essentialItems: ['Satin Slip Gown', 'Faux Fur Stole', 'Clutch Bag', 'Chandelier Earrings'],
    recommendedCodes: ['UMOYAE', 'TEKKYOOZ', 'SUBM15CY'],
    bestPosePack: 'Editorial Pose Pack (2,500 Cash)',
  },
  {
    themeName: 'Barbie',
    vibe: 'Hot Pink, Plastic Chic, Doll-Perfect Polish',
    difficulty: 'Easy',
    colorPalette: ['#ff69b4', '#ffb6c1', '#ffffff', '#ffd700'],
    essentialItems: ['Hot Pink Power Suit', 'Heart Sunglasses', 'Pink Handbag', 'Platform Heels'],
    recommendedCodes: ['ELLA', 'KATSEYE', 'D1ORST4R'],
    bestPosePack: 'Summer Pose Pack (4,300 Cash)',
  },
  {
    themeName: 'Cover of Vogue',
    vibe: 'Editorial Minimalism, Statement Silhouette',
    difficulty: 'Hard',
    colorPalette: ['#f5f5f5', '#111111', '#c9a86a', '#8a0303'],
    essentialItems: ['Sculptural Statement Coat', 'Minimalist Turtleneck', 'Bold Lip Makeup', 'Archive Heels'],
    recommendedCodes: ['D1ORST4R', 'SUBM15CY', 'TEKKYOOZ'],
    bestPosePack: 'Editorial Pose Pack (2,500 Cash)',
  },
  {
    themeName: 'Mean Girl',
    vibe: 'Plastics Energy, Pink Wednesdays, Sassy Glam',
    difficulty: 'Easy',
    colorPalette: ['#ff9ecb', '#ffffff', '#f4c2c2', '#e75480'],
    essentialItems: ['Pink Crop Top', 'Plaid Mini Skirt', 'Small Handbag', 'Glossy Straight Hair'],
    recommendedCodes: ['BELALASLAY', 'TEKKYOOZ', 'ELLA'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: '1980s',
    vibe: 'Neon Aerobics, Big Hair, Retro Pop',
    difficulty: 'Medium',
    colorPalette: ['#ff2f92', '#39ff14', '#ffd700', '#00d0ff'],
    essentialItems: ['Neon Leotard', 'Leg Warmers', 'Off-Shoulder Sweatshirt', 'Big Teased Hair'],
    recommendedCodes: ['MEGANPLAYSBOOTS', 'KATSEYE', 'LANA'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: '1990s',
    vibe: 'Grunge Meets Glam, Slip Dresses, Chokers',
    difficulty: 'Easy',
    colorPalette: ['#704214', '#5c5c8a', '#8b0000', '#2f2f2f'],
    essentialItems: ['Satin Slip Dress', 'Thin Choker', 'Plaid Flannel Tie', 'Platform Sandals'],
    recommendedCodes: ['LEAHASHE', 'LABOOTS', 'ITSJUSTNICHOLAS'],
    bestPosePack: 'Default free poses',
  },
  {
    themeName: '2000s',
    vibe: 'Y2K Celebrity, Low-Rise Denim, Rhinestones',
    difficulty: 'Easy',
    colorPalette: ['#ff69b4', '#87ceeb', '#c0c0c0', '#ffe4e1'],
    essentialItems: ['Velour Tracksuit', 'Rhinestone Tank Top', 'Butterfly Clips', 'Square Sunglasses'],
    recommendedCodes: ['MEGANPLAYSBOOTS', 'ELLA', 'KITTYUUHH'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Wedding Day',
    vibe: 'Bridal White, Tulle, Romantic Elegance',
    difficulty: 'Medium',
    colorPalette: ['#ffffff', '#f5f0e6', '#e6c280', '#dcd0e8'],
    essentialItems: ['Layered Tulle Wedding Gown', 'Veil Headpiece', 'Bridal Bouquet', 'Pearl Jewelry'],
    recommendedCodes: ['LANATUTU', 'SUBM15CY', 'TEKKYOOZ'],
    bestPosePack: 'Summer Pose Pack (4,300 Cash)',
  },
  {
    themeName: 'Prom',
    vibe: 'Corsages, Sparkle Gowns, Dance-Floor Glam',
    difficulty: 'Easy',
    colorPalette: ['#9370db', '#ffd6e7', '#c0c0c0', '#fff8dc'],
    essentialItems: ['Sequined Prom Gown', 'Corsage Wristband', 'Updo Hairstyle', 'Strappy Heels'],
    recommendedCodes: ['UMOYAE', 'LANADOLLDRESS', 'SUBM15CY'],
    bestPosePack: 'Summer Pose Pack (4,300 Cash)',
  },
  {
    themeName: 'Halloween',
    vibe: 'Spooky Costume Free-For-All, Gothic Fun',
    difficulty: 'Medium',
    colorPalette: ['#ff7b00', '#1a1a1a', '#7b0f0f', '#5a2d82'],
    essentialItems: ['Statement Costume Piece', 'Themed Face Makeup', 'Pumpkin or Ghost Accessory', 'Cape or Wings'],
    recommendedCodes: ['S3M_0W3N_Y4Y', 'KITTYUUHH', 'ANGELT4NKED'],
    bestPosePack: 'VIP exclusive poses (VIP Game Pass)',
  },
  {
    themeName: 'Tea Party',
    vibe: 'Frills, Pastel Porcelain, Garden Party',
    difficulty: 'Easy',
    colorPalette: ['#fff0f5', '#cfe3f5', '#e6c280', '#98ff98'],
    essentialItems: ['Frilled High-Neck Dress', 'Tiny Hat Fascinator', 'Teacup Accessory', 'Lace Gloves'],
    recommendedCodes: ['LANABOW', 'ELLA', 'TEKKYOOZ'],
    bestPosePack: 'Summer Pose Pack (4,300 Cash)',
  },
  {
    themeName: 'Back to school',
    vibe: 'Hallway Fresh, Backpacks, Campus Casual',
    difficulty: 'Easy',
    colorPalette: ['#f5f5f5', '#2b4a8a', '#8a2b2b', '#d9c78b'],
    essentialItems: ['Denim Jacket', 'Plaid Skirt or Chinos', 'Backpack Accessory', 'Sneakers'],
    recommendedCodes: ['LEAHASHE', 'BELALASLAY', 'LANA'],
    bestPosePack: 'Ivy League Walk Pack (1,400 Seashells, event)',
  },
];

export const LAYERING_HACKS: LayeringHackItem[] = [
  {
    title: 'Custom Ball Gown Layering',
    category: 'Dresses',
    itemsNeeded: ['Off-Shoulder Silk Corset', 'Tiered Mermaid Skirt', 'TuTu Petticoat'],
    resultDescription: 'Combines 3 basic items into a royal, fluffy ball gown silhouette with 4 distinct color slots.',
    proTip: 'Color the TuTu black and the top gown champagne gold for a dramatic contrast effect!',
  },
  {
    title: 'Victorian Layered Corset Top',
    category: 'Tops & Corsets',
    itemsNeeded: ['White Ruffled Button Blouse', 'Lace-Up Black Corset', 'Silk Ribbon Choker'],
    resultDescription: 'Creates an authentic 19th-century Victorian waist-cinched blouse.',
    proTip: 'Start from the free White Dress (code LANATUTU) as the base layer so the corset sits cleanly on top.',
  },
  {
    title: 'Double Tutu Ballerina Layering',
    category: 'Dresses',
    itemsNeeded: ['White Dress (Code: LANATUTU)', 'Reworked Lana Tutu (Code: LANADOLLDRESS)', 'White Hair Bow (Code: LANABOW)'],
    resultDescription: 'Stacks both Lana tutu meshes for an extra-puffy ballerina silhouette that photographs well on the runway.',
    proTip: 'Tint the two tutu layers one shade apart for a subtle ombré effect judges notice instantly.',
  },
];

// Pose pricing verified against the DTI Fandom Shop page and IGN's Summer
// Update 2025 patch notes. There is no "K-Pop Idol Pose Pack" in DTI.
export const POSE_PACK_DATA: PosePackItem[] = [
  {
    name: 'VIP Exclusive Poses',
    tier: 'S+',
    price: '799 Robux (VIP Game Pass) or 399 Robux/month',
    bestForThemes: 'Every theme — VIP poses (including the signature backflip) polish any runway walk',
    ratingReason: 'Bundled with the VIP Game Pass alongside exclusive clothing, accessories, and hairstyles. The one-time pass and the monthly subscription both unlock the full VIP pose set.',
  },
  {
    name: 'Editorial Pose Pack',
    tier: 'S',
    price: '2,500 Cash (in-game Shop)',
    bestForThemes: 'Met gala, Cover of Vogue, Red Carpet, Office Siren',
    ratingReason: 'High-fashion editorial poses with sharp angles and controlled lines — ideal for avant-garde and luxury themes judged on silhouette.',
  },
  {
    name: 'Summer Pose Pack',
    tier: 'A',
    price: '4,300 Cash (in-game Shop)',
    bestForThemes: 'Tea Party, Coquette, Prom, Wedding Day',
    ratingReason: 'Playful, open poses that suit soft, romantic and celebratory themes; a strong pick for players saving Robux since it costs Cash only.',
  },
  {
    name: 'Ivy League Walk Pack',
    tier: 'A',
    price: '1,400 Seashells (Summer 2025 event currency)',
    bestForThemes: 'Old Money, Preppy, Back to school, Dark Academia',
    ratingReason: 'A confident campus-style walk sold for event currency during the Summer 2025 update — limited availability, so grab it if the event returns.',
  },
];
