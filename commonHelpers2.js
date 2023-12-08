/* empty css                      */import{a as c}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();class y{constructor(t){this.storageName=t,this.initStorage()}initStorage(){this.getAllProducts()||localStorage.setItem(this.storageName,JSON.stringify([]))}setProduct(t){t&&(this.getAllProducts().some(e=>e._id===t._id)||localStorage.setItem(this.storageName,JSON.stringify([...this.getAllProducts(),t])))}setAllProduct(t){localStorage.setItem(this.storageName,JSON.stringify(t))}getAllProducts(){return JSON.parse(localStorage.getItem(this.storageName))}removeProduct(t){this.setAllProduct(this.getAllProducts().filter(e=>e._id!==t))}removeAllProducts(){this.setAllProduct([])}}class u{constructor(){this.BASE_URL="https://food-boutique.b.goit.study/api"}async getProductsByName(t,e,r=1,o=6){const a=new URLSearchParams({keyword:t,category:e,page:r,limit:o});try{return(await c.get(`${this.BASE_URL}/products?${a}`)).data}catch{throw console.error("Помилка при отриманні продуктів:",error.message),error}}async getAllProducts(t=1,e=6){try{return(await c.get(`${this.BASE_URL}/products`,{params:{page:t,limit:e}})).data}catch(r){throw console.error("Помилка при отриманні всіх продуктів:",r.message),r}}async getPopularProducts(t){try{const e={limit:t};return(await c.get(`${this.BASE_URL}/products/popular`,{params:e})).data}catch(e){throw console.error("Помилка при отриманні популярних продуктів:",e.message),e}}async getDiscountedProducts(){try{return(await c.get(`${this.BASE_URL}/products/discount`)).data}catch(t){throw console.error("Помилка при отриманні продуктів зі знижкою:",t.message),t}}async getProductsByCategory(){try{return(await c.get(`${this.BASE_URL}/products/categories`)).data}catch(t){throw console.error("Помилка при отриманні продуктів за категорією:",t.message),t}}async getProductsInCategories(t,e=1,r=6){try{const o=new URLSearchParams({category:t,page:e,limit:r});return(await c.get(`${this.BASE_URL}/products?${o}`)).data}catch(o){throw console.error("Помилка при отриманні продуктів за категорією(при оновленні сторінки): ",o.message),o}}async getProductById(t){try{return(await c.get(`${this.BASE_URL}/products/${t}`)).data}catch(e){throw console.error("Помилка при отриманні продукта за айді:",e.message),e}}async createNewOrder(t){try{return(await c.post(`${this.BASE_URL}/orders`,t)).data}catch(e){throw console.error("Помилка при створенні нового замовлення:",e.message),e}}async createSubscription(t){try{return(await c.post(`${this.BASE_URL}/subscriptions`,{email:t})).data}catch(e){throw console.error("Помилка при створенні підписки:",e.message),e}}}const p="/project-CodeCrafters/assets/symbol-defs-70073224.svg";function v(s){return s.map(({_id:t,name:e,img:r,category:o,price:a,size:d,popularity:f})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                <a class="products-card-link" href="">
                  <img src="${r}" alt="${e}" width="140" height="140" class="product-img">
                </a>
              </div>
                <a class="products-card-link" href="">
                  <h3 class="product-title">${e}</h3>
                </a>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value">${o.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value">${d}</span></p>
                <p class="product-parameter">Popularity: <span class="span-parameter-value">${f}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">${a}</p>
                <button class="cart-button" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="./img/symbol-defs.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}const n=document.querySelector(".modal-prod-wrapper"),w="shop-storage",i=new y(w),S=new u;async function P(s){n.classList.add("modal-active"),n.classList.add("js-loader");const t=await S.getProductById(s);n.classList.remove("js-loader"),b(t),L(t)}function L(s){const t=document.querySelector(".modal-prod-add-text"),e=s._id;i.getAllProducts().some(o=>o._id===e)?t.textContent="Remove from":t.textContent="Add to"}function b(s){try{n.classList.add("modal-active"),document.body.classList.add("stop-scroll"),n.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${p}#icon-ion_close-sharp"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">
      <img class="modal-prod-img" src="${s.img}" alt="${s.name}" />
  </div>
  <div class="modal-prod-name-wrap">
  <p class="modal-prod-name">${s.name}</p>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <p class="modal-prod-text">Category: <span>${s.category}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Size: <span>${s.size}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Popularity: <span>${s.popularity}</span></p>
    </li>
  </ul>
  <p class="modal-prod-desc">${s.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${s.price}</p>
  <button class="modal-prod-add-btn">
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${p}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>$(s)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>l()),window.addEventListener("click",m),window.addEventListener("keydown",g)}catch(t){console.error(t)}}function $(s){const t=s._id,r=i.getAllProducts().some(a=>a._id===t),o=document.querySelector(".modal-prod-add-text");r?(o.textContent="Add to",i.removeProduct(t)):(o.textContent="Remove from",i.setProduct(s))}function l(){document.body.classList.remove("stop-scroll"),n.classList.remove("modal-active"),n.innerHTML="",window.removeEventListener("click",m),window.removeEventListener("keydown",g)}function m(s){s.target===n&&l()}function g(s){s.keyCode===27&&l()}const h=document.querySelector(".js-products-list");h.addEventListener("click",_);const A=new u,k=6;async function C(){const t=(await A.getAllProducts()).results.slice(0,k);B(t,h)}C();function B(s,t){t.innerHTML=v(s),console.log(s)}const E=document.querySelector(".cart-button");E.addEventListener("click",I);function _(s){s.preventDefault();const t=s.target;if(t.closest("a")&&t.closest(".products-card-link")){const e=t.closest("li").dataset.productId;P(e).catch(r=>{console.error("Помилка при отриманні продукта за айді:",r.message)})}}function I(s){const t=s.target;console.log(s.target);const e=t.closest(".cart-button");if(console.log(e),e){const r=e.dataset.itemId;console.log(r),N(e)}}function N(s){const t=JSON.parse(s.dataset.inCart);console.log(t),O(s,!t)}function O(s,t){t?s.innerHTML=`<svg class="cart-icon" width="18" height="18">
                    <use href="./img/symbol-defs.svg#icon-check"></use>
                  </svg>`:s.innerHTML=`<svg class="cart-icon" width="18" height="18">
                    <use href="./img/symbol-defs.svg#icon-basket"></use>
                  </svg>`}
//# sourceMappingURL=commonHelpers2.js.map
