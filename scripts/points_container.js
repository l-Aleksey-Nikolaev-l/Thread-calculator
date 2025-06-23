import PointBlock from './point_block.js';

class PointsContainer {
	constructor() {
		this.coordinatesPoint = new PointBlock();
		this.pointsContainer = document.createElement('div');
		this.pointsContainer.classList.add('points_container');
		this.addPointBlock();
	}

	addPointBlock() {
		return this.coordinatesPoint.addPointBlock();
	}

	getPointsContainer() {
		return this.#createPointsContainer();
	}
}

export default PointsContainer;
