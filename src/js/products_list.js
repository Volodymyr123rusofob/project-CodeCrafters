import { openModal } from './modal';
import ApiService from './requests';
import createMarkup from './markup_products_list';
import icons from '../img/symbol-defs.svg';
import alertPopUp from './alert';
import {
  getAllProducts,
  addProductOnClickButton,
} from './local-storage-interface';
import { updateCartCounter } from './header.js';

const productsList = document.querySelector('.js-products-list');
productsList.addEventListener('click', onClickCart);

const apiService = new ApiService();
const itemsPerPage = 9;
let productsOnePage;
let basketButtons;

const markupSvgCheck = `<svg class="cart-icon" width="18" height="18">
<use href="${icons}#icon-check"></use>
</svg>`;

const markupSvgCart = `<svg class="cart-icon" width="18" height="18">
<use href="${icons}#icon-basket"></use>
</svg>`;

async function prod() {
  const allProducts = await apiService.getAllProducts();
  const productsOnePage = allProducts.results.slice(0, itemsPerPage);

  displayProducts(productsOnePage, productsList);
  addEventListenersToBasketButtons();
  basketButtons.forEach(button => {
    const isProductInBasket = getAllProducts().some(
      item => item._id === button.dataset.itemId
    );
    updateBasketIcon(button, isProductInBasket);
  });
}

export function displayProducts(products, container) {
  productsOnePage = products;
  container.innerHTML = createMarkup(products);
}

const cartState = getAllProducts();

// function addEventListenerToCardButton() {
//   addEventListenersToBasketButtons();
// }

export function addEventListenersToBasketButtons() {
  basketButtons = document.querySelectorAll('.cart-button');
  if (basketButtons) {
    basketButtons.forEach(basketButton => {
      basketButton.addEventListener('click', handleBasketButtonClick);
    });
  }
}

function handleBasketButtonClick(event) {
  const basketButton = event.target.closest('.cart-button');

  if (basketButton) {
    const itemId = basketButton.dataset.itemId;
    const { message, icon } = handleBasketClick(basketButton, itemId);
    alertPopUp(message, icon);
    updateCartCounter();
  }
}

export function handleBasketClick(cartButton, itemId) {
  const cartItemIndex = cartState.findIndex(item => item._id === itemId);
  let message, icon;
  if (cartItemIndex !== -1) {
    message = 'This product has already been added to the cart!';
    icon = 'warning';
  } else {
    addProductOnClickButton({ _id: itemId, amount: 1 }); // Додаємо товар до локального сховища
  }
  updateBasketIcon(cartButton, true);
  return { message, icon };
}

export function updateBasketIconByProductId(productId, inCart) {
  basketButtons.forEach(button => {
    if (button.dataset.itemId === productId) {
      updateBasketIcon(button, inCart);
    }
  });
}

function updateBasketIcon(cartButton, inCart) {
  const button = document.querySelector('.cart-button');
  if (inCart) {
    cartButton.innerHTML = markupSvgCheck;
    button.disabled = true;
  } else {
    cartButton.innerHTML = markupSvgCart;
    button.disabled = false;
  }
}

prod();

function onClickCart(e) {
  e.preventDefault();
  const clickedEl = e.target;
  console.log(clickedEl);
  if (clickedEl.closest('li') && clickedEl.closest('.product-item')) {
    const id = clickedEl.closest('li').dataset.productId;
    const product = productsOnePage.find(item => item._id === id);
    openModal(product).catch(error => {
      console.error('Помилка при отриманні продукта за айді:', error.message);
    });
  }
}