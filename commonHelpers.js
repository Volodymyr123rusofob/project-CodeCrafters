import{i as g,S as h,u as b,A as y}from"./assets/footer-799cfcc9.js";import"./assets/vendor-ab16d78c.js";const C="/project-CodeCrafters/assets/empty-cart-desktop-1x-1da79769.png",$="/project-CodeCrafters/assets/empty-cart-desktop-2x-490faf55.png",D="/project-CodeCrafters/assets/empty-cart-desktop-1x-1da79769.png",w="/project-CodeCrafters/assets/empty-cart-desktop-2x-490faf55.png",E="/project-CodeCrafters/assets/empty-cart-mob-1x-971d1e28.png",P="/project-CodeCrafters/assets/empty-cart-mob-2x-7db9012b.png",f=()=>`<div class="empty-cart">
      <div class="empty-picture">
      <picture>
          <source
            srcset="
              ${C} 1x,
              ${$} 2x
            "
            media="
            (min-width: 1440px)"
          />
          <source
            srcset="
              ${D} 1x,
              ${w} 2x
            "
            media="
            (min-width: 768px)"
          />
          <source
            srcset="
             ${E} 1x,
              ${P} 2x
            "
            media="
            (min-width: 375px)"
          />
          <img
            src="/img/empty_cart/empty-cart-mob-1x.png"
            alt="Empty Cart Image"
            class="empty-cart-image"
            loading="lazy"
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
    `,S=t=>`
  <div>
     <div class="delete-all">
    <button type="button" class="btn-delete-all"> Delete All 
      <span class="icon-close">
        <svg class="btn-x" width="24" height="24">
          <use href="${g}#icon-ion_close-sharp"></use>
        </svg>
      </span>
    </button>
  </div>
  <ul class="cart-products-list">
    ${t.map(({_id:r,name:a,img:s,category:c,size:o,price:n})=>`
      <li class="cart-product-item" data-product-id="${r}">
        <div class="cart-product-container">
          <div class="cart-product-img-container">
            <img src="${s}" alt="${a}" width="64" height="64" class="cart-product-img" loading="lazy">
          </div>
          <div class="cart-product-parameter-container">
            <h2 class="cart-product-title">${a}</h2>
            <div class="cart-product-parameter-text">
            <p class="cart-product-parameter">Category: <span class="cart-span-parameter-value">${c?c.replace(/_/g," "):""}</span></p>
            <p class="cart-product-parameter">Size: <span class="cart-span-parameter-value">${o}</span></p>
            </div>
            <p class="price">$${n}</p>
          </div>
          <div class="cart-delete">
            <button type="button" class="cart-btn-delete">
              <span class="cart-icon-close">
                <svg class="icon-close" width="18" height="18">
                  <use href="${g}#icon-ion_close-sharp"></use>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </li>`).join("")}
  </ul>
  </div>
`,A=t=>{let r=0;return t.forEach(({price:a})=>r+=a),`
    <div>
      <h2 class="checkout-title">Your order</h2>
      <div class="checkout-total-wrap">
        <p class="checkout-text">Total</p>
        <p class="checkout-total">$${r.toFixed(2)}</p>
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
        `},l=document.getElementById("basket"),M=document.getElementById("cart-counter-page"),p=new h("productsBasket"),L=new y;async function m(){const t=p.getAllProducts();if(console.log("Current products in storage:",t),t.length===0)console.log("Basket is empty. Displaying empty cart markup."),l.innerHTML="",l.insertAdjacentHTML("beforeend",f());else{console.log("Fetching product details for each product in the cart.");const a=t.map(async({_id:o,quantity:n})=>{try{return o?{...await L.getProductById(o),quantity:n}:(console.error("_id is undefined or empty for a product in the cart"),null)}catch(i){return console.error(`Error fetching product details for _id: ${o}`,i),null}}),c=(await Promise.all(a)).filter(o=>o!==null);console.log("Displaying cart markup with product details:",c),l.innerHTML="",l.insertAdjacentHTML("beforeend",S(c)),l.insertAdjacentHTML("beforeend",A(c))}const r=t.length;console.log("Updating cart counter with product count:",r),M.textContent=`CART (${r})`}async function v(){return await m(),{totalPriceElement:document.querySelector(".checkout-total"),emailInput:document.querySelector(".checkout-input-email"),checkoutButton:document.querySelector(".checkout-button"),cartContainer:document.querySelector(".cart-products-list"),price:document.querySelector(".price")}}v();document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",async t=>{const r=t.target.closest(".btn-delete-all"),a=t.target.closest(".cart-btn-delete");if(r)console.log("Deleting all products from storage."),p.removeAllProducts(),console.log("Updating cart after removing all products."),m();else if(a){const s=a.closest(".cart-product-item").dataset.productId;console.log(`Deleting product with ID: ${s}`),p.removeProduct(s),m()}b()})});const q=new y,I=new h("productsBasket");document.addEventListener("DOMContentLoaded",async function(){const t=I.getAllProducts(),r=t.map(async({_id:e,quantity:u})=>{try{return e?{...await q.getProductById(e),quantity:u}:(console.error("_id is undefined or empty for a product in the cart"),null)}catch(d){return console.error(`Error fetching product details for _id: ${e}`,d),null}}),s=(await Promise.all(r)).filter(e=>e!==null);await v();const c={totalPriceElement:document.querySelector(".checkout-total"),emailInput:document.querySelector(".checkout-input-email"),checkoutButton:document.querySelector(".checkout-button"),cartContainer:document.querySelector(".cart-products-list"),price:document.querySelector(".price")};let o=0;function n(){s.map(({price:e})=>o+=e),c.totalPriceElement.textContent=`$${o.toFixed(2)}`}n(),c.checkoutButton.addEventListener("click",i);function i(e){e.preventDefault(),k()}function k(){const e=c.emailInput.value;if(!e||!x(e)){alert("Please enter a valid email address.");return}function u(){const d=f();c.cartContainer.innerHTML=d}t.length>0&&u(),alert(`Checkout completed! Total Price: $${o.toFixed(2)}.`),c.totalPriceElement.textContent="0.00",localStorage.clear()}function x(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}});
//# sourceMappingURL=commonHelpers.js.map
