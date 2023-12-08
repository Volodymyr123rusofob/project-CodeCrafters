let counterValue = 0;

const decrementValue = event => {
getValue.textContent = counterValue -= 1;
	//  value.textContent = counterValue -= 1;
	console.log(counterValue);
}
const incrementValue = event => {
	getValue.textContent = counterValue += 1;
	// value.textContent = counterValue += 1;
	console.log(counterValue);
}

// const getForm = document.querySelector("#counter");
// console.log(getForm);

const getDecrement = document.querySelector('[data-action="decrement"]');
// console.log(getDecrement);
const getIncrement = document.querySelector('[data-action="increment"]');
// console.log(getIncrement);
const getValue = document.querySelector("#value");
// console.log(getValue);



getDecrement.addEventListener("click", decrementValue);

getIncrement.addEventListener("click", incrementValue);

console.log(value);