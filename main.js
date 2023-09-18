const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppinCartContainer = document.querySelector('#shoppinCartContainer');
const productDeatailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {

    const isAsideClosed = shoppinCartContainer.classList.contains('inactive')
    if(!isAsideClosed){
        shoppinCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppinCartContainer.classList.contains('inactive')
    if(!isAsideClosed){
        shoppinCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isMenuDesktop = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDeatailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed | isMenuDesktop | isProductDetailClosed){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDeatailContainer.classList.add('inactive');
    }
    shoppinCartContainer.classList.toggle('inactive');
    //desktopMenu.classList.toggle('inactive');

}

function openProductDetailAside() {
    shoppinCartContainer.classList.add('inactive');
    productDeatailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDeatailContainer.classList.add('inactive');
}

const productList = []
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://i.pinimg.com/736x/89/5e/7e/895e7eb997dcb603710a6a898b8a5824--floral-print-dresses-flower-dresses.jpg'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://www.dhresource.com/0x0/f2/albu/g21/M01/26/29/rBVaqmITAi-AUTMoAADCUa-4Trc962.jpg'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://lindovestido.com/wp-content/uploads/2019/04/polp-nia-vestido-vestido-mujer-verano-vestido-casual-sin-mangas-de.jpg'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://i.pinimg.com/736x/8f/12/36/8f12364a4e233a889c9410633db1ebe0.jpg'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://img.bestdealplus.com/ae04/kf/H59f11202f2f4429bb0ee3d1bbc2bff0df.jpg'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://cf.shopee.com.mx/file/c51163cb1b60110d3b0084dc149f3dcc_tn'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpLn9goG90hK9aKeXK68yNVxgmzNMdALwZvPUR0bk3i9Mtq4JfhaL8w2BZ9oFZ1fBKJE&usqp=CAU'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://ae01.alicdn.com/kf/S39fa51e46b0043fdacf14006e7f0d6305.jpg_640x640Q90.jpg_.webp'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksnqWrlVXPA07Y3mTk0ZY5TYdLI4nrzQ9KQ&usqp=CAU'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxCReEP-z5IBEnXu0skYtxJ7QKroS3STH316r4VRQdJk4jlyJjFxzIAITbqYUqX3vSN4&usqp=CAU'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://ae01.alicdn.com/kf/S4ef4556d47734b519be994b2b983f19cj.jpg_640x640q90.jpg'
})
productList.push({
    name: 'Vestido',
    price: '120000',
    image: 'https://sc04.alicdn.com/kf/H50fa635b13f8460e93d01008ca934310M/200549682/H50fa635b13f8460e93d01008ca934310M.jpg'
})


function renderProductList(arr){
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        //product = {name, price, image}-->product.image
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);
        
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p')
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard);
    
    }
}

renderProductList(productList);