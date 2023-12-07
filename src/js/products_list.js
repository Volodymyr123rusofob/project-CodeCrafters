import ApiService from "./requests";
import createMarkup from "./markup_products_list";
		
const productsList = document.querySelector(".js-products-list");
		
const apiService = new ApiService();
const itemsPerPage = 6;
		
const allProducts = await apiService.getAllProducts();
console.log(allProducts);
const totalItems = allProducts.length;
const productsOnePage = allProducts.results.slice(0, itemsPerPage);
displayProducts(productsOnePage, productsList);		

function displayProducts(products, container) {
		container.innerHTML = createMarkup(products);
}
