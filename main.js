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
