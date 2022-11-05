const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const menucarritoicon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')


menuemail.addEventListener('click', toggledesktopmenu);
menuhamicon.addEventListener('click', togglemobilemenu);
menucarritoicon.addEventListener('click', togglecarritoaside);


function toggledesktopmenu(){
    const asideinactivo = aside.classList.contains('inactive');
    if (!asideinactivo){
        aside.classList.add('inactive');
    }
    desktopmenu.classList.toggle('inactive');
}


function togglemobilemenu(){
    const asideinactivo = aside.classList.contains('inactive');
    if (!asideinactivo){
        aside.classList.add('inactive');
    }

    mobilemenu.classList.toggle('inactive');
}



function togglecarritoaside(){
    const mobilemenuinactivo = mobilemenu.classList.contains('inactive');
    const desktopmenuinactivo = desktopmenu.classList.contains('inactive');

    if(!mobilemenuinactivo){
        mobilemenu.classList.add('inactive');
    }

    if(!desktopmenuinactivo){
        desktopmenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}