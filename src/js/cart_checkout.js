// Імпорт
import {
  getEmptyCartMarkup,
  getCartMarkup,
  getcheckoutMarkup,
} from './markup_cart';

document.addEventListener('DOMContentLoaded', function () {
  // Референси
  const refs = {
    totalPriceElement: document.querySelector('.checkout-total'),
    emailInput: document.querySelector('.checkout-input-email'),
    checkoutButton: document.querySelector('.checkout-button'),
    cartContainer: document.querySelector('.cart-container'),
  };

  // EventListener oна чекаут кнопку
  refs.checkoutButton.addEventListener('click', handleCheckout);

  function handleCheckout(event) {
    event.preventDefault();

    checkout();
  }

  // Функція чекаута
  function checkout() {
    const emailValue = refs.emailInput.value;

    // Валідація в інпуті
    if (!emailValue || !isValidEmail(emailValue)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Завантажує правильну розмітку: або порожню корзину, або товари й ціну
    const cartMarkup =
      products.length > 0 ? getCartMarkup(products) : getEmptyCartMarkup();

    refs.cartContainer.innerHTML = cartMarkup;

    // Повідомлення про успішний чекаут
    alert(`Checkout completed! Total Price: $${getTotalPrice(products)}.`);

    // Скидає в нуль
    refs.totalPriceElement.textContent = '0.00';

    updateTotalPrice(0);

    // Чистить сховище
    localStorage.clear();
  }

  // Оновлює числа ціни
  function updateTotalPrice(price) {
    refs.totalPriceElement.textContent = price.toFixed(2);
  }

  // Валідація пошти
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Обчислює загальну суму
  function getTotalPrice(products) {
    return products.reduce((total, { price }) => total + price, 0).toFixed(2);
  }
});
