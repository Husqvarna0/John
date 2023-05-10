// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



function moveMenuElementToFirstPlace() {

	if (document.location.pathname === '/blog.html') {
		let menu = document.getElementById('menu__list');
		let firstElement = menu.firstElementChild;
		let secondElement = menu.children[1];

		menu.insertBefore(secondElement, firstElement);
		secondElement.classList.add('open');
	}
}

window.onload = moveMenuElementToFirstPlace;

