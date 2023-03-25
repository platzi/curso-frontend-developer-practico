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
    name: 'iPhone XS MAX 256GB',
    price: 450,
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/116/601/products/xs-max-gold1-f77df19bbfa2120ea116376872330226-640-0.png'
});

productList.push({
    name: 'iPhone 11 Pro 256GB',
    price: 650,
    image: 'https://celutronic.com/wp-content/uploads/2021/04/iphone-12-pro-max-7.jpg'
});

productList.push({
    name: 'iPhone 12 Pro Max',
    price: 820,
    image: 'https://celutronic.com/wp-content/uploads/2021/04/iphone-12-pro-max-7.jpg'
});
productList.push({
    name: 'iPhone 13 128GB',
    price: 1020,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh3iKtEmemxwzYMhonFg2WaeFxNokctq7tXdEOsxvvC9NDwA&usqp=CAc'
});

productList.push({
    name: 'iPhone 14 Pro Max 512GB',
    price: 1320,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh3iKtEmemxwzYMhonFg2WaeFxNokctq7tXdEOsxvvC9NDwA&usqp=CAc'
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