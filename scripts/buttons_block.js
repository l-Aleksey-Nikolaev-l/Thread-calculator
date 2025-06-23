class ButtonsContainer {
	constructor() {
		this.buttonsContainer = document.createElement('div');
		this.buttonsContainer.classList.add('buttons_container');
		this.#addButtonsBlock();
	}

	#createAddPointButton() {
		const addPointButton = document.createElement('button');
		addPointButton.classList.add('add_point_button')
		addPointButton.setAttribute('data-add-point', 'add');
		addPointButton.textContent = 'Add point';
		return addPointButton;
	}

	#createRemovePointButton() {
		const removePointButton = document.createElement('button');
		removePointButton.classList.add('remove_point_button')
		removePointButton.setAttribute('data-remove-point', 'remove');
		removePointButton.textContent = 'Remove last point';
		return removePointButton;
	}

	#createCalculatePointButton() {
		const calculatePointButton = document.createElement('button');
		calculatePointButton.classList.add('calculate_points_button')
		calculatePointButton.setAttribute('data-calculate-points', 'calculate');
		calculatePointButton.textContent = 'Calculate';
		return calculatePointButton;
	}

	#addButtonsBlock() {
		const addPointButton = this.#createAddPointButton();
		const removePointButton = this.#createRemovePointButton();
		const calculatePointsButton = this.#createCalculatePointButton();
		this.buttonsContainer.append(addPointButton, removePointButton, calculatePointsButton);
	}

	getButtonsContainer() {
		return this.buttonsContainer;
	}
}

export default ButtonsContainer;
