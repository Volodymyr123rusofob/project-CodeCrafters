import createMarkup from './markup_products_list.js';
import ApiService from './requests.js';
import {addEventListenersToBasketButtons} from './products_list.js';


document.addEventListener('DOMContentLoaded', async () => {
  localStorage.setItem('noResultsMessageDisplayed', 'false');
  const apiService = new ApiService();

  // Запит списку категорій та додавання "Show all"
  const categorySelect = document.querySelector('.category-select');
  try {
    const categories = await apiService.getProductsByCategory();
    categories.push('Show all');
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categorySelect.appendChild(option);
    });
  } catch (error) {
    console.error('Ошибка при получении категорий:', error.message);
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
      limit: 6,
    };

    localStorage.setItem('filters', JSON.stringify(filters));

    // Надсилання запиту на сервер з урахуванням фільтрів
    try {
      let products;

      // Перевіряємо, чи є ключове слово
      if (!filters.keyword && filters.category === null) {
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

      // Обробка даних (наприклад, відображення на сторінці)
      console.log('Полученные продукты:', products);

      // RENDERing
      if (products.totalPages === 0) {
        // console.log('noResultsMessageDisplayed = ', noResultsMessageDisplayed);
        // console.log('products.totalPages = ', products.totalPages);
        renderNoResultsMessage();
      } else {
        // Передача властивостей продукту markUp()
        const productsMarkup = createMarkup(products.results);

        // Відображення HTML-розмітки на сторінці
        const productsList = document.querySelector('.js-products-list');
        productsList.innerHTML = productsMarkup;
        addEventListenersToBasketButtons();
      }
    } catch (error) {
      console.error('Ошибка при получении продуктов:', error.message);
    }
  });



  // Ініціалізація значень за замовчуванням під час завантаження сторінки
  const defaultFilters = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
  };
  localStorage.setItem('filters', JSON.stringify(defaultFilters));
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

  if (localStorage.getItem('noResultsMessageDisplayed')==='true') {
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
}
