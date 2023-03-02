var menuEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var menubtn = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu');
var menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
var myOrdermenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopmenu);
function toggleDesktopmenu(){
    var isMenuEmailClosed = myOrdermenu.classList.contains('inactive')

    if(!isMenuEmailClosed){
        myOrdermenu.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
};


menubtn.addEventListener('click', toggleMobilemenu);
function toggleMobilemenu(){
    var isMyOrderMenuClosed = myOrdermenu.classList.contains('inactive')

    if(!isMyOrderMenuClosed){
        myOrdermenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
};

menuCarritoIcon.addEventListener('click', togglemyOrdermenu);
function togglemyOrdermenu(){
    var isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    myOrdermenu.classList.toggle('inactive');
}