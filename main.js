const btnEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".inactive");
const btnMenu = document.querySelector(".menu");
const movileMenu = document.querySelector(".mobile-menu");
const btnCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

btnEmail.addEventListener('click', toggleDesktopMenu);
btnMenu.addEventListener('click', toggleMovileMenu);
btnCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu() {
    const isAsideCarritoClosed = !aside.classList.contains("inactive") && aside.classList.add("inactive");; 

    desktopMenu.classList.toggle('inactive'); // Agrega o quita la clase
}

function toggleMovileMenu() {
    const isAsideCarritoClosed = !aside.classList.contains("inactive") && aside.classList.add("inactive"); 

    movileMenu.classList.toggle("inactive");
}

function toggleCarrito() {
    const isMovileMenuClosed = !movileMenu.classList.contains("inactive") && movileMenu.classList.add("inactive");; 
    const isMenuDesktopCloesed = !desktopMenu.classList.contains("inactive") &&  desktopMenu.classList.add("inactive");

    aside.classList.toggle("inactive");
}

// <div class="cards-container">
//   <div class="product-card">
//     <imgProduct src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//     <div class="product-info">
//       <div>
//         <p>$120,00</p>
//         <p>Bike</p>
//       </div>
//       <figure>
//         <imgProduct src="./icons/bt_add_to_cart.svg" alt="">
//       </figure>
//     </div>
//   </div>
// </div>

function renderProducts(listaProductos) { 
    for (product of listaProductos) {
        const producCard = document.createElement('div');
        producCard .classList.add('product-card');

        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.imagen);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const precio = document.createElement('p');
        precio.innerText = '$' + product.price;

        const name = document.createElement('p');
        name.innerText = product.name;

        productInfoDiv.appendChild(precio);
        productInfoDiv.appendChild(name);

        const figure = document.createElement('figure');
        
        const imgProductFigure = document.createElement('img');
        imgProductFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);

        producCard.appendChild(imgProduct);
        producCard.appendChild(productInfo);

        cardsContainer.appendChild(producCard);
    }
}

const listaProductos = [];

listaProductos.push({
    name: "Bike",
    price: 300,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listaProductos.push({
    name: "Computadora",
    price: 2000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

listaProductos.push({
    name: "Monitor",
    price: 700,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

renderProducts(listaProductos);