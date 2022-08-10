const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambur = document.querySelector('.menu');
const mobileMenu = document.querySelector ('.mobile-menu')
const shopcarticon = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container');
const productopen= document.querySelector('.product-detail-open');
const closebutton = document.getElementById('close');
const productImg = document.querySelector('product-card');

menuEmail.addEventListener('click',toggleDesktopmenu);
menuHambur.addEventListener('click',togglemobilemenu);
shopcarticon.addEventListener('click',togglecarticon);
closebutton.addEventListener('click',closewindow)

function openwindow(){
    productopen.classList.remove('inactive');

    if (productopen.classList.contains('inactive')) {

    }else {
        productDetail.classList.add('inactive');
    }

}
function closewindow(){
    productopen.classList.add('inactive');
}
function toggleDesktopmenu() {
    desktopMenu.classList.toggle('inactive');

    if (desktopMenu.classList.contains('inactive')){

    }else{
        productopen.classList.add('inactive');
    };
    if (productDetail.classList.contains('inactive')) {
        
    }else{
        desktopMenu.classList.add('inactive')
    }};

function togglemobilemenu() {
    mobileMenu.classList.toggle('inactive');

    if (productDetail.classList.contains('inactive')) {
        
    }else{
        productDetail.classList.add('inactive');
    }

    if (mobileMenu.classList.contains('inactive')) {
        
    }else{
        productopen.classList.add('inactive');
    }


}

function togglecarticon() {
    productDetail.classList.toggle('inactive');
    //Condicional para que no se puedan abrir los dos



    if (productDetail.classList.contains('inactive')) {
        
    }else{
        productopen.classList.add('inactive');
    }

    if (desktopMenu.classList.contains('inactive')){

    }else{
        productopen.classList.add('inactive');
    }

}

const productList =[];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 

function renderProducts(arr) {

    for (product of  arr) {
        const productCard = document.createElement('div');
        productCard.classList.add ('product-card');     //Review
    
        //product = {name,price,image}->product.image
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);   //Review
        productImg.addEventListener('click',openwindow);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');     //Review
    
        const productInfoDiv = document.createElement('div');   //Review
    
        const productPrice = document.createElement('p');   //Review
        productPrice.innerText='$' + product.price;
    
        const productName = document.createElement('p');  //Review
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);       //Review
        productInfoDiv.appendChild(productName);         //Review
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);    //Review
    
        productInfo.appendChild(productInfoDiv);          //Review
        productInfo.appendChild(productInfoFigure);       //Review
    
        productCard.appendChild(productImg);             //Review
        productCard.appendChild(productInfo);            //Review
    
        cardsContainer.appendChild(productCard);         //Review
    
    }
}
renderProducts(productList);

