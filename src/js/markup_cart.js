
export const getEmptyCartMarkup = () =>
    `
      <picture>
          <source
            srcset="
              ./img/empty_cart/empty-cart-desktop-1x.png 1x,
              ./img/empty_cart/empty-cart-desktop-2x.png 2x
            "
            media="
            (min-width: 1440px)"
          />
          <source
            srcset="
              ./img/empty_cart/empty-cart-tab-1x.png 1x,
              ./img/empty_cart/empty-cart-tab-2x.png 2x
            "
            media="
            (min-width: 768px)"
          />
          <source
            srcset="
              ./img/empty_cart/empty-cart-mob-1x.png 1x,
              ./img/empty_cart/empty-cart-mob-2x.png 2x
            "
            media="
            (min-width: 375px)"
          />
          <img
            src="./img/empty_cart/empty-cart-mob-1x.png"
            alt="Empty Cart Image"
            class="empty-cart-image"
          />
        </picture>
        <h2 class="empty-cart-title">
          Your basket is <span class="empty-cart-title-span">empty...</span>
        </h2>
        <p class="empty-cart-text">
          Go to the main page to select your favorite products and add them to
          the cart.
        </p>
    `;



export const getCartMarkup = (products) =>
    `
     <div class="delete-all">
    <button type="button" class="btn-delete-all"> Delete All 
      <span class="icon-close-sharp">
        <svg class="icon-basket" width="24" height="24">
          <use href="/img/symbol-defs.svg#icon-ion_close-sharp"></use>
        </svg>
      </span>
    </button>
  </div>
  <ul class="cart-products-list">
    ${products.map(({ _id, name, img, category, size, price }) => `
      <li class="cart-product-item" data-product-id="${_id}">
        <div class="cart-product-container">
          <div class="cart-product-img-container">
            <img src="${img}" alt="${name}" width="64" height="64" class="cart-product-img">
          </div>
          <div class="cart-product-parameter-container">
            <h2 class="cart-product-title">${name}</h2>
            <p class="cart-product-parameter">Category: <span class="cart-span-parameter-value">${category ? category.replace(/_/g, ' ') : ''}</span></p>
            <p class="cart-product-parameter">Size: <span class="cart-span-parameter-value">${size}</span></p>
            <p class="price">$${price}</p>
          </div>
          <div class="cart-delete">
            <button type="button" class="cart-btn-delete">
              <span class="cart-icon-close-sharp">
                <svg class="icon-basket" width="24" height="24">
                  <use href="/img/symbol-defs.svg#icon-ion_close-sharp"></use>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </li>`).join('')}
  </ul>
`;

export const getcheckoutMarkup = () =>`
     <h2 class="checkout-title">Your order</h2>
      <div class="checkout-total-wrap">
        <p class="checkout-text">Total</p>
        <p class="checkout-total">$0.00</p>
      </div>

      <div class="checkout-input-wrap">
        <label for="checkoutEmail"></label>
        <input
          class="checkout-input-email"
          type="email"
          id="checkoutEmail"
          name="email"
          placeholder="Mail:"
          required
        />
        <button class="checkout-button" type="submit">Checkout</button>
        `;
