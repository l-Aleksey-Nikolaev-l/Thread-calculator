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
	if (twoStarts) {
		startAngle += 180;
	}
}


export default collectPoints;
