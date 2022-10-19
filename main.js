// Diferentes seleccionadores de elementos html
const menuEmail = document.querySelector('.navbar-email');
const menuCarroIcon = document.querySelector('.navbar-shopping-cart');
const menuHamImg = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cart_container = document.querySelector('cards-container');

// Escuchador de eventos "clicks"
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamImg.addEventListener('click', toggleMobileMenu);
menuCarroIcon.addEventListener('click', toggleAside);

// Funciones para manejar eventos en el html
function toggleDesktopMenu() {
    const veriaside = aside.classList.contains('inactive');
    if (!veriaside) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const veriaside = aside.classList.contains('inactive');
    if (!veriaside) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleAside() {
    // aside.classList.toggle('inactive'); se comenta porque se necesita un condicional para verificar sino hay otro elemento abierto.
    const verimobileMenu = mobileMenu.classList.contains('inactive'); // se declara esta variable para capturar si el menumobile esta abierto
    const veridesktopMenu = desktopMenu.classList.contains('inactive');
    // Este condicional niega el estado en el que se encuentre el elemento para proceder a cerrar los elementos si estan abiertos. 
    if (!verimobileMenu || !veridesktopMenu) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); // con este codigo mandamos a activar o desactivar la clase "inactive" en el html.
}

const productList = []; // Array para devolver codigo JS
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'CellPhone',
    price: 400,
    image: 'https://images.pexels.com/photos/3756877/pexels-photo-3756877.jpeg?cs=srgb&dl=pexels-sound-on-3756877.jpg&fm=jpg&_gl=1*1kpftpj*_ga*NDgzNjUzNzkzLjE2NjM2MjU2NzI.*_ga_8JE65Q40S6*MTY2NjIwOTk2NS42LjEuMTY2NjIxMDAzMS4wLjAuMA..'
});
productList.push({
    name: 'Pc Gaming',
    price: 750,
    image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?cs=srgb&dl=pexels-%E6%B4%8B%E6%A6%A4-%E9%83%AD-2399840.jpg&fm=jpg&_gl=1*1tqvzm3*_ga*NDgzNjUzNzkzLjE2NjM2MjU2NzI.*_ga_8JE65Q40S6*MTY2NjIwOTk2NS42LjEuMTY2NjIxMDE1NS4wLjAuMA..'
});

/* 
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
        <p>$120,00</p>
        <p>Bike</p>
        </div>
        <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> 
*/

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} --> product.image
    const Productimg = document.createElement('img');
    Productimg.setAttribute('src', product.image);
    
    const productoInfo = document.createElement('div');
    productoInfo.classList.add('product-info');

    const productoInfodiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + productPrice;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    const productoInFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    // productoInFigure.append(productImgCart);
    // productoInfodiv.append(productName,productPrice);
    // productoInfo.append(productoInfodiv,productoInFigure);
    // productCard.append(Productimg,productoInfo);
    // cart_container.append(productCard);
    productoInFigure.appendChild(productImgCart);
    productoInfodiv.appendChild(productPrice);
    productoInfodiv.appendChild(productName);

    // productInfo.appendChild(productInfoDiv);
    // productInfo.appendChild(productInfoFigure);
  
    // productCard.appendChild(productImg);
    // productCard.appendChild(productInfo);
  
    // cardsContainer.appendChild(productCard);

}
