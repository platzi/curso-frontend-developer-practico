const menuEmail = document.querySelector('.navbar-email')
const desktopEmail = document.querySelector('.desktop-menu')

const menuBurgerIcon = document.querySelector('.menu')
const mobileBurger = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)

menuBurgerIcon.addEventListener('click', toggleMobileMenu)

menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopEmail.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileBurger.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileBurgerClosed = mobileBurger.classList.contains('inactive');
    if (!isMobileBurgerClosed) {
      mobileBurger.classList.add('inactive'); 
    }

    const isDesktopMenuClosed = desktopEmail.classList.contains('inactive');
    if(!isDesktopMenuClosed){
        desktopEmail.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}
