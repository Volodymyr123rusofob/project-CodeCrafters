import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import ApiService from './requests';
import {
  displayProducts,
  addEventListenersToBasketButtons,
  updateData,
} from './products_list';
import icons from '../img/symbol-defs.svg';


const productsList = document.querySelector('.js-products-list');
const apiService = new ApiService();
const container = document.getElementById('pagination');
let totalPages = 90;

const options = {
  totalItems: totalPages,
  itemsPerPage: 9,
  visiblePages: 3,
  page: 1,
  centerAlign: true,
  template: {
    prev:
      `<a href="#" class="tui-page-btn tui-prev">` +
      `<svg class="icon-svg"><use href="${icons}#icon-Nav-Button-Prev"></use></svg>` +
      `</a>`,
    firstPageLink: `<a href="#" class="tui-page-btn tui-first">{{page}}</a>`,
    page: `<a href="#" class="tui-page-btn tui-{{type}}">{{page}}</a>`,
    currentPage: `<strong class="tui-page-btn tui-is-selected">{{page}}</strong>`,
    moveButton:
      `<a href="#" class="tui-page-btn tui-{{type}}">` +
      // `<span class="tui-ico-{{type}}">{{type}}</span>` +
      `<svg class="tui-ico-{{type}}" width="32" height="32"><use href="${icons}#icon-Nav-Button-Next"></use></svg>` +
      `</a>`,

    disabledMoveButton:
      `<span class="tui-page-btn tui-is-disabled tui-{{type}}">` +
      // `<span class="tui-ico-{{type}}">{{type}}</span>` +
      `<svg class="tui-ico-{{type}}" width="32" height="32"><use href="${icons}#icon-Nav-Button-Next"></use></svg>` +
      `</span>`,

    moreButton:
      `<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">` +
      `<span class="tui-ico-ellip">...</span>` +
      // `<svg class="tui-ico-ellip" width="14" height="14"><use href="{{type}}"></use></svg>` +
      `</a>`,
    lastPageLink: `<a href="#" class="tui-page-btn tui-last">{{page}}</a>`,
    next:
      `<a href="#" class="tui-page-btn tui-next">` +
      `<svg class="icon-svg"><use href="next.svg#next"></use></svg>` +
      `</a>`,
  },
};
const pagination = new Pagination(container, options);
// Обробник події перед переміщенням на іншу сторінку
pagination.on('beforeMove', async event => {
  
  const currentPage = event.page;
  const newProducts = await apiService.getAllProducts(currentPage, 9);
  displayProducts(newProducts.results, productsList);
  addEventListenersToBasketButtons();
  updateData();
  // После обновления контента прокрутите страницу вверх
  window.scrollTo({
    top: 900,
    behavior: 'smooth',
  });
});
// // Показуємо або приховуємо пагінацію відповідно до умови
// if (totalPages > 1) {
// paginationContainer.style.display = 'block';
// } else {
// paginationContainer.style.display = 'none';
// } (edited)
// pagination.reset();