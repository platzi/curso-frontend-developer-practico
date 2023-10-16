const navEmail = document.querySelector(".navbar-email");
const inactive = document.querySelector(".inactive");

navEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    inactive.classList.toggle('inactive');
}


