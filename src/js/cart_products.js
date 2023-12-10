
import ApiService from './requests';
import { ShopStorage } from './local-storage';
import { getEmptyCartMarkup, getCartMarkup, getcheckoutMarkup } from './markup_cart';

document.addEventListener('DOMContentLoaded', () => {
  const basket = document.getElementById('basket');
  const cartTitle = document.getElementById('cart-counter');
  const storage = new ShopStorage('cart');
  const api = new ApiService();

  async function updateCart() {
    const products = storage.getAllProducts();
    console.log(products);
// Формування розмітки контейнерів. якщо кошик порожній відмальовується Empty, у іншову випадку відмальовується розмітка CART
    if (products.length === 0) {
      basket.innerHTML = '';
      basket.insertAdjacentHTML('beforeend', getEmptyCartMarkup());
    } else {
      const productDetailsPromises = products.map(async ({ productId, quantity }) => {
        try {
          const productDetails = await api.getProductById(productId);
          return { ...productDetails, quantity };
        } catch (error) {
          console.error(`Error fetching product details for productId: ${productId}`, error);
          return null;
        }
      });

      const productDetailsArray = await Promise.all(productDetailsPromises);
      const validProductDetails = productDetailsArray.filter(details => details !== null);

      basket.innerHTML = '';
      basket.insertAdjacentHTML('beforeend', getCartMarkup(validProductDetails));
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



















