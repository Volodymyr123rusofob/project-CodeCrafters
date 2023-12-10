// import { openModal } from './modal';
// import ApiService from './requests'; 
// import icons from '../img/symbol-defs.svg'; 
// import Swal from 'sweetalert2'; 
// import alertSuccess from './alert'; 
// import { ShopStorage } from './local-storage'; 
// import axios from 'axios'; 

// const discountEl = document.querySelector('.discount-container');
// const CART_KEY = 'cart';

// let products = [];
// let addedProducts = [];

// // Перевірка чи клікнуто на зображення для відкривання модального вікна
// discountEl.addEventListener('click', event => {
//   const imageEl = event.target.closest('.discount-card-image img');
//   if (imageEl !== null) {
//     const productId = imageEl.dataset.id;
//     openModal(productId); // Виклик функції openModal з параметром productId
//   } else {
//     return;
//   }
// });

// // Функція для додавання продукту до кошика при кліку
// function addToCart(product) {
//   addedProducts = JSON.parse(localStorage.getItem(CART_KEY)) || [];

//   const existingProduct = addedProducts.find(p => p._id === product._id);

//   if (!existingProduct) {
//     addedProducts.push(product);
//     localStorage.setItem(CART_KEY, JSON.stringify(addedProducts));
//     renderProducts();
//   }
// }

// // Функція відображення продуктів на сторінці
// function renderProducts() {
//   discountEl.innerHTML = productsTemplate(products);
//   attachButtonClickHandlers();
// }

// // Функція створення розмітки для продуктів
// function productsTemplate(products) {
//   return products.map(({ _id, name, img, price }) => `
//     <div class="discount-card" data-product-id="${_id}">
//       <div class="discount-logo">
//         <span class="logo">
//           <span class="icon-discount" width="60" height="60"></span>
//         </span>
//       </div>
//       <div class="discount-card-image">
//         <img src="${img}" alt="${name}" data-id="${_id}" width="114" height="114" />
//       </div>
//       <div class="discount-card-info">
//         <div class="discount-card-name">
//           <p class="discount-card-text">${name}</p>
//         </div>
//         <div class="discount-card-price">
//           <p class="discount-card-text">$${price}</p>
//           <button class="discount-card-button" type="button" data-id="${_id}">
//             <span class="icon-discount"></span>
//           </button>
//         </div>
//       </div>
//     </div>
//   `).join('');
// }

// // Для прикріплення обробника подій до кнопки
// function attachButtonClickHandlers() {
//   const cartButtons = document.querySelectorAll('.discount-card-button');
//   cartButtons.forEach(button => {
//     button.addEventListener('click', handleButtonClick);
//   });
// }

// // Функція обробника події при кліку на кнопку
// export function handleButtonClick(ev) {
//   const productId = ev.currentTarget.dataset.id || ev.currentTarget.getAttribute('id');
//   const selectedProduct = products.find(p => p._id === productId);
//   if (selectedProduct) {
//     addToCart(selectedProduct);
//   } else {
//     return;
//   }
// }

// // Запит для отримання продуктів зі знижками
// async function init() {
//   try {
//     const res = await axios.get('https://food-boutique.b.goit.study/api/products/discount');
//     products = res.data;
//     addedProducts = JSON.parse(localStorage.getItem(CART_KEY)) || [];
//     renderProducts();
//   } catch (error) {
//     console.error('Error fetching discount products:', error.message);
//   }
// }

// init(); 
