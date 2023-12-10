import { ShopStorage } from './local-storage';

const SHOP_STORAGE = 'productsBasket';
const productsBasket = new ShopStorage(SHOP_STORAGE);

export  function getAllProducts(){
  return productsBasket.getAllProducts();
}

export  function addProductOnClickButton(productObj){
  productsBasket.addProduct(productObj)
}

export  function removeProductOnClickButton(productObj){
  productsBasket.removeAllProductsById(productObj)
}