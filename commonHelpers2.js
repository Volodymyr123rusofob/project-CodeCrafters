/* empty css                      */import{a as c}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();class u{constructor(){this.BASE_URL="https://food-boutique.b.goit.study/api"}async getProductsByName(t,s,r=1,o=6){const a=new URLSearchParams({keyword:t,category:s,page:r,limit:o});try{return(await c.get(`${this.BASE_URL}/products?${a}`)).data}catch{throw console.error("Помилка при отриманні продуктів:",error.message),error}}async getAllProducts(t=1,s=6){try{return(await c.get(`${this.BASE_URL}/products`,{params:{page:t,limit:s}})).data}catch(r){throw console.error("Помилка при отриманні всіх продуктів:",r.message),r}}async getPopularProducts(t){try{const s={limit:t};return(await c.get(`${this.BASE_URL}/products/popular`,{params:s})).data}catch(s){throw console.error("Помилка при отриманні популярних продуктів:",s.message),s}}async getDiscountedProducts(){try{return(await c.get(`${this.BASE_URL}/products/discount`)).data}catch(t){throw console.error("Помилка при отриманні продуктів зі знижкою:",t.message),t}}async getProductsByCategory(){try{return(await c.get(`${this.BASE_URL}/products/categories`)).data}catch(t){throw console.error("Помилка при отриманні продуктів за категорією:",t.message),t}}async getProductsInCategories(t,s=1,r=6){try{const o=new URLSearchParams({category:t,page:s,limit:r});return(await c.get(`${this.BASE_URL}/products?${o}`)).data}catch(o){throw console.error("Помилка при отриманні продуктів за категорією(при оновленні сторінки): ",o.message),o}}async getProductById(t){try{return(await c.get(`${this.BASE_URL}/products/${t}`)).data}catch(s){throw console.error("Помилка при отриманні продукта за айді:",s.message),s}}async createNewOrder(t){try{return(await c.post(`${this.BASE_URL}/orders`,t)).data}catch(s){throw console.error("Помилка при створенні нового замовлення:",s.message),s}}async createSubscription(t){try{return(await c.post(`${this.BASE_URL}/subscriptions`,{email:t})).data}catch(s){throw console.error("Помилка при створенні підписки:",s.message),s}}}const i="/project-CodeCrafters/assets/symbol-defs-70073224.svg",n=document.querySelector(".modal-prod-wrapper"),y=new u;async function v(e){n.classList.add("modal-active"),n.classList.add("loader");const t=await y.getProductById(e);n.classList.remove("loader"),L(t),w(t)}function w(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;shopStorage.getAllProducts().some(o=>o._id===s)?t.textContent="Remove from":t.textContent="Add to"}function L(e){try{n.classList.add("modal-active"),document.body.classList.add("stop-scroll"),n.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${i}#icon-ion_close-sharp"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">
      <img class="modal-prod-img" src="${e.img}" alt="${e.name}" />
  </div>
  <div class="modal-prod-name-wrap">
  <p class="modal-prod-name">${e.name}</p>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <p class="modal-prod-text">Category: <span>${e.category}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Size: <span>${e.size}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Popularity: <span>${e.popularity}</span></p>
    </li>
  </ul>
  <p class="modal-prod-desc">${e.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${e.price}</p>
  <button class="modal-prod-add-btn" >
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${i}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>$(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>p()),window.addEventListener("click",m),window.addEventListener("keydown",g)}catch(t){console.error(t)}}function $(e){const t=e._id,r=shopStorage.getAllProducts().some(a=>a._id===t),o=document.querySelector(".modal-prod-add-text");r?o.textContent="Add to":o.textContent="Remove from"}function p(){document.body.classList.remove("stop-scroll"),n.classList.remove("modal-active"),n.innerHTML="",window.removeEventListener("click",m),window.removeEventListener("keydown",g)}function m(e){e.target===n&&p()}function g(e){e.keyCode===27&&p()}function b(e){return e.map(({_id:t,name:s,img:r,category:o,price:a,size:d,popularity:f})=>`
            <li class="product-item" data-product-id='${t}'>
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
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${f}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${a}</p>
                <button class="cart-button" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="/img/symbol-defs.svg#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}const h=document.querySelector(".js-products-list");h.addEventListener("click",_);const S=new u,k=6;async function B(){const t=(await S.getAllProducts()).results.slice(0,k);P(t,h),C()}function P(e,t){t.innerHTML=b(e)}const l=JSON.parse(localStorage.getItem("cart"))||[];function C(){E()}function E(){const e=document.querySelectorAll(".cart-button");e&&e.forEach(t=>{t.addEventListener("click",A)})}function A(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId;I(t,s)}}function I(e,t){l.findIndex(r=>r.productId===t)!==-1?alert("Цей продукт вже доданий до кошика!"):l.push({productId:t,quantity:1}),x(e,!0),localStorage.setItem("cart",JSON.stringify(l))}function x(e,t){t?e.innerHTML=`<svg class="cart-icon" width="18" height="18">
        <use href="${i}#icon-check"></use>
        </svg>`:e.innerHTML=`<svg class="cart-icon" width="18" height="18">
        <use href="${i}#icon-basket"></use>
        </svg>`}B();function _(e){e.preventDefault();const t=e.target;if(t.closest("a")&&t.closest(".products-card-link")){const s=t.closest("li").dataset.productId;v(s).catch(r=>{console.error("Помилка при отриманні продукта за айді:",r.message)})}}
//# sourceMappingURL=commonHelpers2.js.map
