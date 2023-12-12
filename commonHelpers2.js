import{i as d,g as f,a as $,r as J,u as L,A as g,S as P}from"./assets/header-42f365c0.js";import{S as h,P as z}from"./assets/vendor-ab16d78c.js";function C(e){return e.map(({_id:t,name:s,img:o,category:a,price:r,size:n,popularity:i})=>`
            <li class="product-item" data-product-id='${t}'>
              <div class="product-img-container">
                  <img src="${o}" alt="${s}" width="140" height="140" class="product-img">
              </div>
                  <h3 class="product-title-mark">${s}</h3>
              <div class="product-parameter-container">
                <p class="product-parameter">Category: <span class="span-parameter-value"> ${a.replace(/_/g," ")}</span></p>
                <p class="product-parameter">Size: <span class="span-parameter-value"> ${n}</span></p>
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
            `).join("")}function p(e="The product has been added to the basket!",t="success"){h.fire({title:"",text:e,icon:t,confirmButtonColor:"#6d8434"})}const u=document.querySelector(".modal-prod-wrapper"),W=new g;async function y(e){u.classList.add("modal-active"),u.classList.add("loader");const t=await W.getProductById(e._id);u.classList.remove("loader"),U(t),K(t)}function K(e){const t=document.querySelector(".modal-prod-add-text"),s=e._id;f().some(a=>a._id===s)?t.textContent="Remove from":t.textContent="Add to"}function U(e){try{u.classList.add("modal-active"),document.body.classList.add("stop-scroll"),u.innerHTML=`
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
  `,document.querySelector(".modal-prod-add-btn").addEventListener("click",()=>Y(e)),document.querySelector(".modal-prod-close-btn").addEventListener("click",()=>k()),window.addEventListener("click",I),window.addEventListener("keydown",B)}catch(t){console.error(t)}}function Y(e){const t=e._id,o=f().some(r=>r._id===t),a=document.querySelector(".modal-prod-add-text");o?(J(t),a.textContent="Add to",w(t,!1),p("The product has been removed the basket!","info")):($({_id:t,amount:1}),p(),a.textContent="Remove from",w(t,!0)),L()}function k(){document.body.classList.remove("stop-scroll"),u.classList.remove("modal-active"),u.innerHTML="",window.removeEventListener("click",I),window.removeEventListener("keydown",B)}function I(e){e.target===u&&k()}function B(e){e.keyCode===27&&k()}const E=document.querySelector(".js-products-list");E.addEventListener("click",at);const G=new g,Q=9;let x,m;const V=`<svg class="cart-icon" width="18" height="18">
<use href="${d}#icon-check"></use>
</svg>`,X=`<svg class="cart-icon" width="18" height="18">
<use href="${d}#icon-basket"></use>
</svg>`;async function Z(){const t=(await G.getAllProducts()).results.slice(0,Q);M(t,E),et(),m.forEach(s=>{const o=f().some(a=>a._id===s.dataset.itemId);b(s,o)})}function M(e,t){x=e,t.innerHTML=C(e)}const tt=f();function et(){S()}function S(){m=document.querySelectorAll(".cart-button"),m&&m.forEach(e=>{e.addEventListener("click",st)})}function st(e){const t=e.target.closest(".cart-button");if(t){const s=t.dataset.itemId,{message:o,icon:a}=ot(t,s);p(o,a),L()}}function ot(e,t){const s=tt.findIndex(r=>r._id===t);let o,a;return s!==-1?(o="This product has already been added to the cart!",a="warning"):$({_id:t,amount:1}),b(e,!0),{message:o,icon:a}}function w(e,t){m.forEach(s=>{s.dataset.itemId===e&&b(s,t)})}function b(e,t){const s=document.querySelector(".cart-button");t?(e.innerHTML=V,s.disabled=!0):(e.innerHTML=X,s.disabled=!1)}Z();function at(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".product-item")){const s=t.closest("li").dataset.productId,o=x.find(a=>a._id===s);y(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}class ct{constructor(t){this.storageFilter=t}initStorageForFilter(){if(this.getFilterProducts()){console.log("this.storageFilter=",this.storageFilter);return}this.writeToLocalStorage([]),console.log("this.storageFilter-[]")}getFilterProducts(){return JSON.parse(localStorage.getItem(this.storageFilter))}removeFilterProducts(){this.writeToLocalStorage([])}writeToLocalStorage(t){localStorage.setItem(this.storageFilter,JSON.stringify(t))}}document.addEventListener("DOMContentLoaded",async()=>{localStorage.setItem("noResultsMessageDisplayed","false");const e=new g,t=document.querySelector(".category-select");t.addEventListener("change",async()=>{await s()});async function s(){const n=document.querySelector(".keyword-input"),i=t.value,c={keyword:n.value||null,category:i==="Show all"?t.selectedCategory="":i,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(c));try{let l;!c.keyword&&c.category===null?l=await e.getAllProducts(c.page,c.limit):c.keyword?l=await e.getProductsByName(c.keyword,c.category,c.page,c.limit):l=await e.getProductsInCategories(c.category,c.page,c.limit),console.log("Полученные продукты:(products)",l),console.log("Сразу-products.results=",l.results);const v="filterOfProducts",_=new ct(v),H=l.results;if(_.writeToLocalStorage(H),l.totalPages===0)(localStorage.getItem("noResultsMessageDisplayed")!=="true"||localStorage.getItem("noResultsMessageDisplayed")!==!0)&&it();else{const N=C(l.results),D=document.querySelector(".js-products-list");D.innerHTML=N,S(),a(),localStorage.setItem("noResultsMessageDisplayed","false")}}catch(l){console.error("Ошибка при получении продуктов:",l.message)}}try{const n=await e.getProductsByCategory();n.push("Show all"),n.forEach(i=>{const c=document.createElement("option");c.value=i,c.textContent=i,t.appendChild(c)})}catch(n){console.error("Ошибка при получении категорий:",n.message)}document.querySelector(".filter-form").addEventListener("submit",async n=>{n.preventDefault();const i=document.querySelector(".keyword-input"),c=t.value,l={keyword:i.value||null,category:c==="Show all"?null:c,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(l));const v={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(v)),await s()});function a(){const n=document.querySelector(".filters-title"),i=document.querySelector(".filters-text");n&&n.remove(),i&&i.remove(),localStorage.setItem("noResultsMessageDisplayed","true")}const r={keyword:null,category:null,page:1,limit:6};localStorage.setItem("filters",JSON.stringify(r)),await s()});const T=document.querySelector(".input-box"),q=document.querySelector(".keyword-input");q.addEventListener("focus",nt);q.addEventListener("blur",rt);function nt(){T.classList.add("focus-within")}function rt(){T.classList.remove("focus-within")}function it(){if(localStorage.getItem("noResultsMessageDisplayed")==="true"||localStorage.getItem("noResultsMessageDisplayed")===!0)return;const e=document.querySelector(".js-products-list"),t=document.createElement("h2");t.textContent="Nothing was found for the selected ",t.classList.add("filters-title");const s=document.createElement("span");s.textContent="filters",s.classList.add("filters-span"),t.appendChild(s);const o=document.createElement("p");o.textContent="Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.",o.classList.add("filters-text"),e.innerHTML="",e.insertAdjacentElement("afterend",t),t.insertAdjacentElement("afterend",o),localStorage.setItem("noResultsMessageDisplayed","true")}const F=document.querySelector(".js-discount-list");F.addEventListener("click",St);const lt=new g,A=new P("cart"),dt=`<svg class="ico">
<use href="${d}#icon-check"></use>
</svg>`,ut=`<svg class="ico">
<use href="${d}#icon-basket"></use>
</svg>`;async function pt(){const e=await lt.getDiscountedProducts();gt(e,F),ft()}function gt(e,t){t.innerHTML=bt(e)}const mt=A.getAllProducts();function ft(){vt()}function vt(){const e=document.querySelectorAll(".discount-cart-js");e&&e.forEach(t=>{t.addEventListener("click",ht)})}function ht(e){const t=e.target.closest(".discount-cart-js");if(t){const s=t.dataset.itemId;yt(t,s),p()}}function yt(e,t,s,o){mt.findIndex(r=>r._id===t)!==-1?h.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):A.addProduct({_id:t,amount:1}),kt(e,!0)}function kt(e,t){if(t){e.innerHTML=dt;const s=document.querySelector(".discount-cart-js");s.disabled=!0}else e.innerHTML=ut}pt();function St(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("a")&&t.closest(".popular-products-card-link")){const s=t.closest("li").dataset.productId;y(s).catch(o=>{console.error("Помилка при отриманні продукта за айді:",o.message)})}}function bt(e){return e.map(({_id:t,name:s,img:o,price:a})=>`<li class="discount-product-item" data-product-id='${t}'>
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
        <div class="div-icon-discount">
          <svg class="icon-discount" width="60" height="60">
            <use href="${d}#icon-discount"></use>
          </svg>
        </div>
    </div>
</li>`).join("")}const O=document.querySelector(".js-popular-list");O.addEventListener("click",Ft);const wt=new g,j=new P("cart");let R;const $t=`<svg class="ico">
<use href="${d}#icon-check"></use>
</svg>`,Lt=`<svg class="ico">
<use href="${d}#icon-basket"></use>
</svg>`;async function Pt(){const t=(await wt.getPopularProducts()).filter(({popularity:s})=>s>3);Ct(t,O),Bt()}function Ct(e,t){R=e,t.innerHTML=qt(e)}const It=j.getAllProducts();function Bt(){Et()}function Et(){const e=document.querySelectorAll(".popular-cart-button");e&&e.forEach(t=>{t.addEventListener("click",xt)})}function xt(e){const t=e.target.closest(".popular-cart-button");if(t){const s=t.dataset.itemId;Mt(t,s),p()}}function Mt(e,t,s,o){It.findIndex(r=>r._id===t)!==-1?h.fire({title:"",text:"This product has already been added to the cart!",icon:"warning",confirmButtonColor:"#6d8434"}):j.addProduct({_id:t,amount:1}),Tt(e,!0)}function Tt(e,t){if(t){e.innerHTML=$t;const s=document.querySelector(".popular-cart-button");s.disabled=!0}else e.innerHTML=Lt}Pt();function qt(e){return e.map(({_id:t,name:s,img:o,category:a,size:r,popularity:n})=>`<li class="popular-product-item" data-product-id='${t}'>
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
                    Popularity: <span class="popularity-value"> ${n}</span>
                </p>
        </div>
                    <button class="cart-button-pop cart-button" type="button" data-product-id="${t}" data-in-cart="false">
                <svg class="cart-icon-pop" width="12" height="12">
                    <use href="${d}#icon-basket"></use>
                </svg>
            </button>
    </div>
</li>`).join("")}function Ft(e){e.preventDefault();const t=e.target;if(console.log(t),t.closest("li")&&t.closest(".popular-product-item")){const s=t.closest("li").dataset.productId,o=R.find(a=>a._id===s);y(o).catch(a=>{console.error("Помилка при отриманні продукта за айді:",a.message)})}}const At=document.querySelector(".js-products-list"),Ot=new g,jt=document.getElementById("pagination"),Rt={totalItems:540,itemsPerPage:6,visiblePages:3,page:1,centerAlign:!0,template:{prev:'<a href="#" class="tui-page-btn tui-prev"><svg class="icon-svg"><use href="prev.svg#prev"></use></svg></a>',firstPageLink:'<a href="#" class="tui-page-btn tui-first">{{page}}</a>',page:'<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',lastPageLink:'<a href="#" class="tui-page-btn tui-last">{{page}}</a>',next:'<a href="#" class="tui-page-btn tui-next"><svg class="icon-svg"><use href="next.svg#next"></use></svg></a>'}},_t=new z(jt,Rt);_t.on("beforeMove",async e=>{const t=e.page,s=await Ot.getAllProducts(t,6);M(s.results,At),S(),window.scrollTo({top:100,behavior:"smooth"})});const Ht=new g,Nt=document.getElementById("subscriptionForm"),Dt=document.querySelector(".footer-form-input");Nt.addEventListener("submit",Jt);async function Jt(e){e.preventDefault();const t=e.currentTarget.elements.email,s=Dt.value;try{const o=await Ht.createSubscription({email:s});t.value="";let a="Successfully subscribed!";o&&o.data&&o.data.message&&(a=o.data.message),p(a,"success")}catch(o){console.log("Error:",o);let a="This email address has already been entered.You have already subscribed to our new products. Watch for offers at the mailing address.";o.response&&o.response.data&&o.response.data.message&&(a=o.response.data.message),p(a,"warning")}e.target.reset()}
//# sourceMappingURL=commonHelpers2.js.map
