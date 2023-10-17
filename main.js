//desktop-menu
const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
email.addEventListener('click', function () {
    console.log('clicked');

    //get the current display property
    var displaySetting = menu.style.display;
    if(displaySetting == 'block') {
        //menu is visible. hide it
        menu.style.display = 'none';
    } else {
        //menu is hidden. show it
        menu.style.display = 'block';
    }
});