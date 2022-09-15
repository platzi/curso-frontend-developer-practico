const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menumobile= document.querySelector('.menu');
const showmenumobile = document.querySelector('.mobile-menu');
const navEmailMenu = document.querySelector('.email');
const carproduct = document.querySelector('.product-detail')
const logocarproduct = document.querySelector('.navbar-shopping-cart')
const cardscontainer = document.querySelector('.cards-container')
// abrir opciones con el correo desde el menu
navEmailMenu.addEventListener('click', toggleDesktopMenu);
//abrir opciones desde el correo desde afuera
navEmail.addEventListener('click',toggleDesktopMenu);
// abrir las opcioens del menu
menumobile.addEventListener('click',toogleshowmenumobile);

//mostrar las compras desde el icono de carrito
logocarproduct.addEventListener('click',toogleshowcarproduct)
function toggleDesktopMenu(){
 desktopMenu.classList.toggle('inactive');
 carproduct.classList.add('inactive');
}
function toogleshowmenumobile(){
showmenumobile.classList.toggle('inactive');
if (carproduct.classList.contains('inactive')!=true){
carproduct.classList.toggle('inactive');
}
}
function toogleshowcarproduct(){
carproduct.classList.toggle('inactive');
desktopMenu.classList.add('inactive');
 if(showmenumobile.classList.contains('inactive')!=true){
    showmenumobile.classList.toggle('inactive');
 }
}

let productoslista= [];

productoslista.push({
    Nombre: 'Castlevania',
    Precio: 120.00,
    image: 'https://i.ytimg.com/vi/lNOf8olSqPo/maxresdefault.jpg'
})
productoslista.push({
    Nombre: 'Castlevania 2',
    Precio: 160.00,
    image: 'https://i.ytimg.com/vi/lNOf8olSqPo/maxresdefault.jpg'
})
productoslista.push({
    Nombre: 'Castlevania 3',
    Precio: 140.00,
    image: 'https://i.ytimg.com/vi/lNOf8olSqPo/maxresdefault.jpg'
})
productoslista.push({
    Nombre: 'Castlevania 4',
    Precio: 130.00,
    image: 'https://i.ytimg.com/vi/lNOf8olSqPo/maxresdefault.jpg'
})

/*<!--   <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="">
<div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
</div>
</div>--> */
function productosrender(productoslista){
    for (producto of productoslista){
       const productocaro = document.createElement('div');
       productocaro.classList.add('product-card');
       const img =document.createElement('img');
       img.setAttribute('src', producto.image)
       const productoinfo= document.createElement('div');
       productocaro.classList.add('product-info');
       const vacioparrafo  = document.createElement('div');
       const nombre = document.createElement('p')
       nombre.innerText='$' + producto.Precio;
       const precio = document.createElement('p')
       precio.innerText = producto.Nombre;
       const figure = document.createElement('figure');
       const imagefigure = document.createElement('img');
       imagefigure.setAttribute('src', './icons/bt_add_to_cart.svg');
       //agregar de forma ordenada
       
       figure.appendChild(imagefigure);
       vacioparrafo.appendChild(precio);
       vacioparrafo.appendChild(nombre);
       productoinfo.appendChild(figure);
       productoinfo.appendChild(vacioparrafo);
       productocaro.appendChild(img);
       productocaro.appendChild(productoinfo);
       cardscontainer.appendChild(productocaro);
       
 }
}
productosrender(productoslista);