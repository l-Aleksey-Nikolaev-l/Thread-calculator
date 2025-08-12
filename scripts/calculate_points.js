function collectPoints(valueElementsArray) {
	let pointsArray = [];
	for (const point of valueElementsArray) {
		pointsArray.push(Number(point.value));
	}
	calculatePoints(pointsArray);
}

function calculatePoints(pointsArray) {
	console.log(pointsArray);
}

export default collectPoints;
