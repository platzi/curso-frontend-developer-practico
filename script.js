const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');


menuemail.addEventListener('click', toggledesktopmenu);
menuhamicon.addEventListener('click', togglemobilemenu);


function toggledesktopmenu(){
    desktopmenu.classList.toggle('inactive');
}
function togglemobilemenu(){
    mobilemenu.classList.toggle('inactive');
}