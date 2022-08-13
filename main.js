const menu = document.querySelector(".navbar-email");
const email = document.querySelector(".desktop-menu");
const hamburgIcon = document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");
const menuCarritoIcon= document.querySelector(".navbar-shopping-cart");
const shoppingCartContiner= document.querySelector("#shoppingCartContiner");
const cartsContaines= document.querySelector(".cards-container");

menu.addEventListener("click", toggleDestopMenu);
hamburgIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoMenu);

function toggleDestopMenu(){
    const isAsideClosed=shoppingCartContiner.classList.contains('inactive');

        
    if(!isAsideClosed){
        shoppingCartContiner.classList.add('inactive');
    }
    email.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed=shoppingCartContiner.classList.contains('inactive');

        
    if(!isAsideClosed){
        shoppingCartContiner.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoMenu(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContiner.classList.toggle('inactive');
}

const productList=[];

productList.push({
    name:'Bike',
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name:'Pantalla',
    price:470,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name:'Computador',
    price:650,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name:'Escritorio',
    price:650,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name:'Bike',
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name:'Pantalla',
    price:470,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});

productList.push({
    name:'Computador',
    price:650,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
    name:'Escritorio',
    price:650,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});


function renderProducts (arr){
    for (product of arr){
        const producCard = document.createElement('div');
        producCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        //product ={nome, price, image} 
    
        const producInfo = document.createElement('div');
        producInfo.classList.add('product-info');
    
        const producInfoDiv = document.createElement('div');
    
        const producPrice = document.createElement('p');
        producPrice.innerText = '$' + product.price;
    
        const producName = document.createElement('p');
        producName.innerText = product.name;
    
        producInfoDiv.appendChild(producPrice);
        producInfoDiv.appendChild(producName);
    
        const producInfoFigure = document.createElement('figure');
        const producImgCart = document.createElement('img');
        producImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        producInfoFigure.appendChild(producImgCart);
    
        producInfo.appendChild(producInfoDiv);
        producInfo.appendChild(producInfoFigure);
    
        producCard.appendChild(productImg);
        producCard.appendChild(producInfo);
    
        cartsContaines.appendChild(producCard);
    
    }

}

renderProducts(productList);