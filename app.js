const btnNumbers = document.querySelectorAll("button.numbers");
const display = document.querySelector("span.display");

const btnClear = document.querySelector("button.clear");

const clearDisplay = () => {
	display.innerText = 0;
};
btnClear.addEventListener("click", clearDisplay);

for (let i = 0; i < btnNumbers.length; i++) {
	btnNumbers[i].addEventListener("click", (e) => {
		display.innerText == 0
			? (display.innerText = btnNumbers[i].innerText) // clear the first zero
			: (display.innerText += btnNumbers[i].innerText); // concat numbers
	});
}

//console.log(btnClear);
