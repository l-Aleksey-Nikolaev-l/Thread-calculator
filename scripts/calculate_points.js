let outputArea = document.createDocumentFragment();
let xPointsArray = [];
let zPointsArray = [];

function resetVariables() {
	outputArea.value = '';
	xPointsArray = [];
	zPointsArray = [];
}

function collectPoints() {
	resetVariables();
	outputArea = document.getElementById('output_area');
	const pointsContainer = document.getElementsByClassName('points_container');
	const xValueElementsArray = pointsContainer[0].getElementsByClassName('point_value_X');
	const zValueElementsArray = pointsContainer[0].getElementsByClassName('point_value_Z');
	for (let point = 0; point < xValueElementsArray.length; point++) {
		xPointsArray.push(Number(xValueElementsArray[point].value));
		zPointsArray.push(Number(zValueElementsArray[point].value));
	}
	managePoints();
}

function managePoints() {
	const toolNumberValue = document.getElementById('tool_number_input');
	const startAngleValue = document.getElementById('start_angle_input');
	const commonPitchValue = document.getElementById('common_pitch_input');
	const feedRateValue = document.getElementById('feed_rate_input');
	const startsToggle = document.getElementById('starts_toggle');
	const flexPitchToggle = document.getElementById('variable_pitch_toggle');
	const toolNumber = Number(toolNumberValue.value) ? Number(toolNumberValue.value) : '00';
	const pitch = Number(commonPitchValue.value) ? Number(commonPitchValue.value) : 1;
	const feedRate = Number(feedRateValue.value) ? Number(feedRateValue.value) : 0;
	let startAngle = Number(startAngleValue.value) ? Number(startAngleValue.value) : 0;
	const twoStarts = startsToggle.checked;
	const flexPitch = flexPitchToggle.checked;
	outputArea.value = '';
	addNCMainHeader(toolNumber);
	addNCFirstHeader();
	calculatePoints(pitch, startAngle, feedRate);

	if (twoStarts) {
		addSafetyPoint();
		addNCSecondHeader();
		startAngle += 180; // second start on the opposite side (180 degrees)
		calculatePoints(pitch, startAngle, feedRate);
	}
	addNCFooter();
}

function addNCMainHeader(toolNumber) {
	outputArea.value += 'M18 C0.\n';
	outputArea.value += 'G50 C0.\n';
	outputArea.value += '\n';
	outputArea.value += `T${toolNumber}00 (T${toolNumber} THREAD MILL)\n`;
	outputArea.value += '\n';
	outputArea.value += 'M80 S3=5000\n';
	outputArea.value += `G0 Z-5. T${toolNumber}\n`;
	outputArea.value += 'X10. Y0. Z0. (SAFETY POINT)\n';
	outputArea.value += 'G98 (FEED PER MINUTE)\n';
}

function addNCFirstHeader() {
	outputArea.value += '\n';
	outputArea.value += '(START 1)\n';
}

function addNCSecondHeader() {
	outputArea.value += '\n';
	outputArea.value += '(START 2)\n';
}

function addNCFooter() {
	addSafetyPoint();
	outputArea.value += 'G0 Z-5.\n';
	outputArea.value += 'G0 U0. V0. W0. T0\n';
}

function addSafetyPoint() {
	outputArea.value += '\n';
	outputArea.value += 'X10. F150.  (SAFETY POINT)\n';
}

function calculatePoints(pitch, startAngle, feedRate) {
	const firstPointX = xPointsArray[0];
	const firstPointZ = zPointsArray[0];
	let prevPointZ = 0;
	let prevPointC = 0;
	const startPointC = calculateAxisC(firstPointZ, pitch) + startAngle;
	outputArea.value += `G0 Z${convertToString(firstPointZ)} C${convertToString(startPointC)}\n`;
	outputArea.value += `G1 X${convertToString(firstPointX)} F150.`;
	prevPointZ = firstPointZ;
	prevPointC = startPointC;
	zPointsArray.map((currentPointZ, index) => {
		if (index !== 0) { //skip first point for calculation
			const currentPointX = xPointsArray[index];
			const deltaZ = currentPointZ - prevPointZ;
			const deltaC = calculateAxisC(deltaZ, pitch);
			const currentPointC = deltaC + prevPointC;
			prevPointZ = currentPointZ;
			prevPointC = currentPointC;
			writeNC(currentPointX, currentPointZ, currentPointC);
		}
		outputArea.value += index === 1 ? `F${convertToString(feedRate)}\n` : '\n';
	});
}

function calculateAxisC(currentPointZ, pitch) {
	return Number(((currentPointZ / pitch) * 360).toFixed(4));
}

function writeNC(currentPointX, currentPointZ, newPointC) {
	outputArea.value += `X${convertToString(currentPointX)} `;
	outputArea.value += `Z${convertToString(currentPointZ)} `;
	outputArea.value += `C${convertToString(newPointC)} `;
}

function convertToString(point) {
	return Number.isInteger(point) ? String(point) + '.' : String(point);
}

export default collectPoints;
