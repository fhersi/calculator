// State Variables.

let firstArg = "";
let operator = "";

// Selecting Elements

const display = document.querySelector("span.display");
const btnNumbers = document.querySelectorAll("button.numbers");
const operators = document.querySelectorAll("button.operator");
const btnClear = document.querySelector("button.clear");
const btnInvert = document.querySelector("button.invert");
const btnDecimal = document.querySelector("button.decimal");
// mapping buttons to function references.

const dict = {
	"/": division,
	"+": addition,
	"-": subtraction,
	X: multiplication,
};

// displaying numbers on screen when pressed
// looping through buttons and updating Dom / innerText

for (let i = 0; i < btnNumbers.length; i++) {
	btnNumbers[i].addEventListener("click", (e) => {
		display.innerText == 0
			? (display.innerText = btnNumbers[i].innerText) // clear the first zero
			: display.innerText == firstArg
			? (display.innerText = btnNumbers[i].innerText)
			: (display.innerText += btnNumbers[i].innerText); // concat numbers
	});
}

// function to reset display and state variables.

const clearDisplay = () => {
	display.innerText = 0;
	operator = "";
	firstArg = "";
};

// function to update display

const updateDisplay = (result) => {
	display.innerText = result;
};

// huge function that deals with logic of calculations
// this should propably be broken up in to smaller reusable function.

const operatorTrigger = (e) => {
	if (operator == "") {
		firstArg = display.innerText;
		operator = e.currentTarget.innerText;
		//updateDisplay(0);
	} else if (display.innerText == 0) {
		return;
	} else {
		const secondArg = display.innerText;
		const func = dict[operator];
		const result = func(parseFloat(firstArg), parseFloat(secondArg));
		updateDisplay(result);
		firstArg = result;
		operator = "";
	}
	1;
};

function addition(a, b) {
	// calculate equation
	const result = a + b;
	return result;
}

function subtraction(a, b) {
	// calculate equation
	const result = a - b;
	return result;
}

function division(a, b) {
	// calculate equation
	const result = a / b;
	return result;
}

function multiplication(a, b) {
	//console.log(a, b);
	// calculate equation
	const result = a * b;
	return result;
}

function inverse() {
	if (display.innerText == 0) return;

	Math.sign(display.innerText) == 1
		? (display.innerText = Math.abs(display.innerText) * -1)
		: (display.innerText = Math.abs(display.innerText));
}

function decimal() {
	if (display.innerText.includes(".")) return;
	display.innerText += ".";
}

btnClear.addEventListener("click", clearDisplay);
btnDecimal.addEventListener("click", decimal);
btnInvert.addEventListener("click", inverse);

Array.from(operators).map((operator) => {
	//console.log(`Triggered ${operator.innerText}`);
	operator.addEventListener("click", operatorTrigger);
});
//btnAdd.addEventListener("click", addition);
