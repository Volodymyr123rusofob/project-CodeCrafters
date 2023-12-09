import ApiService from './requests';
import icons from '../img/symbol-defs.svg'; 
import { ShopStorage } from './local-storage';
import { getEmptyCartMarkup, getCartMarkup, getcheckoutMarkup } from './markup_cart';

document.addEventListener('DOMContentLoaded', () => {

    const basket = document.getElementById('basket');
    const cartTitle = document.getElementById('cart-counter');
    const btnDeleteAll = document.querySelector('.btn-delete-all');



    const storage = new ShopStorage('cart');
    const products = storage.getAllProducts();
    // Формування розмітки контейнерів. якщо кошик порожній відмальовується Empty, у іншову випадку відмальовується розмітка CART
    if (products.length === 0) {
        basket.innerHTML = '';
        basket.insertAdjacentHTML('beforeend', getEmptyCartMarkup());
    } else {
        basket.innerHTML = '';
        basket.insertAdjacentHTML('beforeend', getCartMarkup(products));
        basket.insertAdjacentHTML('beforeend', getcheckoutMarkup());
    }

    updateCartCounter();

    function updateCartCounter() {
        const productCount = products.length;
        cartTitle.textContent = `CART (${productCount})`;
    }
    btnDeleteAll.addEventListener('click', () => {

        storage.removeAllProducts();  // Очищайте локальное хранилище
        updateCartMarkup();
   
    });
});