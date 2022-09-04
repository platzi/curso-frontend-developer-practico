import {fetchData, container, API} from "./products.js";

let mail = document.getElementById('email');
let deskMenu = document.getElementById('menu-desktop');

let iconHamburguer = document.getElementById('hamburguer');
let mobileMenu = document.getElementById('menu-hamburguer');

let shoppingCard = document.getElementById('cart');
let detailProduct = document.querySelector('.shopping-details');


mail.addEventListener('click', () =>{
    //si esta abierto el detalle de productos, mandarlo a cerrar para que no afecte la vista
    if(!detailProduct.classList.contains('inactive')){
        detailProduct.classList.toggle('inactive');
    }

    deskMenu.classList.toggle('inactive');
});

iconHamburguer.addEventListener('click', () => {
    iconHamburguer.classList.toggle('is-active');
    mobileMenu.classList.toggle('inactive');
});

shoppingCard.addEventListener('click', () => {
    //si esta abierto el menu de email, mandarlo a cerrar para que no afecte la vista del aside
    if(!deskMenu.classList.contains('inactive')){
        deskMenu.classList.toggle('inactive');
    }

    detailProduct.classList.toggle('inactive');
});

// Funcion para ver productos de API
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(productos => {
        const fragment = document.createDocumentFragment();
        let card = '';
        for (let i = 0; i < 70; i++) {
            // console.log(productos[i].title);
            // console.log(productos[i].price);
            // console.log(productos[i].images[1]);
            card += `<div class="product-card">
            <img src="${productos[i].images[0]}" alt="">
                <div class="product-info">
                        <div>
                            <p>$ ${productos[i].price}</p>
                            <p>${productos[i].title}</p>
                        </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>`
        }
        fragment.append(card);
        container.innerHTML = fragment.textContent
    })
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizado'))