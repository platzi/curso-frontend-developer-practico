/*
document.addEventListener("mouseover", function(){
	let email = document.querySelector(".navbar-email");
	let menu = document.querySelector(".desktop-menu");
	menu.setAttribute("class", "desktop-menu");
});
*/

/*
function showMenu() {
	let menu;
	let email;

	menu = document.querySelector('.desktop-menu');
	email = document.querySelector('.navbar-right');


	email.addEventListener('mouseenter', function () {//ALTERNATIVE: mouseover->muouseenter: secondary elements taken into account
		menu.setAttribute("class", "desktop-menu");
	});

	email.addEventListener('mouseleave', function () {//ALTERNATIVE: mouseout->mouseleave: secondary elements taken into account

		menu.setAttribute("class", "desktop-menu inactive");
	});

	menu.addEventListener('mouseenter', function () {//ALTERNATIVE: mouseover->muouseenter: secondary elements taken into account
		menu.setAttribute("class", "desktop-menu");
	});

	menu.addEventListener('mouseleave', function () {//ALTERNATIVE: mouseout->mouseleave: secondary elements taken into account

		menu.setAttribute("class", "desktop-menu inactive");
	});
};
showMenu();
*/
////ALTERNATIVE CODE: 

function showMenu() {
	let desktopMenu;
	let navbarRight;
  
	desktopMenu = document.querySelector('.desktop-menu');
	navbarRight = document.querySelector('.navbar-right');
  
	 function openMenu() {
	  desktopMenu.setAttribute("class", "desktop-menu");
	};
  
	function hideMenu() {
	  desktopMenu.setAttribute("class", "desktop-menu inactive");
	};
  
	navbarRight.addEventListener('mouseenter', openMenu);
	navbarRight.addEventListener('mouseleave', hideMenu);
	desktopMenu.addEventListener('mouseenter', openMenu);
	desktopMenu.addEventListener('mouseleave', hideMenu);
  }
  
showMenu();

