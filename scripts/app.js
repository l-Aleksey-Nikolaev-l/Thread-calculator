
const mainBody = document.body;

function createWrapper() {
	const wrapper = document.createElement("div");
	wrapper.className = "wrapper";
	mainBody.insertAdjacentElement('afterbegin', wrapper);
}

mainBody.onload = () => {
	createWrapper();
}