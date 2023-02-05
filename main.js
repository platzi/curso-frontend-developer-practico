const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCarritoDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    // quita o poner la clase inactive con un togle o palanca
    const isAsideCarritoClosed = asideCarritoDetail.classList.contains('inactive');

    if (!isAsideCarritoClosed){
        asideCarritoDetail.classList.add('inactive');
    }
    //toggle
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    // Quita o pone la clase .mobile-menu con un toggle o palanca
    const isAsideCarritoClosed = asideCarritoDetail.classList.contains('inactive');
    if (!isAsideCarritoClosed) {
        asideCarritoDetail.classList.add('inactive');
    }
    //toggle
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed =  mobileMenu.classList.contains('inactive');
    const isEmailClosed = desktopMenu.classList.contains('inactive');    

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if (!isEmailClosed){
        desktopMenu.classList.add('inactive');
    }
    //toggle
    asideCarritoDetail.classList.toggle('inactive');

}

/**
 * Se crea valores que vendran luego desde una base de datos. Hardcodeamos
 */
const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name:'Pantall',
    price: 220,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name:'Laptop',
    price: 700,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name:'Play Station 5',
    price: 500,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

/* MAQUETAREMOS DE PEDAZO DE CODIGO HTML CON JAVA SCRIPT */
/* <div class="product-card">
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
      </div> */

function renderProduct(arr){
    /*Usamos un FOR para leer el objeto contenedor de nuestros elementos */    
    for (product of arr){

        /*Se añade un elemento div y una clase llamada 'product-card'*/
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        /*Se añade un elemento img y su src a partir del objeto product.name */
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
    
        /*Se añade un div y dentro una clase 'product-info' */
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info'); 
    
        /*Se añade un div, despues un elemento p y se escribe un texto $product.price  */
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        /*Se añade otro elemento p y se escribe un texto $product.name  */
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        /*Se mete a los parrafos dentro de su div padre*/
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        /*Se añade un elemento figure y dentro se añade un img con una src */
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        /*Se mete a la img dentro de figure */
        productInfoFigure.appendChild(productImgCart);
    
        /*Se mete div y figure dentro de su clase padre product-info */
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        /*Se mete img y la clase 'product info' dentro de su clase padre 'product-card' */
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        /*Se mete clase 'product-card' dentro de su clase padre 'cards-container' */
        cardsContainer.appendChild(productCard);  
    }
}

renderProduct(productList);