/*The main reason of structuring the code in functions was purely for didactic purposes, this is like a test field to learn the basic concepts of 
front end javascript.

Probably encapsulating all theses funcitonalities inside a function is not the best strategy since the global scope of the listeners would be a 
better and easier approach but it was also a first attempt to create reusable functions that can be applied to different components.

In the end, the main purpose was testing all the different ways to modify HTML elements and its attributes, classes, etc in order to make them behave in 
specific ways.
*/
////////EMAIL MENU////////
function emailMenu() {

	let desktopMenu = document.querySelector('.desktop-menu');
	let navbarRight = document.querySelector('.navbar-right');
	let cartIcon = document.querySelector('.navbar-shopping-cart');

	function openMenu() {
		desktopMenu.setAttribute("class", "desktop-menu");
	};

	function hideMenu() {
		desktopMenu.setAttribute("class", "desktop-menu inactive");
	};

	//screenSize check: alternatives->  if (window.innerWidth <= 640) //INCLUDES BAR //
	// if (window.matchMedia("(max-width: 640px)").matches)  ///NOT INCLUDES BAR  --//-- $(window).width()  // WHEN USING JQUERY
	function screenSize() {
		if (document.documentElement.clientWidth <= 640) {
			desktopMenu.style.visibility = "hidden";
		} else {
			desktopMenu.style.visibility = "visible";
		}
	}
	navbarRight.addEventListener('mouseenter', openMenu);
	navbarRight.addEventListener('mouseleave', hideMenu);
	desktopMenu.addEventListener('mouseenter', openMenu);
	desktopMenu.addEventListener('mouseleave', hideMenu);
	cartIcon.addEventListener('click', hideMenu);
	cartIcon.addEventListener('mouseenter', hideMenu);
	window.addEventListener('load', screenSize);
	window.addEventListener('resize', screenSize);
	/*The last two eventListeners are in charge of not showing the desktop-menu if the size of the display is mobile.
There is a need for this because of how the HTML is made, because the elements li didnt work well with mouseover/mouseleave 
and i had to choose select the whole div instead to make it work. That made that the shopping cart element shows the desktop
 menu in mobile version where its not suppose to do that, because cart icon is intended to open a menu when clicking.*/
};

////////MOBILE MENU DISPLAY////////
function mobileHamburgerMenu() {
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

////////CART ICON////////
function cartIcon() {
	let shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
	let shoppingCartMenu = document.querySelector('.product-detail');
	let desktopMenu = document.querySelector('.desktop-menu');
  
	function showShoppingMenu() {
	  shoppingCartMenu.classList.toggle('inactive');
	  if (shoppingCartMenu.classList.contains('inactive')) {
		desktopMenu.style.visibility = "visible";
	  } else {
		desktopMenu.style.visibility = "hidden";
	  }
	}
  
	function handleDocumentClick(event) {
	  if (!shoppingCartMenu.contains(event.target) && !shoppingCartIcon.contains(event.target)) {
		shoppingCartMenu.classList.add('inactive');
		desktopMenu.style.visibility = "visible";
	  }
	}
  
	shoppingCartIcon.addEventListener('click', showShoppingMenu);
	document.addEventListener('click', handleDocumentClick);
  }

emailMenu();
mobileHamburgerMenu();
cartIcon();



//////////EXAMPLE OF REUSABLE FUNCTION: 
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



