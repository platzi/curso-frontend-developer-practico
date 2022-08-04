const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const mobilicon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const menucarticon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuemail.addEventListener('click', toggledesktopmenu);
mobilicon.addEventListener('click', togglemobilemenu);
menucarticon.addEventListener('click', toggleshopingcart);


function toggledesktopmenu() {
    const isasideclose = aside.classList.contains('inactive');
    if (!isasideclose){
        aside.classList.add('inactive');
    }
    desktopmenu.classList.toggle('inactive');
}

function togglemobilemenu(){
    
    const isasideclose = aside.classList.contains('inactive');
    if (!isasideclose){
        aside.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
}

function toggleshopingcart(){

    const ismobilemenuclose = mobilemenu.classList.contains('inactive');
    const isdesktopmenuclose = desktopmenu.classList.contains('inactive');
    if (!ismobilemenuclose|| !isdesktopmenuclose){
        mobilemenu.classList.add('inactive');
        desktopmenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');

}
