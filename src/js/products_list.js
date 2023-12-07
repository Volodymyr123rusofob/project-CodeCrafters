import { openModal } from "./modal";
import ApiService from "./requests";
import createMarkup from "./markup_products_list";
        
const productsList = document.querySelector(".js-products-list");
productsList.addEventListener('click', onClickCart);
        
const apiService = new ApiService();
const itemsPerPage = 6;
        
const allProducts = await apiService.getAllProducts();
console.log(allProducts);
const productsOnePage = allProducts.results.slice(0, itemsPerPage);
displayProducts(productsOnePage, productsList); 

function displayProducts(products, container) {
    container.innerHTML = createMarkup(products);
    console.log(products);
}

function onClickCart(e) {
    e.preventDefault();
    const clickedEl = e.target;
    if (
        clickedEl.closest('a') &&
        clickedEl.closest('.products-card-link')
    ) {
        const id = clickedEl.closest('li').dataset.productId;
        openModal(id)
        .catch((error)=>{
        console.error('Помилка при отриманні продукта за айді:', error.message);
        });
    }
}


