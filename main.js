//Class
class Product {
	constructor(name, price, img, description) {
		this.name = name;
		this.price = price;
		this.img = img;
		this.description = description;
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

	getDescription() {
		return this.description;
	}
}

// Variables
const productList = [];

// Select elements
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const carrito = document.querySelector(".shoppingCardDetail");
const productDetail = document.querySelector(".product-detail");
const productDetailClose = document.querySelector(".product-detail-close");


// Event listeners
menuEmail.addEventListener("click", () => toogleMenu(desktopMenu, carrito));
menuHamIcon.addEventListener("click", () => toogleMenu(mobileMenu, carrito));
menuCarrito.addEventListener("click", () => toogleMenu(carrito, [mobileMenu, desktopMenu]));
productDetailClose.addEventListener("click", closeProductDetail);

// Add products
const numberProducts = 3;
for(let i = 0; i < numberProducts; i++){
	addProduct(
		`Producto ${i+1}`, 
		Math.floor(Math.random() * 1000), 
		`https://picsum.photos/500/${Math.floor(Math.random() * (700 - 300) + 300)}`, 
		`Descripción del producto ${i+1} - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo laboriosam eum officia, aut a doloremque ab!`
	);
}

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

function closeProductDetail() {
	const productDetail = document.querySelector(".product-detail");
	productDetail.classList.add("inactive");

}

function addProduct (name, price, img, description) {
	productList.push(new Product(name, price, img, description));
}

function openDetail(product) {
	const productDetail = document.querySelector(".product-detail");
	productDetail.classList.remove("inactive");

	const productImg = document.querySelector("#product_img");
	const info_name = document.querySelector("#info_name");
	const info_price = document.querySelector("#info_price");
	const info_description = document.querySelector("#info_description");
	
	productImg.setAttribute("src", product.getImg());
	info_name.textContent = product.getName();
	info_price.textContent = `$${product.getPrice()}`;
	info_description.textContent = product.getDescription();
	
}

function renderProducts(list){
	for(const [i, product] of list.entries()){
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

		// Add event listener
		productImg.addEventListener("click", () => openDetail(product));
		productName.addEventListener("click", () => openDetail(product));
		
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