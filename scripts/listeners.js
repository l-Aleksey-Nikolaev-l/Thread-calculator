import PointsContainer from './points_container.js';

const pointsContainer = document.getElementsByClassName('points_container');
const buttonsContainer = document.getElementsByClassName('buttons_container');
const pointBlock = new PointsContainer().coordinatesPoint;

function startListeners() {
	buttonsContainer[0].addEventListener('click', (event) => {
		const buttonData = event.target.dataset;
		if (buttonData.addPoint) {
			pointsContainer[0].appendChild(pointBlock.addPointBlock());
		}
		else if (buttonData.removePoint) {
			pointsContainer[0].removeChild(pointsContainer[0].lastChild);
			pointBlock.removePointBlock();
		} else if (buttonData.calculatePoints) {
			console.log('calculate point');
		}
	});
}

export default startListeners;
