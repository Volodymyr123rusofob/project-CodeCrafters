import { openModal } from './modal';
import ApiService from './requests';
import createMarkup from './markup_products_list';

const productsList = document.querySelector('.js-products-list');
productsList.addEventListener('click', onClickCart);

const apiService = new ApiService();
const itemsPerPage = 6;

async function prod() {
  const allProducts = await apiService.getAllProducts();
  const productsOnePage = allProducts.results.slice(0, itemsPerPage);
  displayProducts(productsOnePage, productsList);
}

prod();

function displayProducts(products, container) {
  container.innerHTML = createMarkup(products);
  console.log(products);
}

const basketButton = document.querySelector('.cart-button');
basketButton.addEventListener('click', onClickBasket);

function onClickCart(e) {
  e.preventDefault();
  const clickedEl = e.target;
  if (clickedEl.closest('a') && clickedEl.closest('.products-card-link')) {
    const id = clickedEl.closest('li').dataset.productId;
    openModal(id).catch(error => {
      console.error('Помилка при отриманні продукта за айді:', error.message);
    });
  }
}

function onClickBasket(event) {
  const targetElement = event.target;
  console.log(event.target);
  const cartButton = targetElement.closest('.cart-button');
  console.log(cartButton);
  if (cartButton) {
    const itemId = cartButton.dataset.itemId;
    console.log(itemId);
    handleBasketClick(cartButton, itemId);
  }
}

function handleBasketClick(cartButton) {
  const inCart = JSON.parse(cartButton.dataset.inCart);
  console.log(inCart);
  // if (!inCart) {
  // const isItemInBasket = checkIfItemInBasket(itemId);
  // if (isItemInBasket) {
  //     alert('The product already in the cart.')
  //     return
  // }
  // addToBasket(itemId);
  // alert('The product has been added to the cart.')
  //}

  updateBasketIcon(cartButton, !inCart);
}

// function checkIfItemInBasket(itemId) {
//     const currentBasket = JSON.parse(localStorage.getItem('basket')) || {};
//     return currentBasket[itemID] !== undefined;
// }

// function addToBasket(itemId){
//     const currentBasket = JSON.parse(localStorage.getItem('basket')) || {};
//     console.log(currentBasket)
//     currentBasket[itemId] = {
//         name: selectedProduct.name,
//         price: selectedProduct.price,
//         quantity: 1,
//     }
//     localStorage.setItem('basket', JSON.stringify(currentBasket));
// }

function updateBasketIcon(cartButton, inCart) {
  if (inCart) {
    cartButton.innerHTML = `<svg class="cart-icon" width="18" height="18">
                    <use href="../img/symbol-defs.svg#icon-check"></use>
                  </svg>`;
  } else {
    cartButton.innerHTML = `<svg class="cart-icon" width="18" height="18">
                    <use href="../img/symbol-defs.svg#icon-basket"></use>
                  </svg>`;
  }
}
