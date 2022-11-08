//declara y asigna las variables y su valor desde html (clases)
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const BurguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//crear las variaables para el html del productlis
const cardsContainer = document.querySelector('.cards-container');

//Escucha el evento "click" y ejecuta la funcion como 2do parametro

menuEmail.addEventListener('click', toggleDesktopMenu);
BurguerIcon.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', toggleAsideCart);

//crea las funciones para mostrar en el DOM
function toggleDesktopMenu() {
    //cuando addEvent escuche el click, debe eliminar la clase "inactive" del menu y quedarse con desktop-menu
    const asideCartClose = aside.classList.contains('inactive');
    if(!asideCartClose){
        aside.classList.add('inactive');
    }    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const asideCartClose = aside.classList.contains('inactive');
    if(!asideCartClose){
        aside.classList.add('inactive');
    }    

    mobileMenu.classList.toggle('inactive')
}

function toggleAsideCart(){
    const ismobileMenuClose = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClose = desktopMenu.classList.contains('inactive');
    
    if(!ismobileMenuClose){
        mobileMenu.classList.add('inactive')
    } else if(!isdesktopMenuClose) {
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
    
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

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);

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