"use strict";

let navEmail = document.querySelector('.navbar-email');
let deskMenu = document.querySelector('.desktop-menu');

let ShowNavEmail = () => {
  deskMenu.classList.toggle('inactive');
};

navEmail.addEventListener('click', ShowNavEmail);