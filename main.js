// cada que le damos click al email debe aparecer el menu.
const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
    // vamos a crear el query del menu hamburguesa pra mobile
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
    // vamos a crear el query del menu carrito que le undamos en el carrito y veamos tammbien el product detail
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


// cada que le demos click se hara la funcion 


menuMail.addEventListener('click', toggleDEsktopMenu);

// evenlistener del menuHamIcon

menuHamIcon.addEventListener('click', toggleMobileMenu);

// evenlistener del navbar

menuCarritoIcon.addEventListener('click', toogleCarritoAside);


function toggleDEsktopMenu() {
    // * lo que vamos  a hacer es colocarle o quitarle la clase inactive si ya la tiene o no
    const isAsideClosed = aside.classList.contains('inactive');

    // **miramos si el menu aside esta abierto entonces lo cerramos
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    // lo que vamos  a hacer es colocarle o quitarle la clase inactive si ya la tiene o no
    const isAsideClosed = aside.classList.contains('inactive');

    // **miramos si el menu aside esta abierto entonces lo cerramos
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside() {
    // * lo que vamos  a hacer es colocarle o quitarle la clase inactive si ya la tiene o no
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    // vamos  a hacer que si se abre el carrito aside no se vea el mobile menu, si esta inactivo no hace nada, si esta activo
    // **miramos si el menu mobile esta abierto entonces lo cerramos
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    //** aca simplemente hacemos que cada que le de click se  muestre o cierre */
    aside.classList.toggle('inactive');
}

const productList = []
    // agrego elementos, un objeto 
productList.push({
    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: 'PC',
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// ahora lo insertamos en el html
// recorremos el array con el for pero lo volvemos funcion para volverlo a usar cuando queramos , incluso se podria hacer si damos click en algo etc
function renderProducts(arr) {
    for (product of arr) {
        // Este es el modelo del html   
        // <!-- <div class="product-card">
        //     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        //     <div class="product-info">
        //         <div>
        //             <p>$120,00</p>
        //             <p>Bike</p>
        //         </div>
        //         <figure>
        //             <img src="./icons/bt_add_to_cart.svg" alt="">
        //         </figure>
        //     </div>
        // </div> -->

        //  * vamos a crear el elemento en el html como lo que esta comentado
        const productCard = document.createElement('div');
        // le damos la clase
        productCard.classList.add('product-card');
        // agregamos la imagen
        const productImg = document.createElement('img');
        // a la imagen no tenemos que agregarle la clase si no el src que es la propiedad image del objeto
        productImg.setAttribute('src', product.image);
        // y seguimos creando el html
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgcart = document.createElement('img');
        //en este caso siempre es la imagen del carrituu por eso se pone un link
        productImgcart.setAttribute('src', './icons/bt_add_to_cart.svg');
        // metemos en el productInfoFigure la imagen
        productInfoFigure.appendChild(productImgcart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);