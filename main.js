const navright = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const burgermenu = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const shoppingCard = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail'); 
const cardsContainer = document.querySelector('.cards-container');

navright.addEventListener('click', toggleDesktopmenu);
burgermenu.addEventListener('click', toggleMobileMenu);
shoppingCard.addEventListener('click', toggleProductDetail);

function  toggleDesktopmenu (){
    aside.classList.add('inactive');
    mobilemenu.classList.add('inactive');

    desktopmenu.classList.toggle('inactive');
}   


function  toggleMobileMenu (){
    aside.classList.add('inactive');
    desktopmenu.classList.add('inactive');

    mobilemenu.classList.toggle('inactive');
}   

function  toggleProductDetail (){
    mobilemenu.classList.add('inactive');
    desktopmenu.classList.add('inactive');

    aside.classList.toggle('inactive');
}  

const productsArray = [];
productsArray.push(
    {
        name:"Bike",
        price:120,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name:"Bike",
        price:120,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        name:"Bike",
        price:120,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
    );

 function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',  product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const divInfo = document.createElement('div');
        const price = document.createElement('p');
        price.innerText = product.price;
        const detailName = document.createElement('p');
        detailName.innerText = product.name;
        divInfo.appendChild(price);
        divInfo.appendChild(detailName);
    
        const figureAddCard = document.createElement('figure');
        const figureImage = document.createElement('img');
        figureImage.setAttribute('src',  './icons/bt_add_to_cart.svg');
    
        figureAddCard.appendChild(figureImage);
    
        productInfo.appendChild(divInfo);
        productInfo.appendChild(figureAddCard);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    
    }

 }

 renderProducts(productsArray);

