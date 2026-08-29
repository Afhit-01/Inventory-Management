import type { Product } from "./types.ts";

const addProductTests: Product[] = [
  {
    id: 101,
    name: "Wireless Mouse",
    category: "electronics",
    price: 15000,
    stock: 10,
    reorderLevel: 5,
  },
  {
    id: 102,
    name: "T-Shirt",
    category: "clothing",
    price: 8000,
    stock: 3,
    reorderLevel: 5,
  },
  {
    id: 103,
    name: "Office Chair",
    category: "furniture",
    price: 75000,
    stock: 7,
    reorderLevel: 3,
  },
  {
    id: 104,
    name: "Rice",
    category: "food",
    price: 25000,
    stock: 15,
    reorderLevel: 5,
  },
];

const sellProductTests = [
  { id: 101, quantity: 2 },    
  { id: 102, quantity: 2 },    
  { id: 103, quantity: 20 },   
];

const restockProductTests = [
  { id: 102, quantity: 10 }, 
  { id: 104, quantity: 5 },   
];

const invalidTests = [
  { id: 101, quantity: 0 },
  { id: 101, quantity: -5 }, 
  { id: 999, quantity: 5 }, 
];

export {addProductTests, sellProductTests, restockProductTests, invalidTests}