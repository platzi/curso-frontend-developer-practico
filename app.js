 const navEmail = document.querySelector('.navbar-email')
 const nav = document.querySelector('.inactive')

 navEmail.addEventListener('click', taggledesktopmenu);

 function taggledesktopmenu(){
    nav.classList.toggle('inactive')
 }