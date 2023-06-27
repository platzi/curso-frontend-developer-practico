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

	//screenSize check alternatives-> window.innerWidth // window.matchMedia("(max-width: 770px)").matches //  $(window).width()
	function screenSize() {
		if (document.documentElement.clientWidth < 770) {
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
		//For mobile width desktop-menu will always be hidden
		if (shoppingCartMenu.classList.contains('inactive') && document.documentElement.clientWidth > 770) {
			desktopMenu.style.visibility = "visible";
		} else {
			desktopMenu.style.visibility = "hidden";
		}
	}

	function handleDocumentClick(event) {
    const isShoppingCartMenuClicked = shoppingCartMenu.contains(event.target);
    const isShoppingCartIconClicked = shoppingCartIcon.contains(event.target);
    const isDocumentWideEnough = document.documentElement.clientWidth > 770;

    if (!isShoppingCartMenuClicked && !isShoppingCartIconClicked) {
        shoppingCartMenu.classList.add('inactive');
    }

    if (!isShoppingCartMenuClicked && !isShoppingCartIconClicked && isDocumentWideEnough) {
        desktopMenu.style.visibility = "visible";
    }
}

	shoppingCartIcon.addEventListener('click', showShoppingMenu);
	document.addEventListener('click', handleDocumentClick);
}


emailMenu();
mobileHamburgerMenu();
cartIcon();

//This is where I should query a database to get a resultSet/row/table of results that match an object
//If this were java(of strongly typed lang), a class with all the specific data types would be necessary 
//to store all the columns of the database into each object.
const productList = [];
productList.push(
	{
		name: "Rainbow Five",
		price: 99.95,
		urlImg: "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304799.jpg?t=st=1687778130~exp=1687778730~hmac=241b2465aa354253729ebfd64ce065b2c5f8d329e07fa8a3784ef3ca49f52e52&w=740"
	},

	{
		name: "Rainbow Six",
		price: 119.95,
		urlImg: "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304807.jpg?t=st=1687772830~exp=1687773430~hmac=987166a4afcbe72f190a078bd4ff7f9a03a5a025041a361ce2ae9c1e00435598&w=740"
	},
	{
		name: "Pink Future",
		price: 132.95,
		urlImg: "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304791.jpg?t=st=1687772878~exp=1687773478~hmac=ab016b44dddeb854d4e4b0c5ccda4dd473c7fe40c6c64ba3da6485f16679b572&w=740"
	},
	{
		name: "Purple Future",
		price: 159.99,
		urlImg: "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304795.jpg?t=st=1687772953~exp=1687773553~hmac=8d26c5da92d5c2c656613bd44a485387f18006168f64c861c845c267fac656ee&w=740"
	},
	{
		name: "Blue classic",
		price: 99.99,
		urlImg: "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304805.jpg?t=st=1687773119~exp=1687773719~hmac=f0bba25cb1566af0070e23d5860e4d3714be0603c64e13d9fbf8a1e86c343c27&w=740"
	},
	{
		name: "Cream Classic",
		price: 89.95,
		urlImg: "https://img.freepik.com/free-photo/cool-roller-skate-still-life_23-2150304814.jpg?t=st=1687773185~exp=1687773785~hmac=0a8867a1d7398dc826aed29a7a88a8e5ab2a04692d8d710df466bf56dc71581b&w=740"
	}
);
//Making this code a reusable function will be a closer approach to a professional js-doc or practice.
//The parameter would be the array fetched from a database or another doc.
for (product of productList) {
	const cardsContainer = document.querySelector('.cards-container');

	const productCard = document.createElement('div');
	productCard.classList.add('product-card');

	const productImg = document.createElement('img');
	productImg.setAttribute('src', product.urlImg);
	productImg.setAttribute('alt', 'Ups, error loading product image.')

	const productData = document.createElement('div');
	productData.classList.add('product-info');

	const productDataChild = document.createElement('div');

	const productPrice = document.createElement('p');
	productPrice.innerText = '$' + product.price;

	const productName = document.createElement('p');
	productName.innerText = product.name;

	const productIconFigure = document.createElement('figure');
	const productIconImg = document.createElement('img');
	productIconImg.setAttribute('src', './icons/bt_add_to_cart.svg')
	productIconImg.setAttribute('alt', 'Cart Icon');

	//
	productData.append(productDataChild, productIconFigure);
	productDataChild.append(productPrice, productName);
	productIconFigure.append(productIconImg);
	productCard.append(productImg, productData);
	cardsContainer.append(productCard);
};

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



