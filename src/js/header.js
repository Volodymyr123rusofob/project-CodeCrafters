const LS_KEY = 'productsBasket';

const loadFromLS = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export const updateCartCounter = () => {
  const cartCounter = document.querySelector('#cart-counter');

  const items = loadFromLS(LS_KEY) ?? [];
  cartCounter.textContent = `(${items.length})`;
};

updateCartCounter();