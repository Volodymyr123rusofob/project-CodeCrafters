import{g as f,a as L,r as F,u as C,A as p,S as I}from"./assets/header-033ea397.js";import{S as y,P as D,N as $}from"./assets/vendor-c5b37fd0.js";const l="/project-CodeCrafters/assets/symbol-defs-e77d3d30.svg";function P(e){return e.map(({_id:t,name:s,img:a,category:o,price:r,size:c,popularity:i})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${a}" alt="${s}" width="140" height="140" class="product-img">
              </div>
                  <h3 class="product-title-mark">${s}</h3>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${o.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${c}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${i}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${r}</p>
                <button class="cart-button cart-button-css" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${l}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}function m(e="The product has been added to the basket!",t="success"){y.fire({title:"",text:e,icon:t,confirmButtonColor:"#6d8434"})}const u=document.querySelector(".modal-prod-wrapper"),z=new p;async function h(e){u.classList.add("modal-active"),u.classList.add("loader");const t=await z.getProductById(e._id);u.classList.remove("loader"),W(t),J(t)}function J(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;f().some(o=>o._id===s)?t.textContent="Remove from":t.textContent="Add to"}function W(e){try{u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${l}#icon-ion_close-sharp"></use>
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
        <use href="${l}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>U(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>k()),window.addEventListener("click",B),window.addEventListener("keydown",E)}catch(t){console.error(t)}}function U(e){const t=e._id,a=f().some(r=>r._id===t),o=document.querySelector(".modal-prod-add-text");a?(F(t),o.textContent="Add to",w(t,!1)):(L({_id:t,amount:1}),m(),o.textContent="Remove from",w(t,!0)),C()}function k(){document.body.classList.remove("stop-scroll"),u.classList.remove("modal-active"),u.innerHTML="",window.removeEventListener("click",B),window.removeEventListener("keydown",E)}function B(e){e.target===u&&k()}function E(e){e.keyCode===27&&k()}const x=document.querySelector(".js-products-list");x.addEventListener("click",st);const V=new p,Y=6;let M,g;const G=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-check"></use>
</svg>`,K=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-basket"></use>
</svg>`;async function Q(){const t=(await V.getAllProducts()).results.slice(0,Y);q(t,x),Z(),g.forEach(s=>{const a=f().some(o=>o._id===s.dataset.itemId);S(s,a)})}function q(e,t){M=e,t.innerHTML=P(e)}const X=f();function Z(){b()}function b(){g=document.querySelectorAll(".cart-button"),g&&g.forEach(e=>{e.addEventListener("click",tt)})}function tt(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:a,icon:o}=et(t,s);m(a,o),C()}}function et(e,t){const s=X.findIndex(r=>r._id===t);let a,o;return s!==-1?(a="This product has already been added to the cart!",o="warning"):L({_id:t,amount:1}),S(e,!0),{message:a,icon:o}}function w(e,t){g.forEach(s=>{s.dataset.itemId===e&&S(s,t)})}function S(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=G,s.disabled=!0):(e.innerHTML=K,s.disabled=!1)}Q();function st(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".product-item")){const s=t.closest("li").dataset.productId,a=M.find(o=>o._id===s);h(a).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new p,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const c=document.querySelector(".keyword-input"),i=t.value,n={keyword:c.value||null,category:i==="Show all"?t.selectedCategory="":i,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(n));try{let d;if(!n.keyword&&n.category===null?d=await e.getAllProducts(n.page,n.limit):n.keyword?d=await e.getProductsByName(n.keyword,n.category,n.page,n.limit):d=await e.getProductsInCategories(n.category,n.page,n.limit),console.log("Полученные продукты:",d),d.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&nt();else{const v=P(d.results),N=document.querySelector(".js-products-list");N.innerHTML=v,b(),o(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(d){console.error("Ошибка при получении продуктов:",d.message)}}try{const c=await e.getProductsByCategory();c.push("Show all"),c.forEach(i=>{const n=document.createElement("option");n.value=i,n.textContent=i,t.appendChild(n)})}catch(c){console.error("Ошибка при получении категорий:",c.message)}document.querySelector(".filter-form").addEventListener("submit",async c=>{c.preventDefault();const i=document.querySelector(".keyword-input"),n=t.value,d={keyword:i.value||null,category:n==="Show all"?null:n,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(d));const v={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(v)),await s()});function o(){const c=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");c&&c.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const r={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(r)),await s()});const T=document.querySelector(".input-box"),A=document.querySelector(".keyword-input");A.addEventListener("focus",ot);A.addEventListener("blur",at);function ot(){T.classList.add("focus-within")}function at(){T.classList.remove("focus-within")}function nt(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const a=document.createElement("p");a.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",a.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",a),localStorage.setItem("noResultsMessageDisplayed","true")}const R=document.querySelector(".js-discount-list");R.addEventListener("click",yt);const ct=new p,j=new I("cart"),rt=`<svg class="ico">
<use href="${l}#icon-check"></use>
</svg>`,it=`<svg class="ico">
<use href="${l}#icon-basket"></use>
</svg>`;async function lt(){const e=await ct.getDiscountedProducts();dt(e,R),pt()}function dt(e,t){t.innerHTML=ht(e)}const ut=j.getAllProducts();function pt(){mt()}function mt(){const e=document.querySelectorAll(".discount-cart-js");e&&e.forEach(t=>{t.addEventListener("click",gt)})}function gt(e){const t=e.target.closest(".discount-cart-js");if(t){const s=t.dataset.itemId;ft(t,s),m()}}function ft(e,t,s,a){ut.findIndex(r=>r._id===t)!==-1?y.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):j.addProduct({_id:t,amount:1}),vt(e,!0)}function vt(e,t){if(t){e.innerHTML=rt;const s=document.querySelector(".discount-cart-js");s.disabled=!0}else e.innerHTML=it}lt();function yt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".popular-products-card-link")){const s=t.closest("li").dataset.productId;h(s).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}function ht(e){return e.map(({_id:t,name:s,img:a,price:o})=>`<li class="popular-product-item" data-product-id='${t}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${t}"> <img src="${a}" alt="" class="product-image">
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
</li>`).join("")}const _=document.querySelector(".js-popular-list");_.addEventListener("click",Mt);const kt=new p,H=new I("cart");let O;const bt=`<svg class="ico">
<use href="${l}#icon-check"></use>
</svg>`,St=`<svg class="ico">
<use href="${l}#icon-basket"></use>
</svg>`;async function $t(){const t=(await kt.getPopularProducts()).filter(({popularity:s})=>s>3);wt(t,_),Ct()}function wt(e,t){O=e,t.innerHTML=xt(e)}const Lt=H.getAllProducts();function Ct(){It()}function It(){const e=document.querySelectorAll(".popular-cart-button");e&&e.forEach(t=>{t.addEventListener("click",Pt)})}function Pt(e){const t=e.target.closest(".popular-cart-button");if(t){const s=t.dataset.itemId;Bt(t,s),m()}}function Bt(e,t,s,a){Lt.findIndex(r=>r._id===t)!==-1?y.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):H.addProduct({_id:t,amount:1}),Et(e,!0)}function Et(e,t){if(t){e.innerHTML=bt;const s=document.querySelector(".popular-cart-button");s.disabled=!0}else e.innerHTML=St}$t();function xt(e){return e.map(({_id:t,name:s,img:a,category:o,size:r,popularity:c})=>`<li class="popular-product-item" data-product-id='${t}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${t}"> <img src="${a}" alt="" class="product-image" width="56" height="56">
        </div>
        <div class="popular-left">
          <div class="product-text-pop">      
            <h3 class="product-name">${s}</h3>
          </div>  
                <p class="product margin">
                    Category: <span class="category-value">${o.replace("_"," ")}</span><br>
                    Size: <span class="size-value">${r}</span>
                    Popularity: <span class="popularity-value"> ${c}</span>
                </p>
        </div>
                    <button class="cart-button-pop cart-button" type="button" data-product-id="${t}" data-in-cart="false">
                <svg class="cart-icon-pop" width="12" height="12">
                    <use href="${l}#icon-basket"></use>
                </svg>
            </button>
    </div>
</li>`).join("")}function Mt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".popular-product-item")){const s=t.closest("li").dataset.productId,a=O.find(o=>o._id===s);h(a).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}const qt=document.querySelector(".js-products-list"),Tt=new p,At=document.getElementById("pagination"),Rt={totalItems:540,itemsPerPage:6,visiblePages:3,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},jt=new D(At,Rt);jt.on("beforeMove",async e=>{const t=e.page,s=await Tt.getAllProducts(t,6);q(s.results,qt),b()});const _t=new p,Ht=document.getElementById("subscriptionForm"),Ot=document.querySelector(".footer-form-input");function Nt(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async function Ft(e){e.preventDefault();const t=Ot.value;if(Nt(t))try{const s=await _t.createSubscription(t);s.conflict?m("This email address has already been entered. You have already subscribed to our new products. Watch for offers at the mailing address."):(console.log("Success:",s),m("Subscription completed successfully"))}catch(s){console.error("Error:",s),$.Notify.failure("Error during subscription")}else $.Notify.warning("Please enter a valid email address.");e.target.reset()}Ht.addEventListener("submit",Ft);
//# sourceMappingURL=commonHelpers2.js.map
