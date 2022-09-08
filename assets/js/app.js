/*MENU RELACIONADO CON EL CORRREO*/
const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');

navbarEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('active');
    if (productDetail.classList.contains('active')) {
        productDetail.classList.remove('active')
    }
})

/*MENU EN MOVIL*/
const menuMovilIco = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuMovilIco.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    productDetail.classList.remove('active');

})

/* MENU CARRITO*/
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click', () => {
    productDetail.classList.toggle('active');
    desktopMenu.classList.remove('active');
    mobileMenu.classList.remove('active');


})

// < div class="product-card" >
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//         alt="">
//         <div class="product-info">
//             <div>
//                 <p>$120,00</p>
//                 <p>Bike</p>
//             </div>
//             <figure>
//                 <img src="assets/icons/bt_add_to_cart.svg" alt="">
//             </figure>
//         </div>
//   </div>


const obj = [];
obj.push({ nombre: 'bicicleta', precio: 500, img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' })
obj.push({
    nombre: 'bicicleta', precio: 400, img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
obj.push({
    nombre: 'bicicleta', precio: 500, img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


// for (pro of obj) {
//     const htmlCard = `<div class="product-card">
//     <img src="${pro.img}"
//         alt="">
//         <div class="product-info">
//             <div>
//                 <p>${pro.precio}</p>
//                 <p>${pro.nombre}</p>
//             </div>
//             <figure>
//                 <img src="assets/icons/bt_add_to_cart.svg" alt="">
//             </figure>
//         </div>
//     </div>`
//     const cardsContainer = document.querySelector('.cards-container');
//     cardsContainer.innerHTML += htmlCard
// }

for (pro of obj) {
    const productoCard = document.createElement('div');
    productoCard.classList.add('product-card');
    const imgProducto = document.createElement('img');
    imgProducto.src = pro.img;


    const precioPro = document.createElement('p');
    const nombrePro = document.createElement('p');
    const containerDetalles = document.createElement('div'); //container Detalles
    containerDetalles.appendChild(precioPro);
    containerDetalles.appendChild(nombrePro);
    precioPro.innerText = pro.precio;
    nombrePro.innerText = pro.nombre;


    const imgIco = document.createElement('img');
    const figure = document.createElement('figure'); //container figure
    imgIco.src = "assets/icons/bt_add_to_cart.svg";
    figure.appendChild(imgIco);
    const proInfo = document.createElement('div');
    proInfo.classList.add('product-info');

    proInfo.append(containerDetalles);
    proInfo.append(figure);
    productoCard.append(imgProducto); //container Card
    productoCard.append(proInfo);

    const cardContainer = document.querySelector('.cards-container');
    cardContainer.append(productoCard);
    console.log(productoCard)
}


