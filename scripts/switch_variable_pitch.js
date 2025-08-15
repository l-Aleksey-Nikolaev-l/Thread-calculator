const variablePitchInputs = document.getElementsByClassName('variable_pitch');
const constantPitchInputs = document.getElementsByClassName('common_pitch_container');

function switchVariablePitch(isChecked) {

	for (const variablePitchInput of variablePitchInputs) {
		if (isChecked) {
			variablePitchInput.classList.remove('variable_pitch_disabled');
			constantPitchInputs[0].classList.add('constant_pitch_disabled');
		}
		else {
			variablePitchInput.classList.add('variable_pitch_disabled');
			constantPitchInputs[0].classList.remove('constant_pitch_disabled');
		}
	}
}

export default switchVariablePitch;
