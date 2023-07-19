const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const MobilMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuHamIcon.addEventListener('click',toggleMobilMenu)
menuEmail.addEventListener('click',toggleDesktopMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
function toggleDesktopMenu(){

    const isMenuDesktopClosed =   aside.classList.toggle('inactive');
    
    if(!isMenuDesktopClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){
    const isAsideMenuClosed =   aside.classList.toggle('inactive');
    
    if(!isAsideMenuClosed){
        aside.classList.add('inactive');
    }
    MobilMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobilMenuClosed =   MobilMenu.classList.toggle('inactive');
    
    if(!isMobilMenuClosed){
        MobilMenu.classList.add('inactive');
    }
    
        aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'bike',
    precio: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});
productList.push({
    name:'moto',
    precio: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});
productList.push({
    name:'car',
    precio: 20,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});

for(product of productList){
    console.log(product);
}