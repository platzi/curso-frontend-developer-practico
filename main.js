"use strict";

let navEmail = document.querySelector('.navbar-email'),
  deskMenu = document.querySelector('.desktop-menu'),
  burgerMenu = document.querySelector('.menu'),
  mobMenu = document.querySelector('.mobile-menu');

let ShowDeskMenu = () => {
  deskMenu.classList.toggle('inactive');
};

navEmail.addEventListener('click', ShowDeskMenu);

let ShowMobMenu = () => {
  mobMenu.classList.toggle('hide-menu');
};

burgerMenu.addEventListener('click', ShowMobMenu);