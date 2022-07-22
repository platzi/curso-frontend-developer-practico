const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
console.log({desktopMenu});

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu()
{
    /*if (desktopMenu.classList.contains('inactive'))
    {
        console.log('se inactiva');
        desktopMenu.classList.remove('inactive');
        console.log({desktopMenu});
    }
    else
    {
        console.log('se activa');
        desktopMenu.classList.add('inactive');
        console.log({desktopMenu});
    }*/
    desktopMenu.classList.toggle('inactive');
}