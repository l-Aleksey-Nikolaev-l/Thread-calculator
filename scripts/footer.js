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

	#dec(num) {
		let res = '';
		const re = num.split('§');
		for (const num of re) {
			res += String.fromCharCode(parseInt(num, 16));
		}
		return res;
	}

	getFooter() {
		return this.#createFooter();
	}
}

export default Footer;
