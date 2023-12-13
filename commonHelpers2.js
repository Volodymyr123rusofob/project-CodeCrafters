import{i as r,g,a as P,r as H,u as L,A as p}from"./assets/header-fc33e606.js";import{S as j,P as D}from"./assets/vendor-ab16d78c.js";function I(e){return e.map(({_id:t,name:s,img:o,category:a,price:d,size:n,popularity:i})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${o}" alt="${s}" width="140" height="140" class="product-img" loading="lazy">
              </div>
                  <h3 class="product-title-mark">${s}</h3>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${a.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${n}</span></p>
                <p class="product-parameter popularity">Popularity: <span class="span-parameter-value"> ${i}</span></p>
                </div>
              <div class="price-card-container">
                <p class="price">$${d}</p>
                <button class="cart-button cart-button-css" type="button" data-item-id="${t}" data-in-cart="false">
                  <svg class="cart-icon" width="18" height="18">
                    <use href="${r}#icon-basket"></use>
                  </svg>
                </button>
              </div>
            </li>
            `).join("")}function f(e="The product has been added to the basket!",t="success"){j.fire({title:"",text:e,icon:t,confirmButtonColor:"#6d8434"})}const u=document.querySelector(".modal-prod-wrapper"),z=new p;async function w(e){u.classList.add("modal-active"),u.classList.add("loader");const t=await z.getProductById(e._id);u.classList.remove("loader"),W(t),J(t)}function J(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;g().some(a=>a._id===s)?t.textContent="Remove from":t.textContent="Add to"}function W(e){try{u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
  <div class="modal-prod-card">
  <button type="button" class="modal-prod-close-btn">
    <svg class="modal-prod-close-icon" width="22" height="22">
      <use href="${r}#icon-ion_close-sharp"></use>
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
        <use href="${r}#icon-basket"></use>
      </svg>
  </button>
  </div>
  </div>
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>K(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>S()),window.addEventListener("click",E),window.addEventListener("keydown",B)}catch(t){console.error(t)}}function K(e){const t=e._id,o=g().some(d=>d._id===t),a=document.querySelector(".modal-prod-add-text");o?(H(t),a.textContent="Add to",$(t,!1),f("The product has been removed the basket!","info")):(P({_id:t,amount:1}),f(),a.textContent="Remove from",$(t,!0)),L()}function S(){document.body.classList.remove("stop-scroll"),u.classList.remove("modal-active"),u.innerHTML="",window.removeEventListener("click",E),window.removeEventListener("keydown",B)}function E(e){e.target===u&&S()}function B(e){e.keyCode===27&&S()}const C=document.querySelector(".js-products-list");C.addEventListener("click",et);const U=new p,Y=9;let M,m;const G=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-check"></use>
</svg>`,Q=`<svg class="cart-icon" width="18" height="18">
<use href="${r}#icon-basket"></use>
</svg>`;async function V(){const t=(await U.getAllProducts()).results.slice(0,Y);x(t,C),v(),m.forEach(s=>{const o=g().some(a=>a._id===s.dataset.itemId);k(s,o)})}function x(e,t){M=e,t.innerHTML=I(e)}const X=g();function v(){m=document.querySelectorAll(".cart-button"),m&&m.forEach(e=>{e.addEventListener("click",Z)})}function Z(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:o,icon:a}=tt(t,s);f(o,a),L()}}function tt(e,t){const s=X.findIndex(d=>d._id===t);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):P({_id:t,amount:1}),k(e,!0),{message:o,icon:a}}function $(e,t){m.forEach(s=>{s.dataset.itemId===e&&k(s,t)})}function k(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=G,s.disabled=!0):(e.innerHTML=Q,s.disabled=!1)}V();function et(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".product-item")){const s=t.closest("li").dataset.productId,o=M.find(a=>a._id===s);w(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}class st{constructor(t){this.storageFilter=t}initStorageForFilter(){if(this.getFilterProducts()){console.log("this.storageFilter=",this.storageFilter);return}this.writeToLocalStorage([]),console.log("this.storageFilter-[]")}getFilterProducts(){return JSON.parse(localStorage.getItem(this.storageFilter))}removeFilterProducts(){this.writeToLocalStorage([])}writeToLocalStorage(t){localStorage.setItem(this.storageFilter,JSON.stringify(t))}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new p,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const n=document.querySelector(".keyword-input"),i=t.value,c={keyword:n.value||null,category:i==="Show all"?t.selectedCategory="":i,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(c));try{let l;!c.keyword&&c.category===null?l=await e.getAllProducts(c.page,c.limit):c.keyword?l=await e.getProductsByName(c.keyword,c.category,c.page,c.limit):l=await e.getProductsInCategories(c.category,c.page,c.limit),console.log("Полученные продукты:(products=>)",l);const h="filterOfProducts",A=new st(h),_=l.results;if(A.writeToLocalStorage(_),l.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&ct();else{const N=I(l.results),R=document.querySelector(".js-products-list");R.innerHTML=N,v(),a(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}}try{const n=await e.getProductsByCategory();n.push("Show all"),n.forEach(i=>{const c=document.createElement("option");c.value=i,c.textContent=i,t.appendChild(c)})}catch(n){console.error("Ошибка при получении категорий:",n.message)}document.querySelector(".filter-form").addEventListener("submit",async n=>{n.preventDefault();const i=document.querySelector(".keyword-input"),c=t.value,l={keyword:i.value||null,category:c==="Show all"?null:c,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(l));const h={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(h)),await s()});function a(){const n=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");n&&n.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const d={keyword:null,category:null,page:1,limit:9};localStorage.setItem("filters",JSON.stringify(d)),await s()});const T=document.querySelector(".input-box"),q=document.querySelector(".keyword-input");q.addEventListener("focus",ot);q.addEventListener("blur",at);function ot(){T.classList.add("focus-within")}function at(){T.classList.remove("focus-within")}function ct(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true")}function nt(e){return e.map(({_id:t,name:s,img:o,price:a})=>`<li class="discount-product-item" data-product-id='${t}'>
    <div class="discount-con">
        <div class="discount-image-container" data-product-id="${t}"> <img src="${o}" alt="${s}" class="discount-image" width="114" height="114" loading="lazy">
        </div>
        <div class="discount-info-container">
          <h3 class="product-name product-name-disc">${s} </h3>
          <div class="discount-text-container">  
            <p class="price price-disc">$${a}</p>
            <button class="cart-button-disk cart-button" type="button" data-item-id="${t}" data-in-cart="false">
                <svg class="cart-icon-disk" width="18" height="18">
                    <use href="${r}#icon-basket"></use>
                </svg>
            </button>
          </div>
        </div> 
        <div class="div-icon-discount">
          <svg class="icon-discount" width="60" height="60">
            <use href="${r}#icon-discount"></use>
          </svg>
        </div>
    </div>
</li>`).join("")}const F=document.querySelector(".js-discount-list");F.addEventListener("click",mt);const rt=new p,it=2;let lt=[],y;async function dt(){y=(await rt.getDiscountedProducts()).slice(0,it),gt(y,F),v(),lt.forEach(t=>{ut(t._id,g().some(s=>s._id===t._id))})}dt();function ut(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&pt(s,t)})}function pt(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="ico">
  <use href="${icons}#icon-check"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="ico">
  <use href="${icons}#icon-basket"></use>
  </svg>`,s.disabled=!1)}function gt(e,t){t.innerHTML=nt(e)}function mt(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".discount-product-item")){const s=t.closest("li").dataset.productId,o=y.find(a=>a._id===s);w(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}function ft(e){return e.map(({_id:t,name:s,img:o,category:a,size:d,popularity:n})=>`
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
        <button class="cart-button-pop cart-button" type="button" data-item-id="${t}" data-in-cart="false">
                <svg class="cart-icon-pop" width="12" height="12">
                    <use href="${r}#icon-basket"></use>
                </svg>
            </button>
          </button>
        </div>
      </li>
      `).join("")}const O=document.querySelector(".js-popular-list");O.addEventListener("click",$t);const vt=new p,ht=5;let yt=[],b;async function bt(){b=(await vt.getPopularProducts()).slice(0,ht),kt(b,O),v(),yt.forEach(t=>{wt(t._id,g().some(s=>s._id===t._id))})}bt();function wt(e,t){basketButtons.forEach(s=>{s.dataset.itemId===e&&St(s,t)})}function St(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=`<svg class="cart-icon-pop">
  <use href="${r}#icon-check" width="12" height="12"></use>
  </svg>`,s.disabled=!0):(e.innerHTML=`<svg class="cart-icon-pop">
  <use href="${r}#icon-basket" width="12" height="12"></use>
  </svg>`,s.disabled=!1)}function kt(e,t){t.innerHTML=ft(e)}function $t(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".popular-product-item")){const s=t.closest("li").dataset.productId,o=b.find(a=>a._id===s);w(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}const Pt=document.querySelector(".js-products-list"),Lt=new p,It=document.getElementById("pagination");let Et=90;const Bt={totalItems:Et,itemsPerPage:9,visiblePages:3,page:1,centerAlign:!0,template:{prev:`<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="${r}#icon-Nav-Button-Prev"></use></svg></a>`,firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${r}#icon-Nav-Button-Next"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg class="tui-ico-{{type}}" width="32" height="32"><use href="${r}#icon-Nav-Button-Next"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},Ct=new D(It,Bt);Ct.on("beforeMove",async e=>{const t=e.page,s=await Lt.getAllProducts(t,9);x(s.results,Pt),v(),window.scrollTo({top:100,behavior:"smooth"})});const Mt=new p,xt=document.getElementById("subscriptionForm"),Tt=document.querySelector(".footer-form-input");xt.addEventListener("submit",qt);async function qt(e){e.preventDefault();const t=e.currentTarget.elements.email,s=Tt.value;try{const o=await Mt.createSubscription({email:s});t.value="";let a="Successfully subscribed!";o&&o.data&&o.data.message&&(a=o.data.message),f(a,"success")}catch(o){console.log("Error:",o);let a="This email address has already been entered.You have already subscribed to our new products. Watch for offers at the mailing address.";o.response&&o.response.data&&o.response.data.message&&(a=o.response.data.message),f(a,"warning")}e.target.reset()}
//# sourceMappingURL=commonHelpers2.js.map
