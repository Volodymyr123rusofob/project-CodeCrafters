let cartItems = [];

// Референси
const refs = {
  //   cartList: document.querySelector(".cart-product-list"),
  totalPriceElement: document.getElementById('totalPrice'),
  emailInput: document.querySelector('.checkout-input-email'),
  inputWrap: document.querySelector('.checkout-input-wrap'),
  checkoutTitle: document.querySelector('.checkout-title'),
  checkoutTotalWrap: document.querySelector('.checkout-total-wrap'),
  emptyCartContainer: document.querySelector('.empty-cart-container'),
  checkoutButton: document.querySelector('.checkout-button'),
};

// Function to handle the checkout button click
function checkout() {
  const emailValue = refs.emailInput.value;

  // Check if the total amount is greater than 0 and the cart is not empty
  if (cartItems.length === 0 || getTotalPrice() === 0) {
    alert('Cannot proceed with checkout. Cart is empty or total amount is 0.');
    return;
  }

  // Validate email input
  if (!emailValue || !isValidEmail(emailValue)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Perform checkout process (customize this part based on your needs)
  alert(
    `Checkout completed! Total Price: $${getTotalPrice()}. Email: ${emailValue}`
  );

  // Reset the total price to 0
  refs.totalPriceElement.textContent = '0.00';

  // Clear the cartItems array
  cartItems = [];

  // Hide the checkout container
  if (refs.inputWrap) {
    refs.inputWrap.style.display = 'none';
  }

  // Hide checkout title and total-wrap
  if (refs.checkoutTitle && refs.checkoutTotalWrap) {
    refs.checkoutTitle.style.display = 'none';
    refs.checkoutTotalWrap.style.display = 'none';
  }

  // Show the empty cart message
  if (refs.emptyCartContainer) {
    refs.emptyCartContainer.style.display = 'block';
  }

  // Clear local storage
  localStorage.clear();
}

// Function to update the total price
function updateTotalPrice() {
  refs.totalPriceElement.textContent = getTotalPrice();
}

// Function to check if the email is valid
function isValidEmail(email) {
  // Regular expression for simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to get the total price of items in the cart
function getTotalPrice() {
  return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
}

// EventListener на кнопку Checkout
refs.checkoutButton.addEventListener('click', handleCheckout);
function handleCheckout(event) {
  event.preventDefault();

  checkout();
}
