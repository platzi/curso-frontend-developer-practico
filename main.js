const navMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuproductos = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productoDetail');
//Icono para cerrar el detalle del producto
const productDetailIconClose = document.querySelector('#productoDetail');




navMail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoMenu);

productDetailIconClose.addEventListener('click', closeProductDetailAside);


function toogleDesktopMenu() {
    const isMenuProductosClosed = menuproductos.classList.contains('inactive');
    if (!isMenuProductosClosed) {
        menuproductos.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    const isMenuProductosClosed = menuproductos.classList.contains('inactive');

    if (!isMenuProductosClosed) {
        menuproductos.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toogleCarritoMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }

    menuproductos.classList.toggle('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
}


const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://th.bing.com/th/id/R.847688fda9ee495372d1af671acf7406?rik=dI3SwO2D221DOw&pid=ImgRaw&r=0?auto=compress&cs=tinysrgb&dpr=2&h=650&w=800"
});

productList.push({
    name: 'Pantalla',
    price: 200,
    image: "https://th.bing.com/th/id/R.847688fda9ee495372d1af671acf7406?rik=dI3SwO2D221DOw&pid=ImgRaw&r=0?auto=compress&cs=tinysrgb&dpr=2&h=650&w=800"
});


productList.push({
    name: 'Camisa',
    price: 30,
    image: "https://th.bing.com/th/id/R.847688fda9ee495372d1af671acf7406?rik=dI3SwO2D221DOw&pid=ImgRaw&r=0?auto=compress&cs=tinysrgb&dpr=2&h=650&w=800"
});

productList.push({
    name: 'Laptop',
    price: 1200,
    image: "https://th.bing.com/th/id/R.847688fda9ee495372d1af671acf7406?rik=dI3SwO2D221DOw&pid=ImgRaw&r=0?auto=compress&cs=tinysrgb&dpr=2&h=650&w=800"
});


/*
          <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
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

*/

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    //menuproductos.classList.toggle('inactive');

   // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   menuproductos.classList.add('inactive');
    /*if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }*/

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

function renderProductos() {
    for (producto of productList) {

        const productCard = document.createElement('div');
        productCard.classList.add("product-card");

        const img = document.createElement('img');
        img.setAttribute('src', producto.image);
        img.setAttribute('alt', '');
        img.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.price;
        const productName = document.createElement('p');
        productName.innerText = '$' + producto.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);


        const figure = document.createElement('figure');
        const imgFigure = document.createElement('img');

        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
        imgFigure.setAttribute('alt', '');

        figure.appendChild(imgFigure);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);

    }
}

renderProductos();