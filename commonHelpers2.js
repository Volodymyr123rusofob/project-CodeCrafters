import{g as u,i as r,a as L,b as y,r as j,u as I,A as g}from"./assets/footer-799cfcc9.js";import{P as D}from"./assets/vendor-ab16d78c.js";const z=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-check"></use>
</svg>`,J=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-basket"></use>
</svg>`,W=u();function C(e){return e.map(({_id:t,name:s,img:a,category:o,price:d,size:n,popularity:i})=>`
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
                ${W.some(c=>c._id===t)?z:J}
                </button>
              </div>
            </li>
            `).join("")}const p=document.querySelector(".modal-prod-wrapper"),K=new g;async function S(e){p.classList.add("modal-active"),p.classList.add("loader");const t=await K.getProductById(e._id);p.classList.remove("loader"),G(t),U(t)}function U(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;u().some(o=>o._id===s)?t.textContent="Remove from":t.textContent="Add to"}function G(e){try{p.classList.add("modal-active"),document.body.classList.add("stop-scroll"),p.innerHTML=`
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
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Q(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>$()),window.addEventListener("click",E),window.addEventListener("keydown",B)}catch(t){console.error(t)}}function Q(e){const t=e._id,a=u().some(d=>d._id===t),o=document.querySelector(".modal-prod-add-text");a?(j(t),o.textContent="Add to",P(t,!1),y("The product has been removed the basket!","info")):(L({_id:t,amount:1}),y(),o.textContent="Remove from",P(t,!0)),I()}function $(){document.body.classList.remove("stop-scroll"),p.classList.remove("modal-active"),p.innerHTML="",window.removeEventListener("click",E),window.removeEventListener("keydown",B)}function E(e){e.target===p&&$()}function B(e){e.keyCode===27&&$()}const M=document.querySelector(".js-products-list");M.addEventListener("click",at);const V=new g,X=9;let x,m;const Y=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-check"></use>
</svg>`,Z=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-basket"></use>
</svg>`,b=()=>{const e=u();document.querySelectorAll(".cart-button").forEach(s=>{const a=e.some(o=>o._id===s.dataset.itemId);v(s,a)})};b();async function tt(){const t=(await V.getAllProducts()).results.slice(0,X);q(t,M),addEventListenerToCardButton(),m.forEach(s=>{const a=u().some(o=>o._id===s.dataset.itemId);v(s,a)})}function q(e,t){x=e,t.innerHTML=C(e)}const et=u();function f(){m=document.querySelectorAll(".cart-button"),m&&m.forEach(e=>{e.addEventListener("click",st)})}function st(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:a,icon:o}=ot(t,s);y(a,o),I(),b()}}function ot(e,t){const s=et.findIndex(d=>d._id===t);let a,o;return s!==-1?(a="This product has already been added to the cart!",o="warning"):L({_id:t,amount:1}),v(e,!0),{message:a,icon:o}}function P(e,t){m.forEach(s=>{s.dataset.itemId===e&&v(s,t)})}function v(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=Y,s.disabled=!0):(e.innerHTML=Z,s.disabled=!1)}tt();function at(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".product-item")){const s=t.closest("li").dataset.productId,a=x.find(o=>o._id===s);S(a).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}class ct{constructor(t){this.storageFilter=t}initStorageForFilter(){if(this.getFilterProducts()){console.log("this.storageFilter=",this.storageFilter);return}this.writeToLocalStorage([]),console.log("this.storageFilter-[]")}getFilterProducts(){return JSON.parse(localStorage.getItem(this.storageFilter))}removeFilterProducts(){this.writeToLocalStorage([])}writeToLocalStorage(t){localStorage.setItem(this.storageFilter,JSON.stringify(t))}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new g,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const n=document.querySelector(".keyword-input"),i=t.value,c={keyword:n.value||null,category:i==="Show all"?t.selectedCategory="":i,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(c));try{let l;!c.keyword&&c.category===null?l=await e.getAllProducts(c.page,c.limit):c.keyword?l=await e.getProductsByName(c.keyword,c.category,c.page,c.limit):l=await e.getProductsInCategories(c.category,c.page,c.limit),console.log("Полученные продукты:(products=>)",l);const h="filterOfProducts",A=new ct(h),N=l.results;if(A.writeToLocalStorage(N),l.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&it();else{const R=C(l.results),H=document.querySelector(".js-products-list");H.innerHTML=R,f(),o(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}}try{const n=await e.getProductsByCategory();n.push("Show all"),n.forEach(i=>{const c=document.createElement("option");c.value=i,c.textContent=i,t.appendChild(c)})}catch(n){console.error("Ошибка при получении категорий:",n.message)}document.querySelector(".filter-form").addEventListener("submit",async n=>{n.preventDefault();const i=document.querySelector(".keyword-input"),c=t.value,l={keyword:i.value||null,category:c==="Show all"?null:c,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(l));const h={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(h)),await s()});function o(){const n=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");n&&n.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const d={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(d)),await s()});const T=document.querySelector(".input-box"),F=document.querySelector(".keyword-input");F.addEventListener("focus",nt);F.addEventListener("blur",rt);function nt(){T.classList.add("focus-within")}function rt(){T.classList.remove("focus-within")}function it(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const a=document.createElement("p");a.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",a.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",a),localStorage.setItem("noResultsMessageDisplayed","true")}function lt(e){return e.map(({_id:t,name:s,img:a,price:o})=>`<li class="discount-product-item" data-product-id='${t}'>
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
</li>`).join("")}const O=document.querySelector(".js-discount-list");O.addEventListener("click",ht);const dt=new g,ut=2;let pt=[],k;async function gt(){k=(await dt.getDiscountedProducts()).slice(0,ut),vt(k,O),f(),pt.forEach(t=>{mt(t._id,u().some(s=>s._id===t._id))})}gt();function mt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&ft(s,t)})}function ft(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="ico">
  <use href="${icons}#icon-check"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="ico">
  <use href="${icons}#icon-basket"></use>
  </svg>`,s.disabled=!1)}function vt(e,t){t.innerHTML=lt(e)}function ht(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".discount-product-item")){const s=t.closest("li").dataset.productId,a=k.find(o=>o._id===s);S(a).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}const yt=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-check"></use>
