/* Interacción de Menú desktop (componente 7)*/

const menuEmail = document.querySelector(".navbar-email");
console.log(menuEmail);

const menuDesktop = document.querySelector(".desktop-menu");
console.log(menuDesktop);


menuEmail.addEventListener("click",toggleDesktopMenu);

 //FORMA 1 - RAUL
/*
function toggleDesktopMenu(){
	if (menuDesktop.classList.length==2){
		menuDesktop.classList.remove("inactive");

		console.log(menuDesktop.classList);
		console.log(menuDesktop.classList.length);

	} else if (menuDesktop.classList.length==1){
		menuDesktop.classList.add("inactive")

		console.log(menuDesktop.classList);
		console.log(menuDesktop.classList.length);
	}
}
*/

 //FORMA 2 - PROFESOR

function toggleDesktopMenu(){
	menuDesktop.classList.toggle("inactive");
	console.log("click")
}


/* Interacción de Menú Mobile (componente 8)*/

const burguerMenu= document.querySelector(".menu");
console.log(burguerMenu);
const menuMobile= document.querySelector(".mobile-menu");
console.log(menuMobile);

burguerMenu.addEventListener("click",toggleMobileMenu);

 //FORMA 1 - RAUL
/*
function toggleMobileMenu(){
	if (menuMobile.classList.length==2){
		menuMobile.classList.remove("inactive");

		console.log(menuMobile.classList);
		console.log(menuMobile.classList.length);

	} else if (menuMobile.classList.length==1){
		menuMobile.classList.add("inactive")

		console.log(menuMobile.classList);
		console.log(menuMobile.classList.length);
}
}
*/
 //FORMA 2 - PROFESOR

 function toggleMobileMenu(){
	menuMobile.classList.toggle("inactive");
	console.log("click")
}
