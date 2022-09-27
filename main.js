//buttons
const menuEmail = document.querySelector(".navbar-email");
const mobileMenu = document.querySelector(".menu");
const carIconMenu =document.querySelector  ('.navbar-shopping-cart')

//constants from HTML
const menuHamburg = document.querySelector(".mobile-menu");
const passMenu = document.querySelector(".desktop-menu");
const carIcon = document.querySelector(".product-detail")

//other constants
const productList = [];
const cards = document.querySelector(".cards-container");


menuEmail.addEventListener("click", appearMenuEmail)
mobileMenu.addEventListener("click", toggleMobileMenu)
carIconMenu.addEventListener("click", toggleCarMenu)

function appearMenuEmail (){
    if (carIcon.classList.contains('inactive') == false){
        carIcon.classList.toggle('inactive');
    }

    passMenu.classList.toggle('inactive')
}

function toggleMobileMenu (){
    

    if (carIcon.classList.contains('inactive') == false){
        carIcon.classList.toggle('inactive');
    }


    menuHamburg.classList.toggle('inactive');
}

function toggleCarMenu(){
    
    if (passMenu.classList.contains('inactive') == false){
        passMenu.classList.toggle('inactive');
    }
    carIcon.classList.toggle('inactive');
}

productList.push({name: "Hippie thing", price:205, 
image:'https://cdn.pixabay.com/photo/2016/12/27/17/10/pendulum-1934311_960_720.jpg'})

productList.push({name: "Hands", price:323, 
image:'https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_960_720.jpg'})

productList.push({name: "bike", price:102, 
image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})

for (i of productList){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card');

    const imgen = document.createElement('img')
    imgen.setAttribute('src', i.image)

    const productInfo =document.createElement('div')
    const productDiv  =document.createElement('div')

    const productPrice = document.createElement('p')
    productPrice.innerHTML = '$' + i.price;

    const productName =document.createElement('p')
    productName.innerHTML = '$' + i.name;

    const productFigure =document.createElement('figure');
    const productImg =document.createElement('img');
    productImg.setAttribute('src', "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(productImg);
    productInfo.appendChild(productDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(imgen);
    productCard.appendChild(productInfo);

    cards.appendChild(productCard);
}

