const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const asideCartDetail = document.querySelector(".cart-detail")
const iconShoppingCart = document.querySelector(".navbar-shopping-cart")
const productCardContainer = document.querySelector(".cards-container")
const asideProductDetail = document.querySelector(".product-detail")
const productList = [
    {
        id: 1,
        name: "Audífonos",
        price: 35,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 2,
        name: "Silla Gamer",
        price: 400,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 3,
        name: "Oversize",
        price: 60,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 4,
        name: "Pantaloneta",
        price: 20,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 5,
        name: "Gorra RedBull Batalla",
        price: 90,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 6,
        name: "Jordan Retro one",
        price: 150,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
]

navbarEmail.addEventListener("click", toggleDisplayDesktopMenu)
burgerMenu.addEventListener("click", toggleDisplayMobileMenu)
iconShoppingCart.addEventListener("click", toggleDisplayAsideCartDetail)

renderProducts(productList)

const inputsProduct = [...document.querySelectorAll(".cards-container input")]
inputsProduct.forEach((input) => {
    input.addEventListener("click", showProductDetail)
})

function toggleDisplayDesktopMenu() {
    if (!asideCartDetail.classList.contains("inactive")) {
        asideCartDetail.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleDisplayMobileMenu() {
    if (!asideCartDetail.classList.contains("inactive")) {
        asideCartDetail.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleDisplayAsideCartDetail() {
    if (!mobileMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive")
    }
    if (!desktopMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive")
    }
    if (!asideProductDetail.classList.contains("inactive")) {
        asideProductDetail.classList.add("inactive")
    }
    asideCartDetail.classList.toggle("inactive")
}

function renderProducts(arr) {
    for (let product of arr) {
        const productCard = `<label for=${product.id} class="product-card">
                <img src=${product.img}
                    alt=${product.name}>
                <div class="product-info">
                    <div>
                        <p>$${product.price}</p>
                        <p>${product.name}</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>                
            </label>
            <input type="radio" id=${product.id} name="product" style="display: none">`

        productCardContainer.insertAdjacentHTML("beforeend", productCard)
    }
}

function showProductDetail(ev) {
    asideProductDetail.classList.remove("inactive")
    asideCartDetail.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    const inputChecked = ev.target
    console.log(inputChecked.checked)
    const product = productList.find(product => product.id === +inputChecked.id)

    const templateProductDetail = `
        <div class="product-detail-close">
            <img src="./icons/icon_close.png" alt="close">
        </div>
        <img src=${product.img}>
        <div class="product-info">
            <p>$${product.price}</p>
            <p>${product.name}</p>
            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            <button class="primary-button add-to-cart-button">
                <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                Add to cart
            </button>
        </div>`
    asideProductDetail.innerHTML = templateProductDetail
    const productDetailClose = document.querySelector(".product-detail-close")
    productDetailClose.addEventListener("click", closeAsideProductDetail)
}

function closeAsideProductDetail() {
    asideProductDetail.classList.add("inactive")
}