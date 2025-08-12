class PointBlock {
	constructor() {
		this.blockNumber = 1;
	}

	#createBlockContainer() {
		const blockContainer = document.createElement('div');
		const pointLabel = document.createElement('label');
		const pointValue = document.createElement('input');
		blockContainer.classList.add('point_block');
		pointLabel.classList.add('point_label');
		pointLabel.setAttribute('for', `point_${this.blockNumber}`);
		pointValue.classList.add('point_value');
		pointValue.id = `point_${this.blockNumber}`;
		pointLabel.textContent = `Point ${this.blockNumber} = Z`
		pointValue.value = '';
		pointValue.placeholder = '0'
		blockContainer.append(pointLabel, pointValue);
		this.blockNumber += 1;
		return blockContainer;
	}

	addPointBlock() {
		return this.#createBlockContainer();
	}

	removePointBlock() {
		this.blockNumber -= 1;
	}
}

export default PointBlock;
