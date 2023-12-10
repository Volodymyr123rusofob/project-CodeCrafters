var D=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var B=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)};var g=(e,t,s)=>(D(e,t,"access private method"),s);/* empty css                      */import{a as i,S as E,P as J,N as k}from"./assets/vendor-c5b37fd0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();var l,f;class C{constructor(t){B(this,l);this.storageBasketName=t,this.initStorage()}initStorage(){this.getAllProducts()||g(this,l,f).call(this,[])}getAllProducts(){return JSON.parse(localStorage.getItem(this.storageBasketName))}addProduct(t){if(!t)return;const s=this.getAllProducts(),r=s.find(o=>o._id===t._id);r?r.amount+=1:(t.amount=1,s.push(t)),g(this,l,f).call(this,s)}removeProductById(t){const s=this.getAllProducts(),r=s.find(o=>o._id===t);if(r)r.amount>1?r.amount-=1:s.filter(o=>o._id===r._id);else return;g(this,l,f).call(this,s)}removeAllProductsById(t){g(this,l,f).call(this,this.getAllProducts().filter(s=>s._id!==t))}removeAllProducts(){g(this,l,f).call(this,[])}removeProduct(t){const r=this.getAllProducts().filter(o=>o._id!==t);g(this,l,f).call(this,r)}}l=new WeakSet,f=function(t){localStorage.setItem(this.storageBasketName,JSON.stringify(t))};const G="productsBasket",b=new C(G);function S(){return b.getAllProducts()}function I(e){b.addProduct(e)}function K(e){b.removeAllProductsById(e)}const V="productsBasket",W=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},x=()=>{const e=document.querySelector("#cart-counter"),t=W(V)??[];e.textContent=`(${t.length})`};x();const m="/project-CodeCrafters/assets/symbol-defs-e77d3d30.svg";function A(e){return e.map(({_id:t,name:s,img:r,category:o,price:a,size:c,popularity:d})=>`
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
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${d}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${a}</p>
                <button class="cart-button" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${m}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}class h{constructor(){this.BASE_URL="https://food-boutique.b.goit.study/api"}async getProductsByName(t,s,r=1,o=6){const a=new URLSearchParams({keyword:t,category:s,page:r,limit:o});try{return(await i.get(`${this.BASE_URL}/products?${a}`)).data}catch{throw console.error("Помилка при отриманні продуктів:",error.message),error}}async getAllProducts(t=1,s=6){try{return(await i.get(`${this.BASE_URL}/products`,{params:{page:t,limit:s}})).data}catch(r){throw console.error("Помилка при отриманні всіх продуктів:",r.message),r}}async getPopularProducts(t){try{const s={limit:t};return(await i.get(`${this.BASE_URL}/products/popular`,{params:s})).data}catch(s){throw console.error("Помилка при отриманні популярних продуктів:",s.message),s}}async getDiscountedProducts(){try{return(await i.get(`${this.BASE_URL}/products/discount`)).data}catch(t){throw console.error("Помилка при отриманні продуктів зі знижкою:",t.message),t}}async getProductsByCategory(){try{return(await i.get(`${this.BASE_URL}/products/categories`)).data}catch(t){throw console.error("Помилка при отриманні продуктів за категорією:",t.message),t}}async getProductsInCategories(t,s=1,r=6){try{const o=new URLSearchParams({category:t,page:s,limit:r});return(await i.get(`${this.BASE_URL}/products?${o}`)).data}catch(o){throw console.error("Помилка при отриманні продуктів за категорією(при оновленні сторінки): ",o.message),o}}async getProductById(t){try{return(await i.get(`${this.BASE_URL}/products/${t}`)).data}catch(s){throw console.error("Помилка при отриманні продукта за айді:",s.message),s}}async createNewOrder(t){try{return(await i.post(`${this.BASE_URL}/orders`,t)).data}catch(s){throw console.error("Помилка при створенні нового замовлення:",s.message),s}}async createSubscription(t){try{return(await i.post(`${this.BASE_URL}/subscriptions`,{email:t})).data}catch(s){throw console.error("Помилка при створенні підписки:",s.message),s}}}function v(e="The product has been added to the basket!",t="success"){E.fire({title:"",text:e,icon:t,confirmButtonColor:"#6d8434"})}const p=document.querySelector(".modal-prod-wrapper");async function M(e){p.classList.add("modal-active"),p.classList.add("loader"),p.classList.remove("loader"),Q(e),Y(e)}function Y(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;S().some(o=>o._id===s)?t.textContent="Remove from":t.textContent="Add to"}function Q(e){try{p.classList.add("modal-active"),document.body.classList.add("stop-scroll"),p.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${m}#icon-ion_close-sharp"></use>
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
        <use href="${m}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>X(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>w()),window.addEventListener("click",_),window.addEventListener("keydown",R)}catch(t){console.error(t)}}function X(e){const t=e._id,r=S().some(a=>a._id===t),o=document.querySelector(".modal-prod-add-text");r?(K(t),v("The product has been removed from the basket!"),o.textContent="Add to",$(t,!1)):(I({_id:t,amount:1}),v(),o.textContent="Remove from",$(t,!0))}function w(){document.body.classList.remove("stop-scroll"),p.classList.remove("modal-active"),p.innerHTML="",window.removeEventListener("click",_),window.removeEventListener("keydown",R)}function _(e){e.target===p&&w()}function R(e){e.keyCode===27&&w()}const q=document.querySelector(".js-products-list");q.addEventListener("click",it);const Z=new h,tt=6;let T,y;const et=`<svg class="cart-icon" width="18" height="18">
<use href="${m}#icon-check"></use>
</svg>`,st=`<svg class="cart-icon" width="18" height="18">
<use href="${m}#icon-basket"></use>
</svg>`;async function ot(){const t=(await Z.getAllProducts()).results.slice(0,tt);N(t,q),at(),y.forEach(s=>{const r=S().some(o=>o._id===s.dataset.itemId);L(s,r)})}function N(e,t){T=e,t.innerHTML=A(e)}const rt=S();function at(){P()}function P(){y=document.querySelectorAll(".cart-button"),y&&y.forEach(e=>{e.addEventListener("click",ct)})}function ct(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:r,icon:o}=nt(t,s);v(r,o),x()}}function nt(e,t){const s=rt.findIndex(a=>a._id===t);let r,o;return s!==-1?(r="This product has already been added to the cart!",o="warning"):I({_id:t,amount:1}),L(e,!0),{message:r,icon:o}}function $(e,t){y.forEach(s=>{s.dataset.itemId===e&&L(s,t)})}function L(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=et,s.disabled=!0):(e.innerHTML=st,s.disabled=!1)}ot();function it(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".products-card-link")){const s=t.closest("li").dataset.productId,r=T.find(o=>o._id===s);M(r).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new h,t=document.querySelector(".category-select");try{const a=await e.getProductsByCategory();a.push("Show all"),a.forEach(c=>{const d=document.createElement("option");d.value=c,d.textContent=c,t.appendChild(d)})}catch(a){console.error("Ошибка при получении категорий:",a.message)}document.querySelector(".filter-form").addEventListener("submit",async a=>{a.preventDefault();const c=document.querySelector(".keyword-input"),d=t.value,n={keyword:c.value||null,category:d==="Show all"?null:d,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(n));try{let u;if(!n.keyword&&n.category===null?u=await e.getAllProducts(n.page,n.limit):n.keyword?u=await e.getProductsByName(n.keyword,n.category,n.page,n.limit):u=await e.getProductsInCategories(n.category,n.page,n.limit),console.log("Полученные продукты:",u),u.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&ut();else{const F=A(u.results),z=document.querySelector(".js-products-list");z.innerHTML=F,P(),r(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(u){console.error("Ошибка при получении продуктов:",u.message)}});function r(){const a=document.querySelector(".filters-title"),c=document.querySelector(".filters-text");a&&a.remove(),c&&c.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const o={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(o))});const O=document.querySelector(".input-box"),U=document.querySelector(".keyword-input");U.addEventListener("focus",lt);U.addEventListener("blur",dt);function lt(){O.classList.add("focus-within")}function dt(){O.classList.remove("focus-within")}function ut(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const r=document.createElement("p");r.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",r.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",r),localStorage.setItem("noResultsMessageDisplayed","true")}const j=document.querySelector(".js-popular-list");j.addEventListener("click",Pt);const pt=new h,H=new C("cart"),mt=`<svg class="ico">
<use href="${m}#icon-check"></use>
</svg>`,gt=`<svg class="ico">
<use href="${m}#icon-basket"></use>
</svg>`;async function ft(){const t=(await pt.getPopularProducts()).filter(({popularity:s})=>s>3);yt(t,j),vt()}function yt(e,t){t.innerHTML=Lt(e)}const ht=H.getAllProducts();function vt(){St()}function St(){const e=document.querySelectorAll(".popular-cart-button");e&&e.forEach(t=>{t.addEventListener("click",kt)})}function kt(e){const t=e.target.closest(".popular-cart-button");if(t){const s=t.dataset.itemId;bt(t,s),v()}}function bt(e,t,s,r){ht.findIndex(a=>a._id===t)!==-1?E.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):H.addProduct({_id:t,amount:1}),wt(e,!0)}function wt(e,t){if(t){e.innerHTML=mt;const s=document.querySelector(".popular-cart-button");s.disabled=!0}else e.innerHTML=gt}ft();function Pt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".popular-products-card-link")){const s=t.closest("li").dataset.productId;M(s).catch(r=>{console.error("Помилка при отриманні продукта за айді:",r.message)})}}function Lt(e){return e.map(({_id:t,name:s,img:r,category:o,size:a,popularity:c})=>`<li class="popular-product-item" data-product-id='${t}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${t}"> <img src="${r}" alt="" class="product-image">
        </div>
        <div class="product-text-pop">
            <h3 class="product-name">${s}
                <p class="product margin">
                    Category: <span class="category-value">${o.replace("_"," ")}</span><br>
                    Size: <span class="size-value">${a}</span><br>
                    Popularity: <span class="popularity-value">${c}</span>
                </p>
            </h3>
            <button class="cart-button-pop" type="button" data-product-id="${t}" data-in-cart="false">
                <svg class="cart-icon-pop" width="18" height="18">
                    <use href="${m}#icon-basket"></use>
                </svg>
            </button>
        </div>
    </div>
</li>`).join("")}const Bt=document.querySelector(".js-products-list"),$t=new h,Et=document.getElementById("pagination"),Ct={totalItems:540,itemsPerPage:6,visiblePages:4,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},It=new J(Et,Ct);It.on("beforeMove",async e=>{const t=e.page,s=await $t.getAllProducts(t,6);N(s.results,Bt),P()});const xt=new h,At=document.getElementById("subscriptionForm"),Mt=document.querySelector(".footer-form-input");function _t(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async function Rt(e){e.preventDefault();const t=Mt.value;if(_t(t))try{const s=await xt.createSubscription(t);console.log("Success:",s),k.Notify.success("Subscription completed successfully")}catch(s){console.error("Error:",s),k.Notify.failure("Error during subscription")}else k.Notify.warning("Please enter a valid email address.");e.target.reset()}At.addEventListener("submit",Rt);
//# sourceMappingURL=commonHelpers2.js.map
