class ButtonsContainer {
	constructor() {}

	#createButton(className, idName, dataText, dataValue,  buttonText) {
		const calculatePointButton = document.createElement('button');
		calculatePointButton.classList.add('control_button', `${className}_button`);
		calculatePointButton.id = `${idName}_button`;
		calculatePointButton.setAttribute(`data-${dataText}`, dataValue);
		calculatePointButton.textContent = buttonText;
		return calculatePointButton;
	}

	#createInputButtonsBlock() {
		const buttonsContainer = document.createElement('div');
		buttonsContainer.classList.add('buttons_container');
		const addPointButton = this.#createButton(
		  'add_point',
		  'add_point',
		  'add-point',
		  'add',
		  '+');
		const removePointButton = this.#createButton(
		  'remove_point',
		  'remove_point',
		  'remove-point',
		  'remove',
		  '-');
		const calculatePointsButton = this.#createButton(
		  'calculate_points',
		  'calculate_points',
		  'calculate-points',
		  'calculate',
		  'Calculate');
		buttonsContainer.append(addPointButton, removePointButton, calculatePointsButton);
		return buttonsContainer;
	}

	#createOutputButtonsBlock() {
		const buttonsContainer = document.createElement('div');
		buttonsContainer.classList.add('buttons_container', 'output_buttons_container');
		const clearButton = this.#createButton(
		  'clear_output',
		  'clear_output',
		  'clear-output',
		  'clear',
		  'Clear');
		const copyButton = this.#createButton(
		  'copy_output',
		  'copy_output',
		  'copy-output',
		  'copy',
		  'Copy');
		buttonsContainer.append(clearButton, copyButton);
		return buttonsContainer;
	}

	getInputButtonsContainer() {
		return this.#createInputButtonsBlock();
	}

	getOutputButtonsContainer() {
		return this.#createOutputButtonsBlock();
	}
}

export default ButtonsContainer;
