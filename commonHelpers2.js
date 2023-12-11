import{g as f,a as $,r as F,u as L,A as m,S as C}from"./assets/header-4a368c47.js";import{S as y,P as D}from"./assets/vendor-ab16d78c.js";const d="/project-CodeCrafters/assets/symbol-defs-e77d3d30.svg";function I(e){return e.map(({_id:t,name:s,img:o,category:a,price:r,size:c,popularity:i})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${o}" alt="${s}" width="140" height="140" class="product-img">
              </div>
                  <h3 class="product-title-mark">${s}</h3>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${a.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${c}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${i}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${r}</p>
                <button class="cart-button cart-button-css" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${d}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}function p(e="The product has been added to the basket!",t="success"){y.fire({title:"",text:e,icon:t,confirmButtonColor:"#6d8434"})}const u=document.querySelector(".modal-prod-wrapper"),N=new m;async function h(e){u.classList.add("modal-active"),u.classList.add("loader");const t=await N.getProductById(e._id);u.classList.remove("loader"),J(t),z(t)}function z(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;f().some(a=>a._id===s)?t.textContent="Remove from":t.textContent="Add to"}function J(e){try{u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${d}#icon-ion_close-sharp"></use>
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
        <use href="${d}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>W(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>k()),window.addEventListener("click",B),window.addEventListener("keydown",P)}catch(t){console.error(t)}}function W(e){const t=e._id,o=f().some(r=>r._id===t),a=document.querySelector(".modal-prod-add-text");o?(F(t),a.textContent="Add to",w(t,!1),p("The product has been removed the basket!","info")):($({_id:t,amount:1}),p(),a.textContent="Remove from",w(t,!0)),L()}function k(){document.body.classList.remove("stop-scroll"),u.classList.remove("modal-active"),u.innerHTML="",window.removeEventListener("click",B),window.removeEventListener("keydown",P)}function B(e){e.target===u&&k()}function P(e){e.keyCode===27&&k()}const E=document.querySelector(".js-products-list");E.addEventListener("click",et);const U=new m,Y=9;let x,g;const G=`<svg class="cart-icon" width="18" height="18">
<use href="${d}#icon-check"></use>
</svg>`,K=`<svg class="cart-icon" width="18" height="18">
<use href="${d}#icon-basket"></use>
</svg>`;async function Q(){const t=(await U.getAllProducts()).results.slice(0,Y);M(t,E),X(),g.forEach(s=>{const o=f().some(a=>a._id===s.dataset.itemId);S(s,o)})}function M(e,t){x=e,t.innerHTML=I(e)}const V=f();function X(){b()}function b(){g=document.querySelectorAll(".cart-button"),g&&g.forEach(e=>{e.addEventListener("click",Z)})}function Z(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:o,icon:a}=tt(t,s);p(o,a),L()}}function tt(e,t){const s=V.findIndex(r=>r._id===t);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):$({_id:t,amount:1}),S(e,!0),{message:o,icon:a}}function w(e,t){g.forEach(s=>{s.dataset.itemId===e&&S(s,t)})}function S(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=G,s.disabled=!0):(e.innerHTML=K,s.disabled=!1)}Q();function et(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".product-item")){const s=t.closest("li").dataset.productId,o=x.find(a=>a._id===s);h(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new m,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const c=document.querySelector(".keyword-input"),i=t.value,n={keyword:c.value||null,category:i==="Show all"?t.selectedCategory="":i,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(n));try{let l;if(!n.keyword&&n.category===null?l=await e.getAllProducts(n.page,n.limit):n.keyword?l=await e.getProductsByName(n.keyword,n.category,n.page,n.limit):l=await e.getProductsInCategories(n.category,n.page,n.limit),console.log("Полученные продукты:",l),l.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&at();else{const v=I(l.results),O=document.querySelector(".js-products-list");O.innerHTML=v,b(),a(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}}try{const c=await e.getProductsByCategory();c.push("Show all"),c.forEach(i=>{const n=document.createElement("option");n.value=i,n.textContent=i,t.appendChild(n)})}catch(c){console.error("Ошибка при получении категорий:",c.message)}document.querySelector(".filter-form").addEventListener("submit",async c=>{c.preventDefault();const i=document.querySelector(".keyword-input"),n=t.value,l={keyword:i.value||null,category:n==="Show all"?null:n,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(l));const v={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(v)),await s()});function a(){const c=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");c&&c.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const r={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(r)),await s()});const T=document.querySelector(".input-box"),q=document.querySelector(".keyword-input");q.addEventListener("focus",st);q.addEventListener("blur",ot);function st(){T.classList.add("focus-within")}function ot(){T.classList.remove("focus-within")}function at(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true")}const A=document.querySelector(".js-discount-list");A.addEventListener("click",vt);const nt=new m,j=new C("cart"),ct=`<svg class="ico">
<use href="${d}#icon-check"></use>
</svg>`,rt=`<svg class="ico">
<use href="${d}#icon-basket"></use>
</svg>`;async function it(){const e=await nt.getDiscountedProducts();dt(e,A),ut()}function dt(e,t){t.innerHTML=yt(e)}const lt=j.getAllProducts();function ut(){pt()}function pt(){const e=document.querySelectorAll(".discount-cart-js");e&&e.forEach(t=>{t.addEventListener("click",mt)})}function mt(e){const t=e.target.closest(".discount-cart-js");if(t){const s=t.dataset.itemId;gt(t,s),p()}}function gt(e,t,s,o){lt.findIndex(r=>r._id===t)!==-1?y.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):j.addProduct({_id:t,amount:1}),ft(e,!0)}function ft(e,t){if(t){e.innerHTML=ct;const s=document.querySelector(".discount-cart-js");s.disabled=!0}else e.innerHTML=rt}it();function vt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".popular-products-card-link")){const s=t.closest("li").dataset.productId;h(s).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}function yt(e){return e.map(({_id:t,name:s,img:o,price:a})=>`<li class="discount-product-item" data-product-id='${t}'>
    <div class="discount-con">
        <div class="discount-image-container" data-product-id="${t}"> <img src="${o}" alt="${s}" class="discount-image" width="114" height="114">
        </div>
        <div class="discount-info-container">
          <h3 class="product-name product-name-disc">${s} </h3>
          <div class="discount-text-container">  
            <p class="price price-disc">$${a}</p>
            <button class="cart-button-disk cart-button" type="button" data-product-id="${t}" data-in-cart="false">
                <svg class="cart-icon-disk" width="18" height="18">
                    <use href="${d}#icon-basket"></use>
                </svg>
            </button>
          </div>
        </div> 
    </div>
</li>`).join("")}const R=document.querySelector(".js-popular-list");R.addEventListener("click",xt);const ht=new m,_=new C("cart");let H;const kt=`<svg class="ico">
<use href="${d}#icon-check"></use>
</svg>`,bt=`<svg class="ico">
<use href="${d}#icon-basket"></use>
</svg>`;async function St(){const t=(await ht.getPopularProducts()).filter(({popularity:s})=>s>3);wt(t,R),Lt()}function wt(e,t){H=e,t.innerHTML=Et(e)}const $t=_.getAllProducts();function Lt(){Ct()}function Ct(){const e=document.querySelectorAll(".popular-cart-button");e&&e.forEach(t=>{t.addEventListener("click",It)})}function It(e){const t=e.target.closest(".popular-cart-button");if(t){const s=t.dataset.itemId;Bt(t,s),p()}}function Bt(e,t,s,o){$t.findIndex(r=>r._id===t)!==-1?y.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):_.addProduct({_id:t,amount:1}),Pt(e,!0)}function Pt(e,t){if(t){e.innerHTML=kt;const s=document.querySelector(".popular-cart-button");s.disabled=!0}else e.innerHTML=bt}St();function Et(e){return e.map(({_id:t,name:s,img:o,category:a,size:r,popularity:c})=>`<li class="popular-product-item" data-product-id='${t}'>
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
                    <use href="${d}#icon-basket"></use>
                </svg>
            </button>
    </div>
</li>`).join("")}function xt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".popular-product-item")){const s=t.closest("li").dataset.productId,o=H.find(a=>a._id===s);h(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}const Mt=document.querySelector(".js-products-list"),Tt=new m,qt=document.getElementById("pagination"),At={totalItems:540,itemsPerPage:6,visiblePages:3,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},jt=new D(qt,At);jt.on("beforeMove",async e=>{const t=e.page,s=await Tt.getAllProducts(t,6);M(s.results,Mt),b()});const Rt=new m,_t=document.getElementById("subscriptionForm"),Ht=document.querySelector(".footer-form-input");_t.addEventListener("submit",Ot);async function Ot(e){e.preventDefault();const t=e.currentTarget.elements.email,s=Ht.value;try{const o=await Rt.createSubscription({email:s});t.value="";let a="Successfully subscribed!";o&&o.data&&o.data.message&&(a=o.data.message),p(a,"success")}catch(o){console.log("Error:",o);let a="This email address has already been entered.You have already subscribed to our new products. Watch for offers at the mailing address.";o.response&&o.response.data&&o.response.data.message&&(a=o.response.data.message),p(a,"warning")}e.target.reset()}
//# sourceMappingURL=commonHelpers2.js.map
