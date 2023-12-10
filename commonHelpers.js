import{S as g,A as h}from"./assets/local-storage-f0365b04.js";import"./assets/vendor-c5b37fd0.js";const y=()=>`
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
    `,k=t=>`
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
    ${t.map(({_id:c,name:a,img:r,category:s,size:o,price:n})=>`
      <li class="cart-product-item" data-product-id="${c}">
        <div class="cart-product-container">
          <div class="cart-product-img-container">
            <img src="${r}" alt="${a}" width="64" height="64" class="cart-product-img">
          </div>
          <div class="cart-product-parameter-container">
            <h2 class="cart-product-title">${a}</h2>
            <p class="cart-product-parameter">Category: <span class="cart-span-parameter-value">${s?s.replace(/_/g," "):""}</span></p>
            <p class="cart-product-parameter">Size: <span class="cart-span-parameter-value">${o}</span></p>
            <p class="price">$${n}</p>
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
`,b=()=>`
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
        `,l=document.getElementById("basket"),f=document.getElementById("cart-counter-page"),i=new g("productsBasket"),v=new h;async function p(){const t=i.getAllProducts();if(console.log("Current products in storage:",t),t.length===0)console.log("Basket is empty. Displaying empty cart markup."),l.innerHTML="",l.insertAdjacentHTML("beforeend",y());else{console.log("Fetching product details for each product in the cart.");const a=t.map(async({_id:o,quantity:n})=>{try{return o?{...await v.getProductById(o),quantity:n}:(console.error("_id is undefined or empty for a product in the cart"),null)}catch(d){return console.error(`Error fetching product details for _id: ${o}`,d),null}}),s=(await Promise.all(a)).filter(o=>o!==null);console.log("Displaying cart markup with product details:",s),l.innerHTML="",l.insertAdjacentHTML("beforeend",k(s)),l.insertAdjacentHTML("beforeend",b())}const c=t.length;console.log("Updating cart counter with product count:",c),f.textContent=`CART (${c})`}p();document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",async t=>{const c=t.target.closest(".btn-delete-all"),a=t.target.closest(".cart-btn-delete");if(c)console.log("Deleting all products from storage."),i.removeAllProducts(),console.log("Updating cart after removing all products."),p();else if(a){const r=a.closest(".cart-product-item").dataset.productId;console.log(`Deleting product with ID: ${r}`),i.removeProduct(r),p()}})});let u=[];const e={totalPriceElement:document.getElementById("totalPrice"),emailInput:document.querySelector(".checkout-input-email"),inputWrap:document.querySelector(".checkout-input-wrap"),checkoutTitle:document.querySelector(".checkout-title"),checkoutTotalWrap:document.querySelector(".checkout-total-wrap"),emptyCartContainer:document.querySelector(".empty-cart-container"),checkoutButton:document.querySelector(".checkout-button")};function x(){const t=e.emailInput.value;if(u.length===0||m()===0){alert("Cannot proceed with checkout. Cart is empty or total amount is 0.");return}if(!t||!C(t)){alert("Please enter a valid email address.");return}alert(`Checkout completed! Total Price: $${m()}. Email: ${t}`),e.totalPriceElement.textContent="0.00",u=[],e.inputWrap&&(e.inputWrap.style.display="none"),e.checkoutTitle&&e.checkoutTotalWrap&&(e.checkoutTitle.style.display="none",e.checkoutTotalWrap.style.display="none"),e.emptyCartContainer&&(e.emptyCartContainer.style.display="block"),localStorage.clear()}function C(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function m(){return u.reduce((t,c)=>t+c.price,0).toFixed(2)}e.checkoutButton.addEventListener("click",w);function w(t){t.preventDefault(),x()}
//# sourceMappingURL=commonHelpers.js.map
