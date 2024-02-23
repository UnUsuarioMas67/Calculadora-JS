const displayText = document.querySelector("#display-text");
const buttons = document.querySelector("#botones");

buttons.onclick = (e) => {
	if (e.target.tagName == "BUTTON") {
		handleButton(e.target);
	}
};

function handleButton(button) {
	switch (button.innerText) {
		case "C":
			resetCalculator();
			break;
		case "=":
			solveOperation();
			break;
		default:
			addValue(button.innerText);
			break;
	}
}

function addValue(value) {
	if (displayText.innerText == "0") displayText.innerText = "";
	displayText.innerText += value;
}

function resetCalculator() {
	displayText.innerHTML = "0";
}

function solveOperation() {
	let result = eval(displayText.innerText);
	displayText.innerText = result;
}
