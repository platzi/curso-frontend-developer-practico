let NavEmail=document.querySelector(`.navbar-email`);
let DesktopMenu=document.querySelector(`.desktop-menu`);

let mobileMenu=document.querySelector(`.menu`);
let menuMobile=document.querySelector(`.mobile-menu`);

let shopincar=document.querySelector(`.navbar-shopping-cart`)
let menuShopinCar=document.querySelector(`.product-detail`)

NavEmail.addEventListener(`click`,toggleMenus);
mobileMenu.addEventListener(`click`,toggleMobile);
shopincar.addEventListener(`click`,toggleShopincar)

function toggleMenus(){
    let carshopinopen=menuShopinCar.classList.contains(`inactive`)
    if(!carshopinopen){
        menuShopinCar.classList.add(`inactive`)
    }
    DesktopMenu.classList.toggle(`inactive`) 
}
function toggleMobile(){
    let carshopinopen=menuShopinCar.classList.contains(`inactive`)
    if(!carshopinopen){
        menuShopinCar.classList.add(`inactive`)
    }
    menuMobile.classList.toggle(`inactive`);  

}
function toggleShopincar (){
 let desktopopen=DesktopMenu.classList.contains(`inactive`)
 let menuopen= menuMobile.classList.contains(`inactive`)
 if(!menuopen){
    menuMobile.classList.add(`inactive`)
 }else if(!desktopopen){
    DesktopMenu.classList.add(`inactive`)

 }
 menuShopinCar.classList.toggle(`inactive`)

}