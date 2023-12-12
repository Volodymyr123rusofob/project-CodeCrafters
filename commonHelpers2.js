import{i as l,g as f,a as $,r as N,u as L,A as p,S as D}from"./assets/header-55817644.js";import{S as P,P as J}from"./assets/vendor-ab16d78c.js";function I(e){return e.map(({_id:t,name:s,img:o,category:a,price:d,size:n,popularity:r})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${o}" alt="${s}" width="140" height="140" class="product-img">
              </div>
                  <h3 class="product-title-mark">${s}</h3>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${a.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${n}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${r}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${d}</p>
                <button class="cart-button cart-button-css" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${l}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}function g(e="The product has been added to the basket!",t="success"){P.fire({title:"",text:e,icon:t,confirmButtonColor:"#6d8434"})}const u=document.querySelector(".modal-prod-wrapper"),z=new p;async function k(e){u.classList.add("modal-active"),u.classList.add("loader");const t=await z.getProductById(e._id);u.classList.remove("loader"),K(t),W(t)}function W(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;f().some(a=>a._id===s)?t.textContent="Remove from":t.textContent="Add to"}function K(e){try{u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
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
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>U(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>S()),window.addEventListener("click",C),window.addEventListener("keydown",E)}catch(t){console.error(t)}}function U(e){const t=e._id,o=f().some(d=>d._id===t),a=document.querySelector(".modal-prod-add-text");o?(N(t),a.textContent="Add to",w(t,!1),g("The product has been removed the basket!","info")):($({_id:t,amount:1}),g(),a.textContent="Remove from",w(t,!0)),L()}function S(){document.body.classList.remove("stop-scroll"),u.classList.remove("modal-active"),u.innerHTML="",window.removeEventListener("click",C),window.removeEventListener("keydown",E)}function C(e){e.target===u&&S()}function E(e){e.keyCode===27&&S()}const B=document.querySelector(".js-products-list");B.addEventListener("click",ot);const Y=new p,G=9;let M,m;const Q=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-check"></use>
</svg>`,V=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-basket"></use>
</svg>`;async function X(){const t=(await Y.getAllProducts()).results.slice(0,G);x(t,B),tt(),m.forEach(s=>{const o=f().some(a=>a._id===s.dataset.itemId);b(s,o)})}function x(e,t){M=e,t.innerHTML=I(e)}const Z=f();function tt(){v()}function v(){m=document.querySelectorAll(".cart-button"),m&&m.forEach(e=>{e.addEventListener("click",et)})}function et(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:o,icon:a}=st(t,s);g(o,a),L()}}function st(e,t){const s=Z.findIndex(d=>d._id===t);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):$({_id:t,amount:1}),b(e,!0),{message:o,icon:a}}function w(e,t){m.forEach(s=>{s.dataset.itemId===e&&b(s,t)})}function b(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=Q,s.disabled=!0):(e.innerHTML=V,s.disabled=!1)}X();function ot(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".product-item")){const s=t.closest("li").dataset.productId,o=M.find(a=>a._id===s);k(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}class at{constructor(t){this.storageFilter=t}initStorageForFilter(){if(this.getFilterProducts()){console.log("this.storageFilter=",this.storageFilter);return}this.writeToLocalStorage([]),console.log("this.storageFilter-[]")}getFilterProducts(){return JSON.parse(localStorage.getItem(this.storageFilter))}removeFilterProducts(){this.writeToLocalStorage([])}writeToLocalStorage(t){localStorage.setItem(this.storageFilter,JSON.stringify(t))}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new p,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const n=document.querySelector(".keyword-input"),r=t.value,c={keyword:n.value||null,category:r==="Show all"?t.selectedCategory="":r,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(c));try{let i;!c.keyword&&c.category===null?i=await e.getAllProducts(c.page,c.limit):c.keyword?i=await e.getProductsByName(c.keyword,c.category,c.page,c.limit):i=await e.getProductsInCategories(c.category,c.page,c.limit),console.log("Полученные продукты:(products)",i),console.log("Сразу-products.results=",i.results);const h="filterOfProducts",j=new at(h),R=i.results;if(j.writeToLocalStorage(R),i.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&rt();else{const _=I(i.results),H=document.querySelector(".js-products-list");H.innerHTML=_,v(),a(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(i){console.error("Ошибка при получении продуктов:",i.message)}}try{const n=await e.getProductsByCategory();n.push("Show all"),n.forEach(r=>{const c=document.createElement("option");c.value=r,c.textContent=r,t.appendChild(c)})}catch(n){console.error("Ошибка при получении категорий:",n.message)}document.querySelector(".filter-form").addEventListener("submit",async n=>{n.preventDefault();const r=document.querySelector(".keyword-input"),c=t.value,i={keyword:r.value||null,category:c==="Show all"?null:c,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(i));const h={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(h)),await s()});function a(){const n=document.querySelector(".filters-title"),r=document.querySelector(".filters-text");n&&n.remove(),r&&r.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const d={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(d)),await s()});const T=document.querySelector(".input-box"),q=document.querySelector(".keyword-input");q.addEventListener("focus",ct);q.addEventListener("blur",nt);function ct(){T.classList.add("focus-within")}function nt(){T.classList.remove("focus-within")}function rt(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true")}const F=document.querySelector(".js-discount-list");F.addEventListener("click",kt);const it=new p,A=new D("cart"),lt=`<svg class="ico">
<use href="${l}#icon-check"></use>
</svg>`,dt=`<svg class="ico">
<use href="${l}#icon-basket"></use>
</svg>`;async function ut(){const e=await it.getDiscountedProducts();pt(e,F),mt()}function pt(e,t){t.innerHTML=St(e)}const gt=A.getAllProducts();function mt(){ft()}function ft(){const e=document.querySelectorAll(".discount-cart-js");e&&e.forEach(t=>{t.addEventListener("click",vt)})}function vt(e){const t=e.target.closest(".discount-cart-js");if(t){const s=t.dataset.itemId;ht(t,s),g()}}function ht(e,t,s,o){gt.findIndex(d=>d._id===t)!==-1?P.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):A.addProduct({_id:t,amount:1}),yt(e,!0)}function yt(e,t){if(t){e.innerHTML=lt;const s=document.querySelector(".discount-cart-js");s.disabled=!0}else e.innerHTML=dt}ut();function kt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".popular-products-card-link")){const s=t.closest("li").dataset.productId;k(s).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}function St(e){return e.map(({_id:t,name:s,img:o,price:a})=>`<li class="discount-product-item" data-product-id='${t}'>
    <div class="discount-con">
        <div class="discount-image-container" data-product-id="${t}"> <img src="${o}" alt="${s}" class="discount-image" width="114" height="114">
        </div>
        <div class="discount-info-container">
          <h3 class="product-name product-name-disc">${s} </h3>
          <div class="discount-text-container">  
            <p class="price price-disc">$${a}</p>
            <button class="cart-button-disk cart-button" type="button" data-product-id="${t}" data-in-cart="false">
                <svg class="cart-icon-disk" width="18" height="18">
                    <use href="${l}#icon-basket"></use>
                </svg>
            </button>
          </div>
        </div> 
        <div class="div-icon-discount">
          <svg class="icon-discount" width="60" height="60">
            <use href="${l}#icon-discount"></use>
          </svg>
        </div>
    </div>
</li>`).join("")}function bt(e){return e.map(({_id:t,name:s,img:o,category:a,size:d,popularity:n})=>`
      <li class="popular-product-item" data-product-id='${t}'>
        <div class="popular-con">
          <div class="product-image-container" data-product-id="${t}"> 
            <img src="${o}" alt="" class="product-image" width="56" height="56">
          </div>
          <div class="popular-left">
            <div class="product-text-pop">
              <h3 class="product-name">${s}</h3>
            </div>
            <p class="product margin">
              Category: <span class="category-value">${a.replace("_"," ")}</span><br>
              Size: <span class="size-value">${d}</span>
              Popularity: <span class="popularity-value"> ${n}</span>
            </p>
          </div>
          <button class="cart-pr-pop cart-button-pop" type="button" data-product-id="${t}" data-in-cart="false">
            <svg class="cart-icon-pop" width="12" height="12">
              <use href="${l}#icon-basket"></use>
            </svg>
          </button>
        </div>
      </li>
      `).join("")}const O=document.querySelector(".js-popular-list");O.addEventListener("click",Bt);const wt=new p,$t=3;let Lt=[],y;async function Pt(){y=(await wt.getPopularProducts()).slice(0,$t),Et(y,O),v(),Lt.forEach(t=>{It(t._id,f().some(s=>s._id===t._id))})}Pt();function It(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&Ct(s,t)})}function Ct(e,t){const s=document.querySelector(".cart-pr-pop");t?(e.innerHTML=`
    <svg class="cart-icon-pop" width="12" height="12">
      <use href="${l}#icon-check"></use>
    </svg>`,s.disabled=!0):(e.innerHTML=`
    <svg class="cart-icon-pop" width="12" height="12">
      <use href="${l}#icon-basket"></use>
    </svg>`,s.disabled=!1)}function Et(e,t){t.innerHTML=bt(e)}function Bt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".popular-product-item")){const s=t.closest("li").dataset.productId,o=y.find(a=>a._id===s);k(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}const Mt=document.querySelector(".js-products-list"),xt=new p,Tt=document.getElementById("pagination"),qt={totalItems:540,itemsPerPage:6,visiblePages:3,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},Ft=new J(Tt,qt);Ft.on("beforeMove",async e=>{const t=e.page,s=await xt.getAllProducts(t,6);x(s.results,Mt),v(),window.scrollTo({top:100,behavior:"smooth"})});const At=new p,Ot=document.getElementById("subscriptionForm"),jt=document.querySelector(".footer-form-input");Ot.addEventListener("submit",Rt);async function Rt(e){e.preventDefault();const t=e.currentTarget.elements.email,s=jt.value;try{const o=await At.createSubscription({email:s});t.value="";let a="Successfully subscribed!";o&&o.data&&o.data.message&&(a=o.data.message),g(a,"success")}catch(o){console.log("Error:",o);let a="This email address has already been entered.You have already subscribed to our new products. Watch for offers at the mailing address.";o.response&&o.response.data&&o.response.data.message&&(a=o.response.data.message),g(a,"warning")}e.target.reset()}
//# sourceMappingURL=commonHelpers2.js.map
