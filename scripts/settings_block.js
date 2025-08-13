class SettingsBlock {
	constructor() {
		this.settingsBlock = this.#createSettingsContainer();
	}

	#addSettingBlock(className, labelText, placeholderText) {
		const settingContainer = document.createElement('div');
		const settingLabel = document.createElement('label');
		const settingInput = document.createElement('input');
		settingContainer.classList.add('setting_block', `${className}_container`);
		settingLabel.classList.add(`${className}_label`);
		settingInput.classList.add('point_value', `${className}_input`);
		settingLabel.setAttribute('for', `${className}_input`);
		settingInput.id = `${className}_input`;
		settingLabel.textContent = `${labelText}:`;
		settingInput.placeholder = `${placeholderText}`;
		settingContainer.append(settingLabel, settingInput);
		return settingContainer;
	}

	#addStartsOption() {
		const startsContainer = document.createElement('div');
		const toggleContainer = document.createElement('div');
		const startsLabel = document.createElement('p');
		const oneStart = document.createElement('span');
		const twoStarts = document.createElement('span');
		const startsToggle = this.#createToggleButton();
		startsContainer.classList.add('setting_block', 'starts_container');
		toggleContainer.classList.add('toggle_group');
		startsLabel.classList.add('starts_label');
		oneStart.classList.add('starts_label', 'one_start_label');
		twoStarts.classList.add('starts_label', 'two_starts_label');
		startsLabel.textContent = 'Starts:'
		oneStart.textContent = '1';
		twoStarts.textContent = '2';
		toggleContainer.append(oneStart, startsToggle, twoStarts);
		startsContainer.append(startsLabel, toggleContainer);
		return startsContainer;
	}

	#createToggleButton() {
		const switchContainer = document.createElement('label');
		const checkBox = document.createElement('input');
		const slider = document.createElement('span');
		switchContainer.classList.add('toggle_container');
		checkBox.classList.add('toggle_checkbox');
		slider.classList.add('toggle_slider');
		checkBox.id = 'starts_toggle';
		checkBox.setAttribute('type', 'checkbox');
		switchContainer.append(checkBox, slider);
		return switchContainer;
	}

	#createSettingsContainer() {
		const settingsContainer = document.createElement('div');
		settingsContainer.classList.add('settings_container');
		const startAngle = this.#addSettingBlock(
		  'start_angle',
		  'Start angle',
		  'Default 0º');
		const pitch = this.#addSettingBlock(
		  'pitch',
		  'Pitch',
		  'Default 1');
		const feedRate = this.#addSettingBlock(
		  'feed_rate',
		  'Feed rate',
		  'Default 0.');
		const startsOption = this.#addStartsOption();
		settingsContainer.append(startAngle, pitch, feedRate, startsOption);
		return settingsContainer;
	}

	getSettingsContainer() {
		return this.settingsBlock;
	}
}

export default SettingsBlock;
