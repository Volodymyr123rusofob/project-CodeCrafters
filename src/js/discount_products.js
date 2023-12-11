import { openModal } from './modal';
import ApiService from './requests';
import icons from '../img/symbol-defs.svg';
import Swal from 'sweetalert2';
import alertSuccess from './alert';
import { ShopStorage } from './local-storage';

const popularList = document.querySelector('.js-discount-list');
popularList.addEventListener('click', handleClick);

const apiReq = new ApiService();
const imgPerPage = 2;

const shopStorage = new ShopStorage('cart');

const markupSvgCheck = `<svg class="ico">
<use href="${icons}#icon-check"></use>
</svg>`;

const markupSvgCart = `<svg class="ico">
<use href="${icons}#icon-basket"></use>
</svg>`;

async function elemFromApi() {
  const products = await apiReq.getDiscountedProducts();
  displayLimitedProducts(products.slice(0, imgPerPage), popularList)
  addEventListenerToCardButton();
}

function displayLimitedProducts(products, container) {
  container.innerHTML = createMarkup(products);
}

const cartState = shopStorage.getAllProducts();

function addEventListenerToCardButton() {
  addEventListenersToBasketButtons();
}

function addEventListenersToBasketButtons() {
  const basketButtons = document.querySelectorAll('.discount-cart-js');

  if (basketButtons) {
    basketButtons.forEach(basketButton => {
      basketButton.addEventListener('click', handleBasketButtonClick);
    });
  }
}

function handleBasketButtonClick(event) {
  const basketButton = event.target.closest('.discount-cart-js');

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
    const button = document.querySelector('.discount-cart-js');
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
        ({
          _id,
          name,
          img,
          price,
        }) => `<div class="discount-card">
                  <div class="discount-logo">
                    <svg class="logo">
                    </svg>
                  </div>
                  <div class="discount-card-image">
                    <img src="${img}" alt="${name}" data-id=${_id} width="114" height="'114" />
                  </div>
                  <div class="discount-card-info">
                    <div class="discount-card-name">
                      <p class="discount-card-text">${name}</p>
                    </div>
                    <div class="discount-card-price">
                      <p class="discount-card-text">$${price}</p>
                      <button class="discount-card-button" type="button" data-id=${_id}>
                      <svg class="cart-icon-pop" width="18" height="18">
                      <use href="${icons}#icon-basket"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
              </div>`
      )
      .join('');
  }
