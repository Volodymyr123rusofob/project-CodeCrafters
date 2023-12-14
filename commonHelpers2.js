import{g as u,i as l,b as M,a as $,r as J,u as x,A as v}from"./assets/footer-15ddfb3d.js";import{P as W}from"./assets/vendor-6a322d96.js";const U=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-check"></use>
</svg>`,G=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-basket"></use>
</svg>`,K=u();function q(e){return e.map(({_id:t,name:s,img:o,category:a,price:n,size:r,popularity:i})=>`
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
                ${K.some(c=>c._id===t)?U:G}
                </button>
              </div>
            </li>
            `).join("")}const p=document.querySelector(".modal-prod-wrapper"),Q=new v;async function C(e){p.classList.add("modal-active"),p.classList.add("loader");const t=await Q.getProductById(e._id);p.classList.remove("loader"),X(t),V(t)}function V(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;u().some(a=>a._id===s)?t.textContent="Remove from":t.textContent="Add to"}function X(e){try{p.classList.add("modal-active"),document.body.classList.add("stop-scroll"),p.innerHTML=`
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
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Y(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>I()),window.addEventListener("click",T),window.addEventListener("keydown",A)}catch(t){console.error(t)}}function Y(e){const t=e._id,o=u().some(n=>n._id===t),a=document.querySelector(".modal-prod-add-text");o?(J(t),a.textContent="Add to",B(t,!1),$("The product has been removed the basket!","info")):(M({_id:t,amount:1}),$(),a.textContent="Remove from",B(t,!0)),x()}function I(){document.body.classList.remove("stop-scroll"),p.classList.remove("modal-active"),p.innerHTML="",window.removeEventListener("click",T),window.removeEventListener("keydown",A)}function T(e){e.target===p&&I()}function A(e){e.keyCode===27&&I()}const _=document.querySelector(".js-products-list");_.addEventListener("click",rt);const Z=new v,tt=9;let N,m;const et=`<svg class="cart-icon" width="18" height="18" pointer-events: none;>
<use href="${l}#icon-check"></use>
</svg>`,st=`<svg class="cart-icon" width="18" height="18" pointer-events: none;>
<use href="${l}#icon-basket"></use>
</svg>`,g=()=>{const e=u();document.querySelectorAll(".cart-button").forEach(s=>{const o=e.some(a=>a._id===s.dataset.itemId);y(s,o)})};g();async function ot(){const t=(await Z.getAllProducts()).results.slice(0,tt);S(t,_),f(),m.forEach(s=>{const o=u().some(a=>a._id===s.dataset.itemId);y(s,o)})}function S(e,t){N=e,t.innerHTML=q(e)}const at=u();function f(){m=document.querySelectorAll(".cart-button"),m&&m.forEach(e=>{e.addEventListener("click",ct)}),g()}g();function ct(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:o,icon:a}=nt(t,s);$(o,a),x(),g()}}function nt(e,t){const s=at.findIndex(n=>n._id===t);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):M({_id:t,amount:1}),y(e,!0),{message:o,icon:a}}function B(e,t){m.forEach(s=>{s.dataset.itemId===e&&y(s,t)})}function y(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=et,s.disabled=!0):(e.innerHTML=st,s.disabled=!1)}ot();function rt(e){e.preventDefault();const t=e.target;if(t.tagName.toLowerCase()==="button")return;const s=t.closest(".product-item");if(s){const o=s.dataset.productId,a=N.find(n=>n._id===o);C(a).catch(n=>{console.error("Помилка при отриманні продукта за айді:",n.message)})}}const it=document.querySelector(".js-products-list"),lt=document.getElementById("pagination");document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new v,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{const r=t.value;console.log("2Selected Category:",t.value),localStorage.setItem("selectedCategory",r),await s()});async function s(){const r=document.querySelector(".keyword-input"),i=t.value,c={keyword:r.value||null,category:i==="Show all"||i==="Categories"?"":i,page:1,limit:9};console.log("1Category:",c.category),localStorage.setItem("filters",JSON.stringify(c)),r.value="";try{let d;!c.keyword&&c.category===""?d=await e.getAllProducts(c.page,c.limit):c.keyword?d=await e.getProductsByName(c.keyword,c.category,c.page,c.limit):d=await e.getProductsInCategories(c.category,c.page,c.limit),console.log("Полученные продукты:(products=>)",d.totalPages);let b=d.totalPages;if(localStorage.setItem("products",JSON.stringify(d)),d.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&pt();else{const At=q(d.results),F=document.querySelector(".js-products-list");S(d.results,F),f(),a(),localStorage.setItem("noResultsMessageDisplayed","false");const z={totalItems:b,itemsPerPage:9,visiblePages:3,page:1,centerAlign:!0,template:{prev:`<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="${l}#icon-Nav-Button-Prev"></use></svg></a>`,firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${l}#icon-Nav-Button-Next"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${l}#icon-Nav-Button-Next"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}};new W(lt,z).on("beforeMove",async D=>{const E=D.page,k=t.value;let w;k==="Show all"||k==="Categories"?w=await e.getAllProducts(E,9):w=await e.getProductsInCategories(k,E,9),S(w.results,it),f(),g();let h;window.innerWidth>=1440?h=750:window.innerWidth>=768?h=1100:h=900,window.scrollTo({top:h,behavior:"smooth"})})}}catch(d){console.error("Ошибка при получении продуктов:",d.message)}}try{const r=await e.getProductsByCategory();t.innerHTML="",r.unshift("Categories"),r.push("Show all"),r.forEach(i=>{const c=document.createElement("option");c.value=i,c.textContent=i.replace(/_/g," "),t.appendChild(c)}),t.setAttribute("aria-label","Select a category")}catch(r){console.error("Ошибка при получении категорий:",r.message)}document.querySelector(".filter-form").addEventListener("submit",async r=>{r.preventDefault();const i=document.querySelector(".keyword-input"),c=t.value,d={keyword:i.value||null,category:c==="Show all"?null:c,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(d));const b={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(b)),await s()});function a(){const r=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");r&&r.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const n={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(n)),await s()});const O=document.querySelector(".input-box"),R=document.querySelector(".keyword-input");R.addEventListener("focus",dt);R.addEventListener("blur",ut);function dt(){O.classList.add("focus-within")}function ut(){O.classList.remove("focus-within")}function pt(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true")}function gt(e){return e.map(({_id:t,name:s,img:o,price:a})=>`<li class="discount-product-item" data-product-id='${t}'>
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
</li>`).join("")}const H=document.querySelector(".js-discount-list");H.addEventListener("click",wt);const mt=new v,ft=2;let vt=[],P;async function ht(){P=(await mt.getDiscountedProducts()).slice(0,ft),kt(P,H),f(),vt.forEach(t=>{yt(t._id,u().some(s=>s._id===t._id))})}ht();function yt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&bt(s,t)})}function bt(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="ico" pointer-events: none;>
  <use href="${icons}#icon-check"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="ico" pointer-events: none;>
  <use href="${icons}#icon-basket"></use>
  </svg>`,s.disabled=!1)}function kt(e,t){t.innerHTML=gt(e)}function wt(e){e.preventDefault();const t=e.target;if(t.tagName.toLowerCase()==="button")return;const s=t.closest(".discount-product-item");if(s){const o=s.dataset.productId,a=P.find(n=>n._id===o);C(a).catch(n=>{console.error("Помилка при отриманні продукта за айді:",n.message)})}}const $t=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-check"></use>
