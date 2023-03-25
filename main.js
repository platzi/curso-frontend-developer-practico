let btnMail = document.querySelector('.navbar-email');
let menuEscritorio = document.querySelector('.desktop-menu')


btnMail.addEventListener('click', function(){
    menuEscritorio.classList.toggle('inactive')
    
})

let btnMenuCategoriasMobile = document.querySelector('#btn-menu-categorias-mobile');
let menuMobile = document.querySelector('.mobile-menu')

btnMenuCategoriasMobile.addEventListener('click', function(){
    menuMobile.classList.toggle('inactive')
    menuCarritodeCompras.classList.add('inactive')
})


let btnCarritodeCompras = document.querySelector('.navbar-shopping-cart');
let menuCarritodeCompras = document.querySelector('.product-detail');

btnCarritodeCompras.addEventListener('click', function(){
    menuCarritodeCompras.classList.toggle('inactive')
    menuMobile.classList.add('inactive')
})

const cardsContainer = document.querySelector('.cards-container')

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Heladera',
    price: 1220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});



function renderProductList(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
     
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');
     
         const productInfoDiv = document.createElement('div')
     
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p')
        productName.innerText = product.name;
     
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img')
     
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCard)
     
        productInfoDiv.append(productPrice, productName)
        productInfo.append(productInfoDiv, productInfoFigure)
     
        productCard.append(img, productInfo)
     
        cardsContainer.append(productCard)
     }
}

renderProductList(productList)