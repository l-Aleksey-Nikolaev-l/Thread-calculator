class Main {
	constructor() {
	}

	#createMain() {
		const main = document.createElement('main');
		main.classList.add('main');
		return main;
	}

	showMain() {
		const main = this.#createMain();
		return main;
	}
}

const main = new Main().showMain();

export default main;