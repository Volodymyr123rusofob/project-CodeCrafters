import createMarkup from './markup_products_list.js';
import ApiService from './requests.js';

document.addEventListener('DOMContentLoaded', async () => {
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
      // Передача властивостей продукту markUp()
      const productsMarkup = createMarkup(products.results);

      // Відображення HTML-розмітки на сторінці
      const productsList = document.querySelector('.js-products-list');
      productsList.innerHTML = productsMarkup;
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
