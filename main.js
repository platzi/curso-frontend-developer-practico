const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
MenuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    if(!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive')
    }
}


function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    if(!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive')
    }
}


function toggleCarritoAside(){
    shoppingCartContainer.classList.toggle('inactive')
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive')
    }
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive')
    }
    if(!productDetailContainer.classList.contains('inactive')){
        productDetailContainer.classList.add('inactive')
    }
}


function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive')
    }
    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive')
    }
    if(!shoppingCartContainer.classList.contains('inactive')){
        shoppingCartContainer.classList.add('inactive')
    }
}


function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}



const productsList = []
productsList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'Pantalla',
    price: 450,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'Compu',
    price: 650,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'Nevera',
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'cocina',
    price: 250,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'Licuadora',
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'Lavadora',
    price: 400,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'Automovil',
    price: 7500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'vestido',
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'Moto',
    price: 1600,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'Casa',
    price: 20000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productsList.push({
    name: 'Lampara',
    price: 60,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})


  /*    <div class="product-card">
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
        </div> */



function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // product= {name, price, image} -> product.image
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productsList);