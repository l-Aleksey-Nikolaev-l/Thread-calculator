class Header {
	constructor() {
	}

	#createHeader() {
		const header = document.createElement('header');
		header.classList.add('header');
		return header;
	}

	showHeader() {
		const header = this.#createHeader();
		return header;
	}
}

const header = new Header().showHeader();

export default header;