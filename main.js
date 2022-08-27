// Desktop menu toggle
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// Mobile menu toggle
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");

// Menu carrito toggle
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const carrito = document.querySelector(".shoppingCardDetail");


// Event listeners
menuEmail.addEventListener("click", () => toogleMenu(desktopMenu, carrito));
menuHamIcon.addEventListener("click", () => toogleMenu(mobileMenu, carrito));
menuCarrito.addEventListener("click", () => toogleMenu(carrito, [mobileMenu, desktopMenu]));

// functions
function toogleMenu(menuOpen, menusClose) {
	// Verfiy if the menusClose is an array
	menusClose = Array.isArray(menusClose) ? menusClose : [menusClose];

	closeMenu(menusClose);

	menuOpen.classList.toggle("inactive");
}

function closeMenu(elements) {
	elements.forEach((element) => {
		element.classList.add("inactive");
	});
}

// Product class
class Product {
	constructor(name, price, img) {
		this.name = name;
		this.price = price;
		this.img = img;
	}

	// Getters
	getName() {
		return this.name;
	}

	getPrice() {
		return this.price;
	}

	getImg() {
		return this.img;
	}
}


const productList = []

const addProduct = (name, price, img) => {
	productList.push(new Product(name, price, img));
}

// Add random products
const numberProducts = 3;
for(let i = 0; i < numberProducts; i++){
	addProduct(`Producto ${i+1}`, Math.floor(Math.random() * 1000), `https://picsum.photos/200/${Math.floor(Math.random() * (500 - 300) + 300)}`)
}

function renderProducts(list){
	for(product of list){
		// Create elements
		const cards_container = document.querySelector(".cards-container");
		const productCard = document.createElement("div");
		const productImg = document.createElement("img");
		const productInfo = document.createElement("div");
		const productInfoDiv = document.createElement("div");
		const productName = document.createElement("h3");
		const productPrice = document.createElement("p");
		const productFigure = document.createElement("figure");
		const productCarIcon = document.createElement("img");
		
		// Add classes
		productCard.classList.add("product-card");
		productInfo.classList.add("product-info");
		
		// Add attributes and content
		productName.textContent = product.getName();
		productPrice.textContent = `$${product.getPrice()}`;
		productImg.setAttribute("src", product.getImg());
		productImg.setAttribute("alt", `Imagen de un ${product.getName()}`);
		productCarIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
		productCarIcon.setAttribute("alt", "Icono de carrito de compras");

		// Append elements
		productInfoDiv.append(productName, productPrice);
		productFigure.appendChild(productCarIcon);
		productInfo.append(productInfoDiv, productFigure);	
		productCard.append(productImg, productInfo);
		
		// Append to the container
		cards_container.appendChild(productCard);
	}
}

renderProducts(productList)