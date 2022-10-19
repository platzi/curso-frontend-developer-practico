const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

window.onload = () => {
    API();
}

function API(){
    const results = fetch("https://rickandmortyapi.com/api/character");

    results.then(response => response.json())
    .then(data => {
        console.log(data)
        const cardsContenedor = document.querySelector('.cards-container');
        for (let i = 0; i < data['results'].length; i++) {
            cardsContenedor.innerHTML+=`<div class="product-card">
            <img src="${data['results'][i].image}" alt="">
            <div class="product-info">
            <div>
                <p>${data['results'][i].name}</p>
                <p>${data['results'][i]['origin'].name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>
        </div>`;   
    }    
    });
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleShoppingCartContainer);

function toggleDesktopMenu(){
    if (shoppingCartContainer.classList.contains('inactive') && desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.toggle('inactive');
    }else{
        mobileMenu.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');
        desktopMenu.classList.toggle('inactive');
    }
}

function toggleMobileMenu(){
    if (shoppingCartContainer.classList.contains('inactive') && desktopMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }else{
        desktopMenu.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');
        mobileMenu.classList.toggle('inactive');
    }
}

function toggleShoppingCartContainer(){
    if (mobileMenu.classList.contains('inactive') && desktopMenu.classList.contains('inactive')) {
        shoppingCartContainer.classList.toggle('inactive');
    }else{
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        shoppingCartContainer.classList.toggle('inactive');
    }
}


