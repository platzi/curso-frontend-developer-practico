const navEmail = document.querySelector('.navbar-email');
const menuIcon = document.querySelector('.menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const menuCompras = document.querySelector('.product-detail');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const detailsProduct = document.querySelector('.product-detail-item');
const cerrarDetails = document.querySelector('.product-detail-close');
const addToCarButton = document.querySelector('.add-to-cart-button');
const containerProductCar = document.querySelector('.container-product');

const containerProducts = document.querySelector('.cards-container');
const allProducts = document.querySelectorAll('.all');
const numProduct = document.querySelector('.numProduct');

class product{
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

function openImageDetails () {
    showMenu(detailsProduct);
    detailsProduct.classList.remove("inactive");
}

function detallesProduct({name, price, image}) {
    const nombre = document.querySelector('.name')
    const precio = document.querySelector('.price');
    const img = document.querySelector('.img');

    nombre.innerHTML = name;
    precio.innerHTML = `$${price}`;
    img.setAttribute("src", image);

    let count = containerProductCar.childNodes.length

    const deleteButton = document.querySelectorAll(".delete");
    for (let index = 0; index < deleteButton.length; index++){
        deleteButton[index].addEventListener('click', function (e) {
            let elementPrecio = deleteButton[index].previousElementSibling.innerHTML 
            deleteButton[index].parentNode.remove();
            deleteElementCard(elementPrecio)
            // bool = true;
        });
    }
}

var bool = true;
function deleteElementCard(precioDelete){
    if(bool){
        let total = document.querySelector('.total');
        let semiTotal = total.innerHTML
        
        console.log(Number(semiTotal.slice(1) - precioDelete.slice(1)));
        let acum2 = Number(semiTotal.slice(1) - precioDelete.slice(1));
        total.textContent = `$${acum2}`;
        
        // number = number - 1;
        divNum.textContent = Number(divNum.textContent - 1);
        // bool = false;
    }
}

const divNum = document.createElement("div");
var acum = 0;
var number = 0
function addToCar (price) {
    bool = true;
    const nombre = document.querySelector('.name').textContent
    // const precio = document.querySelector('.price').textContent;
    const img = document.querySelector('.img').src;

    number = number + 1;
    divNum.textContent = number;
    numProduct.appendChild(divNum);

    /**
     <div class="shopping-cart">
          <figure>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
          </figure>
          <p>Bike</p>
          <p>$30,00</p>
          <img src="./icons/icon_close.png" alt="close">
        </div>
     */

    const div = document.createElement("div");
    div.classList.add("shopping-cart");
    div.innerHTML = `<figure>
                        <img src="${img}" alt="bike">
                    </figure>
                    <p>${nombre}</p>
                    <p>$${price}</p>
                    <img src="./icons/icon_close.png" class="delete" alt="close">`;

    containerProductCar.appendChild(div);
    const total = document.querySelector('.total');

    acum = (parseFloat(acum) + parseFloat(price)); 
    total.innerHTML = `$${acum.toFixed(2)}`;
    
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

        containerProducts.appendChild(producto);
    }

    var precioUnit = 0;
    const images = document.querySelectorAll(".image");
    for (let index = 0; index < 9; index++){
        images[index].addEventListener('click', function (e) {
            e.preventDefault();
            openImageDetails();
            detallesProduct(newProduct[index]);
            precioUnit = newProduct[index].price
        });
        
    }
    addToCarButton.addEventListener('click', function (e) {
        detailsProduct.classList.toggle("inactive");
        menuCompras.classList.remove("inactive");
        numProduct.classList.remove("inactive");
        addToCar(precioUnit);
    });
    
    cerrarDetails.addEventListener("click", (e)=>{
        showMenu(detailsProduct);
    })

    const cardBuy = document.querySelectorAll('.buy');
    for (let index = 0; index < 9; index++){
        cardBuy[index].addEventListener('click', function (e) {
            // e.preventDefault();
            // openImageDetails();
            detallesProduct(newProduct[index]);
            precioUnit = newProduct[index].price

            detailsProduct.classList.add("inactive");
            menuCompras.classList.remove("inactive");
            numProduct.classList.remove("inactive");
            addToCar(precioUnit);
        });
    }

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