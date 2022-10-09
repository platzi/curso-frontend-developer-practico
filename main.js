const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

const menuMobileOption = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const shoopingCart = document.querySelector('.navbar-shopping-cart');
const containerCartShooping = document.querySelector('.product-detail');


menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileOption.addEventListener("click", toggleDesktopMenuMobile);
shoopingCart.addEventListener('click',toggleContainerCart);

function toggleDesktopMenu(){
       
        if(!(containerCartShooping.classList.toggle('inactive'))){
                containerCartShooping.classList.toggle('inactive');
                menuDesktop.classList.toggle('inactive');
        }else{
                menuDesktop.classList.toggle('inactive');
        }

}

function toggleDesktopMenuMobile(){
        ;
        if(!(containerCartShooping.classList.toggle('inactive'))){
                containerCartShooping.classList.toggle('inactive');
                menuMobile.classList.toggle('inactive')
        }else{
                menuMobile.classList.toggle('inactive')
        }
}

function toggleContainerCart(){
        if(!(menuDesktop.classList.contains("inactive"))){
                menuDesktop.classList.toggle('inactive'); 
                containerCartShooping.classList.toggle('inactive');
        }else if(!(menuMobile.classList.toggle('inactive'))){
                menuMobile.classList.toggle('inactive');
                containerCartShooping.classList.toggle('inactive');
        }
        else{
                containerCartShooping.classList.toggle('inactive');
        }
        
}