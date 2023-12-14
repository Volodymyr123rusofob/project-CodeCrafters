import{i as g,S as M,u as f,A as P}from"./assets/footer-60fa8694.js";import"./assets/vendor-ab16d78c.js";const A="/project-CodeCrafters/assets/empty-cart-desktop-1x-1da79769.png",D="/project-CodeCrafters/assets/empty-cart-tab-2x-490faf55.png",E="/project-CodeCrafters/assets/empty-cart-desktop-1x-1da79769.png",T="/project-CodeCrafters/assets/empty-cart-tab-2x-490faf55.png",j="/project-CodeCrafters/assets/empty-cart-mob-1x-971d1e28.png",L="/project-CodeCrafters/assets/empty-cart-mob-2x-7db9012b.png",y=()=>`<div class="empty-cart">
      <div class="empty-picture">
      <picture>
          <source
            srcset="
              ${A} 1x,
              ${D} 2x
            "
            media="
            (min-width: 1440px)"
          />
          <source
            srcset="
              ${E} 1x,
              ${T} 2x
            "
            media="
            (min-width: 768px)"
          />
          <source
            srcset="
             ${j} 1x,
              ${L} 2x
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
    `,S=e=>`
  
     <div class="delete-all">
    <button type="button" class="btn-delete-all" aria-label="Delete All"> Delete All 
      <span class="icon-close">
        <svg class="btn-x" width="24" height="24">
          <use href="${g}#icon-ion_close-sharp"></use>
        </svg>
      </span>
    </button>
  </div>
  <ul class="cart-products-list">
    ${e.map(({_id:s,name:c,img:l,category:o,size:p,price:n})=>`
      <li class="cart-product-item" data-product-id="${s}">
        <div class="cart-product-container">
          <div class="cart-product-img-container">
            <img src="${l}" alt="${c}" width="64" height="64" class="cart-product-img" loading="lazy">
          </div>
          <div class="cart-product-parameter-container">
            <h2 class="cart-product-title">${c}</h2>
            <div class="cart-product-parameter-text">
            <p class="cart-product-parameter">Category: <span class="cart-span-parameter-value">${o?o.replace(/_/g," "):""}</span></p>
            <p class="cart-product-parameter">Size: <span class="cart-span-parameter-value">${p}</span></p>
            </div>
            <p class="price">$${n}</p>
          </div>
          <div class="cart-delete">
            <button type="button" class="cart-btn-delete" aria-label="Delete">
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
  
`,_=e=>`
    
      <h2 class="checkout-title">Your order</h2>
      <div class="checkout-total-wrap">
        <p class="checkout-text">Total</p>
        <p class="checkout-total">$${e.toFixed(2)}</p>
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
        
        `,i=document.querySelector(".container-div-cart-js-one"),m=document.querySelector(".container-div-cart-js-two"),q=document.getElementById("cart-counter-page"),u=new M("productsBasket"),H=new P;async function d(){const e=u.getAllProducts();if(e.length===0)i.innerHTML="",m.innerHTML="",i.insertAdjacentHTML("beforeend",y());else{let C=function(t){t.preventDefault(),$()},$=function(){const t=b.value;if(!t||!w(t)){alert("Please enter a valid email address.");return}function a(){const r=y();k.innerHTML=r}e.length>0&&a(),alert(`Checkout completed! Total Price: $${n.toFixed(2)}.`),h.textContent="0.00",u.removeAllProducts(),f(),d()},w=function(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)};const c=e.map(async({_id:t,quantity:a})=>{try{return t?{...await H.getProductById(t),quantity:a}:(console.error("_id is undefined or empty for a product in the cart"),null)}catch(r){return console.error(`Error fetching product details for _id: ${t}`,r),null}}),o=(await Promise.all(c)).filter(t=>t!==null);i.innerHTML="",i.insertAdjacentHTML("beforeend",S(o));async function p(t){let a=0;return t.forEach(({price:r})=>a+=r),a}const n=await p(o);m.innerHTML="",m.insertAdjacentHTML("beforeend",_(n));async function v(){return{totalPriceElement:document.querySelector(".checkout-total"),emailInput:document.querySelector(".checkout-input-email"),checkoutButton:document.querySelector(".checkout-button"),cartContainer:document.querySelector(".cart-products-list"),price:document.querySelector(".price")}}const{totalPriceElement:h,emailInput:b,checkoutButton:x,cartContainer:k,price:I}=await v();x.addEventListener("click",C),h.textContent=n.toFixed(2)}const s=e.length;q.textContent=`CART (${s})`}d();document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",async e=>{const s=e.target.closest(".btn-delete-all"),c=e.target.closest(".cart-btn-delete");if(s)u.removeAllProducts(),d();else if(c){const l=c.closest(".cart-product-item").dataset.productId;u.removeProduct(l),d()}f()})});
//# sourceMappingURL=commonHelpers.js.map
