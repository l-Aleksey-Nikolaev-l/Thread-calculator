import PointBlock from './point_block.js';

class PointsContainer {
	constructor() {
		this.coordinatesPoint = new PointBlock();
	}

	#createPointsContainer() {
		const pointsContainer = document.createElement('div');
		const addPointButton = this.#createAddPointButton();
		pointsContainer.classList.add('points_container');
		const startPoint = this.addPointBlock();
		const nextPoint = this.addPointBlock();
		pointsContainer.append(startPoint, nextPoint, addPointButton);
		return pointsContainer;
	}

	#createAddPointButton() {
		const addPointButton = document.createElement('button');
		addPointButton.classList.add('add_point_button')
		addPointButton.setAttribute('data-add-point', 'add');
		addPointButton.textContent = 'Add point';
		return addPointButton;
	}

	addPointBlock() {
		return this.coordinatesPoint.addPointBlock();
	}

	getPointsContainer() {
		return this.#createPointsContainer();
	}
}

export default PointsContainer;
