import{S as y,A as m}from"./assets/local-storage-90e48462.js";import{S as h,P as _,N as C}from"./assets/vendor-c5b37fd0.js";const F="productsBasket",k=new y(F);function f(){return k.getAllProducts()}function P(e){k.addProduct(e)}function D(e){k.removeAllProductsById(e)}const b=()=>{const e=document.querySelector("#cart-counter"),t=f();e.textContent=`(${t.length})`};b();const l="/project-CodeCrafters/assets/symbol-defs-e77d3d30.svg";function I(e){return e.map(({_id:t,name:s,img:o,category:a,price:r,size:c,popularity:i})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                <a class="products-card-link" href="">
                  <img src="${o}" alt="${s}" width="140" height="140" class="product-img">
                </a>
              </div>
                <a class="products-card-link" href="">
                  <h3 class="product-title-mark">${s}</h3>
                </a>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${a.replace(/_/g," ")}</span></p>
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
            `).join("")}function p(e="The product has been added to the basket!",t="success"){h.fire({title:"",text:e,icon:t,confirmButtonColor:"#6d8434"})}const z=new m,u=document.querySelector(".modal-prod-wrapper");async function S(e){u.classList.add("modal-active"),u.classList.add("loader");const t=await z.getProductById(e);u.classList.remove("loader"),W(t),J(t)}function J(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;f().some(a=>a._id===s)?t.textContent="Remove from":t.textContent="Add to"}function W(e){try{u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
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
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>G(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>w()),window.addEventListener("click",E),window.addEventListener("keydown",x)}catch(t){console.error(t)}}function G(e){const t=e._id,o=f().some(r=>r._id===t),a=document.querySelector(".modal-prod-add-text");o?(D(t),p("The product has been removed from the basket!","info"),a.textContent="Add to",B(t,!1)):(P({_id:t,amount:1}),p(),a.textContent="Remove from",B(t,!0)),b()}function w(){document.body.classList.remove("stop-scroll"),u.classList.remove("modal-active"),u.innerHTML="",window.removeEventListener("click",E),window.removeEventListener("keydown",x)}function E(e){e.target===u&&w()}function x(e){e.keyCode===27&&w()}const M=document.querySelector(".js-products-list");M.addEventListener("click",st);const U=new m,V=6;let g;const Y=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-check"></use>
</svg>`,K=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-basket"></use>
</svg>`;async function Q(){const t=(await U.getAllProducts()).results.slice(0,V);T(t,M),Z(),g.forEach(s=>{const o=f().some(a=>a._id===s.dataset.itemId);L(s,o)})}function T(e,t){t.innerHTML=I(e)}const X=f();function Z(){$()}function $(){g=document.querySelectorAll(".cart-button"),g&&g.forEach(e=>{e.addEventListener("click",tt)})}function tt(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:o,icon:a}=et(t,s);p(o,a),b()}}function et(e,t){const s=X.findIndex(r=>r._id===t);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):P({_id:t,amount:1}),L(e,!0),{message:o,icon:a}}function B(e,t){g.forEach(s=>{s.dataset.itemId===e&&L(s,t)})}function L(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=Y,s.disabled=!0):(e.innerHTML=K,s.disabled=!1)}Q();function st(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".products-card-link")){const s=t.closest("li").dataset.productId;S(s).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new m,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const c=document.querySelector(".keyword-input"),i=t.value,n={keyword:c.value||null,category:i==="Show all"?null:i,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(n));try{let d;if(!n.keyword&&n.category===null?d=await e.getAllProducts(n.page,n.limit):n.keyword?d=await e.getProductsByName(n.keyword,n.category,n.page,n.limit):d=await e.getProductsInCategories(n.category,n.page,n.limit),console.log("Полученные продукты:",d),d.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&nt();else{const v=I(d.results),N=document.querySelector(".js-products-list");N.innerHTML=v,$(),a(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(d){console.error("Ошибка при получении продуктов:",d.message)}}try{const c=await e.getProductsByCategory();c.push("Show all"),c.forEach(i=>{const n=document.createElement("option");n.value=i,n.textContent=i,t.appendChild(n)})}catch(c){console.error("Ошибка при получении категорий:",c.message)}document.querySelector(".filter-form").addEventListener("submit",async c=>{c.preventDefault();const i=document.querySelector(".keyword-input"),n=t.value,d={keyword:i.value||null,category:n==="Show all"?null:n,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(d));const v={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(v)),await s()});function a(){const c=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");c&&c.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const r={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(r)),await s()});const q=document.querySelector(".input-box"),A=document.querySelector(".keyword-input");A.addEventListener("focus",ot);A.addEventListener("blur",at);function ot(){q.classList.add("focus-within")}function at(){q.classList.remove("focus-within")}function nt(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true")}const R=document.querySelector(".js-discount-list");R.addEventListener("click",yt);const ct=new m,j=new y("cart"),rt=`<svg class="ico">
<use href="${l}#icon-check"></use>
</svg>`,it=`<svg class="ico">
<use href="${l}#icon-basket"></use>
</svg>`;async function lt(){const e=await ct.getDiscountedProducts();dt(e,R),pt()}function dt(e,t){t.innerHTML=ht(e)}const ut=j.getAllProducts();function pt(){mt()}function mt(){const e=document.querySelectorAll(".discount-cart-js");e&&e.forEach(t=>{t.addEventListener("click",gt)})}function gt(e){const t=e.target.closest(".discount-cart-js");if(t){const s=t.dataset.itemId;ft(t,s),p()}}function ft(e,t,s,o){ut.findIndex(r=>r._id===t)!==-1?h.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):j.addProduct({_id:t,amount:1}),vt(e,!0)}function vt(e,t){if(t){e.innerHTML=rt;const s=document.querySelector(".discount-cart-js");s.disabled=!0}else e.innerHTML=it}lt();function yt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".popular-products-card-link")){const s=t.closest("li").dataset.productId;S(s).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}function ht(e){return e.map(({_id:t,name:s,img:o,price:a})=>`<li class="popular-product-item" data-product-id='${t}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${t}"> <img src="${o}" alt="" class="product-image">
        </div>
        <div class="product-text-pop">
            <h3 class="product-name">${s}
                <p class="product margin">
                    <p class="price">$${a}</p>
                </p>
            </h3>
            <button class="cart-button-pop cart-button" type="button" data-product-id="${t}" data-in-cart="false">
                <svg class="cart-icon-pop" width="18" height="18">
                    <use href="${l}#icon-basket"></use>
                </svg>
            </button>
        </div>
    </div>
</li>`).join("")}const H=document.querySelector(".js-popular-list");H.addEventListener("click",xt);const kt=new m,O=new y("cart"),bt=`<svg class="ico">
<use href="${l}#icon-check"></use>
</svg>`,St=`<svg class="ico">
<use href="${l}#icon-basket"></use>
</svg>`;async function wt(){const t=(await kt.getPopularProducts()).filter(({popularity:s})=>s>3);$t(t,H),Ct()}function $t(e,t){t.innerHTML=Mt(e)}const Lt=O.getAllProducts();function Ct(){Bt()}function Bt(){const e=document.querySelectorAll(".popular-cart-button");e&&e.forEach(t=>{t.addEventListener("click",Pt)})}function Pt(e){const t=e.target.closest(".popular-cart-button");if(t){const s=t.dataset.itemId;It(t,s),p()}}function It(e,t,s,o){Lt.findIndex(r=>r._id===t)!==-1?h.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):O.addProduct({_id:t,amount:1}),Et(e,!0)}function Et(e,t){if(t){e.innerHTML=bt;const s=document.querySelector(".popular-cart-button");s.disabled=!0}else e.innerHTML=St}wt();function xt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".popular-products-card-link")){const s=t.closest("li").dataset.productId;S(s).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}function Mt(e){return e.map(({_id:t,name:s,img:o,category:a,size:r,popularity:c})=>`<li class="popular-product-item" data-product-id='${t}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${t}"> <img src="${o}" alt="" class="product-image" width="56" height="56">
        </div>
        <div class="popular-left">
          <div class="product-text-pop">      
            <h3 class="product-name">${s}</h3>
          </div>  
                <p class="product margin">
                    Category: <span class="category-value">${a.replace("_"," ")}</span><br>
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
</li>`).join("")}const Tt=document.querySelector(".js-products-list"),qt=new m,At=document.getElementById("pagination"),Rt={totalItems:540,itemsPerPage:6,visiblePages:4,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},jt=new _(At,Rt);jt.on("beforeMove",async e=>{const t=e.page,s=await qt.getAllProducts(t,6);T(s.results,Tt),$()});const Ht=new m,Ot=document.getElementById("subscriptionForm"),Nt=document.querySelector(".footer-form-input");function _t(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}async function Ft(e){e.preventDefault();const t=Nt.value;if(_t(t))try{const s=await Ht.createSubscription(t);s.conflict?p("This email address has already been entered. You have already subscribed to our new products. Watch for offers at the mailing address."):(console.log("Success:",s),p("Subscription completed successfully"))}catch(s){console.error("Error:",s),C.Notify.failure("Error during subscription")}else C.Notify.warning("Please enter a valid email address.");e.target.reset()}Ot.addEventListener("submit",Ft);
//# sourceMappingURL=commonHelpers2.js.map
