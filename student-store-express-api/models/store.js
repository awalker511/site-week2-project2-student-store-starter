class Store {
  constructor() {}

  getAllProducts() {
    const storage = this._getStorage();
    const productsObject = storage.get("products").value();
    return Object.values(productsObject);
  }

  getProductsByID(productID) {
    const storage = this._getStorage();
    const productsObject = storage.get("products").value();
    const product = productsObject.filter((product) => product.id == productID);
    return product[0];
  }

  _getStorage() {
    const { storage } = require("../data/storage");
    return storage;
  }
}

module.exports = { store: new Store() };
