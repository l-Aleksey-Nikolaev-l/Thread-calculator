import PointsContainer from './points_container.js';
import collectPoints from './calculate_points.js';
import switchVariablePitch from './switch_variable_pitch.js';

function startListeners() {
	const pointsContainer = document.getElementsByClassName('points_container');
	const buttonsContainer = document.getElementsByClassName('buttons_container');
	const removePointButton = buttonsContainer[0].children.namedItem('remove_point_button');
	const calculatePointsButton = buttonsContainer[0].children.namedItem('calculate_points_button');
	const variablePitchToggle = document.getElementById('variable_pitch_toggle');
	const pointBlock = new PointsContainer().coordinatesPoint;

	buttonsContainer[0].addEventListener('click', (event) => {
		const buttonData = event.target.dataset;
		if (buttonData.addPoint) {
			pointsContainer[0].appendChild(pointBlock.addPointBlock());
		} else if (buttonData.removePoint) {
			pointsContainer[0].removeChild(pointsContainer[0].lastChild);
			pointBlock.removePointBlock();
		} else if (buttonData.calculatePoints) {
			collectPoints();
			return;
		}

		if (buttonData.addPoint || buttonData.removePoint) {
			const isExists = pointsContainer[0].lastChild;
			if (isExists) {
				removePointButton.classList.remove('disable_element');
				calculatePointsButton.classList.remove('disable_element');
				removePointButton.removeAttribute('disabled');
				calculatePointsButton.removeAttribute('disabled');
			} else {
				removePointButton.classList.add('disable_element');
				calculatePointsButton.classList.add('disable_element');
				removePointButton.setAttribute('disabled', '');
				calculatePointsButton.setAttribute('disabled', '');
			}
		}
	});

	buttonsContainer[1].addEventListener('click', (event) => {
		const outputArea = document.getElementById('output_area');
		const buttonData = event.target.dataset;
		if (buttonData.clearOutput) {
			outputArea.value = '';
		} else if (buttonData.copyOutput) {
			navigator.clipboard.writeText(outputArea.value).then();
		}
	});

	variablePitchToggle.addEventListener('change', function () {
		switchVariablePitch(this.checked);
	});
}

export default startListeners;
