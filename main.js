const menuEmail= document.querySelector('.navbar-email'); /* Al que se le hace click*/
const desktopMenu = document.querySelector('.desktop-menu') /* El que se va a mostrar cuando hagan click puedo trabajarlos para validaciones por la clase*/ 


const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');

const cardContainer = document.querySelector('.cards-container');

const productDetailContainerCloseIcon = document.querySelector('.product-detail-close')

menuCarritoIcon.addEventListener('click', togglesCarritoAside); 
menuEmail.addEventListener('click', toggleshowDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
productDetailContainerCloseIcon.addEventListener('click', closeProductDetailContainer);

function closeProductDetailContainer(){
    productDetailContainer.classList.add('inactive');

}

function togglesCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive'); // Pregunta si el menu esta abierto = true
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');

    if(isMobileMenuOpen){                              //true
        mobileMenu.classList.add('inactive');           // asigna clase inactive
    }

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }

    if(isProductDetailOpen){
        productDetailContainer.classList.add('inactive');
        
    }


    shoppingCartContainer.classList.toggle('inactive');                 // ejecuta toogle comun

}

function toggleshowDesktopMenu(){

    const isCarritoAsideOpen = !shoppingCartContainer.classList.contains('inactive'); // Pregunta si el menu esta abierto = true

    if(isCarritoAsideOpen){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

   desktopMenu.classList.toggle('inactive');

   productDetailContainer.classList.add('inactive');
}

function toogleMobileMenu() {
    const isCarritoAsideOpen = !shoppingCartContainer.classList.contains('inactive'); // Pregunta si el menu esta abierto = true

    if(isCarritoAsideOpen){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    
}

const productList = [];

productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Bike',
    Price: '120',
    Img:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function listarProductos(arr){

    for (productos of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
               
        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src',productos.Img);
        imageProduct.addEventListener('click', openProductDetailAside);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
               
        const productInfoDiv = document.createElement('div');
               
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + productos.Price;
     
        const productName = document.createElement('p');
        productName.innerHTML = productos.name;
         
        const figure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
     
                 figure.appendChild(figureImg);   /* Ahora hay que indicarle la anidacion*/
     
                 productInfoDiv.appendChild(productPrice);      /* Ahora hay que indicarle la anidacion*/
                 productInfoDiv.appendChild(productName);       /* Ahora hay que indicarle la anidacion*/
                 productInfo.appendChild(productInfoDiv);        /* Ahora hay que indicarle la anidacion*/
                 productInfo.appendChild(figure);                /* Ahora hay que indicarle la anidacion*/
                 productCard.appendChild(imageProduct);          /* Ahora hay que indicarle la anidacion*/
                 productCard.appendChild(productInfo);           /* Ahora hay que indicarle la anidacion*/
                 
     
       
       cardContainer.appendChild(productCard);  /* Query selector que apunta a la clase del html e inserte la maquetacion*/
     
     
     
     }


}

listarProductos(productList);

