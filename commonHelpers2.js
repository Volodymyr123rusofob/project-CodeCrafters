import{S as L,A as g}from"./assets/local-storage-f0365b04.js";import{S as $,P as H,N as S}from"./assets/vendor-c5b37fd0.js";const N="productsBasket",v=new L(N);function f(){return v.getAllProducts()}function P(t){v.addProduct(t)}function F(t){v.removeAllProductsById(t)}const z="productsBasket",D=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},y=()=>{const t=document.querySelector("#cart-counter"),e=D(z)??[];t.textContent=`(${e.length})`};y();const u="/project-CodeCrafters/assets/symbol-defs-e77d3d30.svg";function C(t){return t.map(({_id:e,name:s,img:o,category:a,price:n,size:c,popularity:i})=>`
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
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${c}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${i}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${n}</p>
                <button class="cart-button cart-button-css" type="button" data-item-id="${e}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${u}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}function p(t="The product has been added to the basket!",e="success"){$.fire({title:"",text:t,icon:e,confirmButtonColor:"#6d8434"})}const d=document.querySelector(".modal-prod-wrapper");async function B(t){d.classList.add("modal-active"),d.classList.add("loader"),d.classList.remove("loader"),G(t),J(t)}function J(t){const e=document.querySelector(".modal-prod-add-text"),s=t._id;f().some(a=>a._id===s)?e.textContent="Remove from":e.textContent="Add to"}function G(t){try{d.classList.add("modal-active"),document.body.classList.add("stop-scroll"),d.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${u}#icon-ion_close-sharp"></use>
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
        <use href="${u}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>W(t)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>h()),window.addEventListener("click",E),window.addEventListener("keydown",I)}catch(e){console.error(e)}}function W(t){const e=t._id,o=f().some(n=>n._id===e),a=document.querySelector(".modal-prod-add-text");o?(F(e),p("The product has been removed from the basket!","info"),a.textContent="Add to",w(e,!1)):(P({_id:e,amount:1}),p(),a.textContent="Remove from",w(e,!0)),y()}function h(){document.body.classList.remove("stop-scroll"),d.classList.remove("modal-active"),d.innerHTML="",window.removeEventListener("click",E),window.removeEventListener("keydown",I)}function E(t){t.target===d&&h()}function I(t){t.keyCode===27&&h()}const x=document.querySelector(".js-products-list");x.addEventListener("click",st);const Y=new g,K=6;let M,m;const U=`<svg class="cart-icon" width="18" height="18">
<use href="${u}#icon-check"></use>
</svg>`,V=`<svg class="cart-icon" width="18" height="18">
<use href="${u}#icon-basket"></use>
</svg>`;async function Q(){const e=(await Y.getAllProducts()).results.slice(0,K);q(e,x),Z(),m.forEach(s=>{const o=f().some(a=>a._id===s.dataset.itemId);b(s,o)})}function q(t,e){M=t,e.innerHTML=C(t)}const X=f();function Z(){k()}function k(){m=document.querySelectorAll(".cart-button"),m&&m.forEach(t=>{t.addEventListener("click",tt)})}function tt(t){const e=t.target.closest(".cart-button");if(e){const s=e.dataset.itemId,{message:o,icon:a}=et(e,s);p(o,a),y()}}function et(t,e){const s=X.findIndex(n=>n._id===e);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):P({_id:e,amount:1}),b(t,!0),{message:o,icon:a}}function w(t,e){m.forEach(s=>{s.dataset.itemId===t&&b(s,e)})}function b(t,e){const s=document.querySelector(".cart-button");e?(t.innerHTML=U,s.disabled=!0):(t.innerHTML=V,s.disabled=!1)}Q();function st(t){t.preventDefault();const e=t.target;if(console.log(e),e.closest("a")&&e.closest(".products-card-link")){const s=e.closest("li").dataset.productId,o=M.find(a=>a._id===s);B(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const t=new g,e=document.querySelector(".category-select");try{const n=await t.getProductsByCategory();n.push("Show all"),n.forEach(c=>{const i=document.createElement("option");i.value=c,i.textContent=c,e.appendChild(i)})}catch(n){console.error("Ошибка при получении категорий:",n.message)}document.querySelector(".filter-form").addEventListener("submit",async n=>{n.preventDefault();const c=document.querySelector(".keyword-input"),i=e.value,r={keyword:c.value||null,category:i==="Show all"?null:i,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(r));try{let l;if(!r.keyword&&r.category===null?l=await t.getAllProducts(r.page,r.limit):r.keyword?l=await t.getProductsByName(r.keyword,r.category,r.page,r.limit):l=await t.getProductsInCategories(r.category,r.page,r.limit),console.log("Полученные продукты:",l),l.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&nt();else{const O=C(l.results),j=document.querySelector(".js-products-list");j.innerHTML=O,k(),o(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}});function o(){const n=document.querySelector(".filters-title"),c=document.querySelector(".filters-text");n&&n.remove(),c&&c.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const a={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(a))});const T=document.querySelector(".input-box"),A=document.querySelector(".keyword-input");A.addEventListener("focus",ot);A.addEventListener("blur",at);function ot(){T.classList.add("focus-within")}function at(){T.classList.remove("focus-within")}function nt(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const t=document.querySelector(".js-products-list"),e=document.createElement("h2");e.textContent="Nothing was found for the selected ",e.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),e.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),t.innerHTML="",t.insertAdjacentElement("afterend",e),e.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true")}const R=document.querySelector(".js-popular-list");R.addEventListener("click",yt);const rt=new g,_=new L("cart"),ct=`<svg class="ico">
<use href="${u}#icon-check"></use>
</svg>`,it=`<svg class="ico">
<use href="${u}#icon-basket"></use>
</svg>`;async function lt(){const e=(await rt.getPopularProducts()).filter(({popularity:s})=>s>3);dt(e,R),pt()}function dt(t,e){e.innerHTML=ht(t)}const ut=_.getAllProducts();function pt(){mt()}function mt(){const t=document.querySelectorAll(".popular-cart-button");t&&t.forEach(e=>{e.addEventListener("click",gt)})}function gt(t){const e=t.target.closest(".popular-cart-button");if(e){const s=e.dataset.itemId;ft(e,s),p()}}function ft(t,e,s,o){ut.findIndex(n=>n._id===e)!==-1?$.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):_.addProduct({_id:e,amount:1}),vt(t,!0)}function vt(t,e){if(e){t.innerHTML=ct;const s=document.querySelector(".popular-cart-button");s.disabled=!0}else t.innerHTML=it}lt();function yt(t){t.preventDefault();const e=t.target;if(console.log(e),e.closest("a")&&e.closest(".popular-products-card-link")){const s=e.closest("li").dataset.productId;B(s).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}function ht(t){return t.map(({_id:e,name:s,img:o,category:a,size:n,popularity:c})=>`<li class="popular-product-item" data-product-id='${e}'>
    <div class="popular-con">
        <div class="product-image-container" data-product-id="${e}"> <img src="${o}" alt="" class="product-image">
        </div>
        <div class="product-text-pop">
            <h3 class="product-name">${s}
                <p class="product margin">
                    Category: <span class="category-value">${a.replace("_"," ")}</span><br>
                    Size: <span class="size-value">${n}</span><br>
                    Popularity: <span class="popularity-value">${c}</span>
                </p>
            </h3>
            <button class="cart-button-pop cart-button" type="button" data-product-id="${e}" data-in-cart="false">
                <svg class="cart-icon-pop" width="18" height="18">
                    <use href="${u}#icon-basket"></use>
                </svg>
            </button>
        </div>
    </div>
</li>`).join("")}const kt=document.querySelector(".js-products-list"),bt=new g,St=document.getElementById("pagination"),wt={totalItems:540,itemsPerPage:6,visiblePages:4,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},Lt=new H(St,wt);Lt.on("beforeMove",async t=>{const e=t.page,s=await bt.getAllProducts(e,6);q(s.results,kt),k()});const $t=new g,Pt=document.getElementById("subscriptionForm"),Ct=document.querySelector(".footer-form-input");function Bt(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}async function Et(t){t.preventDefault();const e=Ct.value;if(Bt(e))try{const s=await $t.createSubscription(e);s.conflict?p("This email address has already been entered. You have already subscribed to our new products. Watch for offers at the mailing address."):(console.log("Success:",s),p("Subscription completed successfully"))}catch(s){console.error("Error:",s),S.Notify.failure("Error during subscription")}else S.Notify.warning("Please enter a valid email address.");t.target.reset()}Pt.addEventListener("submit",Et);
//# sourceMappingURL=commonHelpers2.js.map
