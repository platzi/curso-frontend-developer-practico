//ADDEVENTLISTENER
email.addEventListener('click',()=>{
    closeMenu(cartMenu);
    showMenu(menuEmail);
});
iconMenu.addEventListener('click',()=>{
    closeMenu(cartMenu);
    showMenu(menuBurger);
});
cartIcon.addEventListener('click',()=>{
    closeMenu(menuBurger);
    closeMenu(menuEmail);
    showMenu(cartMenu);
});
asideClose.addEventListener('click', ()=>{
    showMenu(aside);
})