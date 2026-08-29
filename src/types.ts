export type ProductCategory = "electronics" | "clothing" | "food" | "furniture";

export interface Product {
    id: number;
    name: string;
    category: ProductCategory;
    price: number;
    stock: number;
    reorderLevel: number;
}