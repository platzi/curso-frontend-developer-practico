const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamb = document.querySelector('.menu-hamb');
const mobileMenu= document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');




// Menu desktop, aparece y desaparece
menuEmail.addEventListener('click', toggleDesktopMenu);

//Menu mobile, aparece y desaparece
menuHamb.addEventListener('click', toggleMenuMobile);

//Menu-Aside
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


 function toggleCarritoAside() {
    
    //Guardo en una constante el valor de true o false de su clase inactive
    const isMobileMenuClosed =  mobileMenu.classList.contains("inactive");
    const isDesktopMenu =  desktopMenu.classList.contains("inactive");
    //Si está abierto el munú mobile, lo cierro
    if (!isMobileMenuClosed) {
         mobileMenu.classList.toggle("inactive");
    // Si está abierto el menu Desktop, lo cierro
    } else if (!isDesktopMenu) {
        desktopMenu.classList.toggle("inactive");
    }
    //abro el aside
    aside.classList.toggle('inactive');
}


function toggleDesktopMenu() {
    const isAsideMenuClosed =  aside.classList.contains("inactive");
    //Si esta abierto el menú aside, lo cierro
    if (!isAsideMenuClosed ) {
        aside.classList.toggle("inactive");
   }
    desktopMenu.classList.toggle('inactive')
}



function toggleMenuMobile () {

    const isAsideMenuClosed =  aside.classList.contains("inactive");

    //Si esta abierto el menu aside, lo cierro
    if (!isAsideMenuClosed) {
        aside.classList.toggle("inactive");
   }
    mobileMenu.classList.toggle('inactive');
}



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

