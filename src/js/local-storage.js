export class ShopStorage {
  constructor(storageName) {
    this.storageName = storageName;
    this.initStorage();
  }

  initStorage() {
    if (this.getAllProducts()) {
      return;
    }
    localStorage.setItem(this.storageName, JSON.stringify([]));
  }

  setProduct(obj) {
    if (!obj) {
      return;
    }

    if (this.getAllProducts().some(item => item._id === obj._id)) {
      return;
    }

    localStorage.setItem(
      this.storageName,
      JSON.stringify([...this.getAllProducts(), obj]),
    );
  }

  setAllProduct(dataArr) {
    localStorage.setItem(this.storageName, JSON.stringify(dataArr));
  }

  getAllProducts() {
    return JSON.parse(localStorage.getItem(this.storageName));
  }

  removeProduct(productId) {
    this.setAllProduct(
      this.getAllProducts().filter(item => item._id !== productId),
    );
  }

  removeAllProducts() {
    this.setAllProduct([]);
  }
}
