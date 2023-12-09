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
       // <div>
           // <div data-product-id="${
            // product._id
            // }"> <img src="${product.img}" alt=""></div>
           // <div>
               // <h3">${product.name}</h3>
              // <p>
                   // Category: <span>${product.category.replace(
                    //  '_',
                    //  ' '
                   // )}</span><br>
                   // Size: <span>${product.size}</span><br>
                   // Popularity: <span>${
                   // product.popularity
                   // }</span>
               // </p>
           // </div>
       // </div>
      // <button data-product-id="${product._id}">
      // <svg>
      // <use href="${sprite}#icon-basket"></use>
   // </svg>
       // </button>
     // `;

  // Налаштування події для модалки
    // productsContainer.appendChild(productTemplate);
    // const addToCartImg = productTemplate.querySelector(
      // 'тут селектор'
    // );
    // addToCartImg.addEventListener('click', function () {
    // OpenModal(product._id);
        // });
  
    // const addToCartBtn = productTemplate.querySelector('тут селектор');
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
  
