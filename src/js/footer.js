// import alertPopUp from './alert';
// import Notiflix from 'notiflix';
// import ApiService from "./requests";

// const apiService = new ApiService(); // Создаем экземпляр класса ApiService

// const formSubmit = document.getElementById("subscriptionForm");
// const emailInput = document.querySelector(".footer-form-input");

// function isValidEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// async function handleSubmit(event) {
//   event.preventDefault();

//   const email = emailInput.value;

//   if (isValidEmail(email)) {
//     try {
//       // Вызываем метод createSubscription через экземпляр ApiService
//       const response = await apiService.createSubscription(email);
//       if (response.conflict) {
//         // Выводим сообщение об email конфликте
//         alertPopUp('This email address has already been entered. You have already subscribed to our new products. Watch for offers at the mailing address.');
//       } else {
//         // Выводим уведомление об успешной подписке
//         console.log('Success:', response);
//         alertPopUp('Subscription completed successfully');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Notiflix.Notify.failure('Error during subscription');
//     }
//   } else {
//     Notiflix.Notify.warning('Please enter a valid email address.');
//     }
//     event.target.reset();
// }

// formSubmit.addEventListener("submit", handleSubmit);

import ApiService from "./requests";
 import alertPopUp from './alert';
 
 
 const apiService = new ApiService(); // Создаем экземпляр класса ApiService
 
 const formSubmit = document.getElementById("subscriptionForm");
 const emailInput = document.querySelector(".footer-form-input");
formSubmit.addEventListener("submit", handleSubmit);
 
 async function handleSubmit(event) {
   event.preventDefault();
   
   const email = event.currentTarget.elements["email"]
   const value = emailInput.value;
 
 
   try {
     const response = await apiService.createSubscription({ email: value });
     email.value = '';
 
     let successMessageToApi = 'Successfully subscribed!';
     if (response && response.data && response.data.message) {
       successMessageToApi = response.data.message;
     } 
     alertPopUp(successMessageToApi,'success')   // тут алерт окно
  
   } catch(error){
     console.log('Error:', error);
 
     let errorMessage = 'This email address has already been entered.You have already subscribed to our new products. Watch for offers at the mailing address.';
 
     if (error.response && error.response.data && error.response.data.message) {
       errorMessage = error.response.data.message;
     }
     
     alertPopUp(errorMessage,'warning')    // тут алерт окно
   }
   event.target.reset();
 }