const email=document.querySelector(`.navbar-email`);
const Desktopmenu=document.querySelector(`.desktop-menu`);
const iconmenu=document.querySelector(`.icon-menu`);
const mobilemenu=document.querySelector(`.mobile-menu`);
const shoppingcarticon=document.querySelector(`.navbar-shopping-cart`);
const detailshoppingcart=document.querySelector(`.product-detail`);

email.addEventListener(`click`,toggleDesktopMenu);
iconmenu.addEventListener(`click`,togglemobileMenu);
shoppingcarticon.addEventListener(`click`,toggleshoppingcartMenu);


function toggleDesktopMenu(){
    const isDetailShoppinCartClosed= detailshoppingcart.classList.contains(`inactive`)
    if(!isDetailShoppinCartClosed){
        detailshoppingcart.classList.add(`inactive`)
    }
    Desktopmenu.classList.toggle(`inactive`)
}
function togglemobileMenu(){
    const isDetailShoppinCartClosed= detailshoppingcart.classList.contains(`inactive`)
    if(!isDetailShoppinCartClosed){
        detailshoppingcart.classList.add(`inactive`)
    }
    mobilemenu.classList.toggle(`inactive`)

}
function toggleshoppingcartMenu(){
    const isMobileMenuClosed= mobilemenu.classList.contains(`inactive`);
    const isDesktopMenuClosed=Desktopmenu.classList.contains(`inactive`);
    if(!isDesktopMenuClosed){
        Desktopmenu.classList.add(`inactive`);
    }
    if(!isMobileMenuClosed){
        mobilemenu.classList.add(`inactive`);
    }
    detailshoppingcart.classList.toggle(`inactive`);
    //detailshoppingcart.classList.toggle(`inactive`)
}