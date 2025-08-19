class PointBlock {
	constructor() {
		this.blockNumber = 1;
	}

	#addPointField(className, idName,  placeHolder, labelText) {
		const pointField = document.createElement('div');
		const pointLabel = document.createElement('label');
		const pointValue = document.createElement('input');
		pointField.classList.add(`point_field`, `${className}`);
		pointLabel.classList.add(`point_label`);
		pointLabel.setAttribute('for', `${idName}_${this.blockNumber}`);
		pointValue.classList.add('point_value', `point_value_${labelText}`);
		pointValue.id = `${idName}_${this.blockNumber}`;
		pointLabel.textContent = labelText;
		pointValue.value = '';
		pointValue.placeholder = placeHolder;
		pointField.append(pointLabel, pointValue);
		return pointField;
	}

	#createBlockContainer() {
		const blockContainer = document.createElement('div');
		const blockLabel = document.createElement('p');
		const pointX = this.#addPointField('point', 'x_point',  '0 mm', 'X');
		const pointZ = this.#addPointField('point', 'z_point',  '0 mm', 'Z');
		const pitchField = this.#addPointField('variable_pitch', 'pitch_value',  '0', 'Pitch');
		this.#addVariablePitch(pitchField);
		blockContainer.classList.add('point_block');
		blockLabel.classList.add('block_label');
		blockLabel.textContent = `Point ${this.blockNumber}:`
		blockContainer.append(blockLabel, pointX, pointZ, pitchField);
		this.blockNumber += 1;
		return blockContainer;
	}

	#addVariablePitch(pitchField) {
		const variablePitchToggle = document.getElementById('variable_pitch_toggle');
		if(!variablePitchToggle?.checked) {
			pitchField.classList.add('variable_pitch_disabled');
		}
	}

	addPointBlock() {
		return this.#createBlockContainer();
	}

	removePointBlock() {
		this.blockNumber -= 1;
	}
}

export default PointBlock;
