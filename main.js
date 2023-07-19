const menuEmail = document.querySelector('.navbar-email');
const emailMenu = document.querySelector('.desktop-menu');

const burgerMenuIcon = document.querySelector('.menu');
const burguerMenu = document.querySelector('.mobile-menu');

const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const asideCartMenu = document.querySelector('.product-detail');

// Funcion anonima y de flecha para llamar una funcion con la posibilidad de poder enviar
// argumentos para asi reutilizar la funcion y no crear una diferente para cada elemento
menuEmail.addEventListener('click', () => toggleElement(emailMenu));
burgerMenuIcon.addEventListener('click', () => toggleElement(burguerMenu));
cartMenuIcon.addEventListener('click', () => toggleElement(asideCartMenu));

function toggleElement(element) {
    element.classList.toggle('inactive');
    closeOtherMenus(element);
}

function closeOtherMenus(activeMenu) {
    // if menu doesnt has inactive class is bc it's open
    const isEmailMenuOpen = !emailMenu.classList.contains('inactive');
    const isBurguerMenuOpen = !burguerMenu.classList.contains('inactive');
    const isAsideCartMenuOpen = !asideCartMenu.classList.contains('inactive');

    if (activeMenu != emailMenu && isEmailMenuOpen) { emailMenu.classList.add('inactive') };
    if (activeMenu != burguerMenu && isBurguerMenuOpen) { burguerMenu.classList.add('inactive') };
    if (activeMenu != asideCartMenu && isAsideCartMenuOpen) { asideCartMenu.classList.add('inactive') };
}
