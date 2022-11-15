const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile-menu');
const iconCar = document.querySelector('.carLogo');
const carList = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toggleMobileMenu);
iconCar.addEventListener('click', toggleCarMenu)

function toggleDesktopMenu () {
    const isCarClosed = carList.classList.contains('inactive');

    if (!isCarClosed){
        carList.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCarClosed = carList.classList.contains('inactive');

    if (!isCarClosed){
        carList.classList.add('inactive')
    }

    mobile.classList.toggle('inactive');
}

function toggleCarMenu(){
    const isMobileClosed = mobile.classList.contains('inactive');
    
    if (!isMobileClosed){
        mobile.classList.add('inactive');        
    } 

    carList.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: "Bike",
    precio: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Pantalla",
    precio: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computador",
    precio: 3000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // 
    const img = document.createElement("img");
    img.setAttribute("src", product.image);

    const productInfo= document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv
}
