const navEmail = document.querySelector('.navbar-email');
const menuIcon = document.querySelector('.menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const menuCompras = document.querySelector('.product-detail');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const detailsProduct = document.querySelector('.product-detail-item');
const cerrarDetails = document.querySelector('.product-detail-close');

const containerProducts = document.querySelector('.cards-container');
const allProducts = document.querySelectorAll('.all');


class product{
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

function openImageDetails () {
    detailsProduct.classList.remove("inactive");
    // detailsProduct.classList.remove("inactive");
}

function detallesProduct({name, price, image}) {
    const nombre = document.querySelector('.name')
    const precio = document.querySelector('.price');
    const img = document.querySelector('.image');

    nombre.innerHTML = name;
    precio.innerHTML = `$${price}`;
    img.setAttribute("src", image)
}

var newProduct = [];
function cardProduct() {
    for (let index = 0; index < 9; index++) {

        const producto = document.createElement("div");
        const precioRandom = Math.random()* (900 - 10) + 10;
        const nombres = ["Bike", "Laptop", "Compu", "Pantalla", "Telefono", "mouse", "Moto Peque", "Cuadro", "Teclado", "bikes"];
        const nombresRandom = Math.random() * (9 - 0) + 0; 

        newProduct[index] = new product(`${nombres[nombresRandom.toFixed(0)]}`, precioRandom.toFixed(2), "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

        // const img = document.createElement("img");
        // img.classList.add("image");
        // img.setAttribute("src", newProduct.image)
        // img.setAttribute("alt", "imagen");

        producto.innerHTML = `<div class="product-card">
                                <img src="${newProduct[index].image}" class="image" alt="">
                                <div class="product-info">
                                    <div>
                                        <p >$${newProduct[index].price}</p>
                                        <p >${newProduct[index].name}</p>
                                    </div>
                                    <figure>
                                        <img src="./icons/bt_add_to_cart.svg" class="buy" alt="">
                                    </figure>
                                </div>
                            </div>`;

                            // containerProducts.innerHTML += producto;
                            
                            containerProducts.appendChild(producto);
    }

    const images = document.querySelectorAll(".image");
    for (let index = 0; index < 9; index++){
        images[index].addEventListener('click', function (e) {
            e.preventDefault();
            openImageDetails();
            // showMenu(detailsProduct);
            detallesProduct(newProduct[index]);
            // console.log(newProduct[0]);
        });
        
    }
    
    cerrarDetails.addEventListener("click", (e)=>{
        showMenu(detailsProduct);
    })

    
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
    let array = [menuCompras, desktopMenu, mobileMenu, detailsProduct];
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