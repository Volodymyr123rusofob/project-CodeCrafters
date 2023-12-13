import { openModal } from './modal';
import ApiService from './requests';
import icons from '../img/symbol-defs.svg';
import { createMarkupPopular } from './markup-popular';
import { addEventListenersToBasketButtons } from './products_list';
import { getAllProducts } from './local-storage-interface';

const popularList = document.querySelector('.js-popular-list');
popularList.addEventListener('click', onClickCart);

const apiReq = new ApiService();
const imgPerPage = 5;
let cartState = [];
let productsOnePage;

async function elemFromApi() {
  const products = await apiReq.getPopularProducts();
  productsOnePage = products.slice(0, imgPerPage);
  displayProducts(productsOnePage, popularList);
  addEventListenersToBasketButtons();
  cartState.forEach(item => {
    updateBasketIconByProductId(
      item._id,
      getAllProducts().some(product => product._id === item._id)
    );
  });
}
elemFromApi();
function updateBasketIconByProductId(productId, inCart) {
  basketButtons.forEach(button => {
    if (button.dataset.itemId === productId) {
      updateBasketIcon(button, inCart);
    }
  });
}

function updateBasketIcon(cartButton, inCart) {
  const button = document.querySelector('.cart-button');
  if (inCart) {
    cartButton.innerHTML = `<svg class="cart-icon-pop">
  <use href="${icons}#icon-check" width="12" height="12"></use>
  </svg>`;
    button.disabled = true;
  } else {
    cartButton.innerHTML = `<svg class="cart-icon-pop">
  <use href="${icons}#icon-basket" width="12" height="12"></use>
  </svg>`;
    button.disabled = false;
  }
}

function displayProducts(productsOnePage, container) {
  container.innerHTML = createMarkupPopular(productsOnePage);
}
function onClickCart(e) {
  e.preventDefault();
  const clickedEl = e.target;
  console.log(clickedEl);
  if (clickedEl.closest('li') && clickedEl.closest('.popular-product-item')) {
    const id = clickedEl.closest('li').dataset.productId;
    const product = productsOnePage.find(item => item._id === id);
    openModal(product).catch(error => {
      console.error('Помилка при отриманні продукта за айді:', error.message);
    });
  }
}
