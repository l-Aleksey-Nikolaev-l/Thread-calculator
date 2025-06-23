import PointsContainer from './points_container.js';
import ButtonsContainer from './buttons_block.js';

class MainSection {
	constructor() {
		this.pointContainer = new PointsContainer().getPointsContainer();
		this.buttonsContainer = new ButtonsContainer().getButtonsContainer();
	}

	#createMainSection() {
		const mainSection = document.createElement('main');
		mainSection.classList.add('main');
		mainSection.append(this.pointContainer, this.buttonsContainer);
		return mainSection;
	}

	getMainSection() {
		return this.#createMainSection();
	}
}

export default MainSection;
