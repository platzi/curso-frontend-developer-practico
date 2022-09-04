import {fetchData, container, API} from "./products.js";

let mail = document.getElementById('email');
let deskMenu = document.getElementById('menu-desktop');

let iconHamburguer = document.getElementById('hamburguer');
let mobileMenu = document.getElementById('menu-hamburguer');

let shoppingCard = document.getElementById('cart');
let detailProduct = document.querySelector('.shopping-details');

let descriptionProduct  = document.getElementById('description-product');
let imgProduct = document.getElementById('description-product-img');


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
        // let card = '';
        for (let i = 0; i < 70; i++) {
            // console.log(productos[i].title);
            // console.log(productos[i].price);
            // console.log(productos[i].images[1]);
            const productCard = document.createElement('DIV');
            productCard.classList.add('product-card');

            const imgCard = document.createElement('IMG');
            imgCard.setAttribute('src', productos[i].images[1]);

            const productInfo = document.createElement('DIV');
            productInfo.classList.add('product-info');

            productCard.append(imgCard,productInfo);

            const divText = document.createElement('DIV');
            productInfo.append(divText);

            const precio = document.createElement('P');
            precio.textContent = productos[i].price;
            // precio = productInfo.children[0].childNodes[0].textContent

            const nombre = document.createElement('P');
            nombre.textContent = productos[i].title;

            divText.append(precio,nombre);

            const figure = document.createElement('FIGURE');
            const icon = document.createElement('IMG');
            icon.setAttribute('src', './icons/bt_add_to_cart.svg');

            imgCard.addEventListener('click', e => {
                // console.log(e.target);
                // console.log(e.target.src);
                if(descriptionProduct.classList.contains('inactive')){
                    descriptionProduct.classList.toggle('inactive');
                    // console.log('colocar otra img');
                }

                window.addEventListener('scroll', () => {
                    if(window.scrollY > 60){
                        descriptionProduct.style.top = '0px';
                    }else{
                        descriptionProduct.style.top = '60px';
                    }
                });

                imgProduct.setAttribute('src',e.target.src);

                // console.log(productInfo.children[0].children[0].textContent);
                // console.log(descriptionProduct.children[2].children[0].textContent);
                descriptionProduct.children[2].children[0].textContent = productInfo.children[0].children[0].textContent
                descriptionProduct.children[2].children[1].textContent = productInfo.children[0].children[1].textContent
            });

            figure.append(icon);
            productInfo.append(figure);

            fragment.append(productCard);
        }
        container.append(fragment);
    })
    .catch(error => console.error(error))
    .finally(() => console.log('Finalizado'))