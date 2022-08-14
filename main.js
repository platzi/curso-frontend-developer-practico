const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
    const isAsideOpen =!aside.classList.contains('inactive');
    if (isAsideOpen){
        //se cierra aside
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

menuHamIcon.addEventListener ('click',toggleMobileMenu);
function toggleMobileMenu(){
    const isAsideOpen =!aside.classList.contains('inactive');
    if (isAsideOpen){
        //se cierra aside
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

menuCarritoIcon.addEventListener ('click',toggleAside);
function toggleAside(){
    const isMobileMenuOpen =!mobileMenu.classList.contains('inactive');
    if (isMobileMenuOpen){
        //se cierra mobilemenu
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

//CREANDO ARRAY PARA PRODUCTOS
const productList = [];
productList.push({
    name:'bike',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
productList.push({
    name:'car',
    price:500,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
});
for (product of productList){
    console.log(product.name);
}

function renderProducts(arr){
    //RECORRER ARRAY
    for(product of arr){
        //CREANDO ETIQUETAS
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productInfoDivPrice = document.createElement('p');
        productInfoDivPrice.innerText = '$'+ product.price;
        const productInfoDivName = document.createElement('p');
        productInfoDivName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        /*estructura */
        cardsContainer.append(productCard);
    
        productCard.append(productImg,productInfo);
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productInfoDiv.append(productInfoDivPrice,productInfoDivName);
    
        productInfoFigure.appendChild(productInfoFigureImg);
    }
}
renderProducts(productList);
