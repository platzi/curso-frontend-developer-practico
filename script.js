const navEmail = document.querySelector('.navbar-email');
const desktop = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', function (e) {
    desktop.classList.toggle("inactive");
    // if (desktop.classList.contains("inactive")) {
    //     desktop.classList.remove("inactive");
    // } else {
    //     desktop.classList.add("inactive");
    // }
});