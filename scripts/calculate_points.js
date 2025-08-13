function collectPoints() {
	const pointsContainer = document.getElementsByClassName('points_container');
	const xValueElementsArray = pointsContainer[0].getElementsByClassName('point_value_X');
	const zValueElementsArray = pointsContainer[0].getElementsByClassName('point_value_Z');
	let xPointsArray = [];
	let zPointsArray = [];
	for (let point = 0; point < xValueElementsArray.length; point++) {
		xPointsArray.push(Number(xValueElementsArray[point].value));
		zPointsArray.push(Number(zValueElementsArray[point].value));
	}
	managePoints(xPointsArray, zPointsArray);
}




function managePoints(xPointsArray, zPointsArray) {
	const startAngleValue = document.getElementById('start_angle_input');
	const pitchValue = document.getElementById('pitch_input');
	const feedRateValue = document.getElementById('feed_rate_input');
	const startsToggle = document.getElementById('starts_toggle');
	const outputArea = document.getElementById('output_area');
	let startAngle = Number(startAngleValue.value) ? Number(startAngleValue.value) : 0;
	const pitch = Number(pitchValue.value) ? Number(pitchValue.value) : 1;
	const feedRate = Number(feedRateValue.value) ? Number(feedRateValue.value) : 0;
	const twoStarts = startsToggle.checked;
	outputArea.value = '';
	addNCHeader(outputArea);
	calculatePoints(xPointsArray, zPointsArray, pitch, startAngle, feedRate);

	if (twoStarts) {
		addNCSecondHeader(outputArea);
		startAngle += 180;
		calculatePoints(xPointsArray, zPointsArray, pitch, startAngle, feedRate);
	}
	addNCFooter(outputArea);
}

function addNCHeader(outputArea) {
	outputArea.value += 'M18 C0.\n';
	outputArea.value += 'G50 C0.\n';
	outputArea.value += '\n';
	outputArea.value += 'T0000 (T00 THREAD MILL)\n';
	outputArea.value += '\n';
	outputArea.value += 'M80 S3=5000\n';
	outputArea.value += 'G0 Z-5. T00\n';
	outputArea.value += 'X10. Y0.\n';
	outputArea.value += 'G1 G98 Z0. F150.\n';
	outputArea.value += '\n';
	outputArea.value += '(START 1)\n';
	outputArea.value += 'X2.\n';
	outputArea.value += '\n';
}

function addNCSecondHeader(outputArea) {
	outputArea.value += 'X10. F150.\n';
	outputArea.value += '\n';
	outputArea.value += '(START 2)\n';
	outputArea.value += '\n';
	outputArea.value += 'G0 Z-5. C180.\n';
	outputArea.value += 'G1 Z0. F150.\n';
	outputArea.value += 'X2.\n';
}

function addNCFooter(outputArea) {
	outputArea.value += '\n';
	outputArea.value += 'X10. F150.\n';
	outputArea.value += 'G0 Z-5.\n';
	outputArea.value += 'G0 U0. V0. W0. T0\n';
}

function calculatePoints(xPointsArray, zPointsArray, pitch, startAngle, feedRate) {
	zPointsArray.map((currentPointZ, index) => {
		const newPointC = ((currentPointZ / pitch) * (360)) + startAngle;
		const currentPointX = xPointsArray[index];
		writeNC(currentPointX, currentPointZ, newPointC, feedRate);
	});
}

function writeNC(currentPointX, currentPointZ, newPointC, feedRate) {
	const outputArea = document.getElementById('output_area');
	outputArea.value += `X${convertToString(currentPointX)} `;
	outputArea.value += `Z${convertToString(currentPointZ)} `;
	outputArea.value += `C${convertToString(newPointC)} `;
	outputArea.value += `F${convertToString(feedRate)}`;
	outputArea.value += `\n`;
}

function convertToString(point) {
	return Number.isInteger(point) ? String(point) + '.' : String(point);
}

export default collectPoints;
