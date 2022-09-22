const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu ');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carMobileIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');




menuemail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carMobileIcon.addEventListener('click', toggleCarMobileMenu);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
        desktopmenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');


    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarMobileMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopmenu.classList.contains('inactive');
    // aside.classList.toggle('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if (!isDesktopMenuClosed){
        desktopmenu.classList.add('inactive');
    }
        aside.classList.toggle('inactive');
   
}

const productList = [];

productList.push({
    mane : 'Bike',
    price : 1200 ,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    mane : 'bike helmet',
    price : 420 ,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    mane : 'pants',
    price : 880 ,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    mane : 'tires',
    price : 880 ,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});