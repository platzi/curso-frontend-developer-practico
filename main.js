const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");

const productDetailName = document.querySelector("#productDetailName");
const productDetailPrice = document.querySelector("#productDetailPrice");
const productDetailImage = document.querySelector("#productDetailImage");
const productDetailDescription = document.querySelector("#productDetailDescription");

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu(e) {
	closeAsidePanels();
	desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(e) {
	closeAsidePanels();
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
	const productId = e.target.id;
	const productData = productList[productId];
	desktopMenu.classList.add("inactive");
	mobileMenu.classList.add("inactive");
	shoppingCartContainer.classList.add("inactive");

	productDetailName.innerText = productData.name;
	productDetailPrice.innerText = `$ ${productData.price}`;
	productDetailDescription.innerText = productData.description;
	productDetailImage.setAttribute("src", productData.image);

	productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(e) {
	productDetailContainer.classList.add("inactive");

	productDetailName.innerText = "";
	productDetailPrice.innerText = "";
	productDetailDescription.innerText = "";
	productDetailImage.setAttribute("src", "");
}

function closeAsidePanels() {
	const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
	if (!isAsideClosed) {
		shoppingCartContainer.classList.add("inactive");
	}
	closeProductDetailAside();
}

const productList = [
	{
		name: "Bike",
		price: 120,
		image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
	},
	{
		name: "TV",
		price: 1344,
		image: "https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
		description: "Get the best of Old School aesthetic with the best technology.",
	},
	{
		name: "PC",
		price: 3200,
		image: "https://images.pexels.com/photos/2585916/pexels-photo-2585916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
		description: "For home, and office!",
	},
];

renderProducts(productList);

function renderProducts(arr) {
	// for (const product of arr) {
	arr.forEach((product, index) => {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		const productImg = document.createElement("img");
		productImg.setAttribute("src", product.image);
		productImg.setAttribute("id", index);
		productImg.addEventListener("click", openProductDetailAside);

		const productInfo = document.createElement("div");
		productInfo.classList.add("product-info");

		const productInfoDiv = document.createElement("div");

		const productPrice = document.createElement("p");
		productPrice.innerText = `$ ${product.price}`;

		const productName = document.createElement("p");
		productName.innerText = product.name;

		const productInfoFigure = document.createElement("figure");
		const productImgCart = document.createElement("img");
		productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);

		productInfoFigure.appendChild(productImgCart);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);

		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);

		cardsContainer.appendChild(productCard);
	});
}
