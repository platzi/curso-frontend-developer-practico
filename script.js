const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

const carMenu = document.querySelector(".navbar-shopping-cart");
const productMenu = document.querySelector("#shoppingCartContainer");
const isProductMenuClosed = productMenu.classList.contains("inactive");

const productDetailContainer = document.querySelector("#productDetail");
const closeDetail = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);

burgerMenu.addEventListener("click", toggleMobileMenu);

carMenu.addEventListener("click", toggleProductMenu);

closeDetail.addEventListener("click", closeProductDetail);

function toggleDesktopMenu() {
	if (isProductMenuClosed) {
		productMenu.classList.add("inactive");
	}
	desktopMenu.classList.toggle("inactive");
	productDetailContainer.classList.add("inactive");
}

function toggleMobileMenu() {
	if (isProductMenuClosed) {
		productMenu.classList.add("inactive");
	}
	mobileMenu.classList.toggle("inactive");
	productDetailContainer.classList.add("inactive");
}

function toggleProductMenu() {
	if (isMobileMenuClosed) {
		mobileMenu.classList.add("inactive");
	}
	if (isDesktopMenuClosed) {
		desktopMenu.classList.add("inactive");
	}
	productMenu.classList.toggle("inactive");
	productDetailContainer.classList.add("inactive");
}

function openProductDetailAside() {
	productDetailContainer.classList.remove("inactive");
	desktopMenu.classList.add("inactive");
	productMenu.classList.add("inactive");
	mobileMenu.classList.add("inactive");
}

function closeProductDetail() {
	productDetailContainer.classList.add("inactive");
}


const productCard = [];
productCard.push({
	name: "Bike",
	price: 120,
	image:
		"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productCard.push({
	name: "Laptop",
	price: 600,
	image:
		"https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productCard.push({
	name: "Cellphone",
	price: 170,
	image:
		"https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productCard.push({
	name: "Fan",
	price: 200,
	image:
		"https://images.pexels.com/photos/3675622/pexels-photo-3675622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productCard.push({
	name: "Spoon",
	price: 50,
	image:
		"https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productCard.push({
	name: "Plate",
	price: 80,
	image:
		"https://images.pexels.com/photos/563067/pexels-photo-563067.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productCard.push({
	name: "Toycar",
	price: 400,
	image:
		"https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

/*<div class="product-card">
				<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
				<div class="product-info">
				  <div>
					<p>$120,00</p>
					<p>Bike</p>
				  </div>
				  <figure>
					<img src="./icons/bt_add_to_cart.svg" alt="">
				  </figure>
				</div>
			  </div>*/

function setCards(arr) {
	for (product of arr) {
		const ficha = document.createElement("div");
		ficha.classList.add("product-card");

		const productImg = document.createElement("img");
		productImg.setAttribute("src", product.image);
		productImg.addEventListener("click", openProductDetailAside);

		const productInfo = document.createElement("div");
		productInfo.classList.add("product-info");

		const productDiv = document.createElement("div");

		const productPrice = document.createElement("p");
		productPrice.innerText = "$" + product.price;
		const productName = document.createElement("p");
		productName.innerText = product.name;

		const productFigure = document.createElement("figure");
		const productIcon = document.createElement("img");
		productIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

		productDiv.append(productPrice, productName);
		productFigure.append(productIcon);
		productInfo.append(productDiv, productFigure);

		const cardsContainer = document.querySelector(".cards-container");
		ficha.append(productImg, productInfo);
		cardsContainer.append(ficha);
	}
}

setCards(productCard);
