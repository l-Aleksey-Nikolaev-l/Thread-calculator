class Footer {
	constructor() {
	}

	#createFooter() {
		const footer = document.createElement('footer');
		const smallText = document.createElement('small');
		footer.classList.add('footer');
		smallText.classList.add('footer__small-text');
		smallText.textContent = 'Copyright © 2025 Thread Calculator. All Rights Reserved.'
		footer.appendChild(smallText);
		return footer;
	}

	getFooter() {
		return this.#createFooter();
	}
}

export default Footer;
