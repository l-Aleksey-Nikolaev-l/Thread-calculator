class SettingsBlock {
	constructor() {
		this.settingsBlock = this.#createSettingsContainer();
	}

	#createSettingsContainer() {
		const settingsContainer = document.createElement('div');
		settingsContainer.classList.add('points_container');
		return settingsContainer;
	}

	#addStartAngle() {

	}

	#addStartsOption() {

	}

	#addFeedRate() {

	}

	getSettingsContainer() {
		return this.settingsBlock;
	}
}

export default SettingsBlock;
