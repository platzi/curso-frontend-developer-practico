const btnEmail = document.querySelector(".navbar-email");
const signOutMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconShopingCart = document.querySelector(".navbar-shopping-cart");
const shopingCartMenu = document.querySelector(".shopping-cart-detail");
const parentDiv = document.querySelector(".cards-container");

const asideProductDetail = document.querySelector(".product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

btnEmail.addEventListener("click", toggleMenuSignOut);
iconMenu.addEventListener("click", toggleMobileMenu);
iconShopingCart.addEventListener("click", toggleShopingCartMenu);
productDetailClose.addEventListener("click", closeProductDetailAside);

function toggleMenuSignOut() {
	const isShopingCartClosed = shopingCartMenu.classList.contains("inactive");

	if (!isShopingCartClosed) {
		shopingCartMenu.classList.add("inactive");
	}
	signOutMenu.classList.toggle("inactive");
	closeProductDetailAside();
}

function toggleMobileMenu() {
	const isShoppingCartClosed = shopingCartMenu.classList.contains("inactive");

	if (!isShoppingCartClosed) {
		shopingCartMenu.classList.add("inactive");
	}
	mobileMenu.classList.toggle("inactive");
	closeProductDetailAside();
}

function toggleShopingCartMenu() {
	const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
	const isSignOutMenuClosed = signOutMenu.classList.contains("inactive");
	const isProductDetailAside =
		asideProductDetail.classList.contains("inactive");

	if (!isMobileMenuClosed || !isProductDetailAside) {
		mobileMenu.classList.add("inactive");
		asideProductDetail.classList.add("inactive");
	}

	if (!isSignOutMenuClosed) {
		signOutMenu.classList.add("inactive");
	}
	shopingCartMenu.classList.toggle("inactive");
}

function openAsideProductDetail() {
	shopingCartMenu.classList.add("inactive");
	mobileMenu.classList.add("inactive");
	signOutMenu.classList.add("inactive");
	asideProductDetail.classList.remove("inactive");
}

function closeProductDetailAside() {
	asideProductDetail.classList.add("inactive");
}

const productList = [];

productList.push({
	name: "Laptop",
	price: 1500,
	image:
		"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
	name: "iMac",
	price: 2000,
	image:
		"https://th.bing.com/th/id/OIP.tXQaubbYRZfiOBVdmQLugAHaH3?rs=1&pid=ImgDetMain",
});

productList.push({
	name: "ipad",
	price: 800,
	image:
		"https://startupjungle.com/wp-content/uploads/2017/02/cosmetic-products-3018845-1.jpg",
});

productList.push({
	name: "Laptop",
	price: 1500,
	image:
		"https://th.bing.com/th/id/OIP.DxGhEQEnE4sB7o6jAAJzywHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
});

productList.push({
	name: "iMac",
	price: 2000,
	image:
		"https://th.bing.com/th/id/OIP.tXQaubbYRZfiOBVdmQLugAHaH3?rs=1&pid=ImgDetMain",
});

productList.push({
	name: "ipad",
	price: 800,
	image:
		"https://startupjungle.com/wp-content/uploads/2017/02/cosmetic-products-3018845-1.jpg",
});

productList.push({
	name: "Laptop",
	price: 1500,
	image:
		"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
	name: "iMac",
	price: 2000,
	image:
		"https://th.bing.com/th/id/OIP.tXQaubbYRZfiOBVdmQLugAHaH3?rs=1&pid=ImgDetMain",
});

productList.push({
	name: "ipad",
	price: 800,
	image:
		"https://startupjungle.com/wp-content/uploads/2017/02/cosmetic-products-3018845-1.jpg",
});

productList.push({
	name: "Laptop",
	price: 1500,
	image:
		"https://th.bing.com/th/id/OIP.DxGhEQEnE4sB7o6jAAJzywHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
});

productList.push({
	name: "iMac",
	price: 2000,
	image:
		"https://th.bing.com/th/id/OIP.tXQaubbYRZfiOBVdmQLugAHaH3?rs=1&pid=ImgDetMain",
});

productList.push({
	name: "ipad",
	price: 800,
	image:
		"https://startupjungle.com/wp-content/uploads/2017/02/cosmetic-products-3018845-1.jpg",
});

function renderCardProduct(arrProducts) {
	for (product of arrProducts) {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		const img = document.createElement("img");
		img.setAttribute("src", product.image);
		img.addEventListener("click", openAsideProductDetail);

		const productInfo = document.createElement("div");
		productInfo.classList.add("product-info");

		const productInfoDiv = document.createElement("div");

		const productPrice = document.createElement("p");
		productPrice.innerText = "$" + product.price;

		const productName = document.createElement("p");
		productName.innerText = "$" + product.name;

		productInfoDiv.append(productPrice, productName);
		const productFigure = document.createElement("figure");

		const productImg = document.createElement("img");
		productImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

		productFigure.appendChild(productImg);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productFigure);

		productCard.appendChild(img);
		productCard.appendChild(productInfo);

		parentDiv.appendChild(productCard);
	}
}

renderCardProduct(productList);
