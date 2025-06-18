import PointBlock from './point_block.js';
const pointsContainer = document.getElementsByClassName('points_container');


function startListeners() {
	pointsContainer[0].addEventListener('click', (event) => {
		const addPoint = event.target.dataset.addPoint;
		if (addPoint) {
			const pointsContainer = document.getElementsByClassName('points_container');
			const re = new PointBlock().addPointBlock();
			pointsContainer[0].append(re);
			console.log('Add');
		}
	});
}

export default startListeners;