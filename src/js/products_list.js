import { openModal } from './modal';
import ApiService from './requests';
import createMarkup from './markup_products_list';
import icons from '../img/symbol-defs.svg';
import Swal from 'sweetalert2';
import alertSuccess from './alert';
import { ShopStorage } from './local-storage';

const productsList = document.querySelector('.js-products-list');
productsList.addEventListener('click', onClickCart);

const apiService = new ApiService();
const itemsPerPage = 6;

const shopStorage = new ShopStorage('cart');

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
    addEventListenerToCardButton();
}

export function displayProducts(products, container) {
    container.innerHTML = createMarkup(products);
}

const cartState = shopStorage.getAllProducts();

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
    alertSuccess();
  }
}

export function handleBasketClick(cartButton, itemId, markupSvgCheck, markupSvgCart) {
    const cartItemIndex = cartState.findIndex(item => item._id === itemId);
    if (cartItemIndex !== -1) {
        Swal.fire({
        title: "",
        text: "This product has already been added to the cart!",
        icon: "warning",
        confirmButtonColor: "#6d8434",
        });
    } else {
        shopStorage.addProduct({ _id: itemId, amount: 1 }); // Додаємо товар до локального сховища
    }
    updateBasketIcon(cartButton, true, markupSvgCheck, markupSvgCart);
}

function updateBasketIcon(cartButton, inCart) {
    if (inCart) {
      cartButton.innerHTML = markupSvgCheck;
      const button = document.querySelector(".cart-button");
      button.disabled = true;
    } else {
      cartButton.innerHTML = markupSvgCart;
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
