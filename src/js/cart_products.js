import ApiService from './requests';
import icons from '../img/symbol-defs.svg'; 
import { ShopStorage } from './local-storage';
import { getEmptyCartMarkup, getCartMarkup, getcheckoutMarkup } from './markup_cart';
const basket = document.getElementById('basket');
const cartTitle = document.getElementById('cart-counter');

const storage = new ShopStorage('cart');
// const newProduct = {}

const products = storage.getAllProducts();
// Формування розмітки контейнерів. якщо кошик порожній відмальовується Empty, у іншову випадку відмальовується розмітка CART
if (products.length === 0) {
   
    basket.innerHTML = getEmptyCartMarkup();
  
} else {
    basket.innerHTML = getCartMarkup(products) + getcheckoutMarkup();
    
    }

updateCartCounter();

function updateCartCounter() {
  const productCount = products.length;
  cartTitle.textContent = `CART (${productCount})`;
}
