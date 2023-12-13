import { getAllProducts } from './local-storage-interface.js';
import icons from '../img/symbol-defs.svg';

const markupSvgCheck = `<svg class="cart-icon" width="18" height="18">
<use href="${icons}#icon-check"></use>
</svg>`;

const markupSvgCart = `<svg class="cart-icon" width="18" height="18">
<use href="${icons}#icon-basket"></use>
</svg>`;

const dataFromLocalStorage = getAllProducts();

export function createMarkupPopular(arr) {
  return arr
    .map(
      ({ _id, name, img, category, size, popularity }) => `
      <li class="popular-product-item" data-product-id='${_id}'>
        <div class="popular-con">

          <div class="product-image-container" data-product-id="${_id}">
            <img src="${img}" alt="" class="product-image" width="56" height="56">

          </div>
          <div class="popular-left">
            <div class="product-text-pop">
              <h3 class="product-name">${name}</h3>
            </div>
            <p class="product margin">
              Category: <span class="category-value">${category.replace(
                '_',
                ' '
              )}</span><br>
              Size: <span class="size-value">${size}</span>
              Popularity: <span class="popularity-value"> ${popularity}</span>
            </p>
          </div>
          <button class="cart-button-pop cart-button" type="button" data-item-id="${_id}" data-in-cart="false">
          ${
            dataFromLocalStorage.some(item => item._id === _id)
              ? markupSvgCheck
              : markupSvgCart
          }
          </button>
        </div>
      </li>
      `
    )
    .join('');
}
