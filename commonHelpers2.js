import{g as u,i as l,b as q,a as $,r as V,u as T,A as y}from"./assets/footer-5d25cbf2.js";import{P as G}from"./assets/vendor-6a322d96.js";const K=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-check"></use>
</svg>`,Q=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-basket"></use>
</svg>`,X=u();function A(e){return e.map(({_id:t,name:s,img:o,category:a,price:c,size:i,popularity:r})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${o}" alt="${s}" width="140" height="140" class="product-img" loading="lazy">
              </div>

              <h3 class="product-title-mark">${s}</h3>

              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${a.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${i}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${r}</span></p>
                </div>

              <div class="price-card-container">
                <p class="price">$${c}</p>

                <button class="cart-button cart-button-css" type="button" data-item-id="${t}" data-in-cart="false" aria-label="Add to cart">
                ${X.some(n=>n._id===t)?K:Q}
                </button>
              </div>
            </li>
            `).join("")}const p=document.querySelector(".modal-prod-wrapper"),Y=new y;async function I(e){p.classList.add("modal-active"),p.classList.add("loader");const t=await Y.getProductById(e._id);p.classList.remove("loader"),tt(t),Z(t)}function Z(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;u().some(a=>a._id===s)?t.textContent="Remove from":t.textContent="Add to"}function tt(e){try{p.classList.add("modal-active"),document.body.classList.add("stop-scroll"),p.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn" aria-label="Close">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${l}#icon-ion_close-sharp"></use>
    </svg>
  </button>
  <div class="modal-prod-information-wrap">
  <div class="modal-prod-img-wrap">
      <img class="modal-prod-img" src="${e.img}" alt="${e.name}" loading="lazy" />
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
  <button class="modal-prod-add-btn" aria-label="Add to cart" >
      <p class="modal-prod-add-text">Add to</p>
      <svg class="modal-prod-basket-icon" >
        <use href="${l}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>et(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>E()),window.addEventListener("click",_),window.addEventListener("keydown",O)}catch(t){console.error(t)}}function et(e){const t=e._id,o=u().some(c=>c._id===t),a=document.querySelector(".modal-prod-add-text");o?(V(t),a.textContent="Add to",x(t,!1),$("The product has been removed the basket!","info")):(q({_id:t,amount:1}),$(),a.textContent="Remove from",x(t,!0)),T()}function E(){document.body.classList.remove("stop-scroll"),p.classList.remove("modal-active"),p.innerHTML="",window.removeEventListener("click",_),window.removeEventListener("keydown",O)}function _(e){e.target===p&&E()}function O(e){e.keyCode===27&&E()}const R=document.querySelector(".js-products-list");R.addEventListener("click",lt);const st=new y,ot=9;let N,f;const at=`<svg class="cart-icon" width="18" height="18" pointer-events: none;>
<use href="${l}#icon-check"></use>
</svg>`,nt=`<svg class="cart-icon" width="18" height="18" pointer-events: none;>
<use href="${l}#icon-basket"></use>
</svg>`,g=()=>{const e=u();document.querySelectorAll(".cart-button").forEach(s=>{const o=e.some(a=>a._id===s.dataset.itemId);w(s,o)})};g();async function ct(){const t=(await st.getAllProducts()).results.slice(0,ot);S(t,R),v(),f.forEach(s=>{const o=u().some(a=>a._id===s.dataset.itemId);w(s,o)})}function S(e,t){N=e,t.innerHTML=A(e)}const it=u();function v(){f=document.querySelectorAll(".cart-button"),f&&f.forEach(e=>{e.addEventListener("click",rt)}),g()}g();function rt(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:o,icon:a}=dt(t,s);$(o,a),T(),g(),t.disabled=!0}}function dt(e,t){const s=it.findIndex(c=>c._id===t);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):q({_id:t,amount:1}),w(e,!0),{message:o,icon:a}}function x(e,t){f.forEach(s=>{s.dataset.itemId===e&&(s.disabled=!1,w(s,t))})}function w(e,t){const s=document.querySelector(".cart-button");t?e.innerHTML=at:(e.innerHTML=nt,s.disabled=!1)}ct();function lt(e){e.preventDefault();const t=e.target;if(t.tagName.toLowerCase()==="button")return;const s=t.closest(".product-item");if(s){const o=s.dataset.productId,a=N.find(c=>c._id===o);I(a).catch(c=>{console.error("Помилка при отриманні продукта за айді:",c.message)})}}const ut=document.querySelector(".js-products-list"),pt=document.getElementById("pagination"),m=document.getElementById("pagination");m.classList.add("tui-pagination");let P=4;function H(){window.innerWidth<=767?P=2:P=4}window.addEventListener("resize",H);H();document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new y,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{const i=t.value;localStorage.setItem("selectedCategory",i),await s()});async function s(){const i=document.querySelector(".keyword-input"),r=t.value,n={keyword:i.value||null,category:r==="Show all"||r==="Categories"?"":r,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(n));try{let d;if(!n.keyword&&n.category===""?d=await e.getAllProducts(n.page,n.limit):n.keyword?d=await e.getProductsByName(n.keyword,n.category,n.page,n.limit):d=await e.getProductsInCategories(n.category,n.page,n.limit),d.totalPages<=1?m.style.display="none":m.style.display="flex",localStorage.setItem("products",JSON.stringify(d)),d.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&ft();else{const Rt=A(d.results),J=document.querySelector(".js-products-list");S(d.results,J),v(),a(),localStorage.setItem("noResultsMessageDisplayed","false");let W={totalItems:d.totalPages*n.limit,itemsPerPage:9,visiblePages:P,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new G(pt,W).on("beforeMove",async U=>{const M=U.page,b=t.value;let k;b==="Show all"||b==="Categories"?k=await e.getAllProducts(M,9):k=await e.getProductsInCategories(b,M,9),S(k.results,ut),v(),g();let h;window.innerWidth>=1440?h=750:window.innerWidth>=768?h=1100:h=900,window.scrollTo({top:h,behavior:"smooth"})})}}catch{}}try{const i=await e.getProductsByCategory();t.innerHTML="",i.unshift("Categories"),i.push("Show all"),i.forEach(r=>{const n=document.createElement("option");n.value=r,n.textContent=r.replace(/_/g," "),t.appendChild(n)}),t.setAttribute("aria-label","Select a category")}catch{}document.querySelector(".filter-form").addEventListener("submit",async i=>{i.preventDefault();const r=document.querySelector(".keyword-input"),n=t.value,d={keyword:r.value||null,category:n==="Show all"?null:n,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(d));const B={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(B)),await s()});function a(){const i=document.querySelector(".filters-title"),r=document.querySelector(".filters-text");i&&i.remove(),r&&r.remove(),localStorage.setItem("noResultsMessageDisplayed","true"),m&&m.classList.remove("hidden")}const c={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(c)),await s()});const j=document.querySelector(".input-box"),F=document.querySelector(".keyword-input");F.addEventListener("focus",mt);F.addEventListener("blur",gt);function mt(){j.classList.add("focus-within")}function gt(){j.classList.remove("focus-within")}function ft(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true"),m&&m.classList.add("hidden")}function vt(e){return e.map(({_id:t,name:s,img:o,price:a})=>`<li class="discount-product-item" data-product-id='${t}'>
    <div class="discount-con">
        <div class="discount-image-container" data-product-id="${t}"> <img src="${o}" alt="${s}" class="discount-image" width="114" height="114" loading="lazy" >
        </div>
        <div class="discount-info-container">
          <h3 class="product-name product-name-disc">${s} </h3>
          <div class="discount-text-container">  
            <p class="price price-disc">$${a}</p>
            <button class="cart-button-disk cart-button" type="button" data-item-id="${t}" data-in-cart="false" aria-label="Add to cart">
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
</li>`).join("")}const z=document.querySelector(".js-discount-list");z.addEventListener("click",Pt);const yt=new y,ht=2;let wt=[],L;async function bt(){L=(await yt.getDiscountedProducts()).slice(0,ht),St(L,z),v(),wt.forEach(t=>{kt(t._id,u().some(s=>s._id===t._id))})}bt();function kt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&$t(s,t)})}function $t(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="ico" pointer-events: none;>
  <use href="${icons}#icon-check"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="ico" pointer-events: none;>
  <use href="${icons}#icon-basket"></use>
  </svg>`,s.disabled=!1)}function St(e,t){t.innerHTML=vt(e)}function Pt(e){e.preventDefault();const t=e.target;if(t.tagName.toLowerCase()==="button")return;const s=t.closest(".discount-product-item");if(s){const o=s.dataset.productId,a=L.find(c=>c._id===o);I(a).catch(c=>{console.error("Помилка при отриманні продукта за айді:",c.message)})}}const Lt=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-check"></use>
</svg>`,Ct=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-basket"></use>
</svg>`,It=u();function Et(e){return e.map(({_id:t,name:s,img:o,category:a,size:c,popularity:i})=>`
      <li class="popular-product-item" data-product-id='${t}'>
        <div class="popular-con">

          <div class="product-image-container" data-product-id="${t}">
            <img src="${o}" alt="" class="product-image" width="56" height="56" loading="lazy">

          </div>
          <div class="popular-left">
            <div class="product-text-pop">
              <h3 class="product-name">${s}</h3>
            </div>
            <p class="product margin">
              Category: <span class="category-value">${a.replace("_"," ")}</span><br>
              Size: <span class="size-value">${c}</span>
              Popularity: <span class="popularity-value"> ${i}</span>
            </p>
          </div>
          <button class="cart-button-pop cart-button" type="button" data-item-id="${t}" data-in-cart="false" aria-label="Add to cart">
          ${It.some(r=>r._id===t)?Lt:Ct}
          </button>
        </div>
      </li>
      `).join("")}const D=document.querySelector(".js-popular-list");D.addEventListener("click",Ot);const Bt=new y,Mt=5;let xt=[],C;g();async function qt(){C=(await Bt.getPopularProducts()).slice(0,Mt),_t(C,D),v(),xt.forEach(t=>{Tt(t._id,u().some(s=>s._id===t._id))})}qt();function Tt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&At(s,t)})}function At(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="cart-icon-pop" pointer-events: none;>
  <use href="${l}#icon-check" width="12" height="12"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="cart-icon-pop" pointer-events: none;>
  <use href="${l}#icon-basket" width="12" height="12"></use>
  </svg>`,s.disabled=!1)}function _t(e,t){t.innerHTML=Et(e)}function Ot(e){e.preventDefault();const t=e.target;if(t.tagName.toLowerCase()==="button")return;const s=t.closest(".popular-product-item");if(s){const o=s.dataset.productId,a=C.find(c=>c._id===o);I(a).catch(c=>{console.error("Помилка при отриманні продукта за айді:",c.message)})}}
//# sourceMappingURL=commonHelpers2.js.map
