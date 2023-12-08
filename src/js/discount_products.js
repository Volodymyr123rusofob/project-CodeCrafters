import axios from 'axios';
import sprite from '../img/symbol-defs.svg';
import {  } from './filters';
import {  } from './header';
import {  } from './modal';
const discountEl = document.querySelector('.discount-container');
const CART_KEY = 'cart';

let products = [];
let addedProducts = [];

function addToCart(product) {
  addedProducts = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  const existingProduct = addedProducts.find(p => p._id === product._id);

  if (!existingProduct) {
    addedProducts.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(addedProducts));
    renderProducts();
  }
}