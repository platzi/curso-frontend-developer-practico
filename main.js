const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    let isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }


    // console.log('Click');
    desktopMenu.classList.toggle('inactive');
}

/** PARA AEVITAR LOS CHOQUES DE MENU entre Mobile y Carritos 
 * 
 * Se cierra un menu si se abre el otro
 * y viceversa.
*/

function toggleMobileMenu(){

    let isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    // aside.classList.toggle('inactive');

    // si mobileMenu esta open, hay que cerrarlo.
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    // abrir el aside

    aside.classList.toggle('inactive');

}
 
let productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: 'Casque',
    price: 220,
    image: "https://images.pexels.com/photos/266517/pexels-photo-266517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Mi Logo DE',
    price: 620,
    image: "https://images.pexels.com/photos/261572/pexels-photo-261572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: 'Casque',
    price: 220,
    image: "https://images.pexels.com/photos/266517/pexels-photo-266517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Mi Logo DE',
    price: 620,
    image: "https://images.pexels.com/photos/261572/pexels-photo-261572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: 'Casque',
    price: 220,
    image: "https://images.pexels.com/photos/266517/pexels-photo-266517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Mi Logo DE',
    price: 620,
    image: "https://images.pexels.com/photos/261572/pexels-photo-261572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: 'Casque',
    price: 220,
    image: "https://images.pexels.com/photos/266517/pexels-photo-266517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Mi Logo DE',
    price: 620,
    image: "https://images.pexels.com/photos/261572/pexels-photo-261572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: 'Casque',
    price: 220,
    image: "https://images.pexels.com/photos/266517/pexels-photo-266517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Mi Logo DE',
    price: 620,
    image: "https://images.pexels.com/photos/261572/pexels-photo-261572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name: 'Casque',
    price: 220,
    image: "https://images.pexels.com/photos/266517/pexels-photo-266517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: 'Mi Logo DE',
    price: 620,
    image: "https://images.pexels.com/photos/261572/pexels-photo-261572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

//    <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>
//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div> 

function renderProducts(arra) {
    // productList es un array.
    /* ****** todo esto es para MAQUETACION *****  */
for (product of arra){
    let productCard = document.createElement('div');
    productCard.classList.add("product-card");

    let productImg = document.createElement('img');
    // producto = {name, price, image} -> product.image
    productImg.setAttribute('src', product.image );

    let productInfo = document.createElement('div');
    productInfo.classList.add("product-info");

    let productInfoDiv = document.createElement('div');

    let productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    let productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    let productInfoFigure = document.createElement('figure');
    let productImgCart  = document.createElement('img');
    productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg"); // el 2do parametro, en caso de dinamica, podria ser modificado.

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    // Ahora insertamos nuestrasproduct Info y product imagenes.
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);
}
/* ********** HASTA AQUI LA MAQUETACION ******* */
}

renderProducts(productList);



// console.log('JS funcionando');