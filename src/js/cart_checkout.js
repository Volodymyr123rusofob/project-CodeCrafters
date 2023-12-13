// Імпорт
import {renCart} from './cart_products'
import ApiService from './requests';
import {
  getEmptyCartMarkup,
  getCartMarkup,
  getcheckoutMarkup,
} from './markup_cart';
import { ShopStorage } from './local-storage';
const api = new ApiService();
const storage = new ShopStorage('productsBasket');

document.addEventListener('DOMContentLoaded', async function () {
  const products = storage.getAllProducts();
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
const validProductDetails = productDetailsArray.filter(
  details => details !== null
);

 await renCart();
  // Референси
  const refs = {
    totalPriceElement: document.querySelector('.checkout-total'),
    emailInput: document.querySelector('.checkout-input-email'),
    checkoutButton: document.querySelector('.checkout-button'),
    cartContainer: document.querySelector('.cart-products-list'),
    price: document.querySelector('.price'),
  };
  let sum = 0;
  function summ() {
    validProductDetails.map(({price}) => sum += price)
    refs.totalPriceElement.textContent = `$${sum.toFixed(2)}`;
  }
  summ()
  



  refs.checkoutButton.addEventListener('click', handleCheckout);
  function handleCheckout(event) {
    event.preventDefault();
    checkout();
  }
 
  // Функція чекаута
  function checkout() {
    const emailValue = refs.emailInput.value;

    // Валідація в інпуті
    if (!emailValue || !isValidEmail(emailValue)) {
      alert('Please enter a valid email address.');
      return;
    }
    function carMar() {
      const cartMarkup = getEmptyCartMarkup();
      refs.cartContainer.innerHTML = cartMarkup;

      }
    // Завантажує правильну розмітку: або порожню корзину, або товари й ціну
    if( products.length > 0) carMar();
   
    

    // Повідомлення про успішний чекаут
    alert(`Checkout completed! Total Price: $${sum.toFixed(2)}.`);

    // Скидає в нуль
    refs.totalPriceElement.textContent = '0.00';

    // Чистить сховище
    localStorage.clear();
  }

  // Валідація пошти
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

});

