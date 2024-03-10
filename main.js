// Carga productos
const productList = [
	{
		name: "Bike",
		price: 120,
		image:
			"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	},
	{
		name: "Bike",
		price: 120,
		image:
			"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	},
	{
		name: "Bike",
		price: 120,
		image:
			"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	},
	{
		name: "Bike",
		price: 120,
		image:
			"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	},
];
const cardContainer = document.querySelector(".cards-container");
renderProducts(productList);

function renderProducts(productList) {
	for (product of productList) {
		cardContainer.innerHTML += `<div class="product-card">
        <img
        src=${product.image}
		class="product-image"
		alt=""
		/>
		<div class="product-info">
		<div>
		<p>$${product.price}</p>
		<p>${product.name}</p>
		</div>
		<figure>
		<img src="./icons/bt_add_to_cart.svg" alt="" />
		</figure>
		</div>
		</div>`;
	}
}

const navEmail = document.querySelector(".navbar-email");
const menuIcon = document.querySelector(".menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");
const productImage = document.querySelectorAll(".product-image");
const productClose = document.querySelector(".product-detail-close");
const dark = document.querySelector(".dark");
const mobileMenu = document.querySelector(".mobile-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const cartContainer = document.querySelector(".shopping-cart-container");
const productDetail = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
carritoIcon.addEventListener("click", toggleShoppingCart);
productImage.forEach((item) =>
	item.addEventListener("click", openProductDetail)
);
productClose.addEventListener("click", closeProductDetail);
dark.addEventListener("click", closeMenus);

function toggleDesktopMenu() {
	cartContainer.classList.add("inactive");
	mobileMenu.classList.add("inactive");
	productDetail.classList.add("inactive");
	desktopMenu.classList.toggle("inactive");
	if (desktopMenu.classList.contains("inactive"))
		dark.classList.add("inactive");
	else dark.classList.remove("inactive");
}
function toggleMobileMenu() {
	cartContainer.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	productDetail.classList.add("inactive");
	mobileMenu.classList.toggle("inactive");
	if (mobileMenu.classList.contains("inactive")) dark.classList.add("inactive");
	else dark.classList.remove("inactive");
}
function toggleShoppingCart() {
	mobileMenu.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	productDetail.classList.add("inactive");
	cartContainer.classList.toggle("inactive");
	if (cartContainer.classList.contains("inactive"))
		dark.classList.add("inactive");
	else dark.classList.remove("inactive");
}

function openProductDetail(e) {
	e.stopPropagation();
	desktopMenu.classList.add("inactive");
	cartContainer.classList.add("inactive");
	dark.classList.remove("inactive");
	productDetail.classList.remove("inactive");
}

function closeProductDetail() {
	productDetail.classList.add("inactive");
	dark.classList.add("inactive");
}

function closeMenus(e) {
	closeProductDetail();
	cartContainer.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	mobileMenu.classList.add("inactive");
}
