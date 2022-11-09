//declara y asigna las variables y su valor desde html (clases)
//iconos
const menuEmailIcon = document.querySelector('.navbar-email');
const BurguerIcon = document.querySelector('.menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

//componentes
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
//para recibir el selector del producto
const productDetailContainer = document.querySelector('#productDetail');

//crear las variaables para el html del productlist
const cardsContainer = document.querySelector('.cards-container');

//Escucha el evento "click" y ejecuta la funcion como 2do parametro
menuEmailIcon.addEventListener('click', toggleDesktopMenu);
BurguerIcon.addEventListener('click', toggleMobileMenu);
shoppingCarIcon.addEventListener('click', toggleAsideCart);
productDetailCloseIcon.addEventListener('click', closedProductDetailAside); //funcion para cerrar el aside con el icon "X"

//crea las funciones para mostrar en el DOM
function toggleDesktopMenu() {
    //cuando addEvent escuche el click, debe eliminar la clase "inactive" del menu y quedarse con desktop-menu
    const asideCartClose = shoppingCartContainer.classList.contains('inactive');
    if(!asideCartClose){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const asideCartClose = shoppingCartContainer.classList.contains('inactive');
    if(!asideCartClose){
        shoppingCartContainer.classList.add('inactive');
    }    

    mobileMenu.classList.toggle('inactive');

    closedProductDetailAside(); //siempre que abra el menu mobile, cerrara el productDetail
}

function toggleAsideCart(){
    const ismobileMenuClose = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClose = desktopMenu.classList.contains('inactive');
    
    if(!ismobileMenuClose){
        mobileMenu.classList.add('inactive')
    } else if(!isdesktopMenuClose) {
        desktopMenu.classList.add('inactive')
    }
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
    
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    
    productDetailContainer.classList.remove('inactive')
}

function closedProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

//agregamos la lista de productos a un array vacio llamado productList
const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:'Screen',
    price: 250,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:'Computer',
    price: 650,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

//Maquetacion de la lista de productos en html
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
      </div>  */


function renderProducts(array) {
///Recorremos el array con la lista de productos
    for(product of array) {
        //RECONSTRUIMOS EL HTML EN JS
        const productCard = document.createElement('div');
        productCard.classList.add("product-card");

        //product = {name, price, img} 
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        //abrir el Aside del product Detail con el evento click 
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");

        
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        //DEVOLVEMOS LOS ELEMENTOS AL DOM
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)

        const productInfofigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        //DEVOLVEMOS LOS ELEMENTOS AL DOM
        productInfofigure.appendChild(productImgCart)

        //DEVOLVEMOS LOS ELEMENTOS AL DIV PADRE
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfofigure)

        //INSERTAMOS productInfo y img hacia el padre "product-card"
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        //insertamos los div de productImg y productInfo como parte final del product card
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)