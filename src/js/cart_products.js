import ApiService from './requests';
import { ShopStorage } from './local-storage';
import {
  getEmptyCartMarkup,
  getCartMarkup,
  getcheckoutMarkup,
} from './markup_cart';
import { updateCartCounter} from './header';

const basket = document.querySelector('.container-div-cart-js-one');
const basketChek = document.querySelector('.container-div-cart-js-two');
const cartTitle = document.getElementById('cart-counter-page');
const storage = new ShopStorage('productsBasket');
const api = new ApiService();

async function updateCart() {
  const products = storage.getAllProducts();
  // console.log('Current products in storage:', products); //проверка
  // Формування розмітки контейнерів. якщо кошик порожній відмальовується Empty, у іншову випадку відмальовується розмітка CART
  if (products.length === 0) {
    // console.log('Basket is empty. Displaying empty cart markup.'); //проверка
    basket.innerHTML = '';
    basketChek.innerHTML = '';
    basket.insertAdjacentHTML('beforeend', getEmptyCartMarkup());
    // basketChek.insertAdjacentHTML('beforeend', getEmptyCartMarkup());пустой кошик рендерить
  } else {
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
    basket.innerHTML = '';
    basket.insertAdjacentHTML('beforeend', getCartMarkup(validProductDetails));
//  $$=====###33@@@@@@@@@@@@@@@@@@@@@
    async function calculateTotalPrice(validProductDetails) {
      let prices = 0;
      validProductDetails.forEach(({ price }) => (prices += price));
      return prices;
    };
    const totalPrice = await calculateTotalPrice(validProductDetails);
    basketChek.innerHTML = '';
    basketChek.insertAdjacentHTML('beforeend', getcheckoutMarkup(totalPrice));
    async function getCarMarku() {
      const refs = {
        totalPriceElement: document.querySelector('.checkout-total'),
        emailInput: document.querySelector('.checkout-input-email'),
        checkoutButton: document.querySelector('.checkout-button'),
        cartContainer: document.querySelector('.cart-products-list'),
        price: document.querySelector('.price'),
      };
      return refs
   } 
const {totalPriceElement, emailInput, checkoutButton, cartContainer, price} = await getCarMarku();
    
   checkoutButton.addEventListener('click', handleCheckout);
  function handleCheckout(event) {
    event.preventDefault();
    checkout();
  }

 // Функція чекаута
 function checkout() {
  const emailValue = emailInput.value;

  // Валідація в інпуті
  if (!emailValue || !isValidEmail(emailValue)) {
    alert('Please enter a valid email address.');
    return;
  }
  function carMar() {
    const cartMarkup = getEmptyCartMarkup();
    cartContainer.innerHTML = cartMarkup;

    }
  // Завантажує правильну розмітку: або порожню корзину, або товари й ціну
  if( products.length > 0) carMar();
 
 

  // Повідомлення про успішний чекаут
  alert(`Checkout completed! Total Price: $${totalPrice.toFixed(2)}.`);

  // Скидає в нуль
  totalPriceElement.textContent = '0.00';
 
  // Чистить сховище
  storage.removeAllProducts();
  updateCartCounter ();
  updateCart();
}


// !!!!!!
// Валідація пошти
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


  //  totalPriceElement.textContent = totalPrice.toFixed(2);
   //  $$=====###33@@@@@@@@@@@@@@@@@@@@@
  }
  const productCount = products.length;
  cartTitle.textContent = `CART (${productCount})`;
 
}

// !=================================================

 updateCart();
  

// !=================================================
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', async event => {
    const btnDeleteAll = event.target.closest('.btn-delete-all');
    const btnDelete = event.target.closest('.cart-btn-delete');
    if (btnDeleteAll) {
      // console.log('Deleting all products from storage.');
      storage.removeAllProducts();
      // console.log('Updating cart after removing all products.');
      updateCart();
    } else if (btnDelete) {
      const productId =
        btnDelete.closest('.cart-product-item').dataset.productId;
      // console.log(`Deleting product with ID: ${productId}`);
      storage.removeProduct(productId); // ИЗМЕНЕНИЕ
      updateCart();
    }
	 updateCartCounter ();
  });
});
