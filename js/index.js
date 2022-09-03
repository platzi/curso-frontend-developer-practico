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

//... Eventos
productDetailContainerClose.addEventListener('click', () => inactivarContenedor(productDetailContainer));

menuEmailIcon.addEventListener('click', () => {
    if (asideCarrito.classList.contains('inactive')){
        toogleInactivar(desktopMenu);
        inactivarContenedor(productDetailContainer);
    }
});
menuMobileIcon.addEventListener('click', () => {
    if (mobileMenu.classList.contains('inactive')) {
        inactivarContenedor(asideCarrito);
        inactivarContenedor(productDetailContainer);
    }
    toogleInactivar(mobileMenu);
});
menuCarritoIcon.addEventListener('click', () => {
    if (asideCarrito.classList.contains('inactive')) {
        inactivarContenedor(mobileMenu);
        inactivarContenedor(desktopMenu);
        inactivarContenedor(productDetailContainer);
    }
    toogleInactivar(asideCarrito);
});

//Load data Dummy api for https://bobs-burgers-api-ui.herokuapp.com/
const GetLoadProducts = (fnPintar) => {
    fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=20&skip=234")
    .then(res => res.json()).then(data => {
        fnPintar(data);
    });
}

const pintarProductos = (datos) => {
    datos.forEach(element => {        
        let divRaiz = document.createElement('div');
        divRaiz.classList = 'product-card';
        
        let imagen = document.createElement('img');
        imagen.setAttribute('src', element.image);
        imagen.addEventListener('click', () => {
            productDetailContainer.classList.remove('inactive');
        });

        let divInfo = document.createElement('div');
        divInfo.classList ='product-info';
    
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