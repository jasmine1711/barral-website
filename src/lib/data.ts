export type Drink = {
  id: string;
  name: string;
  category: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
  tagline: string;
  price: number;
  cupSize: string;
  image: string;
  mood: string;
};

export const drinks: Drink[] = [
  // Morning (Fresh, Cool, Revitalizing)
  { id: 'm1', name: 'Ocean Blue Science', category: 'Morning', tagline: 'A crisp, cool blast of blue raspberry to awaken your senses.', price: 30, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708123/OCEAN_Blue_Science.png', mood: 'Revitalizing' },
  { id: 'm2', name: 'Forest Green Awakening', category: 'Morning', tagline: 'A vibrant green apple infusion for a fresh start.', price: 30, cupSize: '250ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708025/FOREST_GREEN.png', mood: 'Fresh' },
  { id: 'm3', name: 'Olive Blue Tranquility', category: 'Morning', tagline: 'A calming botanical blend to ease into the day.', price: 30, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708031/OLIVE_BLUE.png', mood: 'Calming' },
  { id: 'm4', name: 'Algae Green Vitality', category: 'Morning', tagline: 'A nutrient-rich, energizing green tonic.', price: 30, cupSize: '250ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708128/ALGAE_GREEN.png', mood: 'Vital' },
  { id: 'm5', name: 'Navy Blue Breeze', category: 'Morning', tagline: 'A chilled, deep berry splash to kickstart your morning.', price: 30, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708541/Navy_blue.png', mood: 'Invigorating' },

  // Afternoon (Caffeine, Focus, Energy)
  { id: 'a1', name: 'Black Money Brew', category: 'Afternoon', tagline: 'Deep, dark cola infusion for the relentless hustler.', price: 35, cupSize: '350ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708082/BLACK_MONEY.png', mood: 'Focused' },
  { id: 'a2', name: 'Black Astranaut Fuel', category: 'Afternoon', tagline: 'Galactic berry burst with a powerful caffeine punch.', price: 35, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708137/BLACK_ASTRANAUT.png', mood: 'Energetic' },
  { id: 'a3', name: 'Black + Golden Empire', category: 'Afternoon', tagline: 'A bold cola blend with a touch of golden honey.', price: 35, cupSize: '350ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788707929/BLACK_GOLDEN.png', mood: 'Ambitious' },
  { id: 'a4', name: 'Golden Hour Fuel', category: 'Afternoon', tagline: 'A sun-kissed, zesty orange-caffeine mix for peak productivity.', price: 35, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708090/GOLDEN.png', mood: 'Shining' },
  { id: 'a5', name: 'Metallic Grey Focus', category: 'Afternoon', tagline: 'A sleek, sharp, and intense mocha espresso.', price: 35, cupSize: '350ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708539/METALLIC_GREY.png', mood: 'Sharp' },

  // Evening (Electrolyte, Refreshing, Zesty)
  { id: 'e1', name: 'Mad Tamarind', category: 'Evening', tagline: 'The iconic khatta-meetha street nostalgia.', price: 30, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708550/Mad_Tamarind.png', mood: 'Refreshing' },
  { id: 'e2', name: 'Panipuri Punch', category: 'Evening', tagline: 'A zesty, tangy explosion of traditional Indian spices.', price: 30, cupSize: '250ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708045/Panipuri.jpg', mood: 'Zesty' },
  { id: 'e3', name: 'Purple Passion', category: 'Evening', tagline: 'A vibrant grape and electrolyte fusion to recharge.', price: 30, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708049/PURPLE.png', mood: 'Recharging' },
  { id: 'e4', name: 'Dual Tone Splash', category: 'Evening', tagline: 'Two tangy flavors colliding in a refreshing harmony.', price: 30, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708462/DUAL_TONE.png', mood: 'Balanced' },
  { id: 'e5', name: 'Limited Edition Fashion Series', category: 'Evening', tagline: 'A limited drop that tastes as bold as it looks.', price: 35, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708136/LIMITED_EDITION_FASHION_SERIES.png', mood: 'Trendy' },

  // Night (Cozy, Warm, Indulgent)
  { id: 'n1', name: 'Dust Brown Soldier', category: 'Night', tagline: 'A warm, comforting mocha and hazelnut blend.', price: 40, cupSize: '350ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708021/DUST_BROWN_SOLDIER.png', mood: 'Cozy' },
  { id: 'n2', name: 'Copper Planets', category: 'Night', tagline: 'A rich, dark chocolate and caramel cosmic indulgence.', price: 40, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708465/COPPER_PLANETS.png', mood: 'Relaxing' },
  { id: 'n3', name: 'Notes of Dark Cocoa & Roasted Hazelnut', category: 'Night', tagline: 'A luxurious, deep cocoa blend for ultimate relaxation.', price: 40, cupSize: '350ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708542/Notes_of_dark_cocoa_fold_roasted_hazelnut_3.jpg.jpg', mood: 'Luxurious' },
  { id: 'n4', name: 'Brown Balance', category: 'Night', tagline: 'A perfectly balanced dark chocolate and toasted malt.', price: 40, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708062/BROWN_balance.png', mood: 'Balanced' },
  { id: 'n5', name: 'Japanese Black', category: 'Night', tagline: 'A midnight black tea and smoked plum infusion.', price: 40, cupSize: '350ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708125/JAPANESE_BLACK.png', mood: 'Mysterious' },
  { id: 'n6', name: 'Silver Signature', category: 'Night', tagline: 'Sleek, metallic, and refined—a nightcap in a cup.', price: 40, cupSize: '300ml', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708122/SILVER.png', mood: 'Refined' },
];

// Category Suggestions for Body Routine
export const moodSuggestions = [
  { id: 'Morning', title: 'Morning', color: '#17D1A5', suggestion: 'A light, cooling citrus blast to jumpstart your metabolism and clear morning fog.' },
  { id: 'Afternoon', title: 'Afternoon', color: '#FCC022', suggestion: 'A sharp caffeine boost to beat the post-lunch slump and sharpen your focus.' },
  { id: 'Evening', title: 'Evening', color: '#F17816', suggestion: 'An electrolyte recharge to restore energy and refresh the soul after a long day.' },
  { id: 'Night', title: 'Night', color: '#9f200f', suggestion: 'A soothing, warm, cozy indulgence to unwind, relax, and calm your mind before sleep.' },
];

// Cup Designs (Signature & Collectible)
export const cupDesigns = [
  { id: 1, name: 'Signature Design', mood: 'All', story: 'The timeless face of Barral.', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708122/signature_design.png' },
  { id: 2, name: 'Japanese Black', mood: 'Night', story: 'Midnight precision meets bold flavor.', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708125/JAPANESE_BLACK.png' },
  { id: 3, name: 'Algae Green', mood: 'Morning', story: 'Natural, organic, and vibrant.', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708128/ALGAE_GREEN.png' },
  { id: 4, name: 'Limited Fashion Series', mood: 'Evening', story: 'Wear your mood on your cup.', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708136/LIMITED_EDITION_FASHION_SERIES.png' },
  { id: 5, name: 'Dual Tone', mood: 'Afternoon', story: 'Two worlds colliding in one sip.', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708462/DUAL_TONE.png' },
  { id: 6, name: 'SILVER', mood: 'Night', story: 'Sleek, metallic, and refined.', image: 'https://res.cloudinary.com/vwg7rayu/image/upload/q_auto:good/v1788708122/SILVER.png' },
];