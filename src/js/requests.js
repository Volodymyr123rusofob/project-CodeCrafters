import axios from 'axios';

class ApiService {
  constructor() {
    this.BASE_URL = 'https://food-boutique.b.goit.study/api';
  }

  async getProductsByName(name, categories, page = 1, limit = 6) {
    const params = new URLSearchParams({
      keyword: name,
      category: categories,
      page,
      limit,
    });
    try {
      const resp = await axios.get(`${this.BASE_URL}/products?${params}`);
      return resp.data;
    } catch {
      console.error('Помилка при отриманні продуктів:', error.message);
      throw error;
    }
  }

  async getAllProducts(page = 1, limit = 6) {
    try {
      const response = await axios.get(`${this.BASE_URL}/products`, {
        params: {
          page,
          limit,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Помилка при отриманні всіх продуктів:', error.message);
      throw error;
    }
  }

  async getPopularProducts(limit) {
    try {
      const params = {
        limit,
      };

      const response = await axios.get(`${this.BASE_URL}/products/popular`, {
        params,
      });

      return response.data;
    } catch (error) {
      console.error(
        'Помилка при отриманні популярних продуктів:',
        error.message
      );
      throw error;
    }
  }

  async getDiscountedProducts() {
    try {
      const response = await axios.get(`${this.BASE_URL}/products/discount`);

      return response.data;
    } catch (error) {
      console.error(
        'Помилка при отриманні продуктів зі знижкою:',
        error.message
      );
      throw error;
    }
  }

  async getProductsByCategory() {
    try {
      const response = await axios.get(`${this.BASE_URL}/products/categories`);

      return response.data;
    } catch (error) {
      console.error(
        'Помилка при отриманні продуктів за категорією:',
        error.message
      );
      throw error;
    }
  }

  async getProductById(productId) {
    try {
      const response = await axios.get(
        `${this.BASE_URL}/products/${productId}`
      );

      return response.data;
    } catch (error) {
      console.error('Помилка при отриманні продукта за айді:', error.message);
      throw error;
    }
  }

  async createNewOrder(orderData) {
    try {
      const response = await axios.post(`${this.BASE_URL}/orders`, orderData);

      return response.data;
    } catch (error) {
      console.error('Помилка при створенні нового замовлення:', error.message);
      throw error;
    }
  }

  async createSubscription(email) {
    try {
      const response = await axios.post(`${this.BASE_URL}/subscriptions`, {
        email,
      });

      return response.data;
    } catch (error) {
      console.error('Помилка при створенні підписки:', error.message);
      throw error;
    }
  }
}

export default ApiService;
