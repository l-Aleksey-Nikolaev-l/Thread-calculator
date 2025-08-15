const variablePitchInputs = document.getElementsByClassName('variable_pitch');

function switchVariablePitch(isChecked) {

	for (const variablePitchInput of variablePitchInputs) {
		if (isChecked) {
			variablePitchInput.classList.remove('variable_pitch_disabled');
		}
		else {
			variablePitchInput.classList.add('variable_pitch_disabled');
		}
	}
}

export default switchVariablePitch;
