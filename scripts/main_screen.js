import PointsContainer from './points_container.js';
import ButtonsContainer from './buttons_block.js';
import Output from './output_field.js';

class MainSection {
	constructor() {
		this.pointContainer = new PointsContainer().getPointsContainer();
		this.buttonsContainer = new ButtonsContainer().getButtonsContainer();
		this.outputArea = new Output().getOutputArea();
	}

	#createSection(sectionName) {
		const newSection = document.createElement('section');
		newSection.classList.add(sectionName);
		return newSection;
	}

	#createMainSection() {
		const mainSection = document.createElement('main');
		mainSection.classList.add('main');
		const inputSection = this.#createSection('input_section');
		const outputSection = this.#createSection('output_section');
		inputSection.append(this.pointContainer, this.buttonsContainer);
		outputSection.append(this.outputArea);
		mainSection.append(inputSection, outputSection);
		return mainSection;
	}

	getMainSection() {
		return this.#createMainSection();
	}
}

export default MainSection;
