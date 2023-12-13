import ApiService from './requests';
import { ShopStorage } from './local-storage';
import {
  getEmptyCartMarkup,
  getCartMarkup,
  getcheckoutMarkup,
} from './markup_cart';
import { updateCartCounter } from './header';


const emptyCart = document.querySelector('.empty-cart-markup');
const cartMarkup = document.querySelector('.cart-markup');
const checkoutMarkup = document.querySelector('.checkout-markup');
const cartTitle = document.getElementById('cart-counter-page');
const storage = new ShopStorage('productsBasket');
const api = new ApiService();


async function updateCart() {
  const products = storage.getAllProducts();
  console.log('Current products in storage:', products);

  let validProductDetails; // Объявляем переменную вне блока, чтобы расширить ее область видимости

  if (products.length === 0) {
    emptyCart.classList.remove('visually-hidden');
    cartMarkup.classList.add('visually-hidden');
    checkoutMarkup.classList.add('visually-hidden');
      emptyCart.innerHTML = getEmptyCartMarkup();
  } else {
    console.log('Fetching product details for each product in the cart.');

    const productDetailsPromises = products.map(async ({ _id, quantity }) => {
      try {
        if (_id) {
          const productDetails = await api.getProductById(_id);
          return { ...productDetails, quantity };
        } else {
          return null;
        }
      } catch (error) {
        return null;
      }
    });

    const productDetailsArray = await Promise.all(productDetailsPromises);
    validProductDetails = productDetailsArray.filter(details => details !== null);

    // Обновляем только разметку cartMarkup
    cartMarkup.innerHTML = getCartMarkup(validProductDetails);
  }

  // Обновляем разметку checkoutMarkup и emptyCart только при необходимости
  const productCount = products.length;
  cartTitle.textContent = `CART (${productCount})`;

if (products.length > 0 && !checkoutMarkup.classList.contains('visually-hidden')) {
  checkoutMarkup.innerHTML = getcheckoutMarkup(validProductDetails);
  }
  // заполняем разметку пустой корзины

  
}

// !=================================================
export async function renCart() {
   await updateCart();
  const refs = {
    totalPriceElement: document.querySelector('.checkout-total'),
    emailInput: document.querySelector('.checkout-input-email'),
    checkoutButton: document.querySelector('.checkout-button'),
    cartContainer: document.querySelector('.cart-products-list'),
    price: document.querySelector('.price'),
  };


  return refs
}
renCart()
  
  ;
// !=================================================
document.addEventListener('DOMContentLoaded', () => {

  document.body.addEventListener('click', async event => {
    const btnDeleteAll = event.target.closest('.btn-delete-all');
    const btnDelete = event.target.closest('.cart-btn-delete');

    if (btnDeleteAll) {
      // console.log('Deleting all products from storage.');
      storage.removeAllProducts();
    } else if (btnDelete) {
      const productId = btnDelete.closest('.cart-product-item').dataset.productId;
      // console.log(`Deleting product with ID: ${productId}`);
      storage.removeProduct(productId);
    }

    await updateCart();
    updateCartCounter();
  });
});
