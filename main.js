const iconEmailMenu= document.querySelector('.navbar-email');   //Email donde haces click
const iconMenuMobil= document.querySelector('.menu');           //Logo donde haces click
const iconCarCompra= document.querySelector('.navbar-shopping-cart');

const Div= document.querySelector('.cards-container');

const MenuBoxd= document.querySelector('.desktop-menu');     //Box que aparece al hacer click a email
const MenuMobil= document.querySelector('.mobile-menu');
const CarBox= document.querySelector('#Carrito');

iconEmailMenu.addEventListener('click', AparecerMD);
iconMenuMobil.addEventListener('click', AparecerMM);
iconCarCompra.addEventListener('click', AparecerC);

function AparecerMD(){
    const isCarBox= CarBox.classList.contains('inactive');
    if(isCarBox==false){
        CarBox.classList.toggle('inactive');
    }
    MenuBoxd.classList.toggle('inactive'); 
}

function AparecerMM(){
    const isCarBox= CarBox.classList.contains('inactive');
    if(isCarBox==false){
        CarBox.classList.toggle('inactive');
    }
    MenuMobil.classList.toggle('inactive');
}

function AparecerC() {
    const isMenumobil= MenuMobil.classList.contains('inactive');
    const isMenuBoxd= MenuBoxd.classList.contains('inactive');

    if(isMenumobil==false){
        MenuMobil.classList.toggle('inactive');
    }

    if(isMenuBoxd==false){
        MenuBoxd.classList.toggle('inactive');
    }
    
    CarBox.classList.toggle('inactive');
}



/* Lista de productos */
const ListaProductos =[];

ListaProductos.push({
    Nombre: "Bicicleta",
    Precio: 520,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

ListaProductos.push({
    Nombre: "Pantalla",
    Precio: 220,
    img: "https://png.pngtree.com/png-clipart/20220108/ourmid/pngtree-tv-screen-material-png-image_4099551.png",
})

ListaProductos.push({
    Nombre: "Computadora",
    Precio: 2120,
    img: "https://cdnx.jumpseller.com/motics/image/26850045/resize/1800/1800?1662499886",
})

ListaProductos.push({
    Nombre: "Laptop",
    Precio: 1120,
    img: "https://www.lenovo.com/medias/lenovo-laptops-thinkbook-16-gen-4-intel-hero.png?context=bWFzdGVyfHJvb3R8MzQ1OTM2fGltYWdlL3BuZ3xoMjEvaGZkLzEzMjU1MTI1OTkxNDU0LnBuZ3xlMGJjMDAyZjIzYzczYmY0YTY3NTlmODcwMDJjZTBhMzg5M2VlMjFlNTNlZWJkZDMyNDA3MTdlNjc3NjhhZWY5",
})

ListaProductos.push({
    Nombre: "Bicicleta",
    Precio: 520,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

ListaProductos.push({
    Nombre: "Pantalla",
    Precio: 220,
    img: "https://png.pngtree.com/png-clipart/20220108/ourmid/pngtree-tv-screen-material-png-image_4099551.png",
})

ListaProductos.push({
    Nombre: "Computadora",
    Precio: 2120,
    img: "https://cdnx.jumpseller.com/motics/image/26850045/resize/1800/1800?1662499886",
})

ListaProductos.push({
    Nombre: "Laptop",
    Precio: 1120,
    img: "https://www.lenovo.com/medias/lenovo-laptops-thinkbook-16-gen-4-intel-hero.png?context=bWFzdGVyfHJvb3R8MzQ1OTM2fGltYWdlL3BuZ3xoMjEvaGZkLzEzMjU1MTI1OTkxNDU0LnBuZ3xlMGJjMDAyZjIzYzczYmY0YTY3NTlmODcwMDJjZTBhMzg5M2VlMjFlNTNlZWJkZDMyNDA3MTdlNjc3NjhhZWY5",
})


for (producto of ListaProductos){
    const V1=document.createElement('div');
    V1.classList.add('product-card');

    const imagen=document.createElement('img');
    imagen.setAttribute('src', producto.img);
    V1.append(imagen);

    const V2=document.createElement('div');
    V2.classList.add('product-info');

    const Vf=document.createElement('div');

    const P1=document.createElement('p');
    P1.innerText= '$' + producto.Precio + '.00';
    Vf.append(P1);
    const P2=document.createElement('p');
    P2.innerText= producto.Nombre;
    Vf.append(P2);
    V2.append(Vf);


    const Figura=document.createElement('figure');

    const Icono=document.createElement('img');
    Icono.setAttribute('src', "./icons/bt_add_to_cart.svg");
    Figura.append(Icono);
    V2.append(Figura);
    V1.append(V2);
    Div.append(V1);
}