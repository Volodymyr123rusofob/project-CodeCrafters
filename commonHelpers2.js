import{g as u,i as d,b as x,a as $,r as W,u as q,A as h}from"./assets/footer-b1e03d2d.js";import{P as U}from"./assets/vendor-cc119595.js";const G=`<svg class="cart-icon" width="18" height="18">
<use href="${d}#icon-check"></use>
</svg>`,K=`<svg class="cart-icon" width="18" height="18">
<use href="${d}#icon-basket"></use>
</svg>`,Q=u();function T(e){return e.map(({_id:t,name:s,img:o,category:a,price:n,size:r,popularity:i})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${o}" alt="${s}" width="140" height="140" class="product-img" loading="lazy">
              </div>

              <h3 class="product-title-mark">${s}</h3>

              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${a.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${r}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${i}</span></p>
                </div>

              <div class="price-card-container">
                <p class="price">$${n}</p>

                <button class="cart-button cart-button-css" type="button" data-item-id="${t}" data-in-cart="false" aria-label="Add to cart">
                ${Q.some(c=>c._id===t)?G:K}
                </button>
              </div>
            </li>
            `).join("")}const p=document.querySelector(".modal-prod-wrapper"),V=new h;async function C(e){p.classList.add("modal-active"),p.classList.add("loader");const t=await V.getProductById(e._id);p.classList.remove("loader"),Y(t),X(t)}function X(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;u().some(a=>a._id===s)?t.textContent="Remove from":t.textContent="Add to"}function Y(e){try{p.classList.add("modal-active"),document.body.classList.add("stop-scroll"),p.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn" aria-label="Close">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${d}#icon-ion_close-sharp"></use>
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
        <use href="${d}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Z(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>I()),window.addEventListener("click",A),window.addEventListener("keydown",_)}catch(t){console.error(t)}}function Z(e){const t=e._id,o=u().some(n=>n._id===t),a=document.querySelector(".modal-prod-add-text");o?(W(t),a.textContent="Add to",M(t,!1),$("The product has been removed the basket!","info")):(x({_id:t,amount:1}),$(),a.textContent="Remove from",M(t,!0)),q()}function I(){document.body.classList.remove("stop-scroll"),p.classList.remove("modal-active"),p.innerHTML="",window.removeEventListener("click",A),window.removeEventListener("keydown",_)}function A(e){e.target===p&&I()}function _(e){e.keyCode===27&&I()}const N=document.querySelector(".js-products-list");N.addEventListener("click",it);const tt=new h,et=9;let O,f;const st=`<svg class="cart-icon" width="18" height="18" pointer-events: none;>
<use href="${d}#icon-check"></use>
</svg>`,ot=`<svg class="cart-icon" width="18" height="18" pointer-events: none;>
<use href="${d}#icon-basket"></use>
</svg>`,m=()=>{const e=u();document.querySelectorAll(".cart-button").forEach(s=>{const o=e.some(a=>a._id===s.dataset.itemId);b(s,o)})};m();async function at(){const t=(await tt.getAllProducts()).results.slice(0,et);S(t,N),v(),f.forEach(s=>{const o=u().some(a=>a._id===s.dataset.itemId);b(s,o)})}function S(e,t){O=e,t.innerHTML=T(e)}const ct=u();function v(){f=document.querySelectorAll(".cart-button"),f&&f.forEach(e=>{e.addEventListener("click",nt)}),m()}m();function nt(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:o,icon:a}=rt(t,s);$(o,a),q(),m(),t.disabled=!0}}function rt(e,t){const s=ct.findIndex(n=>n._id===t);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):x({_id:t,amount:1}),b(e,!0),{message:o,icon:a}}function M(e,t){f.forEach(s=>{s.dataset.itemId===e&&(s.disabled=!1,b(s,t))})}function b(e,t){const s=document.querySelector(".cart-button");t?e.innerHTML=st:(e.innerHTML=ot,s.disabled=!1)}at();function it(e){e.preventDefault();const t=e.target;if(t.tagName.toLowerCase()==="button")return;const s=t.closest(".product-item");if(s){const o=s.dataset.productId,a=O.find(n=>n._id===o);C(a).catch(n=>{console.error("Помилка при отриманні продукта за айді:",n.message)})}}const lt=document.querySelector(".js-products-list"),dt=document.getElementById("pagination"),g=document.getElementById("pagination");document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new h,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{const r=t.value;localStorage.setItem("selectedCategory",r),await s()});async function s(){const r=document.querySelector(".keyword-input"),i=t.value,c={keyword:r.value||null,category:i==="Show all"||i==="Categories"?"":i,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(c));try{let l;if(!c.keyword&&c.category===""?l=await e.getAllProducts(c.page,c.limit):c.keyword?l=await e.getProductsByName(c.keyword,c.category,c.page,c.limit):l=await e.getProductsInCategories(c.category,c.page,c.limit),console.log("Полученные продукты:(products=>)",l),console.log("Количество страниц:(totalPages=>)",l.totalPages),l.totalPages<=1?g.style.display="none":g.style.display="flex",localStorage.setItem("products",JSON.stringify(l)),l.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&gt();else{const _t=T(l.results),z=document.querySelector(".js-products-list");S(l.results,z),v(),a(),localStorage.setItem("noResultsMessageDisplayed","false"),console.log("filters.limit",c.limit);const D={totalItems:l.totalPages*c.limit,itemsPerPage:9,visiblePages:3,page:1,centerAlign:!0,template:{prev:`<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="${d}#icon-Nav-Button-Prev"></use></svg></a>`,firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${d}#icon-Nav-Button-Next"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${d}#icon-Nav-Button-Next"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}};new U(dt,D).on("beforeMove",async J=>{const B=J.page,k=t.value;let w;k==="Show all"||k==="Categories"?w=await e.getAllProducts(B,9):w=await e.getProductsInCategories(k,B,9),S(w.results,lt),v(),m();let y;window.innerWidth>=1440?y=750:window.innerWidth>=768?y=1100:y=900,window.scrollTo({top:y,behavior:"smooth"})})}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}}try{const r=await e.getProductsByCategory();t.innerHTML="",r.unshift("Categories"),r.push("Show all"),r.forEach(i=>{const c=document.createElement("option");c.value=i,c.textContent=i.replace(/_/g," "),t.appendChild(c)}),t.setAttribute("aria-label","Select a category")}catch(r){console.error("Ошибка при получении категорий:",r.message)}document.querySelector(".filter-form").addEventListener("submit",async r=>{r.preventDefault();const i=document.querySelector(".keyword-input"),c=t.value,l={keyword:i.value||null,category:c==="Show all"?null:c,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(l));const E={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(E)),await s()});function a(){const r=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");r&&r.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true"),g&&g.classList.remove("hidden")}const n={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(n)),await s()});const R=document.querySelector(".input-box"),H=document.querySelector(".keyword-input");H.addEventListener("focus",ut);H.addEventListener("blur",pt);function ut(){R.classList.add("focus-within")}function pt(){R.classList.remove("focus-within")}function gt(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true"),g&&g.classList.add("hidden")}function mt(e){return e.map(({_id:t,name:s,img:o,price:a})=>`<li class="discount-product-item" data-product-id='${t}'>
    <div class="discount-con">
        <div class="discount-image-container" data-product-id="${t}"> <img src="${o}" alt="${s}" class="discount-image" width="114" height="114" loading="lazy" >
        </div>
        <div class="discount-info-container">
          <h3 class="product-name product-name-disc">${s} </h3>
          <div class="discount-text-container">  
            <p class="price price-disc">$${a}</p>
            <button class="cart-button-disk cart-button" type="button" data-item-id="${t}" data-in-cart="false" aria-label="Add to cart">
                <svg class="cart-icon-disk" width="18" height="18">
                    <use href="${d}#icon-basket"></use>
                </svg>
            </button>
          </div>
        </div> 
        <div class="div-icon-discount">
          <svg class="icon-discount" width="60" height="60">
            <use href="${d}#icon-discount"></use>
          </svg>
        </div>
    </div>
</li>`).join("")}const j=document.querySelector(".js-discount-list");j.addEventListener("click",$t);const ft=new h,vt=2;let ht=[],P;async function yt(){P=(await ft.getDiscountedProducts()).slice(0,vt),wt(P,j),v(),ht.forEach(t=>{bt(t._id,u().some(s=>s._id===t._id))})}yt();function bt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&kt(s,t)})}function kt(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="ico" pointer-events: none;>
  <use href="${icons}#icon-check"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="ico" pointer-events: none;>
  <use href="${icons}#icon-basket"></use>
  </svg>`,s.disabled=!1)}function wt(e,t){t.innerHTML=mt(e)}function $t(e){e.preventDefault();const t=e.target;if(t.tagName.toLowerCase()==="button")return;const s=t.closest(".discount-product-item");if(s){const o=s.dataset.productId,a=P.find(n=>n._id===o);C(a).catch(n=>{console.error("Помилка при отриманні продукта за айді:",n.message)})}}const St=`<svg class="cart-icon" width="18" height="18">
<use href="${d}#icon-check"></use>
</svg>`,Pt=`<svg class="cart-icon" width="18" height="18">
<use href="${d}#icon-basket"></use>
</svg>`,Lt=u();function Ct(e){return e.map(({_id:t,name:s,img:o,category:a,size:n,popularity:r})=>`
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
              Size: <span class="size-value">${n}</span>
              Popularity: <span class="popularity-value"> ${r}</span>
            </p>
          </div>
          <button class="cart-button-pop cart-button" type="button" data-item-id="${t}" data-in-cart="false" aria-label="Add to cart">
          ${Lt.some(i=>i._id===t)?St:Pt}
          </button>
        </div>
      </li>
      `).join("")}const F=document.querySelector(".js-popular-list");F.addEventListener("click",At);const It=new h,Et=5;let Bt=[],L;m();async function Mt(){L=(await It.getPopularProducts()).slice(0,Et),Tt(L,F),v(),Bt.forEach(t=>{xt(t._id,u().some(s=>s._id===t._id))})}Mt();function xt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&qt(s,t)})}function qt(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="cart-icon-pop" pointer-events: none;>
  <use href="${d}#icon-check" width="12" height="12"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="cart-icon-pop" pointer-events: none;>
  <use href="${d}#icon-basket" width="12" height="12"></use>
  </svg>`,s.disabled=!1)}function Tt(e,t){t.innerHTML=Ct(e)}function At(e){e.preventDefault();const t=e.target;if(t.tagName.toLowerCase()==="button")return;const s=t.closest(".popular-product-item");if(s){const o=s.dataset.productId,a=L.find(n=>n._id===o);C(a).catch(n=>{console.error("Помилка при отриманні продукта за айді:",n.message)})}}
//# sourceMappingURL=commonHelpers2.js.map
