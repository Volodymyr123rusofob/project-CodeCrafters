import icons from '../img/symbol-defs.svg';

export default function createMarkup(arr) {
  return arr
    .map(
      ({ _id, name, img, category, price, size, popularity }) => `
            <li class="product-item" data-product-id='${_id}'>
              <div class="product-img-container">
                <a class="products-card-link" href="">
                  <img src="${img}" alt="${name}" width="140" height="140" class="product-img">
                </a>
              </div>
                <a class="products-card-link" href="">
                  <h3 class="product-title">${name}</h3>
                </a>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${category.replace(
                  /_/g,
                  ' '
                )}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${size}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${popularity}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${price}</p>
                <button class="cart-button cart-button-css" type="button" data-item-id="${_id}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${icons}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `
    )
    .join('');
}
