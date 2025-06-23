import PointBlock from './point_block.js';

class PointsContainer {
	constructor() {
		this.coordinatesPoint = new PointBlock();
		this.pointsContainer = document.createElement('div');
		this.pointsContainer.classList.add('points_container');
		this.addPointBlock();
	}

	addPointBlock() {
		const startPoint =  this.coordinatesPoint.addPointBlock();
		const nextPoint = this.coordinatesPoint.addPointBlock();
		this.pointsContainer.append(startPoint, nextPoint);
	}

	getPointsContainer() {
		return this.#createPointsContainer();
	}
}

export default PointsContainer;
