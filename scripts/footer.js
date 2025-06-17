class Footer {
	constructor() {
	}

	#createFooter() {
		const footer = document.createElement('footer');
		footer.classList.add('footer');
		return footer;
	}

	showFooter() {
		const footer = this.#createFooter();
		return footer;
	}
}

const footer = new Footer().showFooter();

export default footer;