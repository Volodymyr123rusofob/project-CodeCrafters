import createMarkup from './markup_products_list.js';
import ApiService from './requests.js';
// import {
//   addEventListenersToBasketButtons,
//   displayProducts,
// } from './products_list.js';
// import { FilterStorage } from './filter_helpers.js';
// import {alertPopUp} from './alert';
// alertPopUp('The product has been removed from the basket!');
import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.min.css';
import 'tui-pagination/dist/tui-pagination.css';

import '../css/filters.css';
import {
  displayProducts,
  addEventListenersToBasketButtons,
  updateData,
} from './products_list';
import icons from '../img/symbol-defs.svg';

const productsList = document.querySelector('.js-products-list');
// const apiService = new ApiService();
const container = document.getElementById('pagination');



// ******************************************************************************************
const paginationContainer = document.getElementById('pagination');
paginationContainer.classList.add('tui-pagination');
let visiblePages = 4;

function updateVisiblePages() {
  if (window.innerWidth <= 767){
    visiblePages = 2;
  } else {
    visiblePages = 4;
  }
}
// Вызывать функцию обновления при изменении размера окна
  window.addEventListener('resize', updateVisiblePages);

  // Инициализировать значение при загрузке страницы
updateVisiblePages();
  


document.addEventListener('DOMContentLoaded', async () => {
  localStorage.setItem('noResultsMessageDisplayed', 'false');
  const apiService = new ApiService();

  // Запит списку категорій та додавання "Show all"
  const categorySelect = document.querySelector('.category-select');

  categorySelect.addEventListener('change', async () => {
    const selectedCategory = categorySelect.value;
    localStorage.setItem('selectedCategory', selectedCategory);
    await filterProducts();
  });

  async function filterProducts() {
    const keywordInput = document.querySelector('.keyword-input');
    const selectedCategory = categorySelect.value;

    const filters = {
      keyword: keywordInput.value || null,
      category:
        selectedCategory === 'Show all' || selectedCategory === 'Categories'
          ? ''
          : selectedCategory,
      page: 1,
      limit: 9,
    };
    localStorage.setItem('filters', JSON.stringify(filters));
    // keywordInput.value = '';
    // let options;
    try {
      let products;

      // Перевіряємо, чи є ключове слово
      if (!filters.keyword && filters.category === '') {
        // Якщо і ключове слово, і категорія відсутні,
        // Запит на отримання всіх продуктів
        products = await apiService.getAllProducts(filters.page, filters.limit);
      } else if (!filters.keyword) {
        // Якщо немає ключового слова, запит на отримання всіх продуктів у вибраній категорії
        products = await apiService.getProductsInCategories(
          filters.category,
          filters.page,
          filters.limit
        );
      } else {
        // Інакше запит на сервер з урахуванням ключового слова
        products = await apiService.getProductsByName(
          filters.keyword,
          filters.category,
          filters.page,
          filters.limit
        );
      }

      let totalPages = products.totalPages;
      // Сохранение products.results в локальное хранилище для пагинации (totalPages)
      // Переключаем отображение/скрытие пагинации в зависимости от totalPages
      if (totalPages <= 1) {
        paginationContainer.style.display = 'none';
        // paginationContainer.classList.add('hidden');
      } else {
         paginationContainer.style.display = 'flex';
        // paginationContainer.classList.remove('hidden');
      }
      
      localStorage.setItem('products', JSON.stringify(products));
      //  Создаем экземпляр  FilterStorage:
      //  const storageKey = 'filterOfProducts';
      //  const filterStorageInstance = new FilterStorage(storageKey);
      //  const filterOfProducts = products.results;

      //  filterStorageInstance.writeToLocalStorage(filterOfProducts);

      // pagination.reset();
      // RENDERing
      if (products.totalPages === 0) {
        if (
          localStorage.getItem('noResultsMessageDisplayed') !== 'true' ||
          localStorage.getItem('noResultsMessageDisplayed') !== true
        ) {
          renderNoResultsMessage();
        }
      } else {
        // Передача властивостей продукту markUp()
        const productsMarkup = createMarkup(products.results);

        // Відображення HTML-розмітки на сторінці
        const productsListContainer =
          document.querySelector('.js-products-list');

        displayProducts(products.results, productsListContainer);

        //  productsList.innerHTML = productsMarkup;

        addEventListenersToBasketButtons();
        // Удаление сообщения "Nothing..."
        removeNoResultsMessage();
        // Устанавливаем флаг в false, так как результаты найдены
        localStorage.setItem('noResultsMessageDisplayed', 'false');
        let options = {
          totalItems: products.totalPages * filters.limit,
          itemsPerPage: 9,
          visiblePages: visiblePages,
          page: 1,
          centerAlign: true,
          firstItemClassName: 'tui-first-child',
          lastItemClassName: 'tui-last-child',
          template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
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
          },
        };
        const pagination = new Pagination(container, options);

        pagination.on('beforeMove', async event => {
          const currentPage = event.page;
          const selectedCategory = categorySelect.value;

          let newProducts;

          if (
            selectedCategory === 'Show all' ||
            selectedCategory === 'Categories'
          ) {
            // Если выбраны 'Show all' или 'Categories', делаем запрос без категории
            newProducts = await apiService.getAllProducts(currentPage, 9);
          } else {
            // В противном случае делаем запрос с указанием текущей категории
            newProducts = await apiService.getProductsInCategories(
              selectedCategory,
              currentPage,
              9
            );
          }

          displayProducts(newProducts.results, productsList);
          addEventListenersToBasketButtons();
          updateData();
          // После обновления контента прокрутите страницу вверх
          let scrollToTop;

          // Рассчитываем значение scrollToTop в зависимости от ширины экрана
          if (window.innerWidth >= 1440) {
            scrollToTop = 750;
          } else if (window.innerWidth >= 768) {
            scrollToTop = 1100;
          } else {
            scrollToTop = 900;
          }
          window.scrollTo({
            top: scrollToTop,
            behavior: 'smooth',
          });
        });
      }
    } catch (error) {
    }
  }

  try {
    const categories = await apiService.getProductsByCategory();

    categorySelect.innerHTML = '';
    categories.unshift('Categories');
    categories.push('Show all');

    categories.forEach(category => {
      const option = document.createElement('option');

      option.value = category;
      option.textContent = category.replace(/_/g, ' ');
      categorySelect.appendChild(option);
    });
    // Добавляем атрибут aria-label
    categorySelect.setAttribute('aria-label', 'Select a category');
  } catch (error) {
  }

  // Обробка події відправлення форми
  const filterForm = document.querySelector('.filter-form');

  filterForm.addEventListener('submit', async event => {
    event.preventDefault();

    // Набуття значень з форми
    const keywordInput = document.querySelector('.keyword-input');
    const selectedCategory = categorySelect.value;

    // Оновлення даних у локальному сховищі
    const filters = {
      keyword: keywordInput.value || null,
      category: selectedCategory === 'Show all' ? null : selectedCategory,
      page: 1,
      limit: 9,
    };

    localStorage.setItem('filters', JSON.stringify(filters));

    const defaultFilters = {
      keyword: null,
      category: null,
      page: 1,
      limit: 9,
    };
    localStorage.setItem('filters', JSON.stringify(defaultFilters));

    // Вызов функции фильтрации при загрузке страницы
    await filterProducts();
  });

  function removeNoResultsMessage() {
    // const productsList = document.querySelector('.js-products-list');
    const titleElement = document.querySelector('.filters-title');
    const textElement = document.querySelector('.filters-text');
    // productsList.remove();
    // titleElement.remove();
    // textElement.remove();
    if (titleElement) {
      titleElement.remove();
    }

    if (textElement) {
      textElement.remove();
    }

    // Устанавливаем флаг в локальное хранилище, чтобы помнить, что сообщение уже было выведено
    localStorage.setItem('noResultsMessageDisplayed', 'true');
    // **********************
    // Отобразить пагинацию
    if (paginationContainer) {
      // Удалить класс для отображения
      paginationContainer.classList.remove('hidden');
    }

    // ************************
  }

  // Ініціалізація значень за замовчуванням під час завантаження сторінки
  const defaultFilters = {
    keyword: null,
    category: null,
    page: 1,
    limit: 9,
  };
  localStorage.setItem('filters', JSON.stringify(defaultFilters));
  await filterProducts();
});

