// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



function moveMenuElementToFirstPlace() {

	if (document.location.pathname === '/blog.html') {
		let menu = document.getElementById('menu__list');
		let secondElement = menu.children[1];

		//	menu.insertBefore(secondElement, firstElement);
		secondElement.classList.add('open');
	} else if (document.location.pathname === '/work.html') {
		let menu = document.getElementById('menu__list');
		//let firstElement = menu.firstElementChild;
		let secondElement = menu.children[0];
		secondElement.classList.add('open');
	} else if (document.getElementById('work-portfolio')) {
		let menu = document.getElementById('menu__list');
		let secondElement = menu.children[0];
		secondElement.classList.add('open');
	}

}

window.onload = moveMenuElementToFirstPlace;

