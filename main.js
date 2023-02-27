const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    const ismobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    shoppingCartContainer.classList.toggle('inactive');
    
}

function openProductDetailAside () {
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside () { 
    productDetailContainer.classList.add('inactive')
} 

const productList = []
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Televisor',
    price: 220,
    image: 'https://images.pexels.com/photos/6316063/pexels-photo-6316063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Portatil',
    price: 620,
    image: 'https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Sofa',
    price: 580,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
})
productList.push({
    name: 'Lámpara',
    price: 40,
    image: 'https://images.unsplash.com/photo-1612736228052-80e7f381690c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80',
})
productList.push({
    name: 'Estéreo',
    price: 180,
    image: 'https://images.unsplash.com/photo-1612241143917-d05c85c43751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
});

function renderProducts (arr) {
    for (product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // product = {name, proce, image} --> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.append(productPrice, productName);
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.append(productInfoDiv, productInfoFigure);
        
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard); 
    }
}

renderProducts(productList);

