const navEmail = document.querySelector (".navbar-email");
const menuEmail= document.querySelector (".desktop-menu");

console.log(menuEmail);

navEmail.addEventListener("click", () => {
    menuEmail.classList.toggle("inactive");
});

