//Navbar - Menus 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
//iconos 
const menuMobileIcone = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
//product list - Product detail
const shoppingCartContainer = document.querySelector('#shoppingCartContaier');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail')




menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcone.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleShoppingCartContaier)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toggleDesktopMenu() 
{
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartContaier()
{
    productDetailContainer.classList.add('inactive')
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive')
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bicicleta Venzo Fx3 Stunt',
    price: 120,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBV0hPpTMVmsJ8eofbNN4PlnDzfpzFBc7Xxg&usqp=CAU"
});
productList.push({
    name: 'Samsung 27" S39C series 1000R',
    price: 240,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529220cv12d.jpg"
});
productList.push({
    name: 'Apple AirPods Pro 2nd Gen',
    price: 300,
    img: "https://www.epic.com.mt/wp-content/uploads/2023/03/AirPods_Pro_2nd-Gen-1.png"
});
productList.push({
    name: 'Mouse Gamer T-Dagger Imperial RGB',
    price: 60,
    img: "https://pcgamermedellin.com/wp-content/uploads/2023/11/mouse-gamer-t-dagger-imperial-1-1.jpg"
});
productList.push({
    name: 'Termo Inteligente Medidor De Temperatura',
    price: 15,
    img: "https://exitocol.vtexassets.com/arquivos/ids/12564297/termo-inteligente-medidor-de-temperatura.jpg?v=637865858209170000"
});


function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, img} -> product.img
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img)
        productImg.addEventListener('click', openProductDetailAside)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCard = document.createElement('img')
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardContainer.appendChild(productCard)
    
    }
}

renderProducts(productList);