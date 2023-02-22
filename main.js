// Select Objetc

const navEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');

const menumobileicon = document.querySelector('.menu');

const menumobile = document.querySelector('.mobile-menu');

const shopingcaricon = document.querySelector('.navbar-shopping-cart');

const asideproductdetail = document.querySelector('.product-detail')

///  Funtionals actions

navEmail.addEventListener('click', toggleDestokMenu);

menumobileicon.addEventListener('click', togglemobilMenu);

shopingcaricon.addEventListener('click', toggleshopingcar);


// Esta función alterna la clase 'inactive' al elemento "desktopMenu" el cual aparece o desaparece el menu.
function toggleDestokMenu() {

    const isasideshopingcarclosed = asideproductdetail.classList.contains('inactive');

    if (!isasideshopingcarclosed) {
        asideproductdetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}

function togglemobilMenu() {
    const isasideshopingcarclosed = asideproductdetail.classList.contains('inactive');
    // ! este simbolo significa negacion  si isasideshopingcarclosed = false  entoces agrego la clase inactive.
    if (!isasideshopingcarclosed) {
        asideproductdetail.classList.add('inactive');
    }
    menumobile.classList.toggle('inactive');
}

function toggleshopingcar() {
    const ismenumobileclosed = menumobile.classList.contains('inactive');

    // ! este simbolo significa  si ismenumobileclosed = false  entoces agrego la clase inactive.
    if (!ismenumobileclosed) {
        menumobile.classList.add('inactive');
    }

    asideproductdetail.classList.toggle('inactive');
}