var q=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var y=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)};var p=(s,t,e)=>(q(s,t,"access private method"),e);/* empty css                      */import{a as i,S as v,P as M}from"./assets/vendor-ab16d78c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const g="/project-CodeCrafters/assets/symbol-defs-011caa0e.svg";function w(s){return s.map(({_id:t,name:e,img:r,category:o,price:a,size:n,popularity:c})=>`
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
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${o.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${n}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${c}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${a}</p>
                <button class="cart-button" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${g}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}class f{constructor(){this.BASE_URL="https://food-boutique.b.goit.study/api"}async getProductsByName(t,e,r=1,o=6){const a=new URLSearchParams({keyword:t,category:e,page:r,limit:o});try{return(await i.get(`${this.BASE_URL}/products?${a}`)).data}catch{throw console.error("Помилка при отриманні продуктів:",error.message),error}}async getAllProducts(t=1,e=6){try{return(await i.get(`${this.BASE_URL}/products`,{params:{page:t,limit:e}})).data}catch(r){throw console.error("Помилка при отриманні всіх продуктів:",r.message),r}}async getPopularProducts(t){try{const e={limit:t};return(await i.get(`${this.BASE_URL}/products/popular`,{params:e})).data}catch(e){throw console.error("Помилка при отриманні популярних продуктів:",e.message),e}}async getDiscountedProducts(){try{return(await i.get(`${this.BASE_URL}/products/discount`)).data}catch(t){throw console.error("Помилка при отриманні продуктів зі знижкою:",t.message),t}}async getProductsByCategory(){try{return(await i.get(`${this.BASE_URL}/products/categories`)).data}catch(t){throw console.error("Помилка при отриманні продуктів за категорією:",t.message),t}}async getProductsInCategories(t,e=1,r=6){try{const o=new URLSearchParams({category:t,page:e,limit:r});return(await i.get(`${this.BASE_URL}/products?${o}`)).data}catch(o){throw console.error("Помилка при отриманні продуктів за категорією(при оновленні сторінки): ",o.message),o}}async getProductById(t){try{return(await i.get(`${this.BASE_URL}/products/${t}`)).data}catch(e){throw console.error("Помилка при отриманні продукта за айді:",e.message),e}}async createNewOrder(t){try{return(await i.post(`${this.BASE_URL}/orders`,t)).data}catch(e){throw console.error("Помилка при створенні нового замовлення:",e.message),e}}async createSubscription(t){try{return(await i.post(`${this.BASE_URL}/subscriptions`,{email:t})).data}catch(e){throw console.error("Помилка при створенні підписки:",e.message),e}}}document.addEventListener("DOMContentLoaded",async()=>{const s=new f,t=document.querySelector(".category-select");try{const o=await s.getProductsByCategory();o.push("Show all"),o.forEach(a=>{const n=document.createElement("option");n.value=a,n.textContent=a,t.appendChild(n)})}catch(o){console.error("Ошибка при получении категорий:",o.message)}document.querySelector(".filter-form").addEventListener("submit",async o=>{o.preventDefault();const a=document.querySelector(".keyword-input"),n=t.value,c={keyword:a.value||null,category:n==="Show all"?null:n,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(c));try{let u;!c.keyword&&c.category===null?u=await s.getAllProducts(c.page,c.limit):c.keyword?u=await s.getProductsByName(c.keyword,c.category,c.page,c.limit):u=await s.getProductsInCategories(c.category,c.page,c.limit),console.log("Полученные продукты:",u);const x=w(u.results),_=document.querySelector(".js-products-list");_.innerHTML=x}catch(u){console.error("Ошибка при получении продуктов:",u.message)}});const r={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(r))});const S=document.querySelector(".input-box"),L=document.querySelector(".keyword-input");L.addEventListener("focus",O);L.addEventListener("blur",R);function O(){S.classList.add("focus-within")}function R(){S.classList.remove("focus-within")}var d,m;class b{constructor(t){y(this,d);this.storageBasketName=t,this.initStorage()}initStorage(){this.getAllProducts()||p(this,d,m).call(this,[])}getAllProducts(){return JSON.parse(localStorage.getItem(this.storageBasketName))}addProduct(t){if(!t)return;const e=this.getAllProducts(),r=e.find(o=>o._id===t._id);r?r.amount+=1:(t.amount=1,e.push(t)),p(this,d,m).call(this,e)}removeProductById(t){const e=this.getAllProducts(),r=e.find(o=>o._id===t);if(r)r.amount>1?r.amount-=1:e.filter(o=>o._id===r._id);else return;p(this,d,m).call(this,e)}removeAllProductsById(t){p(this,d,m).call(this,this.getAllProducts().filter(e=>e._id===t))}removeAllProducts(){p(this,d,m).call(this,[])}}d=new WeakSet,m=function(t){localStorage.setItem(this.storageBasketName,JSON.stringify(t))};const l=document.querySelector(".modal-prod-wrapper"),T="cart",k=new b(T),N=new f;async function U(s){l.classList.add("modal-active"),l.classList.add("loader");const t=await N.getProductById(s);l.classList.remove("loader"),F(t),H(t)}function H(s){const t=document.querySelector(".modal-prod-add-text"),e=s._id;k.getAllProducts().some(o=>o.productId===e)?t.textContent="Remove from":t.textContent="Add to"}function F(s){try{l.classList.add("modal-active"),document.body.classList.add("stop-scroll"),l.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${g}#icon-ion_close-sharp"></use>
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
  <button class="modal-prod-add-btn" >
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${g}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>j(s)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>h()),window.addEventListener("click",P),window.addEventListener("keydown",B)}catch(t){console.error(t)}}function j(s){const t=s._id,r=k.getAllProducts().some(a=>a.productId===t),o=document.querySelector(".modal-prod-add-text");r?o.textContent="Add to":(o.textContent="Remove from",I(o,t))}function h(){document.body.classList.remove("stop-scroll"),l.classList.remove("modal-active"),l.innerHTML="",window.removeEventListener("click",P),window.removeEventListener("keydown",B)}function P(s){s.target===l&&h()}function B(s){s.keyCode===27&&h()}function J(){v.fire({title:"",text:"The product has been added to the cart!",icon:"success",confirmButtonColor:"#6d8434"})}const $=document.querySelector(".js-products-list");$.addEventListener("click",D);const z=new f,G=6,C=new b("cart"),K=`<svg class="cart-icon" width="18" height="18">
<use href="${g}#icon-check"></use>
</svg>`,W=`<svg class="cart-icon" width="18" height="18">
<use href="${g}#icon-basket"></use>
</svg>`;async function Q(){const t=(await z.getAllProducts()).results.slice(0,G);A(t,$),X()}function A(s,t){t.innerHTML=w(s)}const V=C.getAllProducts();function X(){E()}function E(){const s=document.querySelectorAll(".cart-button");s&&s.forEach(t=>{t.addEventListener("click",Y)})}function Y(s){const t=s.target.closest(".cart-button");if(t){const e=t.dataset.itemId;I(t,e),J()}}function I(s,t,e,r){V.findIndex(a=>a._id===t)!==-1?v.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):C.addProduct({_id:t,amount:1}),Z(s,!0)}function Z(s,t){if(t){s.innerHTML=K;const e=document.querySelector(".cart-button");e.disabled=!0}else s.innerHTML=W}Q();function D(s){s.preventDefault();const t=s.target;if(console.log(t),t.closest("a")&&t.closest(".products-card-link")){const e=t.closest("li").dataset.productId;U(e).catch(r=>{console.error("Помилка при отриманні продукта за айді:",r.message)})}}const tt=document.querySelector(".js-products-list"),et=new f,st=document.getElementById("pagination"),ot={totalItems:540,itemsPerPage:6,visiblePages:4,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},rt=new M(st,ot);rt.on("beforeMove",async s=>{const t=s.page,e=await et.getAllProducts(t,6);A(e.results,tt),E()});
//# sourceMappingURL=commonHelpers2.js.map
