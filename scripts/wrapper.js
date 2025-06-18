import Header from './header.js';
import MainSection from './main_screen.js';
import Footer from './footer.js';
import listeners from './listeners.js';

class Wrapper {
	constructor() {
		this.mainBody = document.body;
		this.header = new Header().getHeader();
		this.mainSection = new MainSection().getMainSection();
		this.footer = new Footer().getFooter();
		this.#createPage();
		listeners();
	}

	#createWrapper() {
		const wrapper = document.createElement('div');
		wrapper.className = 'wrapper';
		return wrapper;
	}

	#createPage() {
		const wrapper = this.#createWrapper();
		wrapper.append(this.header, this.mainSection, this.footer);
		this.mainBody.insertAdjacentElement('afterbegin', wrapper);
	}
}

export default Wrapper;
