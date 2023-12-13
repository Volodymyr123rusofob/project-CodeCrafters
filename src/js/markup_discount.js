import icons from '../img/symbol-defs.svg';

export default function createMarkupDiscount(arr) {
  return arr
    .map(
      ({
        _id,
        name,
        img,
        price,
      }) => `<li class="discount-product-item" data-product-id='${_id}'>
    <div class="discount-con">
        <div class="discount-image-container" data-product-id="${_id}"> <img src="${img}" alt="${name}" class="discount-image" width="114" height="114" loading="lazy" >
        </div>
        <div class="discount-info-container">
          <h3 class="product-name product-name-disc">${name} </h3>
          <div class="discount-text-container">  
            <p class="price price-disc">$${price}</p>
            <button class="cart-button-disk cart-button" type="button" data-item-id="${_id}" data-in-cart="false" aria-label="Add to cart">
                <svg class="cart-icon-disk" width="18" height="18">
                    <use href="${icons}#icon-basket"></use>
                </svg>
            </button>
          </div>
        </div> 
        <div class="div-icon-discount">
          <svg class="icon-discount" width="60" height="60">
            <use href="${icons}#icon-discount"></use>
          </svg>
        </div>
    </div>
</li>`)
    .join('');
}