let firstArg = "";
let operator = "";

// Elements

const display = document.querySelector("span.display");

const btnNumbers = document.querySelectorAll("button.numbers");
const operators = document.querySelectorAll("button.operator");

const btnClear = document.querySelector("button.clear");
//const btnAdd = document.querySelector("button.add");

const clearDisplay = () => {
	display.innerText = 0;
	operator = "";
	firstArg = "";
};

const dict = {
	"/": division,
	"+": addition,
	"-": subtraction,
	X: multiplication,
};

for (let i = 0; i < btnNumbers.length; i++) {
	btnNumbers[i].addEventListener("click", (e) => {
		display.innerText == 0
			? (display.innerText = btnNumbers[i].innerText) // clear the first zero
			: (display.innerText += btnNumbers[i].innerText); // concat numbers
	});
}

const updateDisplay = (result) => {
	display.innerText = result;
};

const operatorTrigger = (e) => {
	if (operator == "") {
		firstArg = display.innerText;
		operator = e.currentTarget.innerText;
		updateDisplay("...");
	} else if (display.innerText == 0) {
		return;
	} else {
		const secondArg = display.innerText;
		const func = dict[operator];
		const result = func(parseInt(firstArg), parseInt(secondArg));
		updateDisplay(result);
		firstArg = result;
		operator = "";
	}
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
	// calculate equation
	const result = a * b;
	return result;
}

btnClear.addEventListener("click", clearDisplay);
Array.from(operators).map((operator) => {
	//console.log(`Triggered ${operator.innerText}`);
	operator.addEventListener("click", operatorTrigger);
});
//btnAdd.addEventListener("click", addition);
