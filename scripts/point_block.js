class PointBlock {
	constructor() {
		this.blockNumber = 1;
	}

	#addPointField(fieldName) {
		const pointField = document.createElement('div');
		const pointLabel = document.createElement('label');
		const pointValue = document.createElement('input');
		pointLabel.classList.add('point_label');
		pointLabel.setAttribute('for', `${fieldName}_point_${this.blockNumber}`);
		pointValue.classList.add('point_value', `point_value_${fieldName}`);
		pointValue.id = `${fieldName}_point_${this.blockNumber}`;
		pointLabel.textContent = `${fieldName}`
		pointValue.value = '';
		pointValue.placeholder = '0 mm'
		pointField.append(pointLabel, pointValue);
		return pointField;
	}

	#createBlockContainer() {
		const blockContainer = document.createElement('div');
		const blockLabel = document.createElement('p');
		const pointX = this.#addPointField('X');
		const pointZ = this.#addPointField('Z');
		blockContainer.classList.add('point_block');
		blockLabel.classList.add('block_label');
		blockLabel.textContent = `Point ${this.blockNumber}:`
		blockContainer.append(blockLabel, pointX, pointZ);
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
