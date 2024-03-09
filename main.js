const navEmail = document.querySelector(".navbar-email");
const menuIcon = document.querySelector(".menu");
const carritoIcon = document.querySelector(".navbar-shopping-cart");

const mobileMenu = document.querySelector(".mobile-menu");
const desktopMenu = document.querySelector(".desktop-menu");
const cartContainer = document.querySelector(".shopping-cart-container");
const productDetail = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
carritoIcon.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
	if (!cartContainer.classList.contains("inactive")) {
		cartContainer.classList.add("inactive");
	}
	desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
	if (!cartContainer.classList.contains("inactive")) {
		cartContainer.classList.add("inactive");
	}
	mobileMenu.classList.toggle("inactive");
}
function toggleProductDetail() {
	if (!mobileMenu.classList.contains("inactive")) {
		mobileMenu.classList.add("inactive");
	}
	if (!desktopMenu.classList.contains("inactive")) {
		desktopMenu.classList.add("inactive");
	}
	cartContainer.classList.toggle("inactive");
}

// Carga productos
const productList = [
	{
		name: "Bike",
		price: 120,
		image:
			"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
	},
	{
		name: "Electric Scooter",
		price: 500,
		image:
			"https://images.pexels.com/photos/2547627/pexels-photo-2547627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	{
		name: "Scooter",
		price: 800,
		image:
			"https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg",
	},
	{
		name: "Motorbike",
		price: 1000,
		image:
			"https://images.pexels.com/photos/240222/pexels-photo-240222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
];
const cardContainer = document.querySelector(".cards-container");
renderProducts(productList);

function renderProducts(productList) {
	for (product of productList) {
		cardContainer.innerHTML += `<div class="product-card">
        <img
        src=${product.image}
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
