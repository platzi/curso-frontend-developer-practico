const generateRandomString = (limit) => {
	var min = 3;
	var max = limit;

	var num = Math.floor(Math.random() * (max - min) + min);
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result1 = " ";
	const charactersLength = characters.length;
	for (let i = 0; i < num; i++) {
		result1 += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}

	return result1.trim();
};

const generateRandomNumber = (limit, decimals) => {
	var min = 5;
	var max = limit;

	var num = Number(Math.random() * (max - min) + min).toFixed(decimals);

	return num;
};

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuTogleicon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuTogleicon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCartAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
	const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

	if (!isAsideClosed) {
		shoppingCartContainer.classList.add("inactive");
	}
	desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
	const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

	if (!isAsideClosed) {
		shoppingCartContainer.classList.add("inactive");
	}
	mobileMenu.classList.toggle("inactive");
    closeProductDetailAside();
}

function toggleCartAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
	const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
	const isProductDetailClosed =
		productDetailContainer.classList.contains("inactive");

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add("inactive");
	}
	if (!isDesktopMenuClosed) {
		desktopMenu.classList.add("inactive");
	}
	if (!isProductDetailClosed) {
		closeProductDetailAside();
	}

	shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
	shoppingCartContainer.classList.add("inactive");

	productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
	productDetailContainer.classList.add("inactive");
}
const productList = [];

var numeroProductos = generateRandomNumber(50, 0);

for (let index = 0; index < numeroProductos; index++) {
	productList.push({
		name: generateRandomString(25),
		price: generateRandomNumber(25000, 2),
		image:
			"https://api.lorem.space/image?w=150&h=180&hash=" +
			generateRandomString(8),
	});
}

function renderProducts(arr) {
	for (product of arr) {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		const ProductImg = document.createElement("img");
		ProductImg.setAttribute("src", product.image);
		ProductImg.addEventListener("click", openProductDetailAside);

		const productInfo = document.createElement("div");
		productInfo.classList.add("product-info");

		const productInfoDiv = document.createElement("div");
		const productPrice = document.createElement("p");
		productPrice.innerText = `$ ${product.price}`;
		const productName = document.createElement("p");
		productName.innerText = product.name;

		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);

		const productFigure = document.createElement("figure");
		const productImgCart = document.createElement("img");
		productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

		productFigure.appendChild(productImgCart);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productFigure);

		productCard.appendChild(ProductImg);
		productCard.appendChild(productInfo);

		cardsContainer.appendChild(productCard);
	}
}

renderProducts(productList);
