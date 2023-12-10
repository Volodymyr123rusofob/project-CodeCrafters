
import ApiService from './requests';
import { ShopStorage } from './local-storage';
import { getEmptyCartMarkup, getCartMarkup, getcheckoutMarkup } from './markup_cart';


  const basket = document.getElementById('basket');
  const cartTitle = document.getElementById('cart-counter-page');
  const storage = new ShopStorage('cart');
  const api = new ApiService();

  async function updateCart() {
    const products = storage.getAllProducts();
  console.log('Current products in storage:', products); //проверка
// Формування розмітки контейнерів. якщо кошик порожній відмальовується Empty, у іншову випадку відмальовується розмітка CART
    if (products.length === 0) {
      console.log('Basket is empty. Displaying empty cart markup.'); //проверка
      basket.innerHTML = '';
      basket.insertAdjacentHTML('beforeend', getEmptyCartMarkup());
    } else {
        console.log('Fetching product details for each product in the cart.'); //проверка
      const productDetailsPromises = products.map(async ({ _id, quantity }) => {
        try {
          if (_id) {
      const productDetails = await api.getProductById(_id);
      return { ...productDetails, quantity };
    } else {
      console.error('_id is undefined or empty for a product in the cart');
      return null;
    }
  } catch (error) {
    console.error(`Error fetching product details for _id: ${_id}`, error);
    return null;
  }
        
        });

      const productDetailsArray = await Promise.all(productDetailsPromises);
      const validProductDetails = productDetailsArray.filter(details => details !== null);
console.log('Displaying cart markup with product details:', validProductDetails); //проверка
      basket.innerHTML = '';
      basket.insertAdjacentHTML('beforeend', getCartMarkup(validProductDetails));
      basket.insertAdjacentHTML('beforeend', getcheckoutMarkup());
    }

    const productCount = products.length;
    console.log('Updating cart counter with product count:', productCount); //проверка
    cartTitle.textContent = `CART (${productCount})`;
  }

  updateCart();

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', async (event) => {
    const btnDeleteAll = event.target.closest('.btn-delete-all');
    const btnDelete = event.target.closest('.cart-btn-delete');

    if (btnDeleteAll) {
      console.log('Deleting all products from storage.');
      storage.removeAllProducts();
      console.log('Updating cart after removing all products.');
      updateCart();
    } else if (btnDelete) {
      const productId = btnDelete.closest('.cart-product-item').dataset.productId;
      console.log(`Deleting product with ID: ${productId}`);
      storage.removeProduct(productId); // ИЗМЕНЕНИЕ
      updateCart();
    }
  });
});








