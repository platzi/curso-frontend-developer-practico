const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const card= document.querySelector('.cards-container')


menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurguer.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleCarrito);

function toggleDesktopMenu(){
    const asideclosed = aside.classList.contains("inactive");

    if(!asideclosed){

            aside.classList.add("inactive");

    }

    desktopMenu.classList.toggle("inactive");

}
function toggleMobileMenu(){
    const asideclosed = aside.classList.contains("inactive");

    if(!asideclosed){

            aside.classList.add("inactive");

    }

    mobileMenu.classList.toggle("inactive");

}
function toggleCarrito(){
    const menuMobileClosed = mobileMenu.classList.contains("inactive");

    if(!menuMobileClosed){

            mobileMenu.classList.add("inactive");

    }

    aside.classList.toggle("inactive");

}

const productList = [];

productList.push({
    name: 'Bici',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'PC Gamer',
    price: 1100,
    Image: 'https://http2.mlstatic.com/D_NQ_NP_625648-MCO45642364298_042021-O.jpg'
})

productList.push({
    name: 'Monitor',
    price: 300,
    Image: 'https://www.computerevolution.com.co/wp-content/uploads/Monitor-Gamer-Curvo-BENQ-34-EX3410R-VA-3840X2160-144HZ-1MS.jpg'
})


productList.push({
    name: 'Bici',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'PC Gamer',
    price: 1100,
    Image: 'https://http2.mlstatic.com/D_NQ_NP_625648-MCO45642364298_042021-O.jpg'
})

productList.push({
    name: 'Monitor',
    price: 300,
    Image: 'https://www.computerevolution.com.co/wp-content/uploads/Monitor-Gamer-Curvo-BENQ-34-EX3410R-VA-3840X2160-144HZ-1MS.jpg'
})




function renderProducts (arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const Image = document.createElement('img');
        Image.setAttribute('src', product.Image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice,productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);

        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(Image,productInfo);
        card.append(productCard);
    }
}

renderProducts(productList);
















