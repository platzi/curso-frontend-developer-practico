const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productDetailContainer = document.querySelector('#productDetail');
const productCardContainer = document.querySelector('.cards-container');
menuEmail.addEventListener('click',toggleDesktopMenu);
menuBurgerIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', CloseProductDetailAside);
function toggleDesktopMenu(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}


const productList = [];
productList.push({
    id: 'uno',
    name: 'Bike',
    price:'120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    alt: 'Imagen de una bicicleta en plano horizontal'
});
productList.push({
    id: 'dos',
    name: 'Computer',
    price:'300',
    image: 'https://i.linio.com/p/a67d3dd22a047cd654d48d877d7ec559-catalog.webp',
    alt: 'Laptop ultimo modelo'
});
productList.push({
    id: 'tres',
    name: 'Smartphone',
    price:'200',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSf6gkIWitiIXPIDod68wLEEdeV5A84Z0__rXWYC_9fXUt-kpcQuXuM_nLTpzm7YBmjiYNHTMWaZihEGyXC5YHzK4vRsyzr0zbM3G09-PHq&usqp=CAE',
    alt: 'Smartphone ultmo modelo'
});
function OpenProductDetailAside(event){
    const priceP = document.querySelector('.price');
    const nameP = document.querySelector('.name');
    const infoP = document.querySelector('.info');
    const imgProductDetail = document.querySelector('img[alt="imagenProductDetail"]');
    console.log(event);
    const productItem = productList.find(product => product.image == event.target.currentSrc);
    console.log(productItem);
    imgProductDetail.setAttribute('src',productItem.image);
    priceP.innerText = '$'+productItem.price;
    nameP.innerText = productItem.name;
    infoP.innerText = productItem.alt;
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

}
function CloseProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

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
        productImg.setAttribute('id', product.id);
        productImg.addEventListener('click', OpenProductDetailAside);
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
