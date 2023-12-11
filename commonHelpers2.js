import{S as v,A as m}from"./assets/local-storage-3f1f4934.js";import{S as y,P as F,N as L}from"./assets/vendor-c5b37fd0.js";const D="productsBasket",h=new v(D);function f(){return h.getAllProducts()}function B(t){h.addProduct(t)}function z(t){h.removeAllProductsById(t)}const k=()=>{const t=document.querySelector("#cart-counter"),e=f();t.textContent=`(${e.length})`};k();const i="/project-CodeCrafters/assets/symbol-defs-e77d3d30.svg";function P(t){return t.map(({_id:e,name:s,img:o,category:a,price:n,size:r,popularity:d})=>`
            <li class="product-item" data-product-id='${e}'>
              <div class="product-img-container">
                <a class="products-card-link" href="">
                  <img src="${o}" alt="${s}" width="140" height="140" class="product-img">
                </a>
              </div>
                <a class="products-card-link" href="">
                  <h3 class="product-title">${s}</h3>
                </a>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${a.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${r}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${d}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${n}</p>
                <button class="cart-button cart-button-css" type="button" data-item-id="${e}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${i}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}function p(t="The product has been added to the basket!",e="success"){y.fire({title:"",text:t,icon:e,confirmButtonColor:"#6d8434"})}const u=document.querySelector(".modal-prod-wrapper");async function b(t){u.classList.add("modal-active"),u.classList.add("loader"),u.classList.remove("loader"),W(t),J(t)}function J(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;f().some(a=>a._id===s)?e.textContent="Remove from":e.textContent="Add to"}function W(t){try{u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${i}#icon-ion_close-sharp"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">
      <img class="modal-prod-img" src="${t.img}" alt="${t.name}" />
  </div>
  <div class="modal-prod-name-wrap">
  <p class="modal-prod-name">${t.name}</p>
  <ul class="modal-prod-list">
    <li class="modal-prod-item">
      <p class="modal-prod-text">Category: <span>${t.category.replace(/_/g," ")}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Size: <span>${t.size}</span></p>
    </li>
    <li class="modal-prod-item">
      <p class="modal-prod-text">Popularity: <span>${t.popularity}</span></p>
    </li>
  </ul>
  <p class="modal-prod-desc">${t.desc}</p>
  </div>
  </div>
  <div class="modal-prod-price-elem">
  <p class="modal-prod-price">&#36;${t.price}</p>
  <button class="modal-prod-add-btn" >
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${i}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>G(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>S()),window.addEventListener("click",E),window.addEventListener("keydown",I)}catch(e){console.error(e)}}function G(t){const e=t._id,o=f().some(n=>n._id===e),a=document.querySelector(".modal-prod-add-text");o?(z(e),p("The product has been removed from the basket!","info"),a.textContent="Add to",C(e,!1)):(B({_id:e,amount:1}),p(),a.textContent="Remove from",C(e,!0)),k()}function S(){document.body.classList.remove("stop-scroll"),u.classList.remove("modal-active"),u.innerHTML="",window.removeEventListener("click",E),window.removeEventListener("keydown",I)}function E(t){t.target===u&&S()}function I(t){t.keyCode===27&&S()}const x=document.querySelector(".js-products-list");x.addEventListener("click",st);const U=new m,V=6;let M,g;const Y=`<svg class="cart-icon" width="18" height="18">
<use href="${i}#icon-check"></use>
</svg>`,K=`<svg class="cart-icon" width="18" height="18">
<use href="${i}#icon-basket"></use>
</svg>`;async function Q(){const e=(await U.getAllProducts()).results.slice(0,V);T(e,x),Z(),g.forEach(s=>{const o=f().some(a=>a._id===s.dataset.itemId);w(s,o)})}function T(t,e){M=t,e.innerHTML=P(t)}const X=f();function Z(){$()}function $(){g=document.querySelectorAll(".cart-button"),g&&g.forEach(t=>{t.addEventListener("click",tt)})}function tt(t){const e=t.target.closest(".cart-button");if(e){const s=e.dataset.itemId,{message:o,icon:a}=et(e,s);p(o,a),k()}}function et(t,e){const s=X.findIndex(n=>n._id===e);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):B({_id:e,amount:1}),w(t,!0),{message:o,icon:a}}function C(t,e){g.forEach(s=>{s.dataset.itemId===t&&w(s,e)})}function w(t,e){const s=document.querySelector(".cart-button");e?(t.innerHTML=Y,s.disabled=!0):(t.innerHTML=K,s.disabled=!1)}Q();function st(t){t.preventDefault();const e=t.target;if(console.log(e),e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.productId,o=M.find(a=>a._id===s);b(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const t=new m,e=document.querySelector(".category-select");try{const n=await t.getProductsByCategory();n.push("Show all"),n.forEach(r=>{const d=document.createElement("option");d.value=r,d.textContent=r,e.appendChild(d)})}catch(n){console.error("Ошибка при получении категорий:",n.message)}document.querySelector(".filter-form").addEventListener("submit",async n=>{n.preventDefault();const r=document.querySelector(".keyword-input"),d=e.value,c={keyword:r.value||null,category:d==="Show all"?null:d,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(c));try{let l;if(!c.keyword&&c.category===null?l=await t.getAllProducts(c.page,c.limit):c.keyword?l=await t.getProductsByName(c.keyword,c.category,c.page,c.limit):l=await t.getProductsInCategories(c.category,c.page,c.limit),console.log("Полученные продукты:",l),l.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&nt();else{const O=P(l.results),N=document.querySelector(".js-products-list");N.innerHTML=O,$(),o(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}});function o(){const n=document.querySelector(".filters-title"),r=document.querySelector(".filters-text");n&&n.remove(),r&&r.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const a={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(a))});const q=document.querySelector(".input-box"),A=document.querySelector(".keyword-input");A.addEventListener("focus",ot);A.addEventListener("blur",at);function ot(){q.classList.add("focus-within")}function at(){q.classList.remove("focus-within")}function nt(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const t=document.querySelector(".js-products-list"),e=document.createElement("h2");e.textContent="Nothing was found for the selected ",e.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),e.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),t.innerHTML="",t.insertAdjacentElement("afterend",e),e.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true")}const R=document.querySelector(".js-discount-list");R.addEventListener("click",yt);const ct=new m,j=new v("cart"),rt=`<svg class="ico">
<use href="${i}#icon-check"></use>
</svg>`,it=`<svg class="ico">
<use href="${i}#icon-basket"></use>
</svg>`;async function dt(){const t=await ct.getDiscountedProducts();lt(t,R),pt()}function lt(t,e){e.innerHTML=ht(t)}const ut=j.getAllProducts();function pt(){mt()}function mt(){const t=document.querySelectorAll(".discount-cart-js");t&&t.forEach(e=>{e.addEventListener("click",gt)})}function gt(t){const e=t.target.closest(".discount-cart-js");if(e){const s=e.dataset.itemId;ft(e,s),p()}}function ft(t,e,s,o){ut.findIndex(n=>n._id===e)!==-1?y.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):j.addProduct({_id:e,amount:1}),vt(t,!0)}function vt(t,e){if(e){t.innerHTML=rt;const s=document.querySelector(".discount-cart-js");s.disabled=!0}else t.innerHTML=it}dt();function yt(t){t.preventDefault();const e=t.target;if(console.log(e),e.closest("a")&&e.closest(".popular-products-card-link")){const s=e.closest("li").dataset.productId;b(s).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}function ht(t){return t.map(({_id:e,name:s,img:o,price:a})=>`<li class="popular-product-item" data-product-id='${e}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${e}"> <img src="${o}" alt="" class="product-image">
        </div>
        <div class="product-text-pop">
            <h3 class="product-name">${s}
                <p class="product margin">
                    <p class="price">$${a}</p>
                </p>
            </h3>
            <button class="cart-button-pop cart-button" type="button" data-product-id="${e}" data-in-cart="false">
                <svg class="cart-icon-pop" width="18" height="18">
                    <use href="${i}#icon-basket"></use>
                </svg>
            </button>
        </div>
    </div>
</li>`).join("")}const H=document.querySelector(".js-popular-list");H.addEventListener("click",xt);const kt=new m,_=new v("cart"),bt=`<svg class="ico">
<use href="${i}#icon-check"></use>
</svg>`,St=`<svg class="ico">
<use href="${i}#icon-basket"></use>
</svg>`;async function $t(){const e=(await kt.getPopularProducts()).filter(({popularity:s})=>s>3);wt(e,H),Ct()}function wt(t,e){e.innerHTML=Mt(t)}const Lt=_.getAllProducts();function Ct(){Bt()}function Bt(){const t=document.querySelectorAll(".popular-cart-button");t&&t.forEach(e=>{e.addEventListener("click",Pt)})}function Pt(t){const e=t.target.closest(".popular-cart-button");if(e){const s=e.dataset.itemId;Et(e,s),p()}}function Et(t,e,s,o){Lt.findIndex(n=>n._id===e)!==-1?y.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):_.addProduct({_id:e,amount:1}),It(t,!0)}function It(t,e){if(e){t.innerHTML=bt;const s=document.querySelector(".popular-cart-button");s.disabled=!0}else t.innerHTML=St}$t();function xt(t){t.preventDefault();const e=t.target;if(console.log(e),e.closest("a")&&e.closest(".popular-products-card-link")){const s=e.closest("li").dataset.productId;b(s).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}function Mt(t){return t.map(({_id:e,name:s,img:o,category:a,size:n,popularity:r})=>`<li class="popular-product-item" data-product-id='${e}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${e}"> <img src="${o}" alt="" class="product-image">
        </div>
        <div class="product-text-pop">
            <h3 class="product-name">${s}
                <p class="product margin">
                    Category: <span class="category-value">${a.replace("_"," ")}</span><br>
                    Size: <span class="size-value">${n}</span><br>
                    Popularity: <span class="popularity-value">${r}</span>
                </p>
            </h3>
            <button class="cart-button-pop cart-button" type="button" data-product-id="${e}" data-in-cart="false">
                <svg class="cart-icon-pop" width="18" height="18">
                    <use href="${i}#icon-basket"></use>
                </svg>
            </button>
        </div>
    </div>
</li>`).join("")}const Tt=document.querySelector(".js-products-list"),qt=new m,At=document.getElementById("pagination"),Rt={totalItems:540,itemsPerPage:6,visiblePages:4,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},jt=new F(At,Rt);jt.on("beforeMove",async t=>{const e=t.page,s=await qt.getAllProducts(e,6);T(s.results,Tt),$()});const Ht=new m,_t=document.getElementById("subscriptionForm"),Ot=document.querySelector(".footer-form-input");function Nt(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}async function Ft(t){t.preventDefault();const e=Ot.value;if(Nt(e))try{const s=await Ht.createSubscription(e);s.conflict?p("This email address has already been entered. You have already subscribed to our new products. Watch for offers at the mailing address."):(console.log("Success:",s),p("Subscription completed successfully"))}catch(s){console.error("Error:",s),L.Notify.failure("Error during subscription")}else L.Notify.warning("Please enter a valid email address.");t.target.reset()}_t.addEventListener("submit",Ft);
//# sourceMappingURL=commonHelpers2.js.map
