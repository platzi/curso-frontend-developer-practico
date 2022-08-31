const menuEmail = document.querySelector('.navbar-email'); //mandamos llamar al email
const menuHamIcon = document.querySelector('.menu'); 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); 
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu); // le decimos que queremos hacer al darle click
menuHamIcon.addEventListener('click', toggleMobileMenu);//ESTO ES UNA FUNCION   //toggle: intercambiar //addEventListener: Agregue un evento de clic a un elemento
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){ //se le pone l clse inctive al desktopmenu y luego cd ue le den clik se v  ejecutr est function
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
  
   desktopMenu.classList.toggle('inactive'); // esta funcion classList.toggle: aprece y desprece
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    shoppingCartContainer.classList.toggle('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

const productlist = []// array que devuelve codigo
productlist.push({
    name:'bike',
    price:120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}) //para agregar un nuevo elemento
productlist.push({
    name:'pantalla',
    price:220,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}) 
productlist.push({
    name:'compu',
    price:1220,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

}) 
// despues para agregarlos a htlm, hay que recorrer el arry
//lo que vamos a hacer es q por cada product of del array deproducto
// que es el ProductList
for (product of productlist){ //of nos da directamente el elemento del array...
        const productCard = document.createElement('div');//para crear cada uno de estos elementos del html pero en js
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);//product= {name, price, image} -->product.image

        const productInfo = document.createElement('div');//para crear cada uno de estos elementos del html pero en js
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = docuemnt.createElement('figure');
        const productImgCart = document.createElement('img');
        img.setAttribute('src','/icons/bt_add_to_cart.syg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        productCard.appendChild(productImg);
}
