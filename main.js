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
