class ButtonsContainer {
	constructor() {}

	#createButton(className, dataText, dataValue,  buttonText) {
		const calculatePointButton = document.createElement('button');
		calculatePointButton.classList.add('control_button', `${className}_button`)
		calculatePointButton.setAttribute(`data-${dataText}`, dataValue);
		calculatePointButton.textContent = buttonText;
		return calculatePointButton;
	}

	#createInputButtonsBlock() {
		const buttonsContainer = document.createElement('div');
		buttonsContainer.classList.add('buttons_container');
		const addPointButton = this.#createButton(
		  'add_point',
		  'add-point',
		  'add',
		  'Add point');
		const removePointButton = this.#createButton(
		  'remove_point',
		  'remove-point',
		  'remove',
		  'Remove last point');
		const calculatePointsButton = this.#createButton(
		  'calculate_points',
		  'calculate-points',
		  'calculate',
		  'Calculate');
		buttonsContainer.append(addPointButton, removePointButton, calculatePointsButton);
		return buttonsContainer;
	}

	getInputButtonsContainer() {
		return this.#createInputButtonsBlock();
	}
}

export default ButtonsContainer;
