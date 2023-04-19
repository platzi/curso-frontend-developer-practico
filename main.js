//organizamos una parte del menu en desktop

const menuEmail =document.querySelector('.navbar-email');
const destoktopMenu =document.querySelector('.desktop-menu');
const menuHamIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const aside =document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktoMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktoMenu(){
    
    destoktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){
        const isAsideClosed = aside.classList.contains('inactive')
   
        if(!isAsideClosed){
            aside.classList.add('inactive');
        }
        mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileClosed=menuCarritoIcon.classList.contains('inactive');

    if(!isMobileClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
   
   