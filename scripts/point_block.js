class PointBlock {
	constructor() {
		this.blockNumber = 1;
	}

	#createBlockContainer() {
		const blockContainer = document.createElement('div');
		const coordinateLabel = document.createElement('label');
		const coordinateValue = document.createElement('input');
		blockContainer.classList.add('point_block');
		coordinateLabel.classList.add('coordinate_label');
		coordinateValue.classList.add('coordinate_value');
		coordinateLabel.textContent = `Point ${this.blockNumber} = Z`
		coordinateValue.value = '0';
		blockContainer.append(coordinateLabel, coordinateValue);
		this.blockNumber += 1;
		return blockContainer;
	}

	addPointBlock() {
		return this.#createBlockContainer();
	}
}

export default PointBlock;
