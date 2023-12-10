export class ShopStorage {
  constructor(storageBasketName) {
    this.storageBasketName = storageBasketName;
    this.initStorage();
  }

  initStorage() {
    if (this.getAllProducts()) {
      return;
    }
    this.#writeToLocalStorage([]);
  }

  getAllProducts() {
    return JSON.parse(localStorage.getItem(this.storageBasketName));
  }

  addProduct(newProduct) {
    if (!newProduct) {
      return;
    }
    const products = this.getAllProducts();
    const searchProduct = products.find(item => item._id === newProduct._id);
    if (!searchProduct) {
      newProduct.amount = 1;
      products.push(newProduct);
    } else {
      searchProduct.amount += 1;
    }
    this.#writeToLocalStorage(products);
  }

  removeProductById(productId) {
    const products = this.getAllProducts();
    const searchProduct = products.find(item => item._id === productId);
    if (!searchProduct) {
      return;
    } else if (searchProduct.amount > 1) {
      searchProduct.amount -= 1;
    } else {
      products.filter(elem => elem._id === searchProduct._id);
    }
    this.#writeToLocalStorage(products);
  }

  removeAllProductsById(productId) {
    this.#writeToLocalStorage(
      this.getAllProducts().filter(elem => elem._id !== productId)
    );
  }

  removeAllProducts() {
    this.#writeToLocalStorage([]);
  }

  #writeToLocalStorage(productArray) {
    localStorage.setItem(this.storageBasketName, JSON.stringify(productArray));
  }

  //додатковий метод для видалення одного продукту (для корректної роботи кошика)
  removeProduct(productId) {
    const products = this.getAllProducts();
    const updatedProducts = products.filter(product => product._id !== productId);
    this.#writeToLocalStorage(updatedProducts);
  }
}
