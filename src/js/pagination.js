import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from './requests';
import {
  displayProducts,
  addEventListenersToBasketButtons,
} from './products_list';
const productsList = document.querySelector('.js-products-list');
const apiService = new ApiService();
const container = document.getElementById('pagination');
const options = {
  totalItems: 540,
  itemsPerPage: 6,
  visiblePages: 3,
  page: 1,
  centerAlign: true,
  template: {
    prev:
      '<a href="#" class="tui-page-btn tui-prev">' +
      '<svg class="icon-svg"><use href="prev.svg#prev"></use></svg>' +
      '</a>',
    firstPageLink: '<a href="#" class="tui-page-btn tui-first">{{page}}</a>',
    page: '<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
    lastPageLink: '<a href="#" class="tui-page-btn tui-last">{{page}}</a>',
    next:
      '<a href="#" class="tui-page-btn tui-next">' +
      '<svg class="icon-svg"><use href="next.svg#next"></use></svg>' +
      '</a>',
  },
};
const pagination = new Pagination(container, options);
// Обробник події перед переміщенням на іншу сторінку
pagination.on('beforeMove', async event => {
  const currentPage = event.page;
  const newProducts = await apiService.getAllProducts(currentPage, 6);
  displayProducts(newProducts.results, productsList);
  addEventListenersToBasketButtons();

  // После обновления контента прокрутите страницу вверх
  window.scrollTo({
    top: 200,
    behavior: 'smooth',
   });
 
});
// // Показуємо або приховуємо пагінацію відповідно до умови
// // if (totalPages > 1) {
// // paginationContainer.style.display = 'block';
// // } else {
// // paginationContainer.style.display = 'none';
// // } (edited)
