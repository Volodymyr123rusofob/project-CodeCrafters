import{i as r,g as p,a as P,b as h,r as H,u as L,A as g}from"./assets/footer-8739a89d.js";import{P as j}from"./assets/vendor-ab16d78c.js";function I(e){return e.map(({_id:t,name:s,img:a,category:o,price:d,size:n,popularity:i})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${a}" alt="${s}" width="140" height="140" class="product-img" loading="lazy">
              </div>
                  <h3 class="product-title-mark">${s}</h3>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${o.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${n}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${i}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${d}</p>
                <button class="cart-button cart-button-css" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${r}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}const u=document.querySelector(".modal-prod-wrapper"),z=new g;async function k(e){u.classList.add("modal-active"),u.classList.add("loader");const t=await z.getProductById(e._id);u.classList.remove("loader"),J(t),D(t)}function D(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;p().some(o=>o._id===s)?t.textContent="Remove from":t.textContent="Add to"}function J(e){try{u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${r}#icon-ion_close-sharp"></use>
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
      <p class="modal-prod-text">Category: <span>${e.category.replace(/_/g," ")}</span></p>
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
        <use href="${r}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>W(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>b()),window.addEventListener("click",E),window.addEventListener("keydown",B)}catch(t){console.error(t)}}function W(e){const t=e._id,a=p().some(d=>d._id===t),o=document.querySelector(".modal-prod-add-text");a?(H(t),o.textContent="Add to",$(t,!1),h("The product has been removed the basket!","info")):(P({_id:t,amount:1}),h(),o.textContent="Remove from",$(t,!0)),L()}function b(){document.body.classList.remove("stop-scroll"),u.classList.remove("modal-active"),u.innerHTML="",window.removeEventListener("click",E),window.removeEventListener("keydown",B)}function E(e){e.target===u&&b()}function B(e){e.keyCode===27&&b()}const C=document.querySelector(".js-products-list");C.addEventListener("click",tt);const K=new g,U=9;let M,m;const G=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-check"></use>
</svg>`,Q=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-basket"></use>
</svg>`;async function V(){const t=(await K.getAllProducts()).results.slice(0,U);x(t,C),f(),m.forEach(s=>{const a=p().some(o=>o._id===s.dataset.itemId);S(s,a)})}function x(e,t){M=e,t.innerHTML=I(e)}const X=p();function f(){m=document.querySelectorAll(".cart-button"),m&&m.forEach(e=>{e.addEventListener("click",Y)})}function Y(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:a,icon:o}=Z(t,s);h(a,o),L()}}function Z(e,t){const s=X.findIndex(d=>d._id===t);let a,o;return s!==-1?(a="This product has already been added to the cart!",o="warning"):P({_id:t,amount:1}),S(e,!0),{message:a,icon:o}}function $(e,t){m.forEach(s=>{s.dataset.itemId===e&&S(s,t)})}function S(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=G,s.disabled=!0):(e.innerHTML=Q,s.disabled=!1)}V();function tt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".product-item")){const s=t.closest("li").dataset.productId,a=M.find(o=>o._id===s);k(a).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}class et{constructor(t){this.storageFilter=t}initStorageForFilter(){if(this.getFilterProducts()){console.log("this.storageFilter=",this.storageFilter);return}this.writeToLocalStorage([]),console.log("this.storageFilter-[]")}getFilterProducts(){return JSON.parse(localStorage.getItem(this.storageFilter))}removeFilterProducts(){this.writeToLocalStorage([])}writeToLocalStorage(t){localStorage.setItem(this.storageFilter,JSON.stringify(t))}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new g,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const n=document.querySelector(".keyword-input"),i=t.value,c={keyword:n.value||null,category:i==="Show all"?t.selectedCategory="":i,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(c));try{let l;!c.keyword&&c.category===null?l=await e.getAllProducts(c.page,c.limit):c.keyword?l=await e.getProductsByName(c.keyword,c.category,c.page,c.limit):l=await e.getProductsInCategories(c.category,c.page,c.limit),console.log("Полученные продукты:(products=>)",l);const v="filterOfProducts",_=new et(v),A=l.results;if(_.writeToLocalStorage(A),l.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&at();else{const N=I(l.results),R=document.querySelector(".js-products-list");R.innerHTML=N,f(),o(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}}try{const n=await e.getProductsByCategory();n.push("Show all"),n.forEach(i=>{const c=document.createElement("option");c.value=i,c.textContent=i,t.appendChild(c)})}catch(n){console.error("Ошибка при получении категорий:",n.message)}document.querySelector(".filter-form").addEventListener("submit",async n=>{n.preventDefault();const i=document.querySelector(".keyword-input"),c=t.value,l={keyword:i.value||null,category:c==="Show all"?null:c,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(l));const v={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(v)),await s()});function o(){const n=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");n&&n.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const d={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(d)),await s()});const q=document.querySelector(".input-box"),T=document.querySelector(".keyword-input");T.addEventListener("focus",st);T.addEventListener("blur",ot);function st(){q.classList.add("focus-within")}function ot(){q.classList.remove("focus-within")}function at(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const a=document.createElement("p");a.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",a.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",a),localStorage.setItem("noResultsMessageDisplayed","true")}function ct(e){return e.map(({_id:t,name:s,img:a,price:o})=>`<li class="discount-product-item" data-product-id='${t}'>
    <div class="discount-con">
        <div class="discount-image-container" data-product-id="${t}"> <img src="${a}" alt="${s}" class="discount-image" width="114" height="114" loading="lazy">
        </div>
        <div class="discount-info-container">
          <h3 class="product-name product-name-disc">${s} </h3>
          <div class="discount-text-container">  
            <p class="price price-disc">$${o}</p>
            <button class="cart-button-disk cart-button" type="button" data-item-id="${t}" data-in-cart="false">
                <svg class="cart-icon-disk" width="18" height="18">
                    <use href="${r}#icon-basket"></use>
                </svg>
            </button>
          </div>
        </div> 
        <div class="div-icon-discount">
          <svg class="icon-discount" width="60" height="60">
            <use href="${r}#icon-discount"></use>
          </svg>
        </div>
    </div>
</li>`).join("")}const F=document.querySelector(".js-discount-list");F.addEventListener("click",gt);const nt=new g,rt=2;let it=[],y;async function lt(){y=(await nt.getDiscountedProducts()).slice(0,rt),pt(y,F),f(),it.forEach(t=>{dt(t._id,p().some(s=>s._id===t._id))})}lt();function dt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&ut(s,t)})}function ut(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="ico">
  <use href="${icons}#icon-check"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="ico">
  <use href="${icons}#icon-basket"></use>
  </svg>`,s.disabled=!1)}function pt(e,t){t.innerHTML=ct(e)}function gt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".discount-product-item")){const s=t.closest("li").dataset.productId,a=y.find(o=>o._id===s);k(a).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}function mt(e){return e.map(({_id:t,name:s,img:a,category:o,size:d,popularity:n})=>`
      <li class="popular-product-item" data-product-id='${t}'>
        <div class="popular-con">
          <div class="product-image-container" data-product-id="${t}"> 
            <img src="${a}" alt="" class="product-image" width="56" height="56" loading="lazy">
          </div>
          <div class="popular-left">
            <div class="product-text-pop">
              <h3 class="product-name">${s}</h3>
            </div>
            <p class="product margin">
              Category: <span class="category-value">${o.replace("_"," ")}</span><br>
              Size: <span class="size-value">${d}</span>
              Popularity: <span class="popularity-value"> ${n}</span>
            </p>
          </div>
        <button class="cart-button-pop cart-button" type="button" data-item-id="${t}" data-in-cart="false">
                <svg class="cart-icon-pop" width="12" height="12">
                    <use href="${r}#icon-basket"></use>
                </svg>
            </button>
          </button>
        </div>
      </li>
      `).join("")}const O=document.querySelector(".js-popular-list");O.addEventListener("click",St);const ft=new g,vt=5;let ht=[],w;async function yt(){w=(await ft.getPopularProducts()).slice(0,vt),bt(w,O),f(),ht.forEach(t=>{wt(t._id,p().some(s=>s._id===t._id))})}yt();function wt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&kt(s,t)})}function kt(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="cart-icon-pop">
  <use href="${r}#icon-check" width="12" height="12"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="cart-icon-pop">
  <use href="${r}#icon-basket" width="12" height="12"></use>
  </svg>`,s.disabled=!1)}function bt(e,t){t.innerHTML=mt(e)}function St(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".popular-product-item")){const s=t.closest("li").dataset.productId,a=w.find(o=>o._id===s);k(a).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}const $t=document.querySelector(".js-products-list"),Pt=new g,Lt=document.getElementById("pagination");let It=90;const Et={totalItems:It,itemsPerPage:9,visiblePages:3,page:1,centerAlign:!0,template:{prev:`<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="${r}#icon-Nav-Button-Prev"></use></svg></a>`,firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${r}#icon-Nav-Button-Next"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${r}#icon-Nav-Button-Next"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},Bt=new j(Lt,Et);Bt.on("beforeMove",async e=>{const t=e.page,s=await Pt.getAllProducts(t,9);x(s.results,$t),f(),window.scrollTo({top:100,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
