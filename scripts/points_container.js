import PointBlock from './point_block.js';

class PointsContainer {
	constructor() {
		this.coordinatesPoint = new PointBlock();
		this.pointsContainer = document.createElement('div');
		this.pointsContainer.classList.add('points_container');
		this.addPointBlock(2);
	}

	addPointBlock(blocksQuantity) {
		for(let i = 0; i < blocksQuantity; i++) {
			const newPointBlock =  this.coordinatesPoint.addPointBlock();
			this.pointsContainer.append(newPointBlock);
		}
	}

	getPointsContainer() {
		return this.pointsContainer;
	}
}

export default PointsContainer;
