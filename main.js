const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamb = document.querySelector('.menu-hamb');
const mobileMenu= document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail-secondary');
const productDetailClose = document.querySelector('.product-detail-close');
const buttonAddToCart = document.querySelector('.add-to-cart-button');
const bubbleIcon = document.querySelector('.bubble');
const myOrdersContent = document.querySelector('.my-order-content');
const order = document.querySelector('.order');
var numberBubble = 0;
var cont = 0;

//boton para agregar producto al carrito
buttonAddToCart.addEventListener('click', increaseCart);

// Menu desktop, aparece y desaparece
menuEmail.addEventListener('click', toggleDesktopMenu);

//Menu mobile, aparece y desaparece
menuHamb.addEventListener('click', toggleMenuMobile);


productDetailClose.addEventListener('click', closeProductDetail);

//Menu-Aside
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside() {

    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
    closeProductDetail();

}



function toggleDesktopMenu() {
    const isAsideMenuClosed =  aside.classList.contains("inactive");
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    closeProductDetail();
}



function toggleMenuMobile () {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}


function openProductDetail() {
    productDetail.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetail() {
    productDetail.classList.add('inactive');
}

const productsShoppingCart = [];

// productsShoppingCart.push({
//     image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     name: 'Bike',
//     price: 120,
//     imageClose: "./icons/icon_close.png",
// }) 


                        

          
                        
                        

//funcion para incrementar el numero de items en la burbuja
function increaseCart() {
    numberBubble++;
    bubbleIcon.innerText = numberBubble;
    addToCart();
}

//funcion para agregar al carrito de compras, aumenta el contenido HTML
function addToCart(){
    
    productsShoppingCart.push({
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: 'Bike',
    price: 120,
    imageClose: "./icons/icon_close.png",
    }) 

    while (cont < productsShoppingCart.length) {
        
        const shoppingCartCointainer = document.createElement('div');
        shoppingCartCointainer.classList.add('shopping-cart');
                                
        const figureCart = document.createElement('figure');
        const imageCart = document.createElement('img');
        imageCart.setAttribute('src',  productsShoppingCart[cont].image);
        
        const name = document.createElement('p');
        name.innerText = productsShoppingCart[cont].name;
        const price = document.createElement('p');
        price.innerText = '$ ' + productsShoppingCart[cont].price;
        
        
        const imageIcon = document.createElement('img');
        imageIcon.setAttribute('src', productsShoppingCart[cont].imageClose);
        
        //insertamos el nodo, como primer hijo del padre
        myOrdersContent.insertBefore(shoppingCartCointainer, order)

        shoppingCartCointainer.appendChild(figureCart);
        shoppingCartCointainer.appendChild(name);
        shoppingCartCointainer.appendChild(price);
        shoppingCartCointainer.appendChild(imageIcon);
        figureCart.appendChild(imageCart);
        cont++;
    }
}




/* <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
</div>    

*/



const productList = []; //Array que nos devolveria JavaScript si hicieramos consultas
                        // a nuestra base de datos.

// Cargo el array con los elementos que tiene nuestro objeto
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Car',
    price: 5000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Car',
    price: 5000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});







function renderProducts(arr){
    //Insertamos el array en nuestro HTML

    for (product of productList) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card'); 

    


    //product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);


    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

   


    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    

    cardsContainer.appendChild(productCard);
}   
}

renderProducts(productList);

