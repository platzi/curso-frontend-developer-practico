const menuBurgerIcon = document.querySelector('.menu');
const menuUserIcon = document.querySelector('.navbar-email');
const asideShopIcon = document.querySelector('.navbar-shopping-cart');

const userMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.mobile-menu');
const shopAside = document.querySelector('.product-detail');

menuBurgerIcon.addEventListener('click', toggleBurgerMenu);
menuUserIcon.addEventListener('click', toggleUserMenu);
asideShopIcon.addEventListener('click', toggleShopAside);

function toggleBurgerMenu(event) {
    event.preventDefault();
    if (burgerMenu.style.display === 'none') {
        burgerMenu.style.display = 'flex';
    } else {
        burgerMenu.style.display = 'none';
}};
function toggleUserMenu(event) {
    event.preventDefault();
    if (userMenu.style.display === 'none') {
        userMenu.style.display = 'flex';
    } else {
        userMenu.style.display = 'none';
}};
function toggleShopAside(event) {
    event.preventDefault();
    if (shopAside.style.display === 'none') {
        shopAside.style.display = 'flex';
    } else {
        shopAside.style.display = 'none';
    }};







/*const title = document.querySelector('.title');
title.addEventListener('click', changingText);

function changingText(event) {
    event.preventDefault();
  if (title.innerHTML === 'My orders') {
    title.innerText = "Hola";
} else {
    title.innerText = "My orders";	
}};*/