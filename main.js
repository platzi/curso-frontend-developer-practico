const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menuHamburguer');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click',toggleMobileMenu);

// Esta si la realicé como lo explicó el teacher, 
//Le puse el cursor en mobile pero me parece que no va.
function toggleMobileMenu(){
 mobileMenu.classList.toggle('inactive');    
}


function toggleDesktopMenu(){
    //Asi lo realizó el teacher.
    //desktopMenu.classList.toggle('inactive');
    let toggleClass = desktopMenu.getAttribute('class')
    //console.log(toggleClass)
    if (toggleClass === 'desktop-menu inactive') {
        desktopMenu.classList.remove('inactive');
    }

    if (toggleClass === 'desktop-menu') {
        desktopMenu.classList.add('inactive');
    }

    
}