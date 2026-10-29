// Fictional VELORA catalogue. `tone` = [liquid light, liquid deep], `shape` drives the bottle illustration.
export const GENDERS = ['Her', 'Him', 'Unisex'];
const ALL_FAMILIES = ['Floral', 'Woody', 'Oriental', 'Fresh', 'Citrus', 'Gourmand', 'Musky'];

const catalogue = [
  { id: 'dg-the-one', brand: 'Dolce & Gabbana', name: 'The One', gender: 'Her', family: 'Oriental', familyLabel: 'Oriental Floral', type: 'Eau de parfum', price: 16500, size: '100 ml', bestseller: true, featured: true,
    description: 'A soft, luminous fruity opening evolves into a rich floral heart before settling on an enveloping vanilla and amber base.',
    smellsLike: 'Elegant, warm and sophisticated.',
    notes: { top: ['Peach', 'Lychee', 'Mandarin', 'Bergamot'], heart: ['White lily', 'Plum', 'Jasmine', 'Lily of the valley'], base: ['Vanilla', 'Amber', 'Musk', 'Vetiver'] } },
  { id: 'lancome-la-nuit-tresor', brand: 'Lancôme', name: 'La Nuit Trésor', gender: 'Her', family: 'Gourmand', familyLabel: 'Oriental Gourmand / Intense Floral', type: 'Eau de parfum', price: 18900, size: '100 ml', bestseller: true, featured: false,
    description: 'An intense, fruity gourmand fragrance, marked by the contrast between black rose and vanilla orchid.',
    smellsLike: 'Sensual, mysterious and captivating.',
    notes: { top: ['Pear', 'Bergamot', 'Mandarin'], heart: ['Black rose', 'Vanilla orchid', 'Strawberry', 'Passion fruit'], base: ['Praline', 'Incense', 'Papyrus', 'Lychee', 'Patchouli', 'Vanilla'] } },
  { id: 'valentino-born-in-roma-donna-intense', brand: 'Valentino', name: 'Born in Roma Donna Intense', gender: 'Her', family: 'Oriental', familyLabel: 'Amber Floral', type: 'Fragrance', price: 17800, size: '100 ml', bestseller: false, featured: false,
    description: 'A deeper, more bewitching reinterpretation of the classic Born in Roma, carried by intense vanilla and jasmine grandiflorum.',
    smellsLike: 'Modern, bold and magnetic.',
    notes: { top: ['Bourbon vanilla', 'Bergamot'], heart: ['Jasmine'], base: ['Benzoin', 'Amber notes'] } },
  { id: 'kayali-vanilla-28', brand: 'Kayali', name: 'Vanilla | 28', gender: 'Her', family: 'Gourmand', familyLabel: 'Oriental Vanilla / Gourmand', type: 'Fragrance', price: 19500, size: '100 ml', bestseller: false, featured: false,
    description: 'A rich, liqueur-like and lightly spiced vanilla. Perfect worn alone or layered with other fragrances.',
    smellsLike: 'Comforting, woody and sweet.',
    notes: { top: ['Vanilla orchid', 'Jasmine'], heart: ['Brown sugar', 'Tonka bean'], base: ['Amber', 'Amberwood', 'Musk', 'Patchouli'] } },
  { id: 'versace-crystal-noir', brand: 'Versace', name: 'Crystal Noir', gender: 'Her', family: 'Oriental', familyLabel: 'Oriental Floral / Spicy', type: 'Fragrance', price: 14900, size: '100 ml', bestseller: true, featured: false,
    description: 'A sumptuous fragrance blending warm spices with a floral heart and a creamy touch of coconut.',
    smellsLike: 'Bewitching, mysterious and nocturnal.',
    notes: { top: ['Cardamom', 'Pepper', 'Ginger'], heart: ['Coconut', 'Gardenia', 'Peony', 'Orange blossom'], base: ['Amber', 'Musk', 'Sandalwood'] } },
  { id: 'givenchy-linterdit-eau-de-parfum-rouge', brand: 'Givenchy', name: 'L\'Interdit Eau de Parfum Rouge', gender: 'Her', family: 'Floral', familyLabel: 'Spicy Floral / Woody', type: 'Eau de parfum', price: 18200, size: '100 ml', bestseller: false, featured: false,
    description: 'An incandescent red accord where white flowers meet chili pepper and spicy citrus.',
    smellsLike: 'Incandescent, passionate and bewitching.',
    notes: { top: ['Blood orange', 'Ginger'], heart: ['Tuberose', 'Jasmine', 'Chili leaf'], base: ['Patchouli', 'Sandalwood', 'Vetiver'] } },
  { id: 'jpg-gaultier-divine', brand: 'Jean Paul Gaultier', name: 'Gaultier Divine', gender: 'Her', family: 'Floral', familyLabel: 'Floral Gourmand Marine', type: 'Fragrance', price: 16800, size: '100 ml', bestseller: false, featured: false,
    description: 'An original creation pairing a radiant lily with a salty-sweet meringue note.',
    smellsLike: 'Sunny, bold and radiant.',
    notes: { top: ['Calypsone', 'Bergamot', 'Red berries'], heart: ['Lily', 'Ylang-ylang', 'Jasmine'], base: ['Meringue', 'Patchouli', 'Musk'] } },
  { id: 'ysl-libre', brand: 'Yves Saint Laurent', name: 'Libre', gender: 'Her', family: 'Floral', familyLabel: 'Floral Fougère', type: 'Eau de parfum', price: 19200, size: '100 ml', bestseller: false, featured: true,
    description: 'The duality between the tension of masculine lavender and the feminine sensuality of orange blossom and vanilla. Available as Eau de Parfum and Intense.',
    smellsLike: 'Bold, chic and assertive.',
    notes: { top: ['Lavender', 'Mandarin', 'Bergamot'], heart: ['Orange blossom', 'Jasmine', 'Orchid'], base: ['Madagascar vanilla', 'Ambergris', 'Tonka', 'Vetiver'] } },
  { id: 'dior-miss-dior-blooming-bouquet', brand: 'Dior', name: 'Miss Dior Blooming Bouquet', gender: 'Her', family: 'Fresh', familyLabel: 'Fresh Floral', type: 'Fragrance', price: 17500, size: '100 ml', bestseller: true, featured: false,
    description: 'A light, soft floral bouquet that recalls a field of freshly opened flowers.',
    smellsLike: 'Delicate, romantic and poetic.',
    notes: { top: ['Calabrian bergamot'], heart: ['Pink peony', 'Damask rose', 'Peach', 'Apricot'], base: ['White musks'] } },
  { id: 'jpg-scandal', brand: 'Jean Paul Gaultier', name: 'Scandal', gender: 'Her', family: 'Gourmand', familyLabel: 'Gourmand Chypre', type: 'Eau de parfum', price: 17900, size: '100 ml', bestseller: true, featured: false,
    description: 'A very sweet, intense fragrance dominated by an amber honey gourmand note.',
    smellsLike: 'Gourmand, festive and provocative.',
    notes: { top: ['Blood orange', 'Mandarin'], heart: ['Honey', 'Gardenia', 'Orange blossom', 'Jasmine', 'Peach'], base: ['Beeswax', 'Caramel', 'Patchouli', 'Licorice'] } },
  { id: 'viktor-rolf-spicebomb-extreme', brand: 'Viktor&Rolf', name: 'Spicebomb Extreme', gender: 'Him', family: 'Oriental', familyLabel: 'Amber Spicy', type: 'Fragrance', price: 17800, size: '100 ml', bestseller: true, featured: false,
    description: 'A richer, more intense version of the original Spicebomb, centred on a heavy blend of sweet tobacco and rich vanilla backed by fiery spices.',
    smellsLike: 'Explosive, warm and seductive. Ideal for cold weather and evening wear.',
    notes: { top: ['Black pepper', 'Bergamot'], heart: ['Cinnamon', 'Cumin', 'Saffron'], base: ['Bourbon vanilla', 'Tobacco', 'Amberwood'] } },
  { id: 'givenchy-gentleman-reserve-privee', brand: 'Givenchy', name: 'Gentleman Réserve Privée', gender: 'Him', family: 'Woody', familyLabel: 'Woody Floral Amber', type: 'Eau de parfum', price: 18500, size: '100 ml', bestseller: false, featured: true,
    description: 'Combines Givenchy\'s signature powdery iris note with a rich, warm whisky accord and toasted chestnut.',
    smellsLike: 'Sophisticated, smooth and boozy, inspired by whisky tasting.',
    notes: { top: ['Bergamot'], heart: ['Iris', 'Chestnut'], base: ['Whisky absolute', 'Amber', 'Sandalwood'] } },
  { id: 'jpg-le-beau-le-parfum', brand: 'Jean Paul Gaultier', name: 'Le Beau Le Parfum', gender: 'Him', family: 'Woody', familyLabel: 'Amber Woody / Tropical', type: 'Fragrance', price: 18200, size: '100 ml', bestseller: false, featured: false,
    description: 'Takes the original tropical coconut-and-tonka DNA of Le Beau and adds a sweet pineapple opening with deep woody-amber undertones.',
    smellsLike: 'Exotic, intense and sensual.',
    notes: { top: ['Pineapple', 'Iris', 'Ginger'], heart: ['Coconut', 'Wood accord'], base: ['Tonka bean', 'Amber', 'Sandalwood'] } },
  { id: 'versace-eros', brand: 'Versace', name: 'Eros', gender: 'Him', family: 'Fresh', familyLabel: 'Aromatic Fougère', type: 'Eau de toilette / Eau de parfum', price: 14500, size: '100 ml', bestseller: false, featured: false,
    description: 'Opens with a crisp, sweet blast of mint and apple before drying down into a warm vanilla and tonka base.',
    smellsLike: 'Youthful, energetic and loud. A classic nightlife staple.',
    notes: { top: ['Mint leaves', 'Green apple', 'Italian lemon'], heart: ['Tonka bean', 'Ambrosan', 'Geranium'], base: ['Madagascar vanilla', 'Cedarwood', 'Vetiver', 'Oakmoss'] } },
  { id: 'chanel-bleu-de-chanel', brand: 'Chanel', name: 'Bleu de Chanel', gender: 'Him', family: 'Woody', familyLabel: 'Woody Aromatic', type: 'Eau de parfum', price: 21500, size: '100 ml', bestseller: true, featured: true,
    description: 'Features a clean citrus opening balanced by smoky incense, amber and smooth sandalwood, making it suitable for any occasion.',
    smellsLike: 'Versatile, refined and effortlessly timeless.',
    notes: { top: ['Grapefruit', 'Lemon', 'Mint', 'Pink pepper'], heart: ['Ginger', 'Nutmeg', 'Jasmine'], base: ['Incense', 'Vetiver', 'Cedar', 'Sandalwood', 'Amber'] } },
  { id: 'dior-sauvage', brand: 'Dior', name: 'Sauvage', gender: 'Him', family: 'Citrus', familyLabel: 'Citrus Aromatic / Spicy', type: 'Eau de parfum', price: 20500, size: '100 ml', bestseller: true, featured: true,
    description: 'Combines the crisp, radiant freshness of bergamot with warm oriental spices and a smooth vanilla-ambroxan trail.',
    smellsLike: 'Bold, fresh and magnetic.',
    notes: { top: ['Calabrian bergamot', 'Pepper'], heart: ['Sichuan pepper', 'Lavender', 'Star anise', 'Nutmeg'], base: ['Ambroxan', 'Vanilla'] } },
  { id: 'armani-stronger-with-you-intensely', brand: 'Emporio Armani', name: 'Stronger With You Intensely', gender: 'Him', family: 'Gourmand', familyLabel: 'Amber Fougère / Gourmand', type: 'Fragrance', price: 17200, size: '100 ml', bestseller: false, featured: false,
    description: 'Known for its signature gooey toffee accord mixed with spicy cinnamon and a heavy vanilla-amber base.',
    smellsLike: 'Ultra-sweet, cozy and inviting.',
    notes: { top: ['Pink pepper', 'Juniper', 'Violet'], heart: ['Toffee', 'Cinnamon', 'Lavender', 'Sage'], base: ['Vanilla', 'Tonka bean', 'Amber', 'Suede'] } },
  { id: 'jpg-scandal-pour-homme-le-parfum', brand: 'Jean Paul Gaultier', name: 'Scandal Pour Homme Le Parfum', gender: 'Him', family: 'Gourmand', familyLabel: 'Amber Woody Gourmand', type: 'Fragrance', price: 18600, size: '100 ml', bestseller: false, featured: false,
    description: 'Built around an intense caramel and tonka sweetness with a woody backbone, designed for maximum projection and durability.',
    smellsLike: 'Sweet, bold and theatrical.',
    notes: { top: ['Geranium'], heart: ['Tonka bean'], base: ['Sandalwood', 'Caramel'] } },
  { id: 'carolina-herrera-bad-boy-cobalt', brand: 'Carolina Herrera', name: 'Bad Boy Cobalt', gender: 'Him', family: 'Woody', familyLabel: 'Woody Aromatic Fruity', type: 'Eau de parfum électrique', price: 17400, size: '100 ml', bestseller: false, featured: false,
    description: 'A fresh take on the Bad Boy line featuring a unique juicy dark plum note contrasted with aromatic lavender and earthy truffle.',
    smellsLike: 'Fresh, modern and energetic.',
    notes: { top: ['Pink pepper', 'Lavender'], heart: ['Plum', 'Geranium'], base: ['Truffle accord', 'Vetiver', 'Cedarwood'] } },
  { id: 'paco-rabanne-1-million', brand: 'Paco Rabanne', name: '1 Million', gender: 'Him', family: 'Oriental', familyLabel: 'Amber Spicy Gourmand', type: 'Eau de toilette', price: 15800, size: '100 ml', bestseller: true, featured: false,
    description: 'A clubbing staple dominated by blood orange, warm cinnamon and an amber-leather finish.',
    smellsLike: 'Flamboyant, sweet and confident.',
    notes: { top: ['Blood mandarin', 'Grapefruit', 'Mint'], heart: ['Cinnamon', 'Spicy notes', 'Rose'], base: ['Amber', 'Leather', 'Woody notes', 'Indian patchouli'] } },
  { id: 'khadlaj-karus-gold-absolu', brand: 'Khadlaj', name: 'Karus Gold Absolu', gender: 'Unisex', family: 'Gourmand', familyLabel: 'Floral Fruity Gourmand / Citrus Woody', type: 'Fragrance', price: 9500, size: '100 ml', bestseller: false, featured: false,
    description: 'Opens with a sugared, tart citrus blast that blends into a soft, powdery floral-praline heart before settling on a clean, earthy vetiver and musk drydown. Highly versatile.',
    smellsLike: 'Bright, sweet and clean. Often compared to the Bal d\'Afrique profile by Byredo, at a friendlier price.',
    notes: { top: ['Candied lemon', 'Blackcurrant', 'Bergamot'], heart: ['Praline', 'Magnolia', 'Violet'], base: ['Musk', 'Vetiver'] } },
  { id: 'xerjoff-torino21', brand: 'Xerjoff', name: 'Torino21', gender: 'Unisex', family: 'Citrus', familyLabel: 'Aromatic Green Citrus', type: 'Fragrance', price: 38000, size: '100 ml', bestseller: false, featured: false,
    description: 'A masterclass in fresh green perfumery, with crisp garden mint and lemon balanced by aromatic basil and rosemary. Excellent longevity for a fresh summer fragrance.',
    smellsLike: 'Ultra-fresh, uplifting and invigorating. Created to celebrate the Nitto ATP Tennis Finals in Turin.',
    notes: { top: ['Mint', 'Lemon', 'Bergamot', 'Thyme'], heart: ['Basil', 'Rosemary', 'Blackcurrant', 'Jasmine'], base: ['Verbena', 'Musk'] } },
  { id: 'ysl-babycat', brand: 'Yves Saint Laurent', name: 'Babycat', gender: 'Unisex', family: 'Oriental', familyLabel: 'Amber Spicy / Leather', type: 'Fragrance', price: 22500, size: '100 ml', bestseller: false, featured: false,
    description: 'From Le Vestiaire des Parfums. Built around the contrast between dark, resinous incense, smooth suede and a rich, creamy Bourbon vanilla base.',
    smellsLike: 'Smoky, chic and addictive. A highly sought-after cult favorite.',
    notes: { top: ['Pink pepper', 'Black pepper', 'Elemi'], heart: ['Olibanum (frankincense)', 'Saffron'], base: ['Bourbon vanilla', 'Suede accord', 'Cedarwood'] } },
  { id: 'kilian-black-phantom-memento-mori', brand: 'Kilian Paris', name: 'Black Phantom Memento Mori', gender: 'Unisex', family: 'Gourmand', familyLabel: 'Amber Vanilla Gourmand', type: 'Fragrance', price: 48000, size: '100 ml', bestseller: false, featured: false,
    description: 'A pirate-inspired fragrance that smells of dark spiced rum mixed with freshly roasted espresso, melted dark chocolate and warm sandalwood.',
    smellsLike: 'Dark, decadent and unapologetically boozy.',
    notes: { top: ['Dark chocolate', 'Rum'], heart: ['Coffee', 'Sugarcane'], base: ['Almond', 'Caramel', 'Sandalwood', 'Heliotrope'] } },
  { id: 'xerjoff-naxos', brand: 'Xerjoff', name: 'Naxos', gender: 'Unisex', family: 'Oriental', familyLabel: 'Aromatic Spicy / Sweet Tobacco', type: 'Fragrance', price: 36000, size: '100 ml', bestseller: false, featured: false,
    description: 'From the XJ 1861 collection. Blends bright Mediterranean citrus and soothing lavender with golden honey, warm cinnamon and smooth blonde tobacco. Extremely long-lasting, with strong projection.',
    smellsLike: 'Regal, warm and opulent. A homage to Sicily.',
    notes: { top: ['Lavender', 'Bergamot', 'Lemon'], heart: ['Honey', 'Cinnamon', 'Cashmeran', 'Jasmine'], base: ['Tobacco leaf', 'Tonka bean', 'Vanilla'] } },
  { id: 'armani-acqua-di-gio-profondo', brand: 'Giorgio Armani', name: 'Acqua Di Giò Profondo', gender: 'Unisex', family: 'Fresh', familyLabel: 'Aquatic Aromatic', type: 'Eau de parfum', price: 19800, size: '100 ml', bestseller: false, featured: false,
    description: 'Takes the signature Acqua Di Giò marine identity into deeper waters, combining icy marine notes with dark green herbs and salty minerals. Perfect for warm weather and daily wear.',
    smellsLike: 'Deep, ocean-fresh and modern.',
    notes: { top: ['Marine notes', 'Aquozone', 'Green mandarin', 'Bergamot'], heart: ['Rosemary', 'Lavender', 'Cypress', 'Mastic'], base: ['Mineral accord', 'Patchouli', 'Musk', 'Amber'] } },
];

// Each product expects its own photo at public/assets/perfumes/<id>.jpg (see README.txt there).
export const products = catalogue.map((p) => ({ brand: 'Velora', type: 'Eau de parfum', familyLabel: p.family, ...p, image: `/assets/perfumes/${p.id}.jpg` }));

// Only offer filter families that actually have products.
export const FAMILIES = ALL_FAMILIES.filter((f) => products.some((p) => p.family === f));

export const getProduct = (id) => products.find((p) => p.id === id);

const haystack = (p) =>
  [p.brand || 'Velora', p.name, p.familyLabel || '', p.gender, `for ${p.gender}`, p.family, p.description, p.smellsLike, ...p.notes.top, ...p.notes.heart, ...p.notes.base]
    .join(' ').toLowerCase();

export const matchesQuery = (p, q) => {
  const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return true;
  const h = haystack(p);
  return terms.every((t) => h.includes(t));
};

export const formatPrice = (n) =>
  `${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)} DZD`;
