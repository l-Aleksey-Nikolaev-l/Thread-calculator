import PointBlock from './point_block.js';

class Points_container {
	constructor() {
		this.coordinatesPoint = new PointBlock();
	}

	#createPointsContainer() {
		const pointsContainer = document.createElement('div');
		const addPointButton = this.#createAddPointButton();
		const startPoint = this.coordinatesPoint.addPointBlock();
		const nextPoint = this.coordinatesPoint.addPointBlock();
		pointsContainer.classList.add('points_container');
		pointsContainer.append(startPoint, nextPoint, addPointButton);
		return pointsContainer;
	}

	#createAddPointButton() {
		const addPointButton = document.createElement('button');
		addPointButton.classList.add('add_point_button')
		addPointButton.textContent = 'Add point';
		return addPointButton;
	}

	addPointContainer() {
		return this.#createPointsContainer();
	}
}

const pointsContainer = new Points_container().addPointContainer();

export default pointsContainer;