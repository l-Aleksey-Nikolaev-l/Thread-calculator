const variablePitchInputs = document.getElementsByClassName('variable_pitch');

function switchVariablePitch() {
	for (const variablePitchInput of variablePitchInputs) {
		variablePitchInput.classList.toggle('variable_pitch_disabled');
	}
}

export default switchVariablePitch;
