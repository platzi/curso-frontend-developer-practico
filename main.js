const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const prouctDetail = document.querySelector('.product-detail'); 
const shopCart = document.querySelector('.navbar-shopping-cart'); 



menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
shopCart.addEventListener('click', toggleProductDetail);


function toggleDesktopMenu() {

            
   prouctDetail.classList.add('inactive');
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

   prouctDetail.classList.add('inactive');
   mobileMenu.classList.toggle('inactive');
}


function toggleProductDetail() {

  
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    prouctDetail.classList.toggle('inactive');  
    
}