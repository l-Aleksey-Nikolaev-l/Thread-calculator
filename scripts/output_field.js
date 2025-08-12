class Output {
	constructor() {
	}

	#createOutput() {
		const output = document.createElement('textarea');
		output.classList.add('output_area');
		output.id = 'output_area';
		return output;
	}

	getOutputArea() {
		return this.#createOutput();
	}
}

export default Output;
