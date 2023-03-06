// Select Objetc

const navEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');

const menumobileicon = document.querySelector('.menu');

const menumobile = document.querySelector('.mobile-menu');

const shopingcaricon = document.querySelector('.navbar-shopping-cart');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');

const cardContainer = document.querySelector('.cards-container');

const productDetailClose = document.querySelector('.product-detail-close')

///  Funtionals actions

navEmail.addEventListener('click', toggleDestokMenu);

menumobileicon.addEventListener('click', togglemobilMenu);

shopingcaricon.addEventListener('click', toggleshopingcar);


// Esta función alterna la clase 'inactive' al elemento "desktopMenu" el cual aparece o desaparece el menu.
function toggleDestokMenu() {

    const isasideshopingcarclosed = shoppingCartContainer.classList.contains('inactive');

    if (!isasideshopingcarclosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');

}

function togglemobilMenu() {
    const isasideshopingcarclosed = shoppingCartContainer.classList.contains('inactive');
    // ! este simbolo significa negacion  si isasideshopingcarclosed = false  entoces agrego la clase inactive.
    if (!isasideshopingcarclosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    menumobile.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleshopingcar() {
    const ismenumobileclosed = menumobile.classList.contains('inactive');

    // ! este simbolo significa  si ismenumobileclosed = false  entoces agrego la clase inactive.
    if (!ismenumobileclosed) {
        menumobile.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: '120$',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})


productList.push({
    name: 'Tv LG Signature 45"',
    price: '250$',
    image: 'https://www.worten.pt/i/74701c2f1242aa63505ffbde3c7d953d9bd8f28a.jpg',

})


productList.push({
    name: 'PS 4"',
    price: '290',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71jN27mYlhL._SL1500_.jpg',

})

/* HTML to create
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
*/


function renderProducts(arr) {
    for (product of arr) {

        // Create a Div Product-Card.
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');

        productImg.setAttribute('src', product.image);

        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');


        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;
        // agrego el price y el nombre a mi div productInfoDiv
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const productInfoFigureimg = document.createElement('img');
        productInfoFigureimg.setAttribute('src', './icons/bt_add_to_cart.svg');

        // agrego el IMG a mi  ProductInfoFigure
        productInfoFigure.appendChild(productInfoFigureimg);

        // Incerto en Product info el div y el Figure.
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);


        // en product card incertamos img

        productCard.appendChild(productImg);

        productCard.appendChild(productInfoDiv);

        cardContainer.appendChild(productCard);

    }


}



function openProductDetailAside() {

    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

productDetailClose.addEventListener('click', closeProductDetail)

function closeProductDetail() {

    productDetailContainer.classList.add('inactive');
}


renderProducts(productList);