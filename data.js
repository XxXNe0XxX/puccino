// data.js — menu, locations, etc.

const MENU = [
  // Espresso bar
  { id: "esp", cat: "Espresso", name: "Espresso", desc: "Single shot, dark crema, served in a warm porcelain demitasse.", price: 3.25 },
  { id: "dop", cat: "Espresso", name: "Doppio", desc: "Double espresso for the unhurried morning.", price: 4.00 },
  { id: "mac", cat: "Espresso", name: "Macchiato", desc: "Espresso 'marked' with a small dollop of steamed milk foam.", price: 3.75 },
  { id: "cor", cat: "Espresso", name: "Caffè Corretto", desc: "Espresso 'corrected' with a splash of grappa or sambuca.", price: 5.50 },

  // Milk drinks
  { id: "cap", cat: "Milk Drinks", name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and velvet foam. Mornings only.", price: 4.75 },
  { id: "lat", cat: "Milk Drinks", name: "Caffè Latte", desc: "Long pull of espresso under silky steamed milk.", price: 5.25 },
  { id: "fla", cat: "Milk Drinks", name: "Flat White", desc: "Two ristretto shots, microfoam poured close.", price: 5.00 },
  { id: "moc", cat: "Milk Drinks", name: "Mocha", desc: "Espresso, steamed milk, and house-made dark chocolate.", price: 5.75 },

  // Granita — best seller
  { id: "g-co", cat: "Granita", name: "Granita di Caffè", desc: "Our signature. Slow-frozen espresso ice with a crown of unsweetened panna. The reason you walked in.", price: 7.50, hero: true },
  { id: "g-li", cat: "Granita", name: "Granita di Limone", desc: "Sicilian lemons, pure and bracing.", price: 6.50 },
  { id: "g-al", cat: "Granita", name: "Granita di Mandorla", desc: "Almond milk and Marcona, served with brioche col tuppo.", price: 7.00 },
  { id: "g-fr", cat: "Granita", name: "Granita di Fragola", desc: "Sun-ripened strawberries from the Northshore market.", price: 6.75 },

  // Pastries
  { id: "p-co", cat: "Pastries", name: "Cornetto", desc: "Italian croissant — flakier, less buttery than its French cousin. Plain or apricot.", price: 4.50 },
  { id: "p-sf", cat: "Pastries", name: "Sfogliatella", desc: "Layered shell pastry filled with sweetened ricotta and orange zest.", price: 5.25 },
  { id: "p-ca", cat: "Pastries", name: "Cannolo Siciliano", desc: "Filled to order. Ricotta, candied orange, pistachio.", price: 5.75 },
  { id: "p-ti", cat: "Pastries", name: "Tiramisù al Bicchiere", desc: "House classic, served in a glass. Mascarpone, espresso-soaked savoiardi, cocoa.", price: 6.50 },
];

const CATEGORIES = ["All", "Espresso", "Milk Drinks", "Granita", "Pastries"];

const LOCATIONS = [
  {
    name: "French Quarter",
    addr: "812 Royal Street",
    nbhd: "New Orleans, LA 70116",
    hours: "Mon–Sun · 6:30a – 9:00p",
    phone: "(504) 555-0142",
    pill: "Flagship",
  },
  {
    name: "Magazine Street",
    addr: "3401 Magazine Street",
    nbhd: "New Orleans, LA 70115",
    hours: "Mon–Sat · 7:00a – 8:00p",
    phone: "(504) 555-0167",
    pill: "Garden District",
  },
  {
    name: "Marigny",
    addr: "2500 Royal Street",
    nbhd: "New Orleans, LA 70117",
    hours: "Mon–Sun · 7:00a – 10:00p",
    phone: "(504) 555-0188",
    pill: "Live Music Fri",
  },
  {
    name: "Mid-City",
    addr: "4221 Canal Street",
    nbhd: "New Orleans, LA 70119",
    hours: "Mon–Sun · 6:00a – 7:00p",
    phone: "(504) 555-0199",
    pill: "Drive-thru",
  },
];

window.MENU = MENU;
window.CATEGORIES = CATEGORIES;
window.LOCATIONS = LOCATIONS;
