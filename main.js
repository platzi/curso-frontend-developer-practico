const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container')



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click',closeProductDetailAside);


function toggleDesktopMenu() {
    console.log('Click');

    const isAsideClosd = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosd) 
    {

       aside.classList.add('inactive');   
    } 
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosd = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosd) 
    {

        shoppingCartContainer.classList.add('inactive');   
    } 

    closeProductDetailAside();

    

    mobileMenu.classList.toggle('inactive'); 
}

function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

         if (!isMobileMenuClose)
        {
            mobileMenu.classList.add('inactive');   
        } 

      const isProductDetailClose = productDetailContainer.classList.contains('inactive');

         if (!isProductDetailClose)
        {
            productDetailContainer.classList.add('inactive');   
        } 
        
        shoppingCartContainer.classList.toggle('inactive'); 
}

//Lo usamos para que aparezca el producto
function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');

}
//Lo usamos para que a la hora de presionar el bton (x) este se vuelva inactivo
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
    
}




//Creacion de html con javaScript 
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Celular',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productoFigure = document.createElement('figure');
        const productImageFigure = document.createElement('img');
        productImageFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    
        productoFigure.appendChild(productImageFigure);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
    
}

renderProducts(productList);




//const informacionDiv = document.createElement('div'); Esto nos sirve para la creacion del elemento




