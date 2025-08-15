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

	#addToggleOption(className, topText, leftText, rightText) {
		const optionContainer = document.createElement('div');
		const toggleContainer = document.createElement('div');
		const optionLabel = document.createElement('p');
		const leftToggleText = document.createElement('span');
		const rightToggleText = document.createElement('span');
		const startsToggle = this.#createToggleButton(className);
		optionContainer.classList.add('setting_block', `${className}_toggle_container`);
		toggleContainer.classList.add('toggle_group');
		optionLabel.textContent = topText
		leftToggleText.textContent = leftText;
		rightToggleText.textContent = rightText;
		toggleContainer.append(leftToggleText, startsToggle, rightToggleText);
		optionContainer.append(optionLabel, toggleContainer);
		return optionContainer;
	}

	#createToggleButton(idName) {
		const switchContainer = document.createElement('label');
		const checkBox = document.createElement('input');
		const slider = document.createElement('span');
		switchContainer.classList.add('toggle_container');
		checkBox.classList.add('toggle_checkbox');
		slider.classList.add('toggle_slider');
		checkBox.id = `${idName}_toggle`;
		checkBox.setAttribute('type', 'checkbox');
		switchContainer.append(checkBox, slider);
		return switchContainer;
	}

	#createSettingsContainer() {
		const settingsContainer = document.createElement('div');
		settingsContainer.classList.add('settings_container');
		const toolNumber = this.#addSettingBlock(
		  'tool_number',
		  'Tool #',
		  '0');
		const startAngle = this.#addSettingBlock(
		  'start_angle',
		  'Start angle (º)',
		  '0');
		const pitch = this.#addSettingBlock(
		  'common_pitch',
		  'Pitch (mm)',
		  '1');
		const feedRate = this.#addSettingBlock(
		  'feed_rate',
		  'Feed rate (f/min)',
		  '0');
		const startsOption = this.#addToggleOption('starts', 'Starts:', '1', '2');
		const variablePitch = this.#addToggleOption('variable_pitch', 'Flex pitch:', 'off', 'on');
		settingsContainer.append(
		  toolNumber,
		  variablePitch,
		  startAngle,
		  pitch,
		  feedRate,
		  startsOption);
		return settingsContainer;
	}

	getSettingsContainer() {
		return this.settingsBlock;
	}
}

export default SettingsBlock;
