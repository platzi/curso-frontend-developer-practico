//buttons
const menuEmail = document.querySelector(".navbar-email");
const mobileMenu = document.querySelector(".menu");
const carIconMenu =document.querySelector  ('.navbar-shopping-cart');
const closeButton =document.querySelector (".product-detail-close");

//constants from HTML
const menuHamburg = document.querySelector(".mobile-menu");
const passMenu = document.querySelector(".desktop-menu");
const carIcon = document.querySelector("#car_of_products")
const productDetailAside =document.querySelector('#product-detail')


//other constants
const productList = [];
const cards = document.querySelector(".cards-container");
uploadOfProducts()


menuEmail.addEventListener("click", appearMenuEmail)
mobileMenu.addEventListener("click", toggleMobileMenu)
carIconMenu.addEventListener("click", toggleCarMenu)
closeButton.addEventListener("click", closeAside)

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
    
    if (menuHamburg.classList.contains('inactive') == false){
        menuHamburg.classList.toggle('inactive');
    }
    if (passMenu.classList.contains('inactive') == false){
        passMenu.classList.toggle('inactive');
    }
    productDetailAside.classList.add('inactive');
    carIcon.classList.toggle('inactive');
}

function uploadOfProducts (){
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
        imgen.classList.add("juanito")
        imgen.setAttribute('src', i.image)
        imgen.addEventListener('click', openPDAside);

        const productInfo =document.createElement('div')
        productInfo.classList.add('product-info')
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

        productDiv.appendChild(productPrice);
        productDiv.appendChild(productName);

        productCard.appendChild(imgen);
        productCard.appendChild(productInfo);

        cards.appendChild(productCard);
    }
}

function openPDAside (){
    productDetailAside.classList.remove('inactive')
    carIcon.classList.add('inactive');
}

function closeAside (){ 
    productDetailAside.classList.add('inactive')
    }