</svg>`,kt=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-basket"></use>
</svg>`,wt=u();function St(e){return e.map(({_id:t,name:s,img:a,category:o,size:d,popularity:n})=>`
      <li class="popular-product-item" data-product-id='${t}'>
        <div class="popular-con">

          <div class="product-image-container" data-product-id="${t}">
            <img src="${a}" alt="" class="product-image" width="56" height="56">

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
          ${wt.some(i=>i._id===t)?yt:kt}
          </button>
        </div>
      </li>
      `).join("")}const _=document.querySelector(".js-popular-list");_.addEventListener("click",Bt);const $t=new g,bt=5;let Pt=[],w;b();async function Lt(){w=(await $t.getPopularProducts()).slice(0,bt),Et(w,_),f(),Pt.forEach(t=>{It(t._id,u().some(s=>s._id===t._id))})}Lt();function It(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&Ct(s,t)})}function Ct(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="cart-icon-pop">
  <use href="${r}#icon-check" width="12" height="12"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="cart-icon-pop">
  <use href="${r}#icon-basket" width="12" height="12"></use>
  </svg>`,s.disabled=!1)}function Et(e,t){t.innerHTML=St(e)}function Bt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".popular-product-item")){const s=t.closest("li").dataset.productId,a=w.find(o=>o._id===s);S(a).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}const Mt=document.querySelector(".js-products-list"),xt=new g,qt=document.getElementById("pagination");let Tt=90;const Ft={totalItems:Tt,itemsPerPage:9,visiblePages:3,page:1,centerAlign:!0,template:{prev:`<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="${r}#icon-Nav-Button-Prev"></use></svg></a>`,firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${r}#icon-Nav-Button-Next"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${r}#icon-Nav-Button-Next"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},Ot=new D(qt,Ft);Ot.on("beforeMove",async e=>{const t=e.page,s=await xt.getAllProducts(t,9);q(s.results,Mt),f(),window.scrollTo({top:100,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
