import { openModal } from './modal';
import ApiService from './requests';
// import createMarkup from './markup_products_list';
import icons from '../img/symbol-defs.svg';
import Swal from 'sweetalert2';
import alertSuccess from './alert';
import { ShopStorage } from './local-storage';

const popularList = document.querySelector('.js-popular-list');
popularList.addEventListener('click', handleClick);

const apiReq = new ApiService();
const imgPerPage = 5;

const shopStorage = new ShopStorage('cart');

const markupSvgCheck = `<svg class="ico">
<use href="${icons}#icon-check"></use>
</svg>`;

const markupSvgCart = `<svg class="ico">
<use href="${icons}#icon-basket"></use>
</svg>`;

async function elemFromApi() {
  const products = await apiReq.getPopularProducts();
  const productFirst = products.filter(({ popularity }) => popularity > 3);
  displayProducts(productFirst, popularList);
  addEventListenerToCardButton();
}

function displayProducts(products, container) {
  container.innerHTML = createMarkup(products);
}

const cartState = shopStorage.getAllProducts();

function addEventListenerToCardButton() {
  addEventListenersToBasketButtons();
}

function addEventListenersToBasketButtons() {
  const basketButtons = document.querySelectorAll('.popular-cart-button');

  if (basketButtons) {
    basketButtons.forEach(basketButton => {
      basketButton.addEventListener('click', handleBasketButtonClick);
    });
  }
}

function handleBasketButtonClick(event) {
  const basketButton = event.target.closest('.popular-cart-button');

  if (basketButton) {
    const itemId = basketButton.dataset.itemId;
    handleBasketClick(basketButton, itemId);
    alertSuccess();
  }
}

function handleBasketClick(cartButton, itemId, markupSvgCheck, markupSvgCart) {
  const cartItemIndex = cartState.findIndex(item => item._id === itemId);
  if (cartItemIndex !== -1) {
    Swal.fire({
      title: '',
      text: 'This product has already been added to the cart!',
      icon: 'warning',
      confirmButtonColor: '#6d8434',
    });
  } else {
    shopStorage.addProduct({ _id: itemId, amount: 1 }); // Додаємо товар до локального сховища
  }
  updateBasketIcon(cartButton, true, markupSvgCheck, markupSvgCart);
}

function updateBasketIcon(cartButton, inCart) {
  if (inCart) {
    cartButton.innerHTML = markupSvgCheck;
    const button = document.querySelector('.popular-cart-button');
    button.disabled = true;
  } else {
    cartButton.innerHTML = markupSvgCart;
  }
}

elemFromApi();

function handleClick(e) {
  e.preventDefault();
  const clickedEl = e.target;
  console.log(clickedEl);
  if (
    clickedEl.closest('a') &&
    clickedEl.closest('.popular-products-card-link')
  ) {
    const id = clickedEl.closest('li').dataset.productId;
    openModal(id).catch(error => {
      console.error('Помилка при отриманні продукта за айді:', error.message);
    });
  }
}

function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, img, category, size, popularity }) => `
            <li class="popular-product-item" data-product-id='${_id}'>
<div class="popular-con">
<div class="product-image-container" data-product-id="${_id}"> <img src="${img}" alt="" class="product-image"></div>
<div class="product-text">
<h3" class="product-name">${name}</h3>
<p class="product margin">
Category: <span class="category-value">${category.replace('_', ' ')}</span><br>
Size: <span class="size-value">${size}</span><br>
Popularity: <span class="popularity-value">${popularity}</span>
</p>
</div>
</div>
<button class="add-to-cart-btn cart-btn" data-product-id="${_id}">
<svg class="ico icon-on">
<use href="${icons}#icon-basket"></use>
</svg>
</button>
            </li>
            `
    )
    .join('');
}
// import {  } from './filter';
// import { OpenModal } from './modal';
// import sprite from '../img/symbol-defs.svg';
// import {  } from './header';

// Оновлення кнопок при завантаженні сторінки
// document.addEventListener('DOMContentLoaded', function () {

// cartButtonStyle();

// const savedProducts = JSON.parse(localStorage.getItem('popularProducts'));
// let localProducts;

// if (savedProducts && savedProducts.length >= 5) {
// localProducts = savedProducts.slice(0, 5);
// } else {
// localProducts = [];
// }
// if (localProducts.length > 0) {
// createAndAppendProductElements(localProducts);
// addFunctionalityToElements();
// } else {
// fetchProductsFromServer();
// }
// });

// Запит на сервер для отримання списку популярних продуктів
// async function fetchProductsFromServer() {
// const request = new RequestToTheServer('products/popular', '', 1, 5);

// try {
// const fetchedData = await request.fetchBreeds();
//  saveProductsToLocalStorage(fetchedData);
//  const productsToDisplay = fetchedData.slice(0, 5);
//  createAndAppendProductElements(productsToDisplay);
//  addFunctionalityToElements();
// } catch (error) {
// console.error('Error:', error);
// }
// }

// function addFunctionalityToElements() {
// cartButtonStyle();
// }
// const productsContainer = document.querySelector('.products-container');

// function saveProductsToLocalStorage(products) {

// Збереження продуктів в локальне сховище
// localStorage.setItem('popularProducts', JSON.stringify(products));
// }

// function createAndAppendProductElements(products) {
// products.forEach(product => {

// Створення контейнеру для продукту
// const productTemplate = document.createElement('div');
// productTemplate.classList.add('product-template');

// Створення розмітки продукту
// productTemplate.innerHTML = `
// <div class="popular-con">
// <div class="product-image-container" data-product-id="${
// product._id
// }"> <img src="${product.img}" alt="" class="product-image"></div>
// <div class="product-text">
// <h3" class="product-name">${product.name}</h3>
// <p class="product margin">
// Category: <span class="category-value">${product.category.replace(
//  '_',
//  ' '
// )}</span><br>
// Size: <span class="size-value">${product.size}</span><br>
// Popularity: <span class="popularity-value">${
// product.popularity
// }</span>
// </p>
// </div>
// </div>
// <button class="add-to-cart-btn cart-btn" data-product-id="${product._id}">
// <svg class="ico icon-on">
// <use href="${sprite}#icon-basket"></use>
// </svg>
// </button>
// `;

// Налаштування події для модалки
// productsContainer.appendChild(productTemplate);
// const addToCartImg = productTemplate.querySelector(
// '.product-image-container'
// );
// addToCartImg.addEventListener('click', function () {
// OpenModal(product._id);
// });

// const addToCartBtn = productTemplate.querySelector('.add-to-cart-btn');
// addToCartBtn.onclick = function () {
// addToCart(product);
// };
// });
// }

// Функція для додавання або видалення товару з кошика
// function addToCart(product) {
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// const existingProductIndex = cart.findIndex(
// item => item && item._id === product._id
// );
// if (existingProductIndex !== -1) {
// } else {
// cart.push(product);
// }

// localStorage.setItem('cart', JSON.stringify(cart));
// localStorageCheckCart();
// cartButtonStyle();
// }
