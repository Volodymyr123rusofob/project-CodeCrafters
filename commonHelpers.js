import{S as g,A as h}from"./assets/header-ebefab6f.js";import"./assets/vendor-ab16d78c.js";const u=()=>`
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
    `,d=t=>`
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
    ${t.map(({_id:o,name:c,img:r,category:s,size:a,price:e})=>`
      <li class="cart-product-item" data-product-id="${o}">
        <div class="cart-product-container">
          <div class="cart-product-img-container">
            <img src="${r}" alt="${c}" width="64" height="64" class="cart-product-img">
          </div>
          <div class="cart-product-parameter-container">
            <h2 class="cart-product-title">${c}</h2>
            <p class="cart-product-parameter">Category: <span class="cart-span-parameter-value">${s?s.replace(/_/g," "):""}</span></p>
            <p class="cart-product-parameter">Size: <span class="cart-span-parameter-value">${a}</span></p>
            <p class="price">$${e}</p>
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
      </li>`).join("")}
  </ul>
`,y=()=>`
     <h2 class="checkout-title">Your order</h2>
      <div class="checkout-total-wrap">
        <p class="checkout-text">Total</p>
        <p class="checkout-total">$0.00</p>
      </div>

      <div class="checkout-input-wrap">
        <label class="checkout-input-label" for="checkoutEmail"></label>
        <input
          class="checkout-input-email"
          type="email"
          id="checkoutEmail"
          name="email"
          placeholder="example@mail.com:"
          required
        />
        <button class="checkout-button" type="submit">Checkout</button>
        `,l=document.getElementById("basket"),k=document.getElementById("cart-counter-page"),i=new g("productsBasket"),b=new h;async function p(){const t=i.getAllProducts();if(console.log("Current products in storage:",t),t.length===0)console.log("Basket is empty. Displaying empty cart markup."),l.innerHTML="",l.insertAdjacentHTML("beforeend",u());else{console.log("Fetching product details for each product in the cart.");const c=t.map(async({_id:a,quantity:e})=>{try{return a?{...await b.getProductById(a),quantity:e}:(console.error("_id is undefined or empty for a product in the cart"),null)}catch(n){return console.error(`Error fetching product details for _id: ${a}`,n),null}}),s=(await Promise.all(c)).filter(a=>a!==null);console.log("Displaying cart markup with product details:",s),l.innerHTML="",l.insertAdjacentHTML("beforeend",d(s)),l.insertAdjacentHTML("beforeend",y())}const o=t.length;console.log("Updating cart counter with product count:",o),k.textContent=`CART (${o})`}p();document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",async t=>{const o=t.target.closest(".btn-delete-all"),c=t.target.closest(".cart-btn-delete");if(o)console.log("Deleting all products from storage."),i.removeAllProducts(),console.log("Updating cart after removing all products."),p();else if(c){const r=c.closest(".cart-product-item").dataset.productId;console.log(`Deleting product with ID: ${r}`),i.removeProduct(r),p()}})});document.addEventListener("DOMContentLoaded",function(){const t={totalPriceElement:document.querySelector(".checkout-total"),emailInput:document.querySelector(".checkout-input-email"),checkoutButton:document.querySelector(".checkout-button"),cartContainer:document.querySelector(".cart-container")};t.checkoutButton.addEventListener("click",o);function o(e){e.preventDefault(),c()}function c(){const e=t.emailInput.value;if(!e||!s(e)){alert("Please enter a valid email address.");return}const n=products.length>0?d(products):u();t.cartContainer.innerHTML=n,alert(`Checkout completed! Total Price: $${a(products)}.`),t.totalPriceElement.textContent="0.00",r(0),localStorage.clear()}function r(e){t.totalPriceElement.textContent=e.toFixed(2)}function s(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}function a(e){return e.reduce((n,{price:m})=>n+m,0).toFixed(2)}});
//# sourceMappingURL=commonHelpers.js.map
