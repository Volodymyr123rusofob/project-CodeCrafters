import Notiflix from 'notiflix';
import ApiService from "./requests";

const apiService = new ApiService(); // Создаем экземпляр класса ApiService

const formSubmit = document.getElementById("subscriptionForm");
const emailInput = document.querySelector(".footer-form-input");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function handleSubmit(event) {
  event.preventDefault();

  const email = emailInput.value;

  if (isValidEmail(email)) {
    try {
      // Вызываем метод createSubscription через экземпляр ApiService
      const response = await apiService.createSubscription(email);
      console.log('Success:', response);
        Notiflix.Notify.success('Subscription completed successfully');
    } catch (error) {
      console.error('Error:', error);
      Notiflix.Notify.failure('Error during subscription');
    }
  } else {
    Notiflix.Notify.warning('Please enter a valid email address.');
    }
    event.target.reset();
}

formSubmit.addEventListener("submit", handleSubmit);
