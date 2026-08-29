import {
  addProduct,
  sellProduct,
  restockProduct,
  getProductSummary,
  getInventoryValue,
  getProductsByCategory,
  getLowStockProduct,
} from "./stockLogic.js";
import {
  addProductTests,
  sellProductTests,
  restockProductTests,
  invalidTests,
} from "./testProducts.js";

console.log(".....Adding Product(s).....");
for (const addTest of addProductTests) {
  addProduct(addTest);
}

console.log(".....Selling Demanded Product(s).....");
for (const sellTest of sellProductTests) {
  sellProduct(sellTest.id, sellTest.quantity);
}

// console.log(".....Restocking Product(s).....");
// for (const restockTest of restockProductTests) {
//   restockProduct(restockTest.id, restockTest.quantity);
// }

// console.log("Checking invalid tests...");
// for (const invalidTest of invalidTests) {
//   sellProduct(invalidTest.id, invalidTest.quantity);
//   restockProduct(invalidTest.id, invalidTest.quantity);
// }

const lowStockProds = getLowStockProduct();
console.log("\nThe stocks of these products are low ", lowStockProds);

const eletronics = getProductsByCategory("electronics");
console.log("\nElectronic Products ", eletronics)

const inventoryValue = getInventoryValue();
console.log("Total inventory value is: ", inventoryValue)

const summary = getProductSummary();
console.log("Product Summary: ", summary)