const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu(e) {
	const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
	if (!isAsideClosed) {
		shoppingCartContainer.classList.add("inactive");
	}
	closeProductDetailAside();
	desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(e) {
	const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

	if (!isAsideClosed) {
		shoppingCartContainer.classList.add("inactive");
	}
	closeProductDetailAside();
	mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside(e) {
	const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
	const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
	const isProductDetailClosed = productDetailContainer.classList.contains("inactive");

	if (!isDesktopMenuClosed) {
		desktopMenu.classList.add("inactive");
	}
	if (!isMobileMenuClosed) {
		mobileMenu.classList.add("inactive");
	}
	if (!isProductDetailClosed) {
		productDetailContainer.classList.add("inactive");
	}

	shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside(e) {
	desktopMenu.classList.add("inactive");

	mobileMenu.classList.add("inactive");

	shoppingCartContainer.classList.add("inactive");

	productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(e) {
	productDetailContainer.classList.add("inactive");
}

const productList = [];

productList.push({
	name: "Bike",
	price: 120,
	image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
	name: "TV",
	price: 1344,
	image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
	name: "PC",
	price: 3200,
	image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

renderProducts(productList);

function renderProducts(arr) {
	for (const product of arr) {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		const productImg = document.createElement("img");
		productImg.setAttribute("src", product.image);
		productImg.addEventListener("click", openProductDetailAside);

		const productInfo = document.createElement("div");
		productInfo.classList.add("product-info");

		const productInfoDiv = document.createElement("div");

		const productPrice = document.createElement("p");
		productPrice.innerText = `$ ${product.price}`;

		const productName = document.createElement("p");
		productName.innerText = product.name;
		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);

		const productInfoFigure = document.createElement("figure");
		const productImgCart = document.createElement("img");
		productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

		productInfoFigure.appendChild(productImgCart);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);

		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);

		cardsContainer.appendChild(productCard);
	}
}
