export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  stock: number;
  rating: number;
  createdAt: string;
}

// Mock product data
const products: Product[] = [
  {
    id: 1,
    name: "Handcrafted Wooden Bowl",
    description: "Beautiful handcrafted wooden bowl made from reclaimed oak. Each piece is unique with natural grain patterns and organic finish. Perfect for serving salads or as a decorative centerpiece.",
    price: 4599,
    image: "https://images.pexels.com/photos/6438989/pexels-photo-6438989.jpeg",
    category: "wood",
    featured: true,
    stock: 12,
    rating: 4.8,
    createdAt: "2023-04-15"
  },
  {
    id: 2,
    name: "Ceramic Mug Set",
    description: "Set of 4 handmade ceramic mugs. Each mug is individually crafted and glazed, creating a unique piece of functional art for your morning coffee or tea.",
    price: 6499,
    image: "https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg",
    category: "ceramic",
    featured: true,
    stock: 8,
    rating: 4.6,
    createdAt: "2023-05-22"
  },
  {
    id: 3,
    name: "Hand-Woven Basket",
    description: "Intricately woven basket made from sustainable natural fibers. Perfect for storage or as a decorative accent in any room.",
    price: 3850,
    image: "https://images.pexels.com/photos/7319347/pexels-photo-7319347.jpeg",
    category: "textile",
    featured: false,
    stock: 15,
    rating: 4.5,
    createdAt: "2023-03-10"
  },
  {
    id: 4,
    name: "Macramé Wall Hanging",
    description: "Elegant macramé wall hanging handcrafted with 100% cotton rope. Adds texture and warmth to any wall space in your home.",
    price: 7200,
    image: "https://images.pexels.com/photos/4207708/pexels-photo-4207708.jpeg",
    category: "textile",
    featured: true,
    stock: 5,
    rating: 4.9,
    createdAt: "2023-06-05"
  },
  {
    id: 5,
    name: "Stoneware Planter",
    description: "Handcrafted stoneware planter with a natural matte finish. Elegant and simple design perfect for indoor plants and succulents.",
    price: 3499,
    image: "https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg",
    category: "ceramic",
    featured: false,
    stock: 20,
    rating: 4.7,
    createdAt: "2023-02-28"
  },
  {
    id: 6,
    name: "Hand-Poured Soy Candle",
    description: "Artisanal soy candle hand-poured into a reusable ceramic vessel. Features natural essential oils for a clean, long-lasting burn.",
    price: 2800,
    image: "https://images.pexels.com/photos/6438967/pexels-photo-6438967.jpeg",
    category: "home",
    featured: false,
    stock: 25,
    rating: 4.4,
    createdAt: "2023-04-02"
  },
  {
    id: 7,
    name: "Leather Journal",
    description: "Handcrafted leather journal with hand-stitched binding and premium paper. Perfect for sketching, journaling, or as a thoughtful gift.",
    price: 4250,
    image: "https://images.pexels.com/photos/6438965/pexels-photo-6438965.jpeg",
    category: "paper",
    featured: true,
    stock: 10,
    rating: 4.8,
    createdAt: "2023-05-14"
  },
  {
    id: 8,
    name: "Wooden Cutting Board",
    description: "Solid wood cutting board crafted from sustainable hardwood. Features unique grain patterns and a food-safe finish.",
    price: 5899,
    image: "https://images.pexels.com/photos/6438986/pexels-photo-6438986.jpeg",
    category: "wood",
    featured: false,
    stock: 12,
    rating: 4.7,
    createdAt: "2023-03-25"
  },
  {
    id: 9,
    name: "Hand-Knit Throw Blanket",
    description: "Luxurious hand-knit throw blanket made from 100% merino wool. Perfect for adding warmth and texture to your living space.",
    price: 12900,
    image: "https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg",
    category: "textile",
    featured: true,
    stock: 7,
    rating: 4.9,
    createdAt: "2023-01-18"
  },
  {
    id: 10,
    name: "Glass Terrarium",
    description: "Handblown glass terrarium with geometric design. Perfect for displaying air plants, succulents, or creating miniature gardens.",
    price: 4850,
    image: "https://images.pexels.com/photos/1690342/pexels-photo-1690342.jpeg",
    category: "glass",
    featured: false,
    stock: 15,
    rating: 4.6,
    createdAt: "2023-06-10"
  },
  {
    id: 11,
    name: "Ceramic Serving Platter",
    description: "Large ceramic serving platter with hand-painted design. Perfect for entertaining or as a decorative piece.",
    price: 6800,
    image: "https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg",
    category: "ceramic",
    featured: false,
    stock: 9,
    rating: 4.5,
    createdAt: "2023-04-30"
  },
  {
    id: 12,
    name: "Woven Wall Clock",
    description: "Handcrafted wall clock with woven rattan face and natural wood frame. Adds an organic, natural element to your home decor.",
    price: 5299,
    image: "https://images.pexels.com/photos/6438982/pexels-photo-6438982.jpeg",
    category: "home",
    featured: true,
    stock: 11,
    rating: 4.7,
    createdAt: "2023-02-15"
  }
];

// Simulate API calls with delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getProducts = async (): Promise<Product[]> => {
  await delay(800);
  return products;
};

export const getProductById = async (id: number): Promise<Product | undefined> => {
  await delay(500);
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  await delay(800);
  return products.filter(product => product.featured);
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  await delay(800);
  return products.filter(product => product.category === category);
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  await delay(800);
  const lowercasedQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercasedQuery) || 
    product.description.toLowerCase().includes(lowercasedQuery) ||
    product.category.toLowerCase().includes(lowercasedQuery)
  );
};

export const getCategories = async (): Promise<string[]> => {
  await delay(300);
  return Array.from(new Set(products.map(product => product.category)));
};