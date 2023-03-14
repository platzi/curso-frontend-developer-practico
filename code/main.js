const $ = (selector) => document.querySelector(selector);

const menuOpt = $(".desktop-menu");
const navRight = $(".navbar-email");

function toggleMenu(){
    !menuOpt.hasAttribute("hidden") ? menuOpt.setAttribute("hidden", "") : menuOpt.removeAttribute("hidden");
}

const clickOpt = navRight.addEventListener("click", toggleMenu);