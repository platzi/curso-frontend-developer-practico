const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);



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