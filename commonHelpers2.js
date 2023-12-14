import{g as u,i,a as I,b as y,r as N,u as C,A as g}from"./assets/footer-6251e8af.js";import{P as H}from"./assets/vendor-ab16d78c.js";const j=`<svg class="cart-icon" width="18" height="18">
<use href="${i}#icon-check"></use>
</svg>`,F=`<svg class="cart-icon" width="18" height="18">
<use href="${i}#icon-basket"></use>
</svg>`,z=u();function E(e){return e.map(({_id:t,name:s,img:o,category:a,price:d,size:n,popularity:r})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${o}" alt="${s}" width="140" height="140" class="product-img" loading="lazy">
              </div>

              <h3 class="product-title-mark">${s}</h3>

              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${a.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${n}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${r}</span></p>
                </div>

              <div class="price-card-container">
                <p class="price">$${d}</p>

                <button class="cart-button cart-button-css" type="button" data-item-id="${t}" data-in-cart="false" aria-label="Add to cart">
                ${z.some(c=>c._id===t)?j:F}
                </button>
              </div>
            </li>
            `).join("")}const p=document.querySelector(".modal-prod-wrapper"),D=new g;async function w(e){p.classList.add("modal-active"),p.classList.add("loader");const t=await D.getProductById(e._id);p.classList.remove("loader"),W(t),J(t)}function J(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;u().some(a=>a._id===s)?t.textContent="Remove from":t.textContent="Add to"}function W(e){try{p.classList.add("modal-active"),document.body.classList.add("stop-scroll"),p.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn" aria-label="Close">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${i}#icon-ion_close-sharp"></use>
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
        <use href="${i}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>U(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>$()),window.addEventListener("click",B),window.addEventListener("keydown",M)}catch(t){console.error(t)}}function U(e){const t=e._id,o=u().some(d=>d._id===t),a=document.querySelector(".modal-prod-add-text");o?(N(t),a.textContent="Add to",L(t,!1),y("The product has been removed the basket!","info")):(I({_id:t,amount:1}),y(),a.textContent="Remove from",L(t,!0)),C()}function $(){document.body.classList.remove("stop-scroll"),p.classList.remove("modal-active"),p.innerHTML="",window.removeEventListener("click",B),window.removeEventListener("keydown",M)}function B(e){e.target===p&&$()}function M(e){e.keyCode===27&&$()}const x=document.querySelector(".js-products-list");x.addEventListener("click",et);const G=new g,K=9;let q,f;const Q=`<svg class="cart-icon" width="18" height="18">
<use href="${i}#icon-check"></use>
</svg>`,V=`<svg class="cart-icon" width="18" height="18">
<use href="${i}#icon-basket"></use>
</svg>`,m=()=>{const e=u();document.querySelectorAll(".cart-button").forEach(s=>{const o=e.some(a=>a._id===s.dataset.itemId);h(s,o)})};m();async function X(){const t=(await G.getAllProducts()).results.slice(0,K);S(t,x),v(),f.forEach(s=>{const o=u().some(a=>a._id===s.dataset.itemId);h(s,o)})}function S(e,t){q=e,t.innerHTML=E(e)}const Y=u();function v(){f=document.querySelectorAll(".cart-button"),f&&f.forEach(e=>{e.addEventListener("click",Z)}),m()}m();function Z(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:o,icon:a}=tt(t,s);y(o,a),C(),m()}}function tt(e,t){const s=Y.findIndex(d=>d._id===t);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):I({_id:t,amount:1}),h(e,!0),{message:o,icon:a}}function L(e,t){f.forEach(s=>{s.dataset.itemId===e&&h(s,t)})}function h(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=Q,s.disabled=!0):(e.innerHTML=V,s.disabled=!1)}X();function et(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".product-item")){const s=t.closest("li").dataset.productId,o=q.find(a=>a._id===s);w(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new g,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const n=document.querySelector(".keyword-input"),r=t.value,c={keyword:n.value||null,category:r==="Show all"||r==="Categories"?"":r,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(c)),n.value="";try{let l;if(!c.keyword&&c.category===null?l=await e.getAllProducts(c.page,c.limit):c.keyword?l=await e.getProductsByName(c.keyword,c.category,c.page,c.limit):l=await e.getProductsInCategories(c.category,c.page,c.limit),localStorage.setItem("products",JSON.stringify(l)),l.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&at();else{const P=E(l.results),R=document.querySelector(".js-products-list");S(l.results,R),v(),a(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}}try{const n=await e.getProductsByCategory();t.innerHTML="",n.unshift("Categories"),n.push("Show all"),n.forEach(r=>{const c=document.createElement("option");c.value=r,c.textContent=r.replace(/_/g," "),t.appendChild(c)}),t.setAttribute("aria-label","Select a category")}catch(n){console.error("Ошибка при получении категорий:",n.message)}document.querySelector(".filter-form").addEventListener("submit",async n=>{n.preventDefault();const r=document.querySelector(".keyword-input"),c=t.value,l={keyword:r.value||null,category:c==="Show all"?null:c,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(l));const P={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(P)),await s()});function a(){const n=document.querySelector(".filters-title"),r=document.querySelector(".filters-text");n&&n.remove(),r&&r.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const d={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(d)),await s()});const T=document.querySelector(".input-box"),A=document.querySelector(".keyword-input");A.addEventListener("focus",st);A.addEventListener("blur",ot);function st(){T.classList.add("focus-within")}function ot(){T.classList.remove("focus-within")}function at(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true")}function ct(e){return e.map(({_id:t,name:s,img:o,price:a})=>`<li class="discount-product-item" data-product-id='${t}'>
    <div class="discount-con">
        <div class="discount-image-container" data-product-id="${t}"> <img src="${o}" alt="${s}" class="discount-image" width="114" height="114" loading="lazy" >
        </div>
        <div class="discount-info-container">
          <h3 class="product-name product-name-disc">${s} </h3>
          <div class="discount-text-container">  
            <p class="price price-disc">$${a}</p>
            <button class="cart-button-disk cart-button" type="button" data-item-id="${t}" data-in-cart="false" aria-label="Add to cart">
                <svg class="cart-icon-disk" width="18" height="18">
                    <use href="${i}#icon-basket"></use>
                </svg>
            </button>
          </div>
        </div> 
        <div class="div-icon-discount">
          <svg class="icon-discount" width="60" height="60">
            <use href="${i}#icon-discount"></use>
          </svg>
        </div>
    </div>
</li>`).join("")}const _=document.querySelector(".js-discount-list");_.addEventListener("click",gt);const nt=new g,rt=2;let it=[],k;async function lt(){k=(await nt.getDiscountedProducts()).slice(0,rt),pt(k,_),v(),it.forEach(t=>{dt(t._id,u().some(s=>s._id===t._id))})}lt();function dt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&ut(s,t)})}function ut(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="ico">
  <use href="${icons}#icon-check"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="ico">
  <use href="${icons}#icon-basket"></use>
  </svg>`,s.disabled=!1)}function pt(e,t){t.innerHTML=ct(e)}function gt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".discount-product-item")){const s=t.closest("li").dataset.productId,o=k.find(a=>a._id===s);w(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}const mt=`<svg class="cart-icon" width="18" height="18">
<use href="${i}#icon-check"></use>
</svg>`,ft=`<svg class="cart-icon" width="18" height="18">
<use href="${i}#icon-basket"></use>
</svg>`,vt=u();function ht(e){return e.map(({_id:t,name:s,img:o,category:a,size:d,popularity:n})=>`
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
              Size: <span class="size-value">${d}</span>
              Popularity: <span class="popularity-value"> ${n}</span>
            </p>
          </div>
          <button class="cart-button-pop cart-button" type="button" data-item-id="${t}" data-in-cart="false" aria-label="Add to cart">
          ${vt.some(r=>r._id===t)?mt:ft}
          </button>
        </div>
      </li>
      `).join("")}const O=document.querySelector(".js-popular-list");O.addEventListener("click",Lt);const yt=new g,kt=5;let bt=[],b;m();async function wt(){b=(await yt.getPopularProducts()).slice(0,kt),Pt(b,O),v(),bt.forEach(t=>{$t(t._id,u().some(s=>s._id===t._id))})}wt();function $t(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&St(s,t)})}function St(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="cart-icon-pop">
  <use href="${i}#icon-check" width="12" height="12"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="cart-icon-pop">
  <use href="${i}#icon-basket" width="12" height="12"></use>
  </svg>`,s.disabled=!1)}function Pt(e,t){t.innerHTML=ht(e)}function Lt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".popular-product-item")){const s=t.closest("li").dataset.productId,o=b.find(a=>a._id===s);w(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}const It=document.querySelector(".js-products-list"),Ct=new g,Et=document.getElementById("pagination");let Bt=90;const Mt={totalItems:Bt,itemsPerPage:9,visiblePages:3,page:1,centerAlign:!0,template:{prev:`<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="${i}#icon-Nav-Button-Prev"></use></svg></a>`,firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${i}#icon-Nav-Button-Next"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${i}#icon-Nav-Button-Next"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},xt=new H(Et,Mt);xt.on("beforeMove",async e=>{const t=e.page,s=await Ct.getAllProducts(t,9);S(s.results,It),v(),m();let o;window.innerWidth>=1440?o=750:window.innerWidth>=768?o=1100:o=900,window.scrollTo({top:o,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers2.js.map
