const products = [
    {
    id: 1,
    title: " WOMEN COSET",
    description: "Leriya Fashion Western Dress || Rayon Solid Button Front Shirt Dress for Women || Roll Tab Sleeve & Collared Neck Flared Dress || Office || Summer Short Dresses for Women.",
    price: 399.99,
    category: "Clothing and cloths",
    image:
        "https://tse2.mm.bing.net/th?id=OIP.Qxd0oTl3LHuEhNA70HO75QHaLG&pid=Api&P=0&h=180",},{
    id: 2,
    title: "AIR FRYER",
    description: "Lifelong LLHFD429 Air Fryer 1200W| 4L Cooking Pan Capacity| Timer Selection Knob| Uses Less Oil| Fry, Grill, Roast, Reheat, and Bake| (1 Year Warranty, Black)",
    price: 2199.99,
    category: "Household and home appliances and kitchen",
    image:"https://m.media-amazon.com/images/I/51JvRwuU0DL._SL1500_.jpg" },{
    id: 3,
    title: "DIYAS",
    description: "Next in Crafts Diya Shape Flower Decorative Urli Bowl for Home Handcrafted Bowl for Floating Flowers and Tea Light Candles Home,Office and Table Decor| Diwali Decoration Items, Metal, Gold (1)",
    price: 49.99,
    category: "decoration",
    image:"https://m.media-amazon.com/images/I/8139WfN4fEL._AC_UL480_FMwebp_QL65_.jpg" },{
    id: 4,
    title: "NOTES",
    description: "JOICE IMPEX Aesthetic Cute Highlighters Bible Highlighters Cream Colors Chisel Tip No Bleed Dry Quick Perfect for Bible Study Notes School Office set of 6 cute highlighter pens for study",
    price: 249.99,
    category: "stationary",
    image:"https://m.media-amazon.com/images/I/61M2uaDWxyL._SX522_.jpg"},{ 
    id: 5,
    title: "MEN SHIRT",
    description: "GLORYBOYZ Men's Full Sleeve Regular Fit Fashion Cotton Big Checks Shirt",
    price: 298.99,
    category: "Clothing and cloths",
    image:"https://tse3.mm.bing.net/th?id=OIP.e8HoWEl_TYQud0EfXDPuzAHaLH&pid=Api&P=0&h=180" },{
    id: 6,
    title: "FRIENDS ,LOVERS AND THE BIG TERRIBLE THING",
    description: "Friends, Lovers and the Big Terrible Thing: 'Funny, fascinating and compelling' The Times Kindle Edition",
    price: 347,
    category: "Kindle store and books",
    image:"https://m.media-amazon.com/images/I/81Owf14yj8L._SY466_.jpg" },{
    id: 7,
    title: "WARDROBE",
    description: "Amazon Brand - Solimo Medusa 2 Door Engineered Wood Wardrobe (Wenge finish)",
    price: 6999,
    category: "furniture",
    image:"https://m.media-amazon.com/images/I/71esCFhYPGL._SX679_.jpg" },{ 
    id: 8,
    title: "INDUCTION STOVE",
    description: "Pigeon by Stovekraft Cruise 1800 watt Induction Cooktop With Crystal Glass,7 Segments LED Display, Auto Switch Off - Black",
    price: 1499.99,
    category: "Household and home appliances and kitchen",
    image:"https://m.media-amazon.com/images/I/61DAkNxj9uL._SX679_.jpg"},{
    id: 9,
    title: "PEN STAND",
    description: "Omega No.1707 Platinum Pen Stand Smoky Desktop Stand for Pens, Pencils, Makers, Staplers and Other Stationery Items",
    price: 142,
    category: "stationary",
    image:"https://m.media-amazon.com/images/I/71bEsm6gehL._SL1500_.jpg"},{
    id: 10,
    title: "DODDLE FROCK",
    description: "Doodle Girls Unicorn Sleeveless Net Frock Party Dress with Rainbow Flare, Pack of 1",
    price: 600.99,
    category: "Clothing and cloths",
    image:"https://tse1.mm.bing.net/th?id=OIP.xAc9exW3k9UDDX00fI8YsQHaLH&pid=Api&P=0&h=180" }, {
    id: 11,
    title: "DARE DREAMERS",
    description: "DareDreamers: A Start-up of Superheroes Kindle Edition",
    price: 149,
    category: "Kindle store and books",
    image:"https://m.media-amazon.com/images/I/81OoHOjsiNL._SY466_.jpg" },{ 
    id: 12,
    title: "DISHWASH LIQUID GEL",
    description: "Vim Dishwash Liquid Gel Lemon Refill Pouch, 2 Ltr | Dishwash Gel Infused With The Power Of Lemons | Leaves No Residue",
    price: 285,
    category: "grocery",
    image:"https://m.media-amazon.com/images/I/61IeazVX4uL._SX679_.jpg" },{
    id: 13,
    title: "BED",
    description: "Amazon Brand - Solimo Rendes Queen Size Engineered Wood Bed with Box Storage (Asian Walnut)",
    price: 7699,
    category: "furniture",
    image:"https://m.media-amazon.com/images/I/71ZLAVIGIPL._SX679_.jpg" },{ 
    id: 14,
    title: "MIX NUTS",
    description: "PrettyNutty Healthy Nutmix 250g, Dried Almonds, Black Raisins, Cashewnuts, Cranberries, Green Raisins, Walnut Kernels & Many More.",
    price: 164,
    category: "grocery",
    image:"https://m.media-amazon.com/images/I/71LXn0Fp56L._SX679_.jpg" },{
    id: 15,
    title: "BABY SUIT",
    description: "EIO 100% Cotton Rompers Sleepsuits Jumpsuit Night Suits for Newborn Baby Boys & Girls Pack of 2",
    price: 199.99,
    category: "Clothing and cloths",
    image:"https://tse4.mm.bing.net/th?id=OIP.oGjAom0yjwpazVOdIuqwaAHaHa&pid=Api&P=0&h=180" },{
    id: 16,
    title: "GARLAND",
    description: "SPHINX Artificial Marigold Garlands Door Toran Set (yellow and orange, 1 Piece)",
    price: 240,
    category: "decoration",
    image:"https://m.media-amazon.com/images/I/8110GpoKqCL._AC_UL480_QL65_.jpg"}, {
    id: 17,
    title: "POUCH",
    description: "Party Propz Pink Pencil Pouch for Girls -Large Capacity Pencil Pouches for Stationary | Aesthetic Pencil Case for College Students | Girls Pouch for School Stylish | Cute Pen Pouch for Girls Korean",
    price: 599,
    category: "stationary",
    image:"https://m.media-amazon.com/images/I/81dbFOVgxwL._SX679_.jpg"},{
    id: 18,
    title: "BURNER",
    description: "Lifelong LLGS10 Glass Top, 2 Burner Manual Glass Gas Stove, Black (ISI Certified)",
    price: 1248.99,
    category: "Household and home appliances and kitchen",
    image:"https://m.media-amazon.com/images/I/71Q5pFUtYmL._SL1500_.jpg"},{
    id: 19,
    title: "WOMEN T-SHIRT",
    description: "Amazon Brand - Symbol Women Cotton Regular Fit T-Shirt",
    price: 489,
    category: "Clothing and cloths",
    image:"https://m.media-amazon.com/images/I/713EWcF36KL._AC_UL480_FMwebp_QL65_.jpg" }, {
    id: 20,
    title: "SHOWPIECE",
    description: "PREK Seven Chakra Crystals and Gemstones, Seven Chakra Crystal Tree Showpiece for Good Luck Home Decor Item Bonsai Money Tree Plant Gift Item Figurine Standard Size - Multicolor, 1 Piece",
    price: 487,
    category: "decoration",
    image:"https://m.media-amazon.com/images/I/81M38x19YPL._SX679_.jpg"}
  ];
  
  export default products;
  