//    onFocus & onBlur on <input-box> from input
// Получаем ссылки на элементы
const inputBox = document.querySelector('.input-box');
const keywordInput = document.querySelector('.keyword-input');

// Добавляем обработчики событий
keywordInput.addEventListener('focus', addFocusStyle);
keywordInput.addEventListener('blur', removeFocusStyle);

// Функции для добавления и удаления стилей при фокусировке и потере фокуса
function addFocusStyle() {
  inputBox.classList.add('focus-within');
}

function removeFocusStyle() {
  inputBox.classList.remove('focus-within');
}
//
//
// rendering "Nothing was found for the selected"
function renderNoResultsMessage() {
  if (
    localStorage.getItem('noResultsMessageDisplayed') === 'true' ||
    localStorage.getItem('noResultsMessageDisplayed') === true
  ) {
    return; // Если да, то выходим из функции
  }
  const productsList = document.querySelector('.js-products-list');

  // Создаем заголовок H2
  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Nothing was found for the selected ';
  titleElement.classList.add('filters-title');

  // Создаем span
  const filtersSpan = document.createElement('span');
  filtersSpan.textContent = 'filters';
  filtersSpan.classList.add('filters-span');

  // Присоединяем span к заголовку
  titleElement.appendChild(filtersSpan);

  // Создаем параграф
  const textElement = document.createElement('p');
  textElement.textContent =
    'Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.';
  textElement.classList.add('filters-text');

  // Вставляем элементы в DOM
  productsList.innerHTML = ''; // Очищаем содержимое productsList
  productsList.insertAdjacentElement('afterend', titleElement);
  titleElement.insertAdjacentElement('afterend', textElement);

  // Устанавливаем флаг в локальное хранилище, чтобы помнить, что сообщение уже было выведено
  localStorage.setItem('noResultsMessageDisplayed', 'true');
  // ***********************************
  // Скрыть пагинацию
  if (paginationContainer) {
    paginationContainer.classList.add('hidden');

  }

  // *****************************************
}
