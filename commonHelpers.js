import{i as h,S as M,u as v,a as g,A}from"./assets/footer-15ddfb3d.js";import"./assets/vendor-6a322d96.js";const D="/project-CodeCrafters/assets/empty-cart-desktop-1x-1da79769.png",E="/project-CodeCrafters/assets/empty-cart-desktop-2x-490faf55.png",T="/project-CodeCrafters/assets/empty-cart-desktop-1x-1da79769.png",j="/project-CodeCrafters/assets/empty-cart-desktop-2x-490faf55.png",L="/project-CodeCrafters/assets/empty-cart-mob-1x-971d1e28.png",S="/project-CodeCrafters/assets/empty-cart-mob-2x-7db9012b.png",y=()=>`<div class="empty-cart">
      <div class="empty-picture">
      <picture>
          <source
            srcset="
              ${D} 1x,
              ${E} 2x
            "
            media="
            (min-width: 1440px)"
          />
          <source
            srcset="
              ${T} 1x,
              ${j} 2x
            "
            media="
            (min-width: 768px)"
          />
          <source
            srcset="
             ${L} 1x,
              ${S} 2x
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
    `,_=e=>`
  
     <div class="delete-all">
    <button type="button" class="btn-delete-all" aria-label="Delete All"> Delete All 
      <span class="icon-close">
        <svg class="btn-x" width="24" height="24">
          <use href="${h}#icon-ion_close-sharp"></use>
        </svg>
      </span>
    </button>
  </div>
  <ul class="cart-products-list">
    ${e.map(({_id:s,name:c,img:n,category:o,size:p,price:i})=>`
      <li class="cart-product-item" data-product-id="${s}">
        <div class="cart-product-container">
          <div class="cart-product-img-container">
            <img src="${n}" alt="${c}" width="64" height="64" class="cart-product-img" loading="lazy">
          </div>
          <div class="cart-product-parameter-container">
            <h2 class="cart-product-title">${c}</h2>
            <div class="cart-product-parameter-text">
            <p class="cart-product-parameter">Category: <span class="cart-span-parameter-value">${o?o.replace(/_/g," "):""}</span></p>
            <p class="cart-product-parameter">Size: <span class="cart-span-parameter-value">${p}</span></p>
            </div>
            <p class="price">$${i}</p>
          </div>
          <div class="cart-delete">
            <button type="button" class="cart-btn-delete" aria-label="Delete">
              <span class="cart-icon-close">
                <svg class="icon-close" width="18" height="18">
                  <use href="${h}#icon-ion_close-sharp"></use>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </li>`).join("")}
  </ul>
  
`,q=e=>`
    
      <h2 class="checkout-title">Your order</h2>
      <div class="checkout-total-wrap">
        <p class="checkout-text">Total</p>
        <p class="checkout-total">$${e.toFixed(2)}</p>
      </div>
      <div class="checkout-input-wrap">
        <label class="checkout-input-label" for="checkoutEmail"></label>
        <input
          class="checkout-input-email"
          type="email"
          id="checkoutEmail"
          name="email"
          placeholder="example@mail.com"
          required
        />
        <button class="checkout-button" type="submit" aria-label="Proceed to Checkout">Checkout</button>
        </div>
        
        `,l=document.querySelector(".container-div-cart-js-one"),m=document.querySelector(".container-div-cart-js-two"),H=document.getElementById("cart-counter-page"),d=new M("productsBasket"),I=new A;async function u(){const e=d.getAllProducts();if(e.length===0)l.innerHTML="",m.innerHTML="",l.insertAdjacentHTML("beforeend",y());else{let $=function(t){t.preventDefault(),w()},w=function(){const t=b.value;if(!t||!P(t)){g("Please enter a valid email address.","error");return}function a(){const r=y();C.innerHTML=r}e.length>0&&a(),g(`Checkout completed! Total Price: $${i.toFixed(2)}.`,"success"),k.textContent="0.00",d.removeAllProducts(),v(),u()},P=function(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)};const c=e.map(async({_id:t,quantity:a})=>{try{return t?{...await I.getProductById(t),quantity:a}:(console.error("_id is undefined or empty for a product in the cart"),null)}catch(r){return console.error(`Error fetching product details for _id: ${t}`,r),null}}),o=(await Promise.all(c)).filter(t=>t!==null);l.innerHTML="",l.insertAdjacentHTML("beforeend",_(o));async function p(t){let a=0;return t.forEach(({price:r})=>a+=r),a}const i=await p(o);m.innerHTML="",m.insertAdjacentHTML("beforeend",q(i));async function f(){return{totalPriceElement:document.querySelector(".checkout-total"),emailInput:document.querySelector(".checkout-input-email"),checkoutButton:document.querySelector(".checkout-button"),cartContainer:document.querySelector(".cart-products-list"),price:document.querySelector(".price")}}const{totalPriceElement:k,emailInput:b,checkoutButton:x,cartContainer:C,price:B}=await f();x.addEventListener("click",$)}const s=e.length;H.textContent=`CART (${s})`}u();document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",async e=>{const s=e.target.closest(".btn-delete-all"),c=e.target.closest(".cart-btn-delete");if(s)d.removeAllProducts(),u();else if(c){const n=c.closest(".cart-product-item").dataset.productId;d.removeProduct(n),u()}v()})});
//# sourceMappingURL=commonHelpers.js.map
