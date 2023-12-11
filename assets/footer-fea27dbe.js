var W=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var I=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var g=(e,t,s)=>(W(e,t,"access private method"),s);import{a as u,S as b,P as G,N as x}from"./vendor-c5b37fd0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();class y{constructor(){this.BASE_URL="https://food-boutique.b.goit.study/api"}async getProductsByName(t,s,r=1,o=6){const a=new URLSearchParams({keyword:t,category:s,page:r,limit:o});try{return(await u.get(`${this.BASE_URL}/products?${a}`)).data}catch{throw console.error("Помилка при отриманні продуктів:",error.message),error}}async getAllProducts(t=1,s=6){try{return(await u.get(`${this.BASE_URL}/products`,{params:{page:t,limit:s}})).data}catch(r){throw console.error("Помилка при отриманні всіх продуктів:",r.message),r}}async getPopularProducts(t){try{const s={limit:t};return(await u.get(`${this.BASE_URL}/products/popular`,{params:s})).data}catch(s){throw console.error("Помилка при отриманні популярних продуктів:",s.message),s}}async getDiscountedProducts(){try{return(await u.get(`${this.BASE_URL}/products/discount`)).data}catch(t){throw console.error("Помилка при отриманні продуктів зі знижкою:",t.message),t}}async getProductsByCategory(){try{return(await u.get(`${this.BASE_URL}/products/categories`)).data}catch(t){throw console.error("Помилка при отриманні продуктів за категорією:",t.message),t}}async getProductsInCategories(t,s=1,r=6){try{const o=new URLSearchParams({category:t,page:s,limit:r});return(await u.get(`${this.BASE_URL}/products?${o}`)).data}catch(o){throw console.error("Помилка при отриманні продуктів за категорією(при оновленні сторінки): ",o.message),o}}async getProductById(t){try{return(await u.get(`${this.BASE_URL}/products/${t}`)).data}catch(s){throw console.error("Помилка при отриманні продукта за айді:",s.message),s}}async createNewOrder(t){try{return(await u.post(`${this.BASE_URL}/orders`,t)).data}catch(s){throw console.error("Помилка при створенні нового замовлення:",s.message),s}}async createSubscription(t){try{return(await u.post(`${this.BASE_URL}/subscriptions`,{email:t})).data}catch(s){if(s.response&&s.response.status===409)return{conflict:!0};throw console.error("Error during subscription:",s.message),s}}}var p,f;class w{constructor(t){I(this,p);this.storageBasketName=t,this.initStorage()}initStorage(){this.getAllProducts()||g(this,p,f).call(this,[])}getAllProducts(){return JSON.parse(localStorage.getItem(this.storageBasketName))}addProduct(t){if(!t)return;const s=this.getAllProducts(),r=s.find(o=>o._id===t._id);r?r.amount+=1:(t.amount=1,s.push(t)),g(this,p,f).call(this,s)}removeProductById(t){const s=this.getAllProducts(),r=s.find(o=>o._id===t);if(r)r.amount>1?r.amount-=1:s.filter(o=>o._id===r._id);else return;g(this,p,f).call(this,s)}removeAllProductsById(t){g(this,p,f).call(this,this.getAllProducts().filter(s=>s._id!==t))}removeAllProducts(){g(this,p,f).call(this,[])}removeProduct(t){const r=this.getAllProducts().filter(o=>o._id!==t);g(this,p,f).call(this,r)}}p=new WeakSet,f=function(t){localStorage.setItem(this.storageBasketName,JSON.stringify(t))};const K="productsBasket",$=new w(K);function S(){return $.getAllProducts()}function M(e){$.addProduct(e)}function V(e){$.removeAllProductsById(e)}const P=()=>{const e=document.querySelector("#cart-counter-header"),t=S();e.textContent=`(${t.length})`};P();const l="/project-CodeCrafters/assets/symbol-defs-e77d3d30.svg";function q(e){return e.map(({_id:t,name:s,img:r,category:o,price:a,size:c,popularity:i})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${r}" alt="${s}" width="140" height="140" class="product-img">
              </div>
                  <h3 class="product-title-mark">${s}</h3>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${o.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${c}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${i}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${a}</p>
                <button class="cart-button cart-button-css" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${l}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}function h(e="The product has been added to the basket!",t="success"){b.fire({title:"",text:e,icon:t,confirmButtonColor:"#6d8434"})}const Y=new y,m=document.querySelector(".modal-prod-wrapper");async function L(e){m.classList.add("modal-active"),m.classList.add("loader");const t=await Y.getProductById(e);m.classList.remove("loader"),X(t),Q(t)}function Q(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;S().some(o=>o._id===s)?t.textContent="Remove from":t.textContent="Add to"}function X(e){try{m.classList.add("modal-active"),document.body.classList.add("stop-scroll"),m.innerHTML=`
  <div class='modal-prod-card'>
  <button type='button' class='modal-prod-close-btn'>
    <svg class='modal-prod-close-icon' width='22' height='22'>
      <use href='${l}#icon-ion_close-sharp'></use>
    </svg>
  </button>
  <div class='modal-prod-information-wrap'>
  <div class='modal-prod-img-wrap'>
      <img class='modal-prod-img' src='${e.img}' alt='${e.name}' />
  </div>
  <div class='modal-prod-name-wrap'>
  <p class='modal-prod-name'>${e.name}</p>
  <ul class='modal-prod-list'>
    <li class='modal-prod-item'>
      <p class='modal-prod-text'>Category: <span>${e.category.replace(/_/g," ")}</span></p>
    </li>
    <li class='modal-prod-item'>
      <p class='modal-prod-text'>Size: <span>${e.size}</span></p>
    </li>
    <li class='modal-prod-item'>
      <p class='modal-prod-text'>Popularity: <span>${e.popularity}</span></p>
    </li>
  </ul>
  <p class='modal-prod-desc'>${e.desc}</p>
  </div>
  </div>
  <div class='modal-prod-price-elem'>
  <p class='modal-prod-price'>&#36;${e.price}</p>
  <button class='modal-prod-add-btn' >
      <p class='modal-prod-add-text'>Add to</p>
      <svg class='modal-prod-basket-icon' >
        <use href='${l}#icon-basket'></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Z(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>B()),window.addEventListener("click",T),window.addEventListener("keydown",R)}catch(t){console.error(t)}}function Z(e){const t=e._id,r=S().some(a=>a._id===t),o=document.querySelector(".modal-prod-add-text");r?(V(t),h("The product has been removed from the basket!","info"),o.textContent="Add to",A(t,!1)):(M({_id:t,amount:1}),h(),o.textContent="Remove from",A(t,!0)),P()}function B(){document.body.classList.remove("stop-scroll"),m.classList.remove("modal-active"),m.innerHTML="",window.removeEventListener("click",T),window.removeEventListener("keydown",R)}function T(e){e.target===m&&B()}function R(e){e.keyCode===27&&B()}const _=document.querySelector(".js-products-list");_.addEventListener("click",lt);const tt=new y,et=6;let v;const st=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-check"></use>
</svg>`,ot=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-basket"></use>
</svg>`;async function rt(){const t=(await tt.getAllProducts()).results.slice(0,et);N(t,_),ct(),v.forEach(s=>{const r=S().some(o=>o._id===s.dataset.itemId);C(s,r)})}function N(e,t){t.innerHTML=q(e)}const at=S();function ct(){E()}function E(){v=document.querySelectorAll(".cart-button"),v&&v.forEach(e=>{e.addEventListener("click",nt)})}function nt(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:r,icon:o}=it(t,s);h(r,o),P()}}function it(e,t){const s=at.findIndex(a=>a._id===t);let r,o;return s!==-1?(r="This product has already been added to the cart!",o="warning"):M({_id:t,amount:1}),C(e,!0),{message:r,icon:o}}function A(e,t){v.forEach(s=>{s.dataset.itemId===e&&C(s,t)})}function C(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=st,s.disabled=!0):(e.innerHTML=ot,s.disabled=!1)}rt();function lt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".product-item")){const s=t.closest("li").dataset.productId;L(s).catch(r=>{console.error("Помилка при отриманні продукта за айді:",r.message)})}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new y,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const c=document.querySelector(".keyword-input"),i=t.value,n={keyword:c.value||null,category:i==="Show all"?null:i,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(n));try{let d;if(!n.keyword&&n.category===null?d=await e.getAllProducts(n.page,n.limit):n.keyword?d=await e.getProductsByName(n.keyword,n.category,n.page,n.limit):d=await e.getProductsInCategories(n.category,n.page,n.limit),console.log("Полученные продукты:",d),d.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&pt();else{const k=q(d.results),z=document.querySelector(".js-products-list");z.innerHTML=k,E(),o(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(d){console.error("Ошибка при получении продуктов:",d.message)}}try{const c=await e.getProductsByCategory();c.push("Show all"),c.forEach(i=>{const n=document.createElement("option");n.value=i,n.textContent=i,t.appendChild(n)})}catch(c){console.error("Ошибка при получении категорий:",c.message)}document.querySelector(".filter-form").addEventListener("submit",async c=>{c.preventDefault();const i=document.querySelector(".keyword-input"),n=t.value,d={keyword:i.value||null,category:n==="Show all"?null:n,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(d));const k={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(k)),await s()});function o(){const c=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");c&&c.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const a={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(a)),await s()});const O=document.querySelector(".input-box"),j=document.querySelector(".keyword-input");j.addEventListener("focus",dt);j.addEventListener("blur",ut);function dt(){O.classList.add("focus-within")}function ut(){O.classList.remove("focus-within")}function pt(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const r=document.createElement("p");r.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",r.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",r),localStorage.setItem("noResultsMessageDisplayed","true")}const H=document.querySelector(".js-discount-list");H.addEventListener("click",Pt);const mt=new y,U=new w("cart"),gt=`<svg class="ico">
<use href="${l}#icon-check"></use>
</svg>`,ft=`<svg class="ico">
<use href="${l}#icon-basket"></use>
</svg>`;async function ht(){const e=await mt.getDiscountedProducts();yt(e,H),St()}function yt(e,t){t.innerHTML=Lt(e)}const vt=U.getAllProducts();function St(){kt()}function kt(){const e=document.querySelectorAll(".discount-cart-js");e&&e.forEach(t=>{t.addEventListener("click",bt)})}function bt(e){const t=e.target.closest(".discount-cart-js");if(t){const s=t.dataset.itemId;wt(t,s),h()}}function wt(e,t,s,r){vt.findIndex(a=>a._id===t)!==-1?b.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):U.addProduct({_id:t,amount:1}),$t(e,!0)}function $t(e,t){if(t){e.innerHTML=gt;const s=document.querySelector(".discount-cart-js");s.disabled=!0}else e.innerHTML=ft}ht();function Pt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".popular-products-card-link")){const s=t.closest("li").dataset.productId;L(s).catch(r=>{console.error("Помилка при отриманні продукта за айді:",r.message)})}}function Lt(e){return e.map(({_id:t,name:s,img:r,price:o})=>`<li class="popular-product-item" data-product-id='${t}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${t}"> <img src="${r}" alt="" class="product-image">
        </div>
        <div class="product-text-pop">
            <h3 class="product-name">${s}
                <p class="product margin">
                    <p class="price">$${o}</p>
                </p>
            </h3>
            <button class="cart-button-pop cart-button" type="button" data-product-id="${t}" data-in-cart="false">
                <svg class="cart-icon-pop" width="18" height="18">
                    <use href="${l}#icon-basket"></use>
                </svg>
            </button>
        </div>
    </div>
</li>`).join("")}const F=document.querySelector(".js-popular-list");F.addEventListener("click",Ot);const Bt=new y,D=new w("cart");let J;const Et=`<svg class="ico">
<use href="${l}#icon-check"></use>
</svg>`,Ct=`<svg class="ico">
<use href="${l}#icon-basket"></use>
</svg>`;async function It(){const t=(await Bt.getPopularProducts()).filter(({popularity:s})=>s>3);xt(t,F),Mt()}function xt(e,t){J=e,t.innerHTML=Nt(e)}const At=D.getAllProducts();function Mt(){qt()}function qt(){const e=document.querySelectorAll(".popular-cart-button");e&&e.forEach(t=>{t.addEventListener("click",Tt)})}function Tt(e){const t=e.target.closest(".popular-cart-button");if(t){const s=t.dataset.itemId;Rt(t,s),h()}}function Rt(e,t,s,r){At.findIndex(a=>a._id===t)!==-1?b.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):D.addProduct({_id:t,amount:1}),_t(e,!0)}function _t(e,t){if(t){e.innerHTML=Et;const s=document.querySelector(".popular-cart-button");s.disabled=!0}else e.innerHTML=Ct}It();function Nt(e){return e.map(({_id:t,name:s,img:r,category:o,size:a,popularity:c})=>`<li class="popular-product-item" data-product-id='${t}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${t}"> <img src="${r}" alt="" class="product-image" width="56" height="56">
        </div>
        <div class="popular-left">
          <div class="product-text-pop">      
            <h3 class="product-name">${s}</h3>
          </div>  
                <p class="product margin">
                    Category: <span class="category-value">${o.replace("_"," ")}</span><br>
                    Size: <span class="size-value">${a}</span>
                    Popularity: <span class="popularity-value"> ${c}</span>
                </p>
        </div>
                    <button class="cart-button-pop cart-button" type="button" data-product-id="${t}" data-in-cart="false">
                <svg class="cart-icon-pop" width="12" height="12">
                    <use href="${l}#icon-basket"></use>
                </svg>
            </button>
    </div>
</li>`).join("")}function Ot(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".popular-product-item")){const s=t.closest("li").dataset.productId,r=J.find(o=>o._id===s);L(r).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}const jt=document.querySelector(".js-products-list"),Ht=new y,Ut=document.getElementById("pagination"),Ft={totalItems:540,itemsPerPage:6,visiblePages:4,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},Dt=new G(Ut,Ft);Dt.on("beforeMove",async e=>{const t=e.page,s=await Ht.getAllProducts(t,6);N(s.results,jt),E()});const Jt=new y,zt=document.getElementById("subscriptionForm"),Wt=document.querySelector(".footer-form-input");function Gt(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async function Kt(e){e.preventDefault();const t=Wt.value;if(Gt(t))try{const s=await Jt.createSubscription(t);s.conflict?h("This email address has already been entered. You have already subscribed to our new products. Watch for offers at the mailing address."):(console.log("Success:",s),h("Subscription completed successfully"))}catch(s){console.error("Error:",s),x.Notify.failure("Error during subscription")}else x.Notify.warning("Please enter a valid email address.");e.target.reset()}zt.addEventListener("submit",Kt);export{y as A,w as S};
//# sourceMappingURL=footer-fea27dbe.js.map
