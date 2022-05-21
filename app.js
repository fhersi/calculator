const btnNumbers = document.querySelectorAll("button.numbers");

const display = document.querySelector("span.display");

for (let i = 0; i < btnNumbers.length; i++) {
	btnNumbers[i].addEventListener("click", function () {
		display.innerText += btnNumbers[i].innerText;
	});
}

console.log(btnNumbers);
