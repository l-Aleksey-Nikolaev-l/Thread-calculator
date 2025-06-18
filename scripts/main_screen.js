import PointsContainer from './points_container.js';

class MainSection {
	constructor() {
		this.pointContainer = new PointsContainer().getPointsContainer();
	}

	#createMainSection() {
		const mainSection = document.createElement('main');
		mainSection.classList.add('main');
		mainSection.appendChild(this.pointContainer);
		return mainSection;
	}

	getMainSection() {
		return this.#createMainSection();
	}
}

export default MainSection;
