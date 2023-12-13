import icons from '../img/symbol-defs.svg';

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
          <button class="cart-pr-pop cart-button-pop" type="button" data-product-id="${_id}" data-in-cart="false">
            <svg class="cart-icon-pop" width="12" height="12">
              <use href="${icons}#icon-basket"></use>
            </svg>
          </button>
        </div>
      </li>
      `
    )
    .join('');
}
