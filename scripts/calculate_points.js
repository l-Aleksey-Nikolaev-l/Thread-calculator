function collectPoints(valueElementsArray) {
	let pointsArray = [];
	for (const point of valueElementsArray) {
		pointsArray.push(Number(point.value));
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
