import SettingsBlock from './settings_block.js';
import PointsContainer from './points_container.js';
import ButtonsContainer from './buttons_block.js';
import Output from './output_field.js';

class MainSection {
	constructor() {
		this.settingsContainer = new SettingsBlock().getSettingsContainer();
		this.pointContainer = new PointsContainer().getPointsContainer();
		this.inputButtonsContainer = new ButtonsContainer().getInputButtonsContainer();
		this.outputButtonsContainer = new ButtonsContainer().getOutputButtonsContainer();
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
		inputSection.append(
		  this.settingsContainer,
		  this.pointContainer,
		  this.inputButtonsContainer);
		outputSection.append(
		  this.outputArea,
		  this.outputButtonsContainer);
		mainSection.append(inputSection, outputSection);
		return mainSection;
	}

	getMainSection() {
		return this.#createMainSection();
	}
}

export default MainSection;
