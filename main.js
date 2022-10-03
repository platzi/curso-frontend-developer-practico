const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhambicon = document.querySelector('.menu');
const menucarritoicon = document.querySelector('.navbar-shopping-cart');
const mobilemenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuemail.addEventListener('click', togglodesktopmenu);
menuhambicon.addEventListener('click', togglomobilemenu);
menucarritoicon.addEventListener('click', togglocarritoaside)

function togglodesktopmenu(){
    // add and delete property hidden
    desktopmenu.classList.toggle('inactive')
}

function togglomobilemenu(){
    // add and delete property hidden
    const isasideclosed = aside.classList.contains('inactive');

    if(!isasideclosed) {
        aside.classList.add('inactive')
    }
    mobilemenu.classList.toggle('inactive')
}

function togglocarritoaside(){
    const ismobilemenuclosed = mobilemenu.classList.contains('inactive');

    if (!ismobilemenuclosed) {
        mobilemenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
}
