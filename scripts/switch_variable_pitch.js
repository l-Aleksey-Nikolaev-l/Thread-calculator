const variablePitchInputs = document.getElementsByClassName('variable_pitch');
const constantPitchInputs = document.getElementsByClassName('common_pitch_container');

function switchVariablePitch(isChecked) {
	if (isChecked) {
		constantPitchInputs[0].classList.add('disable_element');
	} else {
		constantPitchInputs[0].classList.remove('disable_element');
	}
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
