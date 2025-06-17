import header from './header.js';
import main from './main_screen.js';
import footer from './footer.js';

const mainBody = document.body;

function createWrapper() {
	const wrapper = document.createElement('div');
	wrapper.className = 'wrapper';
	return wrapper;
}

function createMainPage() {
	const wrapper = createWrapper();
	wrapper.appendChild(header);
	wrapper.appendChild(main);
	wrapper.appendChild(footer);
	mainBody.insertAdjacentElement('afterbegin', wrapper);
}

mainBody.onload = () => {
	createMainPage();
};
