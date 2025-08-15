class Footer {
	constructor() {
	}

	#createFooter() {
		const footer = document.createElement('footer');
		const copyrightText = document.createElement('small');
		const authorText = document.createElement('a');
		footer.classList.add('footer');
		authorText.classList.add('footer_author');
		const aText = '44§65§73§69§67§6e§65§64§20§61§6e§64§20§64§65§76§65§6c§6f§70§65§64§20§62§79§20§41§6c§65§6b§73§65§79§20§4e§69§6b§6f§6c§61§65§76';
		const lText = '68§74§74§70§73§3a§2f§2f§77§77§77§2e§6c§69§6e§6b§65§64§69§6e§2e§63§6f§6d§2f§69§6e§2f§6e§69§6b§6f§6c§61§65§76§61§6c§65§6b§73§65§79§2f';
		const rText = '43§6f§70§79§72§69§67§68§74§20§a9§20§32§30§32§35§2e§20§41§6c§6c§20§52§69§67§68§74§73§20§52§65§73§65§72§76§65§64';
		copyrightText.textContent = this.#dec(rText);
		authorText.textContent = this.#dec(aText);
		authorText.href = this.#dec(lText);
		authorText.target = '_blank';
		footer.append(copyrightText, authorText);
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
