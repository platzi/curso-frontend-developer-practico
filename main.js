/* declaramos los elementos a mostrar o accionar con JS    */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const imgMenuMobile = document.querySelector('.menu');
const navShopingCar= document.querySelector('.navbar-shopping-cart'); 
const productDetailShopingCar = document.querySelector('.product-detail'); 
const cardsContainer = document.querySelector('.cards-container'); 

/* escucha eventos */

navEmail.addEventListener('click', toogleDesktopMenu);
imgMenuMobile.addEventListener('click', toogleMobileMenu);
navShopingCar.addEventListener('click', toogleShopingMenu);


/*Construcccion de productos ARRAY */
const productList =[];

productList.push({
    name:'Bike',
    price:'120',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'Pantalla',
    price:'1200',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name:'Laptop',
    price:'3000',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name:'PC',
    price:'5000',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

/* Render elements HTML products*/

renderProducts (productList);

/*Functions JS */

function toogleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');
    productDetailShopingCar.classList.add('inactive');

}

function toogleMobileMenu(){

    mobileMenu.classList.toggle('inactive');
    productDetailShopingCar.classList.add('inactive');
}

function toogleShopingMenu(){

    productDetailShopingCar.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    
}

function renderProducts(arrayPro){
    for (product of arrayPro)
    {
       const productCard = document.createElement('div');
       productCard.classList.add('product-card');
    
       const img = document.createElement('img');
       img.setAttribute('src', product.image);
    
       const producInfo = document.createElement('div');
       producInfo.classList.add('product-info');
    
       const producInfoDiv = document.createElement('div');
    
       const productPrice = document.createElement('p');
       productPrice.innerText= '$ ' + product.price
    
       const productName = document.createElement('p');
       productName.innerText= product.name
    
       const productFigure = document.createElement('figure');
    
       const productImgCar = document.createElement('img');
       productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg');
    
       producInfoDiv.appendChild(productPrice);
       producInfoDiv.appendChild(productName);
       productFigure.appendChild(productImgCar);
       producInfo.appendChild(producInfoDiv);
       producInfo.appendChild(productFigure);
       productCard.appendChild(img);
       productCard.appendChild(producInfo);
       
       cardsContainer.appendChild(productCard);    
}
}

