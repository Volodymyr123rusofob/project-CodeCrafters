/* empty css                      */import{a as c}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();class p{constructor(){this.BASE_URL="https://food-boutique.b.goit.study/api"}async getProductsByName(e,s,r=1,o=6){const a=new URLSearchParams({keyword:e,category:s,page:r,limit:o});try{return(await c.get(`${this.BASE_URL}/products?${a}`)).data}catch{throw console.error("Помилка при отриманні продуктів:",error.message),error}}async getAllProducts(e=1,s=6){try{return(await c.get(`${this.BASE_URL}/products`,{params:{page:e,limit:s}})).data}catch(r){throw console.error("Помилка при отриманні всіх продуктів:",r.message),r}}async getPopularProducts(e){try{const s={limit:e};return(await c.get(`${this.BASE_URL}/products/popular`,{params:s})).data}catch(s){throw console.error("Помилка при отриманні популярних продуктів:",s.message),s}}async getDiscountedProducts(){try{return(await c.get(`${this.BASE_URL}/products/discount`)).data}catch(e){throw console.error("Помилка при отриманні продуктів зі знижкою:",e.message),e}}async getProductsByCategory(){try{return(await c.get(`${this.BASE_URL}/products/categories`)).data}catch(e){throw console.error("Помилка при отриманні продуктів за категорією:",e.message),e}}async getProductsInCategories(e,s=1,r=6){try{const o=new URLSearchParams({category:e,page:s,limit:r});return(await c.get(`${this.BASE_URL}/products?${o}`)).data}catch(o){throw console.error("Помилка при отриманні продуктів за категорією(при оновленні сторінки): ",o.message),o}}async getProductById(e){try{return(await c.get(`${this.BASE_URL}/products/${e}`)).data}catch(s){throw console.error("Помилка при отриманні продукта за айді:",s.message),s}}async createNewOrder(e){try{return(await c.post(`${this.BASE_URL}/orders`,e)).data}catch(s){throw console.error("Помилка при створенні нового замовлення:",s.message),s}}async createSubscription(e){try{return(await c.post(`${this.BASE_URL}/subscriptions`,{email:e})).data}catch(s){throw console.error("Помилка при створенні підписки:",s.message),s}}}const l="/project-CodeCrafters/assets/symbol-defs-70073224.svg",n=document.querySelector(".modal-prod-wrapper"),y=new p;async function f(t){n.classList.add("modal-active"),n.classList.add("loader");const e=await y.getProductById(t);n.classList.remove("loader"),w(e),v(e)}function v(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;shopStorage.getAllProducts().some(o=>o._id===s)?e.textContent="Remove from":e.textContent="Add to"}function w(t){try{n.classList.add("modal-active"),document.body.classList.add("stop-scroll"),n.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${l}#icon-ion_close-sharp"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">
      <img class="modal-prod-img" src="${t.img}" alt="${t.name}" />
  </div>
  <div class="modal-prod-name-wrap">
  <p class="modal-prod-name">${t.name}</p>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <p class="modal-prod-text">Category: <span>${t.category}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Size: <span>${t.size}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Popularity: <span>${t.popularity}</span></p>
    </li>
  </ul>
  <p class="modal-prod-desc">${t.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${t.price}</p>
  <button class="modal-prod-add-btn" >
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${l}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>L(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>i()),window.addEventListener("click",u),window.addEventListener("keydown",m)}catch(e){console.error(e)}}function L(t){const e=t._id,r=shopStorage.getAllProducts().some(a=>a._id===e),o=document.querySelector(".modal-prod-add-text");r?o.textContent="Add to":o.textContent="Remove from"}function i(){document.body.classList.remove("stop-scroll"),n.classList.remove("modal-active"),n.innerHTML="",window.removeEventListener("click",u),window.removeEventListener("keydown",m)}function u(t){t.target===n&&i()}function m(t){t.keyCode===27&&i()}function b(t){return t.map(({_id:e,name:s,img:r,category:o,price:a,size:d,popularity:h})=>`
            <li class="product-item" data-product-id='${e}'>
              <div class="product-img-container">
                <a class="products-card-link" href="">
                  <img src="${r}" alt="${s}" width="140" height="140" class="product-img">
                </a>
              </div>
                <a class="products-card-link" href="">
                  <h3 class="product-title">${s}</h3>
                </a>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${o.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${d}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${h}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${a}</p>
                <button class="cart-button" type="button" data-item-id="${e}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="./img/symbol-defs.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}const g=document.querySelector(".js-products-list");g.addEventListener("click",B);const $=new p,k=6;async function S(){const e=(await $.getAllProducts()).results.slice(0,k);P(e,g)}S();function P(t,e){e.innerHTML=b(t),console.log(t)}const C=document.querySelector(".cart-button");C.addEventListener("click",E);function B(t){t.preventDefault();const e=t.target;if(e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.productId;f(s).catch(r=>{console.error("Помилка при отриманні продукта за айді:",r.message)})}}function E(t){const e=t.target;console.log(t.target);const s=e.closest(".cart-button");if(console.log(s),s){const r=s.dataset.itemId;console.log(r),A(s)}}function A(t){const e=JSON.parse(t.dataset.inCart);console.log(e),_(t,!e)}function _(t,e){e?t.innerHTML=`<svg class="cart-icon" width="18" height="18">
                    <use href="../img/symbol-defs.svg#icon-check"></use>
                  </svg>`:t.innerHTML=`<svg class="cart-icon" width="18" height="18">
                    <use href="../img/symbol-defs.svg#icon-basket"></use>
                  </svg>`}
//# sourceMappingURL=commonHelpers2.js.map
