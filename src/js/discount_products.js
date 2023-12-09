// import sprite from '../img/symbol-defs.svg';
// import {  } from './filter';
// import {  } from './header';
// import { openModal } from './modal';

// Функція додавання товару до кошика

// const discountEl = document.querySelector('.discount-container');
// const CART_KEY = 'cart';

// let products = [];
// let addedProducts = [];

// function addToCart(product) {
//   addedProducts = JSON.parse(localStorage.getItem(CART_KEY)) || [];

//   const existingProduct = addedProducts.find(p => p._id === product._id);

//   if (!existingProduct) {
//     addedProducts.push(product);
//     localStorage.setItem(CART_KEY, JSON.stringify(addedProducts));
//     renderProducts();
//   }
// }

// Функція перевірки продуктів у кошику

// function isProductAlreadyInCart(id) {
    // const addedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    // return addedProducts.some(product => product._id === id);
 // }

// Функція відображення продуктів на сторінці

// function renderProducts() {
   // discountEl.innerHTML = productsTemplate(products);
   // attachButtonClickHandlers();
 // }

 // Функція для створення масиву з 2х продуктів
// function productsTemplate(products) {
   // return products.slice(0, 2).map(productTemplate).join('');
 // }

// Створення розмітки

// function productTemplate(product) {
   // const { _id, name, img, price } = product;
   // return `<div>
              // <div>
                // <svg>
                   // <use href="${sprite}#icon-discount" width="60" height="60"></use>
                 // </svg>
               // </div>
               // <div>
               // <img src="${img}" alt="${name}" data-id=${_id} width="114" height="'114" />
               // </div>
              // <div>
                // <div>
                  // <p>${name}</p>
                // </div>
                // <div>
                  // <p>$${price}</p>
                  // <button type="button" data-id=${_id}>
                     // <svg class="">
                      //  <use href="${sprite}#${
     // isProductAlreadyInCart(_id)
       // ? 'icon-check'
       // : 'icon-discount'
   // }"></use>
                    //  </svg>
                  // </button>
                //  </div>
              //  </div>
          // </div>`;
 // }

// Перевірка чи клікнуто на зображення для відкривання модального вікна

// discountEl.addEventListener('click', event => {
   // const imageEl = event.target.closest('.тут селектор img');
   // if (imageEl !== null) {
    //  const productId = imageEl.dataset.id;
    //  OpenModal(productId);
   // } else {
     // return;
   // }
// });

// Функція для додавання продукту до кошика при кліку

// export function handleButtonClick(ev) {
   // const productId = ev.currentTarget.dataset.id || ev.currentTarget.getAttribute('id');
   // const selectedProduct = products.find(p => p._id === productId);
   // if(selectedProduct){
   // addToCart(selectedProduct);
   // renderCards();
   // localStorageCheckCart();
 // } else { 
   // return ;
 // }
 // }

// Для прикріплення обробника подій до кнопки

 // function attachButtonClickHandlers() {
   // const cartButtons = document.querySelectorAll('.тут селектор');
   // cartButtons.forEach(button => {
    // button.addEventListener('click', handleButtonClick);
   // });
 // }

// Запит для отримання продуктів зі знижками

// async function init() {
   // try {
    // const res = await axios.get(
    // 'https://food-boutique.b.goit.study/api/products/discount'
    //  );
    //  products = res.data;
    //  addedProducts = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    //  renderProducts();
    // } catch (error) {
    //  console.error('Error fetching discount products:', error.message);
   // }
 // }
  
//  init();