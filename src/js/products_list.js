import { openModal } from './modal';
import ApiService from './requests';
import createMarkup from './markup_products_list';
import icons from '../img/symbol-defs.svg';
import Swal from 'sweetalert2';
import alertSuccess from './alert';

const productsList = document.querySelector('.js-products-list');
productsList.addEventListener('click', onClickCart);

const apiService = new ApiService();
const itemsPerPage = 6;

async function prod() {
  const allProducts = await apiService.getAllProducts();
  const productsOnePage = allProducts.results.slice(0, itemsPerPage);

  displayProducts(productsOnePage, productsList);
  addEventListenerToCardButton();
}

export function displayProducts(products, container) {
  container.innerHTML = createMarkup(products);
}

// об'єкт для збереження стану кошика

const cartState = JSON.parse(localStorage.getItem('cart')) || [];

function addEventListenerToCardButton() {
  addEventListenersToBasketButtons();
}

function addEventListenersToBasketButtons() {
  const basketButtons = document.querySelectorAll('.cart-button');
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
    handleBasketClick(basketButton, itemId);
      // Swal.fire({
      //     title: "",
      //     text: "The product has been added to the cart!",
      //     icon: "success",
      //     confirmButtonColor: "#6d8434",
      //   });
    alertSuccess();
  }
}

export function handleBasketClick(cartButton, itemId) {
  const cartItemIndex = cartState.findIndex(item => item.productId === itemId);

  if (cartItemIndex !== -1) {

    // Товар вже є в кошику, збільшуємо кількість
    //cartState[cartItemIndex].quantity += 1;
    //alert('Цей продукт вже доданий до кошика!');

      Swal.fire({
          title: "",
          text: "This product has already been added to the cart!",
          icon: "warning",
          confirmButtonColor: "#6d8434",
      });
    
  } else {
    // Товару не кошику, додаємо його
    cartState.push({ productId: itemId, quantity: 1 });
  }

  updateBasketIcon(cartButton, true);

  // Оновлюємо localStorage з урахуванням всього кошика
  localStorage.setItem('cart', JSON.stringify(cartState));
}

function updateBasketIcon(cartButton, inCart) {
  if (inCart) {
    cartButton.innerHTML = `<svg class="cart-icon" width="18" height="18">
        <use href="${icons}#icon-check"></use>
        </svg>`;
    const button = document.querySelector(".cart-button");
    button.disabled = true;

  } else {
    cartButton.innerHTML = `<svg class="cart-icon" width="18" height="18">
        <use href="${icons}#icon-basket"></use>
        </svg>`;
    
  }
}

prod();

function onClickCart(e) {
  e.preventDefault();
  const clickedEl = e.target;
  console.log(clickedEl);
  if (clickedEl.closest('a') && clickedEl.closest('.products-card-link')) {
    const id = clickedEl.closest('li').dataset.productId;
    openModal(id).catch(error => {
      console.error('Помилка при отриманні продукта за айді:', error.message);
    });
  }
}
