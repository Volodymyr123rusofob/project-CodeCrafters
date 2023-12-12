import{S as g,A as h}from"./assets/header-f0b91792.js";import"./assets/vendor-ab16d78c.js";const y=()=>`<div class="empty-cart">
      <div class="empty-picture">
      <picture>
          <source
            srcset="
              /img/empty_cart/empty-cart-desktop-1x.png 1x,
              /img/empty_cart/empty-cart-desktop-2x.png 2x
            "
            media="
            (min-width: 1440px)"
          />
          <source
            srcset="
              /img/empty_cart/empty-cart-tab-1x.png 1x,
              /img/empty_cart/empty-cart-tab-2x.png 2x
            "
            media="
            (min-width: 768px)"
          />
          <source
            srcset="
              /img/empty_cart/empty-cart-mob-1x.png 1x,
              /img/empty_cart/empty-cart-mob-2x.png 2x
            "
            media="
            (min-width: 375px)"
          />
          <img
            src="/img/empty_cart/empty-cart-mob-1x.png"
            alt="Empty Cart Image"
            class="empty-cart-image"
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
    `,b=e=>`
  <div>
     <div class="delete-all">
    <button type="button" class="btn-delete-all"> Delete All 
      <span class="icon-close">
        <svg class="icon-close" width="24" height="24">
          <use href="/img/symbol-defs.svg#icon-ion_close-sharp"></use>
        </svg>
      </span>
    </button>
  </div>
  <ul class="cart-products-list">
    ${e.map(({_id:o,name:a,img:s,category:c,size:r,price:l})=>`
      <li class="cart-product-item" data-product-id="${o}">
        <div class="cart-product-container">
          <div class="cart-product-img-container">
            <img src="${s}" alt="${a}" width="64" height="64" class="cart-product-img">
          </div>
          <div class="cart-product-parameter-container">
            <h2 class="cart-product-title">${a}</h2>
            <div class="cart-product-parameter-text">
            <p class="cart-product-parameter">Category: <span class="cart-span-parameter-value">${c?c.replace(/_/g," "):""}</span></p>
            <p class="cart-product-parameter">Size: <span class="cart-span-parameter-value">${r}</span></p>
            </div>
            <p class="price">$${l}</p>
          </div>
          <div class="cart-delete">
            <button type="button" class="cart-btn-delete">
              <span class="cart-icon-close">
                <svg class="icon-close" width="18" height="18">
                  <use href="/img/symbol-defs.svg#icon-ion_close-sharp"></use>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </li>`).join("")}
  </ul>
  </div>
`,x=()=>`
    <div>
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
        </div>
        `,i=document.getElementById("basket"),C=document.getElementById("cart-counter-page"),d=new g("productsBasket"),D=new h;async function m(){const e=d.getAllProducts();if(console.log("Current products in storage:",e),e.length===0)console.log("Basket is empty. Displaying empty cart markup."),i.innerHTML="",i.insertAdjacentHTML("beforeend",y());else{console.log("Fetching product details for each product in the cart.");const a=e.map(async({_id:r,quantity:l})=>{try{return r?{...await D.getProductById(r),quantity:l}:(console.error("_id is undefined or empty for a product in the cart"),null)}catch(u){return console.error(`Error fetching product details for _id: ${r}`,u),null}}),c=(await Promise.all(a)).filter(r=>r!==null);console.log("Displaying cart markup with product details:",c),i.innerHTML="",i.insertAdjacentHTML("beforeend",b(c)),i.insertAdjacentHTML("beforeend",x())}const o=e.length;console.log("Updating cart counter with product count:",o),C.textContent=`CART (${o})`}async function v(){return await m(),{totalPriceElement:document.querySelector(".checkout-total"),emailInput:document.querySelector(".checkout-input-email"),checkoutButton:document.querySelector(".checkout-button"),cartContainer:document.querySelector(".cart-products-list"),price:document.querySelector(".price")}}v();document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",async e=>{const o=e.target.closest(".btn-delete-all"),a=e.target.closest(".cart-btn-delete");if(o)console.log("Deleting all products from storage."),d.removeAllProducts(),console.log("Updating cart after removing all products."),m();else if(a){const s=a.closest(".cart-product-item").dataset.productId;console.log(`Deleting product with ID: ${s}`),d.removeProduct(s),m()}updateCartCounter()})});const w=new h,P=new g("productsBasket");document.addEventListener("DOMContentLoaded",async function(){const e=P.getAllProducts(),o=e.map(async({_id:t,quantity:n})=>{try{return t?{...await w.getProductById(t),quantity:n}:(console.error("_id is undefined or empty for a product in the cart"),null)}catch(p){return console.error(`Error fetching product details for _id: ${t}`,p),null}}),s=(await Promise.all(o)).filter(t=>t!==null);await v();const c={totalPriceElement:document.querySelector(".checkout-total"),emailInput:document.querySelector(".checkout-input-email"),checkoutButton:document.querySelector(".checkout-button"),cartContainer:document.querySelector(".cart-products-list"),price:document.querySelector(".price")};function r(){let t=0;s.map(({price:n})=>t+=n),c.totalPriceElement.textContent=`${t.toFixed(2)}`}r(),c.checkoutButton.addEventListener("click",l);function l(t){t.preventDefault(),u()}function u(){const t=c.emailInput.value;if(!t||!k(t)){alert("Please enter a valid email address.");return}function n(){const p=y();c.cartContainer.innerHTML=p}e.length>0&&n(),alert(`Checkout completed! Total Price: ${c.price.textContent}.`),c.totalPriceElement.textContent="0.00",f(0),localStorage.clear()}function f(t){c.totalPriceElement.textContent=t.toFixed(2)}function k(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}});
//# sourceMappingURL=commonHelpers.js.map
