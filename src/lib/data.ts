export interface Product {
    id: string
    name: string
    category: string
    price: number
    image: string
    categoryLabel: string
  }
  
  export interface CartItem extends Product {
    quantity: number
  }
  
  export const categories = [
    {
      id: "all",
      name: "All Products",
      icon: "🏪",
      items: "120 Items"
    },
    {
      id: "food",
      name: "Food",
      icon: "🍽️",
      items: "40 Items"
    },
    {
      id: "appliances",
      name: "Appliances",
      icon: "🔌",
      items: "30 Items"
    },
    {
      id: "electronics",
      name: "Electronics",
      icon: "📱",
      items: "25 Items"
    },
    {
      id: "home",
      name: "Home & Living",
      icon: "🏠",
      items: "25 Items"
    },
  ]
  
  export const products: Product[] = [
    {
      id: "1",
      name: "Organic Pasta",
      category: "food",
      categoryLabel: "Food",
      price: 3.99,
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
    {
      id: "2",
      name: "Coffee Maker",
      category: "appliances",
      categoryLabel: "Appliances",
      price: 49.99,
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
    {
      id: "3",
      name: "Wireless Earbuds",
      category: "electronics",
      categoryLabel: "Electronics",
      price: 79.99,
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
    {
      id: "4",
      name: "Throw Pillows Set",
      category: "home",
      categoryLabel: "Home & Living",
      price: 24.99,
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
    {
      id: "5",
      name: "Olive Oil",
      category: "food",
      categoryLabel: "Food",
      price: 8.99,
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
    {
      id: "6",
      name: "Toaster Oven",
      category: "appliances",
      categoryLabel: "Appliances",
      price: 69.99,
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    },
  ]
  
  