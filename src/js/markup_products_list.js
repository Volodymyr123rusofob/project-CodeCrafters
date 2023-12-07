export default function createMarkup(arr) {
    return arr
        .map(
            ({
                name,
                img,
                category,
                price,
                size,
                popularit,
            }) => `
            <li class="product-item">
              <div class="product-img-container">
                <img src="${img}" alt="${name}" width="140" height="140" class="product-img">
              </div>
              <h3 class="product-title">${name}</h3>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value">${category}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value">${size}</span></p>
                <p class="product-parameter">Popularity: <span class="span-parameter-value">${popularit}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">${price}</p>
                <button class="cart-button" type="submit">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="./img/symbol-defs.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `
    )
    .join("");
}