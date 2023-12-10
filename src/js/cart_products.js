

import ApiService from './requests';
import icons from '../img/symbol-defs.svg'; 


import { ShopStorage } from './local-storage';
import { getEmptyCartMarkup, getCartMarkup, getcheckoutMarkup } from './markup_cart';

document.addEventListener('DOMContentLoaded', () => {

    const basket = document.getElementById('basket');
    const cartTitle = document.getElementById('cart-counter');



    const storage = new ShopStorage('cart');
    // Формування розмітки контейнерів. якщо кошик порожній відмальовується Empty, у іншову випадку відмальовується розмітка CART
 function updateCart() {
    const products = storage.getAllProducts();

    if (products.length === 0) {
      basket.innerHTML = '';
      basket.insertAdjacentHTML('beforeend', getEmptyCartMarkup());
    } else {
      basket.innerHTML = '';
      basket.insertAdjacentHTML('beforeend', getCartMarkup(products));
      basket.insertAdjacentHTML('beforeend', getcheckoutMarkup());
    }

    const productCount = products.length;
    cartTitle.textContent = `CART (${productCount})`;
  }

  updateCart();

  const btnDeleteAll = document.querySelector('.btn-delete-all');
  btnDeleteAll.addEventListener('click', () => {
    storage.removeAllProducts();
    updateCart();
  });
});