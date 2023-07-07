const menuEmail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer =document.querySelector('#shoppingCartContainer');
const cardsContainer=document.querySelector('.cards-container');
/*Events Listner */

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoShoppingCartContainer);


function toggleDesktopMenu(){
    const isShoppingCartContainerdeClosed=shoppingCartContainer.classList.contains('inactive');
    if (!isShoppingCartContainerdeClosed){
        shoppingCartContainer.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartContainerdeClosed=shoppingCartContainer.classList.contains('inactive');
    if (!isShoppingCartContainerdeClosed){
        shoppingCartContainer.classList.add('inactive');
    };
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoShoppingCartContainer(){       
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed=desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    };

    if (!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    };

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:'Flowers',
    price: 300,
    Image: "https://images.pexels.com/photos/14448342/pexels-photo-14448342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'Burger',
    price: 20,
    Image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'Car',
    price: 1200,
    Image: "https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'Retro TV',
    price: 120,
    Image: "https://images.pexels.com/photos/17380124/pexels-photo-17380124/free-photo-of-vintage-tecnologia-dispositivo-tele.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'Mac',
    price: 700,
    Image: "https://images.pexels.com/photos/16837131/pexels-photo-16837131/free-photo-of-apple-ordenador-portatil-macbook-tecnologia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'HeadPhones',
    price: 200,
    Image: "https://images.pexels.com/photos/16729495/pexels-photo-16729495/free-photo-of-tecnologia-marca-logo-auriculares.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
    name:'HeadPhones',
    price: 150,
    Image: "https://images.pexels.com/photos/16703782/pexels-photo-16703782/free-photo-of-conexion-tecnologia-musica-auriculares.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})


function renderProducts(arr){
    for(product of arr) {
        /* Elements*/

        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
        /* Image*/

        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.Image);
        /* Info Products */

        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv=document.createElement('div');
        const productPrice=document.createElement('p');

        productPrice.innerText='$'+product.price;

        const productName=document.createElement('p');
        productName.innerText=product.name;


        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');

        /* Logo */
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
        /* hierarchy */
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);


