var N=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var S=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var p=(e,t,s)=>(N(e,t,"access private method"),s);/* empty css                      */import{a as i,S as w,P as R,N as y}from"./assets/vendor-c5b37fd0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const q="cart",T=document.querySelector("#cart-counter"),O=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},U=O(q)??[];T.textContent=`(${U.length})`;const g="/project-CodeCrafters/assets/symbol-defs-011caa0e.svg";function b(e){return e.map(({_id:t,name:s,img:r,category:o,price:a,size:c,popularity:n})=>`
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
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${c}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${n}</span></p>
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
            `).join("")}class f{constructor(){this.BASE_URL="https://food-boutique.b.goit.study/api"}async getProductsByName(t,s,r=1,o=6){const a=new URLSearchParams({keyword:t,category:s,page:r,limit:o});try{return(await i.get(`${this.BASE_URL}/products?${a}`)).data}catch{throw console.error("Помилка при отриманні продуктів:",error.message),error}}async getAllProducts(t=1,s=6){try{return(await i.get(`${this.BASE_URL}/products`,{params:{page:t,limit:s}})).data}catch(r){throw console.error("Помилка при отриманні всіх продуктів:",r.message),r}}async getPopularProducts(t){try{const s={limit:t};return(await i.get(`${this.BASE_URL}/products/popular`,{params:s})).data}catch(s){throw console.error("Помилка при отриманні популярних продуктів:",s.message),s}}async getDiscountedProducts(){try{return(await i.get(`${this.BASE_URL}/products/discount`)).data}catch(t){throw console.error("Помилка при отриманні продуктів зі знижкою:",t.message),t}}async getProductsByCategory(){try{return(await i.get(`${this.BASE_URL}/products/categories`)).data}catch(t){throw console.error("Помилка при отриманні продуктів за категорією:",t.message),t}}async getProductsInCategories(t,s=1,r=6){try{const o=new URLSearchParams({category:t,page:s,limit:r});return(await i.get(`${this.BASE_URL}/products?${o}`)).data}catch(o){throw console.error("Помилка при отриманні продуктів за категорією(при оновленні сторінки): ",o.message),o}}async getProductById(t){try{return(await i.get(`${this.BASE_URL}/products/${t}`)).data}catch(s){throw console.error("Помилка при отриманні продукта за айді:",s.message),s}}async createNewOrder(t){try{return(await i.post(`${this.BASE_URL}/orders`,t)).data}catch(s){throw console.error("Помилка при створенні нового замовлення:",s.message),s}}async createSubscription(t){try{return(await i.post(`${this.BASE_URL}/subscriptions`,{email:t})).data}catch(s){throw console.error("Помилка при створенні підписки:",s.message),s}}}var d,m;class L{constructor(t){S(this,d);this.storageBasketName=t,this.initStorage()}initStorage(){this.getAllProducts()||p(this,d,m).call(this,[])}getAllProducts(){return JSON.parse(localStorage.getItem(this.storageBasketName))}addProduct(t){if(!t)return;const s=this.getAllProducts(),r=s.find(o=>o._id===t._id);r?r.amount+=1:(t.amount=1,s.push(t)),p(this,d,m).call(this,s)}removeProductById(t){const s=this.getAllProducts(),r=s.find(o=>o._id===t);if(r)r.amount>1?r.amount-=1:s.filter(o=>o._id===r._id);else return;p(this,d,m).call(this,s)}removeAllProductsById(t){p(this,d,m).call(this,this.getAllProducts().filter(s=>s._id===t))}removeAllProducts(){p(this,d,m).call(this,[])}}d=new WeakSet,m=function(t){localStorage.setItem(this.storageBasketName,JSON.stringify(t))};const u=document.querySelector(".modal-prod-wrapper"),j="cart",P=new L(j),F=new f;async function H(e){u.classList.add("modal-active"),u.classList.add("loader");const t=await F.getProductById(e);u.classList.remove("loader"),z(t),J(t)}function J(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;P.getAllProducts().some(o=>o.productId===s)?t.textContent="Remove from":t.textContent="Add to"}function z(e){try{u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${g}#icon-ion_close-sharp"></use>
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
        <use href="${g}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>G(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>h()),window.addEventListener("click",k),window.addEventListener("keydown",E)}catch(t){console.error(t)}}function G(e){const t=e._id,r=P.getAllProducts().some(a=>a.productId===t),o=document.querySelector(".modal-prod-add-text");r?o.textContent="Add to":(o.textContent="Remove from",x(o,t))}function h(){document.body.classList.remove("stop-scroll"),u.classList.remove("modal-active"),u.innerHTML="",window.removeEventListener("click",k),window.removeEventListener("keydown",E)}function k(e){e.target===u&&h()}function E(e){e.keyCode===27&&h()}function K(){w.fire({title:"",text:"The product has been added to the cart!",icon:"success",confirmButtonColor:"#6d8434"})}const B=document.querySelector(".js-products-list");B.addEventListener("click",st);const D=new f,V=6,C=new L("cart"),W=`<svg class="cart-icon" width="18" height="18">
