class Header {
	constructor() {
	}

	#createHeader() {
		const header = document.createElement('header');
		header.classList.add('header');
		return header;
	}

	getHeader() {
		return this.#createHeader();
	}
}

export default Header;