</svg>`,St=`<svg class="cart-icon" width="18" height="18">
<use href="${l}#icon-basket"></use>
</svg>`,Pt=u();function Lt(e){return e.map(({_id:t,name:s,img:o,category:a,size:n,popularity:r})=>`
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
          ${Pt.some(i=>i._id===t)?$t:St}
          </button>
        </div>
      </li>
      `).join("")}const j=document.querySelector(".js-popular-list");j.addEventListener("click",Tt);const Ct=new v,It=5;let Et=[],L;g();async function Bt(){L=(await Ct.getPopularProducts()).slice(0,It),qt(L,j),f(),Et.forEach(t=>{Mt(t._id,u().some(s=>s._id===t._id))})}Bt();function Mt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&xt(s,t)})}function xt(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="cart-icon-pop" pointer-events: none;>
  <use href="${l}#icon-check" width="12" height="12"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="cart-icon-pop" pointer-events: none;>
  <use href="${l}#icon-basket" width="12" height="12"></use>
  </svg>`,s.disabled=!1)}function qt(e,t){t.innerHTML=Lt(e)}function Tt(e){e.preventDefault();const t=e.target;if(t.tagName.toLowerCase()==="button")return;const s=t.closest(".popular-product-item");if(s){const o=s.dataset.productId,a=L.find(n=>n._id===o);C(a).catch(n=>{console.error("Помилка при отриманні продукта за айді:",n.message)})}}
//# sourceMappingURL=commonHelpers2.js.map
