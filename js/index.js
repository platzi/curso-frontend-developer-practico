//... Selectores
const menuEmailIcon = document.querySelector('.navbar-email');
const menuMobileIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCarrito = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector(".view-product-detail");
const productDetailContainerClose = document.querySelector(".view-product-detail-close");
const productDetailAddToCart = document.querySelector(".add-to-cart-button");

//... Funciones helpers Genericos
const inactivarContenedor = (elemento) => elemento.classList.add('inactive');
const activarContenedor = (elemento) => elemento.classList.remove('inactive');
const toogleInactivar = (elemento) => elemento.classList.toggle('inactive');
const containsInactive = (elemento) => elemento.classList.contains('inactive');

//... Eventos
productDetailContainerClose.addEventListener('click', () => inactivarContenedor(productDetailContainer));

menuEmailIcon.addEventListener('click', () => {
    if (containsInactive(desktopMenu)) {
        inactivarContenedor(asideCarrito);
        inactivarContenedor(mobileMenu);
        inactivarContenedor(productDetailContainer);
    }
    toogleInactivar(desktopMenu);
});
menuMobileIcon.addEventListener('click', () => {
    if (containsInactive(mobileMenu)) {
        inactivarContenedor(asideCarrito);
        inactivarContenedor(desktopMenu);
        inactivarContenedor(productDetailContainer);
    }
    toogleInactivar(mobileMenu);
});
menuCarritoIcon.addEventListener('click', () => {
    if (containsInactive(asideCarrito)) {
        inactivarContenedor(mobileMenu);
        inactivarContenedor(desktopMenu);
        inactivarContenedor(productDetailContainer);
    }
    toogleInactivar(asideCarrito);
});

//Load data Dummy api for https://bobs-burgers-api-ui.herokuapp.com/
//https://bobsburgers-api.herokuapp.com/characters/?limit=20&skip=234
//https://rickandmortyapi.com/api/character
//https://rickandmortyapi.com/documentation/#rest
const GetLoadProducts = (fnPintar) => {
    fetch("https://rickandmortyapi.com/api/character")
        .then(res => res.json()).then(data => {
            fnPintar(data.results);
        });
}

const openDetailContainer = (id, urlDetalle) => {
    activarContenedor(productDetailContainer);
    let imagen = document.querySelector('#valorDetailImagen');
    let precio = document.querySelector('#valorDetailPrecio');
    let nombre = document.querySelector('#valorDetailNombre');
    let descripcion = document.querySelector('#valorDetailDescripcion');

    fetch(urlDetalle)
        .then(res => res.json())
        .then(data => {
            imagen.setAttribute('src', data.image);
            precio.innerHTML = 'Id: ' + id + ', ' + data.species + ' - ' + data.gender;
            nombre.innerHTML = data.name;
            descripcion.innerHTML = 'Status: ' + data.status + ', Origin: ' + data.origin.name + ', location: ' + data.location.name;
        });
};

const pintarProductos = (datos) => {
    console.log(datos);

    datos.forEach(element => {
        let divRaiz = document.createElement('div');
        divRaiz.classList = 'product-card';

        let imagen = document.createElement('img');
        imagen.setAttribute('src', element.image);
        imagen.addEventListener('click', (event) => {
            event.preventDefault();
            openDetailContainer(element.id, element.url);
        });

        let divInfo = document.createElement('div');
        divInfo.classList = 'product-info';

        let divNombre = document.createElement('div');
        divNombre.innerHTML = `<p>${element.id}</p><p>${element.name}</p>`

        let fig = document.createElement('figure');
        let img = document.createElement('img');
        img.setAttribute('src', './icons/bt_add_to_cart.svg');
        fig.appendChild(img);
        divInfo.appendChild(divNombre);
        divInfo.appendChild(fig);
        divRaiz.appendChild(imagen);
        divRaiz.appendChild(divInfo);
        document.querySelector('.cards-container').appendChild(divRaiz);
    });
};

GetLoadProducts(pintarProductos);

//... Deshabilitar scroll
function inhabilitarScroll() {
    window.onscroll=function(){
        window.scrollTo(window.scrollX, window.scrollY);
    };
}

//... Habilitar scroll
function habilitarScroll() {
    window.onscroll=function(){        
    };
}