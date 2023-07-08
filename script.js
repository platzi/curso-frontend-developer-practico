const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail")

const cardsContainer=document.querySelector(".cards-container")


navEmail.addEventListener('click', function () {
    let carritoOpen = !asideProductDetail.classList.contains("inactive");
    if (carritoOpen) {
        asideProductDetail.classList.add("inactive")
    }
    toggleDisplay(desktopMenu);
});

menuHamIcon.addEventListener('click', function () {
    // toggleDisplay(mobileMenu);
    let carritoOpen = !asideProductDetail.classList.contains("inactive");
    if (carritoOpen) {
        asideProductDetail.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
});
menuCarritoIcon.addEventListener('click', function () {

    let mobileMenuOpen = !mobileMenu.classList.contains("inactive");

    if (mobileMenuOpen) {
        mobileMenu.classList.add("inactive")
    }
    asideProductDetail.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
});
// desactivar o activar el display de un contenedor
function toggleDisplay(contenedor) {
    contenedor.classList.toggle("inactive");
};

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Clock",
    price: 500,
    image: "https://images.pexels.com/photos/3766113/pexels-photo-3766113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Guitar",
    price: 440,
    image: "https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name: "Ukulele",
    price: 100,
    image: "https://images.pexels.com/photos/4216321/pexels-photo-4216321.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
})
productList.push({
    name: "Kid Sport",
    price: 300,
    image: "https://images.pexels.com/photos/5580068/pexels-photo-5580068.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
})
productList.push({
    name: "Paint",
    price: 200,
    image: "https://images.pexels.com/photos/13787663/pexels-photo-13787663.jpeg?auto=compress&cs=tinysrgb&w=600"
})

function renderProducts(arr){
    arr.forEach((producto) => {
        let carta=`<div class="product-card">
            <img src=${producto.image} alt="">
            <div class="product-info">
                <div>
                 <p>$ ${producto.price}</p>
                 <p>${producto.name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`
    
        // para que sea visible es necesario por cada iteracion ir acumulando las cartas en el contenedor
        cardsContainer.innerHTML+=carta
    })
}
renderProducts(productList)