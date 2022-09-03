/**
 * @author Mairon Andres Florez
 * @createdAt 1 de Septiembre de 2022
 */
const menuEmailIcon = document.querySelector('.navbar-email');
const menuMobileIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCarrito = document.querySelector('.product-detail');

menuEmailIcon.addEventListener('click', () => {
    if (asideCarrito.classList.contains('inactive'))
        desktopMenu.classList.toggle('inactive');
});

menuMobileIcon.addEventListener('click', () => {
    if (mobileMenu.classList.contains('inactive')) {
        asideCarrito.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
});

menuCarritoIcon.addEventListener('click', () => {
    if (asideCarrito.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    asideCarrito.classList.toggle('inactive');
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