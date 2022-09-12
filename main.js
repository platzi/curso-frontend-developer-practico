import { fetchData, container, API } from "./products.js";
let shoppingCart = {};

let mail = document.getElementById('email');
let deskMenu = document.getElementById('menu-desktop');

let iconHamburguer = document.getElementById('hamburguer');
let mobileMenu = document.getElementById('menu-hamburguer');

let shoppingCard = document.getElementById('cart');
let detailProduct = document.querySelector('.shopping-details');
let arrowMenu = document.getElementById('arrow');
let orderContainer = document.getElementById('order');

let descriptionProduct = document.getElementById('description-product');
let imgProduct = document.getElementById('description-product-img');
let closeDetailProduct = document.getElementById('close');

function hamburguer(){
    iconHamburguer.classList.toggle('is-active');
    mobileMenu.classList.toggle('inactive');
}

function arrowClose(){
    detailProduct.classList.toggle('inactive');
}

function textEmail(){
    //si esta abierto el detalle de productos, mandarlo a cerrar para que no afecte la vista
    if (!detailProduct.classList.contains('inactive')) {
        detailProduct.classList.toggle('inactive');
    }
    // Si detalle de la card esta abierto, cerrarlo y abrir menu de email
    if(!closeDetailProduct.classList.contains('inactive')){
        descriptionProduct.classList.add('inactive');
    }

    deskMenu.classList.toggle('inactive');
}

function cardIconShopping(){
    //si esta abierto el menu de email, mandarlo a cerrar para que no afecte la vista del aside
    if (!deskMenu.classList.contains('inactive')) {
        deskMenu.classList.toggle('inactive');
    }
    // Si detalle del prodcuto esta activo, cerrarlo y abrir las compras realizadas
    if(!closeDetailProduct.classList.contains('inactive')){
        descriptionProduct.classList.add('inactive');
    }
    // si icono hamburguesa esta activo, cerrarlo y abrir las compras realizadas
    if(iconHamburguer.classList.contains('is-active')){
        iconHamburguer.classList.remove('is-active');
        mobileMenu.classList.toggle('inactive');
    }
    detailProduct.classList.toggle('inactive');
}

function btnClose(){
    // si el menu de email esta abierto cerrarlo y abrir el detalle de la card
    if (!deskMenu.classList.contains('inactive')) {
        deskMenu.classList.toggle('inactive');
    }
    // si las compras realizadas estan abiertas, cerrarlo y abrir detalle de la card
    if(!detailProduct.classList.contains('inactive')) {
        detailProduct.classList.toggle('inactive');
    }

    descriptionProduct.classList.toggle('inactive');
}

mail.addEventListener('click', textEmail);
arrowMenu.addEventListener('click', arrowClose);
iconHamburguer.addEventListener('click', hamburguer);
shoppingCard.addEventListener('click', cardIconShopping);
closeDetailProduct.addEventListener('click', btnClose);

