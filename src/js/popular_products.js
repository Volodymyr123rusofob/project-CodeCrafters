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
  
