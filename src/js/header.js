const LS_KEY = "cart"; // Запитать у колеги хто робить корзину, якщо він то він знає як називається ключ в LS

const cartCounter = document.querySelector("#cart-counter");

const loadFromLS = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const items = loadFromLS(LS_KEY) ?? [];

cartCounter.textContent = `(${items.length})`;
