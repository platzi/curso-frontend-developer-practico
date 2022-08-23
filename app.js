
const divParteDerechaMenu    = document.querySelector('.navbar-email'),
      menuDesplegableDesktop = document.querySelector('.desktop-menu'),
      btnMenu                = document.querySelector('.menu'),
      menuDesplegableMovile  = document.querySelector('.mobile-menu'),
      detallesCarrito        = document.querySelector('.product-detail'),
      btnCarrito             = document.querySelector('.iconoCarrito'),
      contenedorCartas       = document.querySelector('.cards-container'),
      detallesProducto       = document.querySelector('#detallesProductos'),
      divDetallesProducto    = document.querySelector('#detallesProductos'),
      btnSalirDetalles       = document.querySelector('.product-detail-close')





const desplegarMenuDesktop = () => {
    menuDesplegableDesktop.classList.toggle('inactive');
}
const desplegarMenuMovile = () => {
    const isMovileMenuClosed      = menuDesplegableMovile.classList.contains('inactive');
    const isDetallesCarritoClosed = detallesCarrito.classList.contains('inactive');
    const isDetallesProductoClose = divDetallesProducto.classList.contains('inactive');
    
    if (!isDetallesCarritoClosed && isMovileMenuClosed) {
        detallesCarrito.classList.toggle('inactive');
        menuDesplegableMovile.classList.toggle('inactive');
    } else {
        menuDesplegableMovile.classList.toggle('inactive');
    }
    if (!isDetallesProductoClose) {
        divDetallesProducto.classList.add('inactive');
    }
}
const desplegarDetallesCarrito = () => {
    const isMovileMenuClosed      = menuDesplegableMovile.classList.contains('inactive');
    const isDetallesCarritoClosed = detallesCarrito.classList.contains('inactive');
    const isDetallesproductoClosed = divDetallesProducto.classList.contains('inactive');

    if (isDetallesCarritoClosed && !isMovileMenuClosed) {
        detallesCarrito.classList.toggle('inactive');
        menuDesplegableMovile.classList.toggle('inactive');
    } else {
        detallesCarrito.classList.toggle('inactive');
    }

    if (!isDetallesproductoClosed) {
        divDetallesProducto.classList.toggle('inactive');
    }
    
}

const openProductDetailsAside = () => {
    const isMovileMenuClosed      = menuDesplegableMovile.classList.contains('inactive');
    const isDetallesCarritoClosed = detallesCarrito.classList.contains('inactive');
    const isDetallesproductoClosed = divDetallesProducto.classList.contains('inactive');

    if (!isMovileMenuClosed || !isDetallesCarritoClosed) {
        menuDesplegableMovile.classList.toggle('inactive');
        divDetallesProducto.classList.remove('inactive');
        detallesCarrito.classList.toggle('inactive');
    }else {
        divDetallesProducto.classList.remove('inactive');
    }
}

const closeProductDetailsAside = () => {
    const isDetallesCarritoClosed = detallesCarrito.classList.contains('inactive');
    const isDetallesProductoClose = divDetallesProducto.classList.contains('inactive'); 
    if (!isDetallesCarritoClosed && !isDetallesProductoClose) {
        divDetallesProducto.classList.toggle('inactive');
        detallesCarrito.classList.toggle('inactive');
    }else {

        divDetallesProducto.classList.add('inactive');
    }
}


const productList = [];
productList.push({
    nombre: 'bike',
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    nombre: 'Ordenador de sobremesa',
    precio: 1200,
    imagen: "https://www.que.es/wp-content/uploads/2020/12/Que-es-y-como-funciona-un-ordenador-2.jpg",
});
productList.push({
    nombre: 'Perifericos',
    precio: 100,
    imagen: "https://www.enriquedans.com/wp-content/uploads/2017/03/Samsung-Dex.jpg",
});





const insertadorProductos = (arr) => {
    for(product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click', openProductDetailsAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `${product.precio} €`;

        const productName = document.createElement('p');
        productName.innerText = product.nombre;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        contenedorCartas.appendChild(productCard);

        // const divCarta     = document.createElement('div');
        // divCarta.classList.add('product-card');
        // let htmlCards = `
        //     <img src="${product.imagen}" alt="">
        //     <div class="product-info">
        //     <div>
        //         <p>${product.precio}</p>
        //         <p>${product.nombre}</p>
        //     </div>
        //     <figure>
        //         <img src="./icons/bt_add_to_cart.svg" alt="">
        //     </figure>
        //     </div>
        // `;
        // divCarta.innerHTML = htmlCards;
        // contenedorCartas.appendChild(divCarta);
    }
    console.log()
}
insertadorProductos(productList);


btnSalirDetalles.addEventListener('click', closeProductDetailsAside);
divParteDerechaMenu.addEventListener('click', desplegarMenuDesktop);
btnMenu.addEventListener('click', desplegarMenuMovile);
btnCarrito.addEventListener('click', desplegarDetallesCarrito);