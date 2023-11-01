const iconEmailMenu= document.querySelector('.navbar-email');   //Email donde haces click
const iconMenuMobil= document.querySelector('.menu');           //Logo donde haces click
const iconCarCompra= document.querySelector('.navbar-shopping-cart');

const MenuBoxd= document.querySelector('.desktop-menu');     //Box que aparece al hacer click a email
const MenuMobil= document.querySelector('.mobile-menu');
const CarBox= document.querySelector('.product-detail');

iconEmailMenu.addEventListener('click', AparecerMD);
iconMenuMobil.addEventListener('click', AparecerMM);
iconCarCompra.addEventListener('click', AparecerC);

function AparecerMD(){
    const isCarBox= CarBox.classList.contains('inactive');
    if(isCarBox==false){
        CarBox.classList.toggle('inactive');
    }
    MenuBoxd.classList.toggle('inactive'); 
}

function AparecerMM(){
    const isCarBox= CarBox.classList.contains('inactive');
    if(isCarBox==false){
        CarBox.classList.toggle('inactive');
    }
    MenuMobil.classList.toggle('inactive');
}

function AparecerC() {
    const isMenumobil= MenuMobil.classList.contains('inactive');
    const isMenuBoxd= MenuBoxd.classList.contains('inactive');

    if(isMenumobil==false){
        MenuMobil.classList.toggle('inactive');
    }

    if(isMenuBoxd==false){
        MenuBoxd.classList.toggle('inactive');
    }
    
    CarBox.classList.toggle('inactive');
}