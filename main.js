const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconoCarritoCompras = document.querySelector(".navbar-shopping-cart");
const asideShoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productCardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
iconoCarritoCompras.addEventListener('click', toggleAsideProductDetail);
//productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const IsAsideProductDetailClosed = asideShoppingCartContainer.classList.contains('inactive');
    const IsProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!IsAsideProductDetailClosed) {
        asideShoppingCartContainer.classList.add('inactive');
    }

    if (!IsProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const IsAsideProductDetailClosed = asideShoppingCartContainer.classList.contains('inactive');
    const IsProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!IsAsideProductDetailClosed) {
        asideShoppingCartContainer.classList.add('inactive');
    }

    if (!IsProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideProductDetail() {

    const IsmobileMenuClosed = mobileMenu.classList.contains('inactive');
    const IsDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const IsProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!IsDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!IsProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    if (!IsmobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    asideShoppingCartContainer.classList.toggle('inactive');
}

function renderProducts(arrayProducts) {
    for (const product of arrayProducts) {

        const productCart = document.createElement('div');
        productCart.classList.add("product-card");
        productCart.addEventListener('click', OpenProductDetailAside);

        const ProductImage = document.createElement('img');
        //ProductImage.src = product.image;
        ProductImage.setAttribute('src', product.image);
        ProductImage.addEventListener('click', OpenProductDetailAsideCorrect);

        const productInfo = document.createElement('div');
        productInfo.classList.add("product-info");
        productInfo.addEventListener('click', OpenProductDetailAsideCorrect);
        
        const divData = document.createElement('div');

        const ParrafoId = document.createElement('p');
        ParrafoId.innerHTML = product.id;
        ParrafoId.setAttribute("style", "display:none;")
        
        const ParrafoProductPrice = document.createElement('p');
        ParrafoProductPrice.innerHTML = '$' + product.price;

        const ParrafoProductoName = document.createElement('p');
        ParrafoProductoName.innerHTML = product.name;

        const ParrafoDescription = document.createElement('p');
        ParrafoDescription.innerHTML = product.description;
        ParrafoDescription.setAttribute("style", "display:none;")

        const productFigure = document.createElement('figure');

        const productAddCartImg = document.createElement('img');
        productAddCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productAddCartImg);
        divData.append(ParrafoId, ParrafoProductPrice, ParrafoProductoName, ParrafoDescription);
        productInfo.append(divData, productFigure);
        productCart.append(ProductImage, productInfo);

        productCardsContainer.appendChild(productCart);
    }
}

function renderProducts2(arrayProducts) {
    for (const product of arrayProducts) {
        const html = `<div class="product-card">
                        <img src=${product.image} alt="Imagen Producto">
                        <div class="product-info">
                            <div>
                                <p style="display: none;" data-id=${product.id}>${product.id}</p>
                                <p id="price">$${product.price}</p>
                                <p id="name">${product.name}</p>
                                <p style="display: none;">${product.description}</p>
                            </div>
                            <figure>
                                <img src="./icons/bt_add_to_cart.svg" alt="">
                            </figure>
                        </div>
                    </div>`;

        productCardsContainer.innerHTML += html;
    }
}

function OpenProductDetailAside() {

    const IsAsideProductDetailClosed = asideShoppingCartContainer.classList.contains('inactive');
    const IsDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!IsAsideProductDetailClosed) {
        asideShoppingCartContainer.classList.add('inactive');
    }

    if (!IsDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}

function OpenProductDetailAsideCorrect(event) {
    let image = null;
    let productInfo = null;
    let id = null;
    let price = null;
    let name = null;
    let description = null;

    if (event.target.className == "product-card") {
        image = event.target.querySelector('.img').getAttribute('src');
        productInfo = event.target.querySelector('.product-info');
        id = productInfo.querySelector('p:nth-child(1)').innerText;
        price = productInfo.querySelector('p:nth-child(2)').innerText;
        name = productInfo.querySelector('p:nth-child(3)').innerText;
        description = productInfo.querySelector('p:nth-child(4)').innerText;
    }

    if (event.target.tagName == "IMG") {
        image = event.target.getAttribute('src');
        productInfo = event.target.nextElementSibling;
        id = productInfo.querySelector('p:nth-child(1)').innerText;
        price = productInfo.querySelector('p:nth-child(2)').innerText;
        name = productInfo.querySelector('p:nth-child(3)').innerText;
        description = productInfo.querySelector('p:nth-child(4)').innerText;
    }

    if (event.target.tagName == "P") {        
        productInfo = event.target.parentElement.parentElement;
        image = productInfo.previousElementSibling.getAttribute('src');
        id = productInfo.querySelector('p:nth-child(1)').innerText;
        price = productInfo.querySelector('p:nth-child(2)').innerText;
        name = productInfo.querySelector('p:nth-child(3)').innerText;
        description = productInfo.querySelector('p:nth-child(4)').innerText;
    }

    if (event.target.className == "product-info" && event.target.tagName == "DIV") {
        image = event.target.previousElementSibling.getAttribute('src');
        productInfo = event.target;
        id = productInfo.querySelector('p:nth-child(1)').innerText;
        price = productInfo.querySelector('p:nth-child(2)').innerText;
        name = productInfo.querySelector('p:nth-child(3)').innerText;
        description = productInfo.querySelector('p:nth-child(4)').innerText;
    }

    if (event.target.className == "" && event.target.tagName == "DIV") {
        productInfo = event.target.parentElement;
        image = productInfo.previousElementSibling.getAttribute('src');
        id = productInfo.querySelector('p:nth-child(1)').innerText;
        price = productInfo.querySelector('p:nth-child(2)').innerText;
        name = productInfo.querySelector('p:nth-child(3)').innerText;
        description = productInfo.querySelector('p:nth-child(4)').innerText;
    }


    const productoClickeado = {
        image,
        productInfo,
        id,
        price,
        name,
        description
    }

    renderDetailProduct(productoClickeado);

    const IsAsideProductDetailClosed = asideShoppingCartContainer.classList.contains('inactive');
    const IsDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!IsAsideProductDetailClosed) {
        asideShoppingCartContainer.classList.add('inactive');
    }

    if (!IsDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    id: 1,
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: "Esta es una pequeña descripción del producto para prueba de la pagina web"
});

productList.push({
    id: 2,
    name: "Computer",
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: "Esta es una pequeña descripción del producto para prueba de la pagina web"
});

productList.push({
    id: 3,
    name: "Keyboard",
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: "Esta es una pequeña descripción del producto para prueba de la pagina web"
});

function renderDetailProduct(product) {
    const detailProductHtml = `<div class="product-detail-close">
                                    <img src="./icons/icon_close.png" alt="close">
                               </div>                            
                                <img src=${product.image}>
                                <div class="product-info" id=${product.id}>
                                    <p>${product.price}</p>
                                    <p>${product.price}</p>
                                    <p>${product.name}</p>
                                    <p>${product.description}</p>
                                    <button class="primary-button add-to-cart-button">
                                        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
                                        Add to cart
                                    </button>
                                </div>`;
    productDetailContainer.innerHTML = "";
    productDetailContainer.innerHTML = detailProductHtml;

    const productDetailCloseIcon = document.querySelector('.product-detail-close');
    productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
}

renderProducts(productList);