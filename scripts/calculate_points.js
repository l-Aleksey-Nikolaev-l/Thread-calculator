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
	calculatePoints(pointsArray);
}




function calculatePoints(pointsArray) {
	const outputArea = document.getElementById('output_area');
	outputArea.textContent = '';
	pointsArray.map(currentPointZ => {
		const cAxisPoint = (currentPointZ / 1.2) * 360;
		const newBlock = `Z${currentPointZ}. C${cAxisPoint}. F5000.`;
		outputArea.textContent += `${newBlock}\n`;
	});
}

export default collectPoints;
