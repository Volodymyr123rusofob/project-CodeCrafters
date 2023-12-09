var $=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var f=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)};var l=(s,t,e)=>($(s,t,"access private method"),e);/* empty css                      */import{a as c,S as y,P as k}from"./assets/vendor-ab16d78c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();var n,u;class A{constructor(t){f(this,n);this.storageBasketName=t,this.initStorage()}initStorage(){this.getAllProducts()||l(this,n,u).call(this,[])}getAllProducts(){return JSON.parse(localStorage.getItem(this.storageBasketName))}addProduct(t){if(!t)return;const e=this.getAllProducts(),r=e.find(o=>o._id===t._id);r?r.amount+=1:(t.amount=1,e.push(t)),l(this,n,u).call(this,e)}removeProductById(t){const e=this.getAllProducts(),r=e.find(o=>o._id===t);if(r)r.amount>1?r.amount-=1:e.filter(o=>o._id===r._id);else return;l(this,n,u).call(this,e)}removeAllProductsById(t){l(this,n,u).call(this,this.getAllProducts().filter(e=>e._id===t))}removeAllProducts(){l(this,n,u).call(this,[])}}n=new WeakSet,u=function(t){localStorage.setItem(this.storageBasketName,JSON.stringify(t))};class g{constructor(){this.BASE_URL="https://food-boutique.b.goit.study/api"}async getProductsByName(t,e,r=1,o=6){const a=new URLSearchParams({keyword:t,category:e,page:r,limit:o});try{return(await c.get(`${this.BASE_URL}/products?${a}`)).data}catch{throw console.error("Помилка при отриманні продуктів:",error.message),error}}async getAllProducts(t=1,e=6){try{return(await c.get(`${this.BASE_URL}/products`,{params:{page:t,limit:e}})).data}catch(r){throw console.error("Помилка при отриманні всіх продуктів:",r.message),r}}async getPopularProducts(t){try{const e={limit:t};return(await c.get(`${this.BASE_URL}/products/popular`,{params:e})).data}catch(e){throw console.error("Помилка при отриманні популярних продуктів:",e.message),e}}async getDiscountedProducts(){try{return(await c.get(`${this.BASE_URL}/products/discount`)).data}catch(t){throw console.error("Помилка при отриманні продуктів зі знижкою:",t.message),t}}async getProductsByCategory(){try{return(await c.get(`${this.BASE_URL}/products/categories`)).data}catch(t){throw console.error("Помилка при отриманні продуктів за категорією:",t.message),t}}async getProductsInCategories(t,e=1,r=6){try{const o=new URLSearchParams({category:t,page:e,limit:r});return(await c.get(`${this.BASE_URL}/products?${o}`)).data}catch(o){throw console.error("Помилка при отриманні продуктів за категорією(при оновленні сторінки): ",o.message),o}}async getProductById(t){try{return(await c.get(`${this.BASE_URL}/products/${t}`)).data}catch(e){throw console.error("Помилка при отриманні продукта за айді:",e.message),e}}async createNewOrder(t){try{return(await c.post(`${this.BASE_URL}/orders`,t)).data}catch(e){throw console.error("Помилка при створенні нового замовлення:",e.message),e}}async createSubscription(t){try{return(await c.post(`${this.BASE_URL}/subscriptions`,{email:t})).data}catch(e){throw console.error("Помилка при створенні підписки:",e.message),e}}}const p="/project-CodeCrafters/assets/symbol-defs-917d5806.svg",i=document.querySelector(".modal-prod-wrapper"),I="cart",v=new A(I),C=new g;async function E(s){i.classList.add("modal-active"),i.classList.add("loader");const t=await C.getProductById(s);i.classList.remove("loader"),_(t),x(t)}function x(s){const t=document.querySelector(".modal-prod-add-text"),e=s._id;v.getAllProducts().some(o=>o.productId===e)?t.textContent="Remove from":t.textContent="Add to"}function _(s){try{i.classList.add("modal-active"),document.body.classList.add("stop-scroll"),i.innerHTML=`
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
  <button class="modal-prod-add-btn" >
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${p}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>R(s)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>h()),window.addEventListener("click",w),window.addEventListener("keydown",b)}catch(t){console.error(t)}}function R(s){const t=s._id,r=v.getAllProducts().some(a=>a.productId===t),o=document.querySelector(".modal-prod-add-text");r?o.textContent="Add to":(o.textContent="Remove from",L(o,t))}function h(){document.body.classList.remove("stop-scroll"),i.classList.remove("modal-active"),i.innerHTML="",window.removeEventListener("click",w),window.removeEventListener("keydown",b)}function w(s){s.target===i&&h()}function b(s){s.keyCode===27&&h()}function M(s){return s.map(({_id:t,name:e,img:r,category:o,price:a,size:d,popularity:B})=>`
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
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${d}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${B}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${a}</p>
                <button class="cart-button" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${p}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}const P=document.querySelector(".js-products-list");P.addEventListener("click",J);const O=new g,T=6;async function N(){const t=(await O.getAllProducts()).results.slice(0,T);S(t,P),U()}function S(s,t){t.innerHTML=M(s)}const m=JSON.parse(localStorage.getItem("cart"))||[];function U(){q()}function q(){const s=document.querySelectorAll(".cart-button");s&&s.forEach(t=>{t.addEventListener("click",H)})}function H(s){const t=s.target.closest(".cart-button");if(t){const e=t.dataset.itemId;L(t,e)}}function L(s,t){m.findIndex(r=>r.productId===t)!==-1?y.fire({title:"",text:"his product has already been added to the cart!",icon:"success",confirmButtonColor:"#6d8434"}):m.push({productId:t,quantity:1}),j(s,!0),localStorage.setItem("cart",JSON.stringify(m))}function j(s,t){t?(s.innerHTML=`<svg class="cart-icon" width="18" height="18">
        <use href="${p}#icon-check"></use>
        </svg>`,y.fire({title:"",text:"The product has been added to the cart!",icon:"success",confirmButtonColor:"#6d8434"})):s.innerHTML=`<svg class="cart-icon" width="18" height="18">
        <use href="${p}#icon-basket"></use>
        </svg>`}N();function J(s){s.preventDefault();const t=s.target;if(console.log(t),t.closest("a")&&t.closest(".products-card-link")){const e=t.closest("li").dataset.productId;E(e).catch(r=>{console.error("Помилка при отриманні продукта за айді:",r.message)})}}const z=document.querySelector(".js-products-list"),F=new g,G=document.getElementById("pagination"),K={totalItems:540,itemsPerPage:6,visiblePages:4,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},W=new k(G,K);W.on("beforeMove",async s=>{const t=s.page,e=await F.getAllProducts(t,6);S(e.results,z)});
//# sourceMappingURL=commonHelpers2.js.map
