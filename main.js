const userMenuDesktop=document.querySelector('.desktop-menu');
const userEmail=document.querySelector('.navbar-email');
const burguerMenuIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

//userEmail.addEventListener('click',toggleUserMenu);
//burguerMenuIcon.addEventListener('click',toggleMobileMenu);

userEmail.addEventListener("click",function(){toggleMenu(userMenuDesktop)});
burguerMenuIcon.addEventListener("click", function(){toggleMenu(mobileMenu)});

function toggleMenu(elemento){
    
    elemento.classList.toggle("inactive");
}