// VER PRODUCTOS DE API
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(productos => {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 70; i++) {
            // console.log(productos[i].title);
            // console.log(productos[i].price);
            // console.log(productos[i].images[1]);
            const productCard = document.createElement('DIV');
            productCard.classList.add('product-card');
            productCard.setAttribute('id', productos[i].id);

            const imgCard = document.createElement('IMG'); //CREANDO ETIQUETA IMG
            imgCard.setAttribute('src', productos[i].images[0]); //AGREGANDO EL SOURCE

            const productInfo = document.createElement('DIV'); //CREANDO ETIQUETA DIV
            productInfo.classList.add('product-info'); //AGREGAR UNA CLASE AL DIV

            productCard.append(imgCard, productInfo); // INSERTANDO EN DIV PADRE LOS ELEMENTOS QUE LLEVARA DENTRO DE EL

            const divText = document.createElement('DIV');
            productInfo.append(divText);

            const precio = document.createElement('P');
            precio.textContent = productos[i].price; //AGREGANDO CONTENIDO DENTRO DE LA ETIQUETA

            const nombre = document.createElement('P');
            nombre.textContent = productos[i].title;  //AGREGANDO CONTENIDO DENTRO DE LA ETIQUETA

            divText.append(precio, nombre);

            const figure = document.createElement('FIGURE');
            const icon = document.createElement('IMG');
            icon.setAttribute('src', './icons/bt_add_to_cart.svg');
            icon.setAttribute('value', productos[i].id);

            // HACER CLICK EN UNA IMG DE CARDS
            imgCard.addEventListener('click', e => {

                if (descriptionProduct.classList.contains('inactive')) {
                    descriptionProduct.classList.toggle('inactive');
                }
                // SI EL ASIDE DE INFO DEL PRODUCTO LLEGA A CIERTA ALTURA
                // COLOCARLO EN TOP 0
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 60) {
                        descriptionProduct.style.top = '0px';
                    } else {
                        descriptionProduct.style.top = '60px';
                    }
                });

                // COPIAR IMG DE CARD EN ASIDE
                imgProduct.setAttribute('src', e.target.src);

                // COPIAR LOS ELEMENTOS DE UN CARD AL ASIDE
                descriptionProduct.children[2].children[0].textContent = productInfo.children[0].children[0].textContent;
                descriptionProduct.children[2].children[1].textContent = productInfo.children[0].children[1].textContent;
                descriptionProduct.children[2].children[2].textContent = productos[productCard.getAttribute('id')].description;
            });

            figure.append(icon);
            productInfo.append(figure);

            fragment.append(productCard);
            icon.addEventListener('click', e => {
                let id = e.target.getAttribute('value');
                let setCard = e.target.parentElement.parentElement.parentElement;
                addShopping(setCard,id);
            });
        }

        container.append(fragment); //AGREGANDO TODOS LOS CARDS DENTRO DE UN CONTENEDOR

    })
    .catch(error => console.error(error)) // EN CASO DE ALGUN ERROR
    .finally(() => console.log('Finalizado')) //AL FINALIZAR SIN IMPORTAR SI HAY O NO ERROR

function addShopping(data,id){
    const buy = {
        id: id,
        img: data.children[0].getAttribute('src'),
        price: data.children[1].children[0].children[0].textContent,
        title: data.children[1].children[0].children[1].textContent,
        quantity: 1,
    };

    //Si tiene el objeto un producto que ya se habia comprado, solo agregar una suma
    if(shoppingCart.hasOwnProperty(buy.id)){
        // console.log(shoppingCart[id].quantity);
        buy.quantity = shoppingCart[buy.id].quantity + 1;
    }

    // Copiando objeto dentro del id (indexado) con spreed operator
    shoppingCart[buy.id] = {...buy};
    showShopping(); //pintar compras en la orden
}

function showShopping(){
    // console.log(shoppingCart);
    // console.log(Object.values(shoppingCart));
    orderContainer.innerHTML = '';
    const fragmentoShopping = document.createDocumentFragment();
    Object.values(shoppingCart).forEach(producto => {

        const compra = document.createElement('DIV');
        compra.classList.add('shopping-cart');

        const figure = document.createElement('FIGURE');
        const imgShop = document.createElement('IMG');
        imgShop.setAttribute('src', producto.img );
        figure.appendChild(imgShop); //insertando dentro de figure

        const quantity = document.createElement('P');
        quantity.textContent = producto.quantity;

        const title = document.createElement('P');
        title.textContent = producto.title;

        const price = document.createElement('P');
        price.textContent = producto.price * producto.quantity;

        const close = document.createElement('IMG');
        close.setAttribute('src', './icons/icon_close.png');

        compra.append(figure,title,price,close); //insertarndo dentro del contenedor padre
        fragmentoShopping.append(compra);

        totalShopping();
    });
    // Insertar los productos para comprar antes del boton y total de la compra
    orderContainer.insertBefore(fragmentoShopping,orderContainer.children[0]);
}

function totalShopping(){
    const divTotal = document.createElement('DIV');
    const p = document.createElement('P');
    const subtitle = document.createElement('SPAN');
    subtitle.textContent = 'Total';
    p.appendChild(subtitle);

    const total = document.createElement('P');
    divTotal.append(p,total);

    // Para obtener la cantidad de elementos comprados por un solo producto
    // const countItems = Object.values(shoppingCart).reduce((acumulador,{quantity}) => acumulador+quantity,0);
    // console.log(countItems);

    // Para obtener el total de producos comprados
    const payment = Object.values(shoppingCart).reduce((acumulador,{quantity,price}) => acumulador+(quantity*price),0);
    // console.log(payment);
}