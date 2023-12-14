import icons from '../img/symbol-defs.svg';
import imgecd_1x from '../img/empty_cart/empty-cart-desktop-1x.png';
import imgecd_2x from '../img/empty_cart/empty-cart-desktop-2x.png';
import imgect_1x from '../img/empty_cart/empty-cart-tab-1x.png';
import imgect_2x from '../img/empty_cart/empty-cart-tab-2x.png';
import imgecm_1x from '../img/empty_cart/empty-cart-mob-1x.png';
import imgecm_2x from '../img/empty_cart/empty-cart-mob-2x.png';

export const getEmptyCartMarkup = () =>
  `<div class="empty-cart">
      <div class="empty-picture">
      <picture>
          <source
            srcset="
              ${imgecd_1x} 1x,
              ${imgecd_2x} 2x
            "
            media="
            (min-width: 1440px)"
          />
          <source
            srcset="
              ${imgect_1x} 1x,
              ${imgect_2x} 2x
            "
            media="
            (min-width: 768px)"
          />
          <source
            srcset="
             ${imgecm_1x} 1x,
              ${imgecm_2x} 2x
            "
            media="
            (min-width: 375px)"
          />
          <img
            src="/img/empty_cart/empty-cart-mob-1x.png"
            alt="Empty Cart Image"
            class="empty-cart-image"
            loading="lazy"
            width="132"
            height="114";
          />
        </picture>
        </div>
        <div class="empty-text">
        <h2 class="empty-cart-title">
          Your basket is <span class="empty-cart-title-span">empty...</span>
        </h2>
        <p class="empty-cart-text">
          Go to the main page to select your favorite products and add them to
          the cart.
        </p></div></div>
    `;

export const getCartMarkup = products =>
  `
  
     <div class="delete-all">
    <button type="button" class="btn-delete-all" aria-label="Delete All"> Delete All 
      <span class="icon-close">
        <svg class="btn-x" width="24" height="24">
          <use href="${icons}#icon-ion_close-sharp"></use>
        </svg>
      </span>
    </button>
  </div>
  <ul class="cart-products-list">
    ${products
      .map(
        ({ _id, name, img, category, size, price }) => `
      <li class="cart-product-item" data-product-id="${_id}">
        <div class="cart-product-container">
          <div class="cart-product-img-container">
            <img src="${img}" alt="${name}" width="64" height="64" class="cart-product-img" loading="lazy">
          </div>
          <div class="cart-product-parameter-container">
            <h2 class="cart-product-title">${name}</h2>
            <div class="cart-product-parameter-text">
            <p class="cart-product-parameter">Category: <span class="cart-span-parameter-value">${
              category ? category.replace(/_/g, ' ') : ''
            }</span></p>
            <p class="cart-product-parameter">Size: <span class="cart-span-parameter-value">${size}</span></p>
            </div>
            <p class="price">$${price}</p>
          </div>
          <div class="cart-delete">
            <button type="button" class="cart-btn-delete" aria-label="Delete">
              <span class="cart-icon-close">
                <svg class="icon-close" width="18" height="18">
                  <use href="${icons}#icon-ion_close-sharp"></use>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </li>`
      )
      .join('')}
  </ul>
  
`;

export const getcheckoutMarkup = (products) =>{
  
        return`
    
      <h2 class="checkout-title">Your order</h2>
      <div class="checkout-total-wrap">
        <p class="checkout-text">Total</p>
        <p class="checkout-total">$${products.toFixed(2)}</p>
      </div>

      < class="checkout-input-wrap">
        <label class="checkout-input-label" for="checkoutEmail"></label>
        <input
          class="checkout-input-email"
          type="email"
          id="checkoutEmail"
          name="email"
          placeholder="example@mail.com:"
          required
        />
        <button class="checkout-button" type="submit" aria-label="Proceed to Checkout">Checkout</button>
        
        `};

