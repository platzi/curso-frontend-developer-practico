//Inicio del menu para que aparesca. 
//vamos a agarrar el objeto email para hacer que el menu aparesca.
const menu_email = document.querySelector('.navbar-email');
const menu_desktop = document.querySelector('.desktop-menu');
menu_email.addEventListener('click', toggleDesktopMenu);
// Product Detail
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

// Productos
const cardsContainer=document.querySelector('.cards-container');
function toggleDesktopMenu(){
    const isAsideClosed = ShoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        ShoppingCartContainer.classList.add('inactive');
    }

    menu_desktop.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */

}

// fin Agregando Menu Correo

// inicio MenuHamburguesa
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click',toggleMenuHamIcon)
function toggleMenuHamIcon(){
    const isAsideClosed = ShoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        ShoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */

}
// fin menu ham


// inicio MenuHamburguesa
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const ShoppingCartContainer = document.querySelector('#ShoppingCartContainer');
menuCarritoIcon.addEventListener('click',toggleMenuCarrito)
ShoppingCartContainer.addEventListener('click',toggleMenuCarrito)

function toggleMenuCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    console.log(isProductDetailClosed)
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    ShoppingCartContainer.classList.toggle('inactive'); /* esto hace que se coloque o se quite dependiendo si esta o no */
}
// fin menu ham





// integrando productos Automaticamente

const productList = [];
function AgregandoProductos(){
productList.push({
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'Pantalla',
    price: 350,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'MotoBike',
    price: 990,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'Pantalla',
    price: 350,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:'MotoBike',
    price: 990,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
return productList;
}
AgregandoProductos();
AgregandoProductos(); 
AgregandoProductos(); 
RendersProducts(productList);


function RendersProducts(productList){
    for (product of productList){
        const productcard= document.createElement('div');
        productcard.classList.add('product-card');
        
        const productImg= document.createElement('img');
        productImg.setAttribute('src',product.image);
        /* generando el Evento para que abra el productdetail */
        productImg.addEventListener('click',openProductDetailAside);

        /*FIN  */
        const productinfo= document.createElement('div');
        productinfo.classList.add('product-info');
        
        const productInfoDiv= document.createElement('div');
        
        const productPrice= document.createElement('p');
        productPrice.innerText ='$'+ product.price;
        const productName= document.createElement('p');
        productName.innerText =product.name;
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productinfo.appendChild(productInfoDiv);
        productinfo.appendChild(productInfoFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(productinfo);
        cardsContainer.appendChild(productcard)
        
    }
}

/* Fin Agregando Productos */


/* Inicio Del Detalle del Producto */


function openProductDetailAside(){
    ShoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    
    productDetailContainer.classList.add('inactive');
}