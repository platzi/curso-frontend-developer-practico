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
	let cartIcon;
////////////AÑADIR FUNCIONALIDAD: SI SOLO ESTA EL ICONO MOSTRADO Y NO EL EMAIL NO DEBE APARECER EL MENU DE EMAIL
	desktopMenu = document.querySelector('.desktop-menu');
	navbarRight = document.querySelector('.navbar-right');
	cartIcon = document.querySelector('.navbar-shopping-cart');
	
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
	cartIcon.addEventListener('click', hideMenu);
};



//////////REUSABLE FUNCTION: 
/*
function toggleMenu(menuElement, triggerElement) {
	const menu = document.querySelector(menuElement);
	const trigger = document.querySelector(triggerElement);
  
	const handleMouseEnter = function () {
	  menu.setAttribute("class", "desktop-menu");
	};
  
	const handleMouseLeave = function () {
	  menu.setAttribute("class", "desktop-menu inactive");
	};
  
	trigger.addEventListener('mouseenter', handleMouseEnter);
	trigger.addEventListener('mouseleave', handleMouseLeave);
	menu.addEventListener('mouseenter', handleMouseEnter);
	menu.addEventListener('mouseleave', handleMouseLeave);
  }
  
  // Ejemplo de uso
  toggleMenu('.desktop-menu', '.navbar-right');
  */

////////////////////MOBILE MENU DISPLAY

function showHideOnClick() {
	const iconMenu = document.querySelector('.menu');
	const mobileMenu = document.querySelector('.mobile-menu');
  
	function toggleMobileMenu() {
	  mobileMenu.classList.toggle('inactive');
	}
  //The menu will close if user clicks anything but the menu.
	function handleDocumentClick(event) {
	  if (!mobileMenu.contains(event.target) && !iconMenu.contains(event.target)) {
		mobileMenu.classList.add('inactive');
	  }
	}
  
	iconMenu.addEventListener('click', toggleMobileMenu);
	document.addEventListener('click', handleDocumentClick);
  };



//////////
function shoppingCart() {
	let shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
	let shoppingCartMenu = document.querySelector('.product-detail');
	let desktopMenu = document.querySelector('.desktop-menu');
	let isCartMenuOpen = false;
  
	function showShoppingMenu() {
	  shoppingCartMenu.classList.toggle('inactive');
	  isCartMenuOpen = true;
  
	  if (isCartMenuOpen) {
		desktopMenu.style.visibility = 'hidden'; //Alternative to: setAttribute...
	  } else {
		desktopMenu.style.visibility = 'visible';
	  }
	}
  
	function handleDocumentClick(event) {
	  if (!shoppingCartMenu.contains(event.target) && !shoppingCartIcon.contains(event.target)) {
		shoppingCartMenu.classList.add('inactive');
		isCartMenuOpen = false;
		desktopMenu.style.visibility = 'visible';
	  }
	}
  
	shoppingCartIcon.addEventListener('click', showShoppingMenu);
	document.addEventListener('click', handleDocumentClick);
  }

showMenu();
showHideOnClick();
shoppingCart();