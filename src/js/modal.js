import icons from '../img/symbol-defs.svg'; // імпортую свг собі в проект
import {getAllProducts,addProductOnClickButton,removeProductOnClickButton} from './local-storage-interface'
import alertPopUp from './alert';
import {updateBasketIconByProductId} from './products_list';
import { updateCartCounter } from './header.js';

const modal = document.querySelector('.modal-prod-wrapper');

export async function openModal(product) {
  modal.classList.add('modal-active');
  modal.classList.add('loader'); // тут создам cпинер через css
  modal.classList.remove('loader'); // тут ,буду очищать cпинер через css
  renderModal(product);
  syncAddProductButtonStatus(product);
}

//! Функція яка зберігає стан кнопки залежно від стану корзини
function syncAddProductButtonStatus(productDetails) {
  const addBtnText = document.querySelector('.modal-prod-add-text');
  const productId = productDetails._id;
  const currentCart = getAllProducts();
  if (currentCart.some(item => item._id === productId)) {
    addBtnText.textContent = 'Remove from';
  } else {
    addBtnText.textContent = 'Add to';
  }
}

//! Функція рендеру розмітки
export function renderModal(productDetails) {
  try {
    modal.classList.add('modal-active');
    document.body.classList.add('stop-scroll');

    modal.innerHTML = `
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${icons}#icon-ion_close-sharp"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">
      <img class="modal-prod-img" src="${productDetails.img}" alt="${productDetails.name}" />
  </div>
  <div class="modal-prod-name-wrap">
  <p class="modal-prod-name">${productDetails.name}</p>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <p class="modal-prod-text">Category: <span>${productDetails.category.replace(/_/g, ' ')}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Size: <span>${productDetails.size}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Popularity: <span>${productDetails.popularity}</span></p>
    </li>
  </ul>
  <p class="modal-prod-desc">${productDetails.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${productDetails.price}</p>
  <button class="modal-prod-add-btn" >
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${icons}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `;

    const addBtn = document.querySelector('.modal-prod-add-btn');
    addBtn.addEventListener('click', () => addOrRemoveProductToBasket(productDetails));

    const closeBtn = document.querySelector('.modal-prod-close-btn');
    closeBtn.addEventListener('click', () => closeModal());

    // Додаю слухачі подій
    window.addEventListener('click', closeModalOnWindowClick);
    window.addEventListener('keydown', closeModalOnEsc);
  } catch (error) {
    console.error(error);
  }
}

export function addOrRemoveProductToBasket(productDetails) {
  const productId = productDetails._id;
  //
  const allProducts = getAllProducts();
  const isProductInBasket = allProducts.some(
    item => item._id=== productId
  );
  const addBtnText = document.querySelector('.modal-prod-add-text');
  if (!isProductInBasket) {
    addProductOnClickButton({ _id: productId, amount: 1 })
    alertPopUp()
    addBtnText.textContent = 'Remove from';
    updateBasketIconByProductId(productId,true)

  } else {
    removeProductOnClickButton(productId)
    alertPopUp('The product has been removed from the basket!','info')
    addBtnText.textContent = 'Add to';
    updateBasketIconByProductId(productId,false)
  }
  updateCartCounter();
}

//! Функція закриття модалки при кліку на хрестик

function closeModal() {
  document.body.classList.remove('stop-scroll');
  modal.classList.remove('modal-active');
  modal.innerHTML = '';

  // Видаляю слухачі подій
  window.removeEventListener('click', closeModalOnWindowClick);
  window.removeEventListener('keydown', closeModalOnEsc);
}

//! Закриття модалки при кліку по бекдропу

function closeModalOnWindowClick(e) {
  if (e.target === modal) {
    closeModal();
  }
}

//! Закриття модалки при кліку на кнопку ESC

function closeModalOnEsc(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
}
