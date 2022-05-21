const btnNumbers = document.querySelectorAll("button.numbers");
const display = document.querySelector("span.display");

for (let i = 0; i < btnNumbers.length; i++) {
	btnNumbers[i].addEventListener("click", (e) => {
		display.innerText == 0
			? (display.innerText = btnNumbers[i].innerText) // clear the first zero
			: (display.innerText += btnNumbers[i].innerText); // concat numbers
	});
}

console.log(btnNumbers);
