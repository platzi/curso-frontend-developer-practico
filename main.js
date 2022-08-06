const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurguer = document.querySelector('.menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail-card');
const asideProduct = document.querySelector('.product-descrition');
const cardsContainer = document.querySelector('.cards-container');


menuMail.addEventListener("click", toggleDesktopMenu);
menuBurguer.addEventListener("click", toggleMobileMenu);
navbarShoppingCart.addEventListener("click", toogleCarritoAsideCart);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    asideCart.classList.add('inactive');
    asideProduct.classList.add('inactive');
    
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    asideCart.classList.add('inactive');
    asideProduct.classList.add('inactive');
}

function toogleCarritoAsideCart() {
    asideCart.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideProduct.classList.add('inactive');
}





const listProduct = [];
listProduct.push(
    {
        name: 'Rosas',
        precio: 20,
        image: 'https://images.pexels.com/photos/15242/flower-roses-bloom-blossom.jpg?auto=compress&cs=tinysrgb&w=400',
        descr: 'El género Rosa está compuesto por un conocido grupo de arbustos generalmente espinosos y floridos representantes principales de la familia de las rosáceas',
    }
);
listProduct.push(
    {
        name: 'Flores',
        precio: 30,
        image: 'https://images.pexels.com/photos/2106037/pexels-photo-2106037.jpeg?auto=compress&cs=tinysrgb&w=400',
        descr: 'La flor es la estructura reproductiva característica de las plantas llamadas espermatofitas o fanerógamas. La función de una flor es producir semillas',
    }
);
listProduct.push(
    {
        name: 'PLantas',
        precio: 15,
        image: 'https://images.pexels.com/photos/696996/pexels-photo-696996.jpeg?auto=compress&cs=tinysrgb&w=400',
        descr: 'Las plantas son los seres vivos miembros del reino vegetal o phylum plantae. Se trata de organismos autótrofos, desprovistos de capacidad de movimiento',
    }
);

function renderProducts(arr) {
   arr.forEach(product => {
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
        
        const imgBg = document.createElement('img');
        imgBg.setAttribute('src', product.image);
        imgBg.addEventListener("click", openAsidePoductcDescription);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productinfoDiv = document.createElement('div');
        
        const productPrecio = document.createElement('p');
        productPrecio.innerText = '$' + product.precio;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productInfofigure = document.createElement('figure');
        
        const imgIconProduct = document.createElement('figure');
        imgIconProduct.setAttribute('src', './icons/bt_add_to_cart.svg');

        
        productCart.append(imgBg, productInfo);
        productInfo.append(productinfoDiv, productInfofigure);
        productinfoDiv.append(productPrecio, productName);
        productInfofigure.append(imgIconProduct);
        cardsContainer.append(productCart);
    });

}
function openAsidePoductcDescription(evento) {
    const element = listProduct.find(product => product.image == evento.target.src);
    console.log(evento.target.src)

    const productDescritionInfoImg= document.querySelector('#product-descrition-info-img');
    productDescritionInfoImg.setAttribute('src', element.image);
    productDescritionInfoImg.setAttribute('alt', element.name);

    const producPrecio = document.querySelector('#product-descrition-info-precio');
    producPrecio.textContent = `$${element.precio}`;

    const productName = document.querySelector('#product-descrition-info-name');
    productName.textContent = `${element.name}`;
   
    const productDescr = document.querySelector('#product-descrition-info-descrip');
    productDescr.textContent = `${element.descr}`;

    
/*     const mostrarElement = `
    <div class="product-descrition-close ">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img id="product-descrition-info-img" src=${element.image} alt=${element.name}>
    <div class="product-descrition-info-">
      <p id="product-descrition-info-precio">$${element.precio}</p>
      <p id="product-descrition-info-name">${element.name}</p>
      <p id="product-descrition-info-descrip">${element.descr}</p>
      <button class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
    `;
    const prueba = document.querySelector('.product-descrition');
    prueba.innerHTML = mostrarElement; */

    asideProduct.classList.remove('inactive');
    asideCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    const productDescriptionClose = document.querySelector('.product-descrition-close');
    productDescriptionClose.addEventListener("click", closeAsidePoductcDescription);
    function closeAsidePoductcDescription() {
    asideProduct.classList.add('inactive');
    }
}


renderProducts(listProduct); 

