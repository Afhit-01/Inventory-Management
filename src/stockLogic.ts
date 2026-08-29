import type { ProductCategory, Product } from "./types.ts";

const ProductsCart: Product[] = [];

const addProduct = (product: Product): void => {
  const negativeStock: boolean = product.stock < 0;
  const alreadyExists: boolean = ProductsCart.some(
    (good) => good.id === product.id,
  );

  if (alreadyExists || negativeStock) {
    console.log("\nError: Something went wrong. Kindly recheck the id and stock");
    return;
  }

  ProductsCart.push(product);
  console.log(`\nProduct ${product.name} has been added successfully`);
};

const sellProduct = (id: number, quantity: number): void => {
  if (quantity < 0) {
    console.log("\nError: Quantity must be greater than zero");
    return;
  }

  const product = ProductsCart.find((good) => good.id === id);

  if (!product) {
    console.log("\nError: Product not found!");
    return;
  }

  const remainingStock = product.stock - quantity;

  if (remainingStock <= 0) {
    console.log(`\nError: Demanded quantity of ${product.name} is more than available stocks`);
    return;
  }

  product.stock = remainingStock;
  console.log(
    `\n${quantity} of quantities ${product.name} has been sold successfully.\n${product.stock} is left in stock`,
  );
};

const restockProduct = (id: number, quantity: number): void => {
  if (quantity <= 0) {
    console.log("\nError: Quantity must be greater than zero");
    return;
  }

  const product = ProductsCart.find((good) => good.id === id);

  if (!product) {
    console.log("\nError: Product not found!");
    return;
  }

  product.stock += quantity;
  console.log(
    `\n${quantity} quantities of ${product.name} has been successfully stocked.\n${product.stock} is left in stock`,
  );
};

const getLowStockProduct = (): Product[] => {
  return ProductsCart.filter((product) => product.stock < product.reorderLevel);
};

const getProductsByCategory = (category: ProductCategory): Product[] => {
  return ProductsCart.filter((product) => product.category === category);
};

const getInventoryValue = (): number => {
  const values = ProductsCart.map((product) => product.price * product.stock);
  let totalInventory = 0;
  for (const value of values) {
    totalInventory += value;
  }
  return totalInventory;
};

const getProductSummary = (): {
  id: number;
  display: string;
  needsReorder: boolean;
}[] => {
  return ProductsCart.map((product) => ({
    id: product.id,
    display: `${product.name} for N${product.price}/unit. ${product.stock} stocks is available.`,
    needsReorder: product.stock < product.reorderLevel,
  }));
};

export {
  addProduct,
  sellProduct,
  restockProduct,
  getProductSummary,
  getInventoryValue,
  getProductsByCategory,
  getLowStockProduct,
};
