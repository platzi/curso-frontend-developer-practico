const navEmail = document.querySelector(".navbar-email");
const deskTop = document.querySelector(".desktop-menu");
const icono = document.querySelector(".menu");
const movilMenu = document.querySelector(".mobile-menu")
const carrito = document.querySelector(".navbar-shopping-cart")
const producto = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")


navEmail.addEventListener("click", showMenu)
icono.addEventListener("click", toggleMenu)
carrito.addEventListener("click", toggleCarrito)

function showMenu() {
	const productClosed = producto.classList.contains("inactive");
	if (!productClosed) {
		producto.classList.add("inactive")
	}
	deskTop.classList.toggle("inactive")
}

function toggleMenu() {
	const productClosed = producto.classList.contains("inactive");
	if (!productClosed){
			producto.classList.add("inactive")
		}
	
	movilMenu.classList.toggle("inactive")
	
}

function toggleCarrito() {

	const movileClosed = movilMenu.classList.contains("inactive");
    const deskTopClosed = deskTop.classList.contains("inactive")
	if (!movileClosed){
			movilMenu.classList.add("inactive")
		}
	if (!deskTopClosed){
		deskTop.classList.add("inactive")
	}
	producto.classList.toggle("inactive")
	
}

const productList = [];
productList.push({
	name: "bike",
	price: 120,
	image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
	name: "pantalla",
	price: 320,
	image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
	name: "compu",
	price: 620,
	image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

for (product of productList){
	const productCard = document.createElement("div");
	productCard.classList.add("product-card");

	const img = document.createElement("img");
	img.setAttribute("src", product.image);

	const productInfo = document.createElement("div");
	productInfo.classList.add("product-info");

	const productInfoDiv = document.createElement("div");

	const productPrice = document.createElement("p")
    productPrice.append("$" + product.price)

    const productName = document.createElement("p");
    productName.append(product.name)

    const figure = document.createElement("figure");
    const imagen = document.createElement("img")
    imagen.setAttribute("src", "./icons/bt_add_to_cart.svg");

    figure.append(imagen)

    productInfoDiv.append(productPrice,productName);

    productInfo.append(productInfoDiv,figure);

    productCard.append(img,productInfo);

    cardsContainer.append(productCard);
   
    
}