const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const productCardContainer = document.querySelector('.cards-container');
menuEmail.addEventListener('click',toggleDesktopMenu);
menuBurgerIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price:'120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Imagen de una bicicleta en plano horizontal'
});
productList.push({
    name: 'Bike',
    price:'120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Imagen de una bicicleta en plano horizontal'
});
productList.push({
    name: 'Bike',
    price:'120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Imagen de una bicicleta en plano horizontal'
});
//for(of) obtiene el objeto completo del array
//for(in) obtiene el indice del objeto en el array
function RenderProductList(arrList)
{
    for(product of arrList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.alt);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice,productName);

        const productFigure = document.createElement('figure');

        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productFigureImg.setAttribute('alt', 'carrito de compras con un signo de mas');
        //appendChild puedes agregar un solo nodo a la vez
        productFigure.appendChild(productFigureImg);

        productInfo.append(productInfoDiv,productFigure);
        //append puedes agregar varios nodos internos
        productCard.append(productImg, productInfo);
        productCardContainer.appendChild(productCard);
    }
}
RenderProductList(productList);