<use href="${g}#icon-check"></use>
</svg>`,Y=`<svg class="cart-icon" width="18" height="18">
<use href="${g}#icon-basket"></use>
</svg>`;async function Q(){const t=(await D.getAllProducts()).results.slice(0,V);$(t,B),Z()}function $(e,t){t.innerHTML=b(e)}const X=C.getAllProducts();function Z(){v()}function v(){const e=document.querySelectorAll(".cart-button");e&&e.forEach(t=>{t.addEventListener("click",tt)})}function tt(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId;x(t,s),K()}}function x(e,t,s,r){X.findIndex(a=>a._id===t)!==-1?w.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):C.addProduct({_id:t,amount:1}),et(e,!0)}function et(e,t){if(t){e.innerHTML=W;const s=document.querySelector(".cart-button");s.disabled=!0}else e.innerHTML=Y}Q();function st(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".products-card-link")){const s=t.closest("li").dataset.productId;H(s).catch(r=>{console.error("Помилка при отриманні продукта за айді:",r.message)})}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new f,t=document.querySelector(".category-select");try{const o=await e.getProductsByCategory();o.push("Show all"),o.forEach(a=>{const c=document.createElement("option");c.value=a,c.textContent=a,t.appendChild(c)})}catch(o){console.error("Ошибка при получении категорий:",o.message)}document.querySelector(".filter-form").addEventListener("submit",async o=>{o.preventDefault();const a=document.querySelector(".keyword-input"),c=t.value,n={keyword:a.value||null,category:c==="Show all"?null:c,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(n));try{let l;if(!n.keyword&&n.category===null?l=await e.getAllProducts(n.page,n.limit):n.keyword?l=await e.getProductsByName(n.keyword,n.category,n.page,n.limit):l=await e.getProductsInCategories(n.category,n.page,n.limit),console.log("Полученные продукты:",l),l.totalPages===0)at();else{const _=b(l.results),M=document.querySelector(".js-products-list");M.innerHTML=_,v()}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}});const r={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(r))});const A=document.querySelector(".input-box"),I=document.querySelector(".keyword-input");I.addEventListener("focus",ot);I.addEventListener("blur",rt);function ot(){A.classList.add("focus-within")}function rt(){A.classList.remove("focus-within")}function at(){if(localStorage.getItem("noResultsMessageDisplayed")==="true")return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const r=document.createElement("p");r.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",r.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",r),localStorage.setItem("noResultsMessageDisplayed","true")}const nt=document.querySelector(".js-products-list"),ct=new f,it=document.getElementById("pagination"),lt={totalItems:540,itemsPerPage:6,visiblePages:4,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},dt=new R(it,lt);dt.on("beforeMove",async e=>{const t=e.page,s=await ct.getAllProducts(t,6);$(s.results,nt),v()});const ut=new f,pt=document.getElementById("subscriptionForm"),mt=document.querySelector(".footer-form-input");function gt(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async function ft(e){e.preventDefault();const t=mt.value;if(gt(t))try{const s=await ut.createSubscription(t);console.log("Success:",s),y.Notify.success("Subscription completed successfully")}catch(s){console.error("Error:",s),y.Notify.failure("Error during subscription")}else y.Notify.warning("Please enter a valid email address.");e.target.reset()}pt.addEventListener("submit",ft);
//# sourceMappingURL=commonHelpers2.js.map
