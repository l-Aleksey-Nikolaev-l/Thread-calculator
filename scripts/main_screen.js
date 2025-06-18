import pointsContainer from './points_container.js';

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
		main.appendChild(pointsContainer);
		return main;
	}
}

const main = new Main().showMain();

export default main;