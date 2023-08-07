const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIconMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('.product-detail-secondary')
const productDetailClose = document.querySelector('.product-detail-secondary-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
carritoIconMenu.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetailAsideSecondary);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    aside.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    aside.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAsideSecondary() {
    productDetailContainer.classList.remove('inactive')
    mobileMenu.classList.add('inactive')
    aside.classList.add('inactive')
    desktopMenu.classList.add('inactive');
}

function closeProductDetailAsideSecondary() {
    productDetailContainer.classList.add('inactive');
}

//const opcionDeProducto;

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike star',
    price: 876,
    image: 'https://img.freepik.com/foto-gratis/bicicleta-pequena-negra-vintage-al-aire-libre_23-2148907965.jpg?w=996&t=st=1691357766~exp=1691358366~hmac=1587d7e7ac1027206438d8b483eca91b2a5fe58b6ca5ad59bc50a1f7591acb53'
});
productList.push({
    name: 'Bike helmet',
    price: 1500,
    image: 'https://img.freepik.com/foto-gratis/bicicleta-al-aire-libre-calle_23-2148889086.jpg?w=740&t=st=1691357816~exp=1691358416~hmac=bd61b2cee442e4f8c6b8d3a291a7b234b5f1881a76161df31f60841d1bd5cd42'
});

/*creando html desde java 

const contendorProductos = document.querySelector('.cards-container')
        const productList = []
        let opcionDeProducto

        class product {
            constructor(name, price, image) {
                this.name = name
                this.price = price
                this.image = image
            }
        }

        let bikeUno = new product('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',)
        let bikeDos = new product('Bike star', 876, 'https://img.freepik.com/foto-gratis/bicicleta-pequena-negra-vintage-al-aire-libre_23-2148907965.jpg?w=996&t=st=1691357766~exp=1691358366~hmac=1587d7e7ac1027206438d8b483eca91b2a5fe58b6ca5ad59bc50a1f7591acb53')

        productList.push(bikeUno, bikeDos);


        productList.forEach((product) => {
        opcionDeProducto = `
        <div class="product-card">
            <img src=${product.image} alt=${product.name}>
            <div class="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>
        `
        contendorProductos.innerHTML += opcionDeProducto
        })
*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAsideSecondary);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.append(productCard);
    }
}

renderProducts(productList);
