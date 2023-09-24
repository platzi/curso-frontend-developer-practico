const navEmail = document.querySelector('.navbar-email');
const menuIcon = document.querySelector('.menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const menuCompras = document.querySelector('.product-detail');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const containerProducts = document.querySelector('.cards-container');
const allProducts = document.querySelectorAll('.all');

class product{
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

function openImage () {
    
}

function cardProduct() {
    for (let index = 1; index <= 9; index++) {
        const producto = document.createElement("div");
        const precioRandom = Math.random()* (900 - 10) + 10;
        const nombres = ["Bike", "Laptop", "Compu", "Pantalla", "Telefono", "mouse", "Moto Peque", "Cuadro", "Teclado"];
        const nombresRandom = Math.random() * (9 - 0) + 0; 
        const newProduct = new product(`${nombres[nombresRandom.toFixed(0)]}`, precioRandom.toFixed(2), "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

        producto.innerHTML = `<div class="product-card">
        <img src="${newProduct.image}" class="images" alt="">
        <div class="product-info">
        <div>
        <p>$${newProduct.price}</p>
        <p>${newProduct.name}</p>
        </div>
        <figure>
        <img src="./icons/bt_add_to_cart.svg" class="buy" alt="">
        </figure>
        </div>
        </div>`
        
        
        // containerProducts.innerHTML += producto;
        containerProducts.appendChild(producto);
    }
    const images = document.querySelector(".images");
    images.addEventListener('click', function (e) {
        openImage();
    });
}

// containerProducts.removeChild(containerProducts.firstElementChild);
var selector;
for (let i = 0; i < allProducts.length; i++) {
    allProducts[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (!mobileMenu.classList.contains("inactive")) {
            mobileMenu.classList.add("inactive");
        }

        if (!containerProducts.hasChildNodes()) {
            cardProduct()
            selector = allProducts[i];
        } else if(allProducts[i] != selector){
            // console.log("entre again");
            let cardsTotal = containerProducts.childNodes.length;

            for(let i = 0; i < cardsTotal; i++){
                containerProducts.removeChild(containerProducts.firstElementChild);
            }
            cardProduct();
            selector = allProducts[i];
        }
    });
}
function showMenu (element) {
    let array = [menuCompras,desktopMenu,mobileMenu];
    element.classList.toggle("inactive");

    for (const item in array) {
        if (element.classList.value !== array[item].classList.value) {
            if (!array[item].classList.contains("inactive")) {
                array[item].classList.add("inactive");
            }
        }
    }    
}

navEmail.addEventListener('click', function (e) {
    showMenu(desktopMenu);
    // desktop.classList.toggle("inactive");
    // if (desktop.classList.contains("inactive")) {
    //     desktop.classList.remove("inactive");
    // } else {
    //     desktop.classList.add("inactive");
    // }
});

menuIcon.addEventListener('click', function (e) {
    showMenu(mobileMenu);
});

carIcon.addEventListener('click', function (e) {
    showMenu(menuCompras);
});