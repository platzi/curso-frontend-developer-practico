const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');



const toggleDesktopMenu = () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
shoppingCartContainer.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

const toggleMobileMenu = () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
shoppingCartContainer.classList.add('inactive');
    }


    mobileMenu.classList.toggle('inactive');
}

const toggleCarritoAside = () => {
    const isMObileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMObileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
shoppingCartContainer.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computador',
    price: 300,
    image: 'https://media.istockphoto.com/id/1389603578/es/foto/pantalla-en-blanco-de-la-computadora-port%C3%A1til-en-la-mesa-de-madera-con-fondo-interior-de.webp?b=1&s=612x612&w=0&k=20&c=K9sl2RnwfW3SxznVJaMqe4Vinfg1cJJPJq1ya3Hzn48=',
});
productList.push({
    name: 'Celular',
    price: 280,
    image: 'https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928_640.jpg',
});
productList.push({
    name: 'huevo',
    price: 1000,
    image: 'https://cdn.pixabay.com/photo/2018/02/26/16/30/eggs-3183410_640.jpg',
});



const renderProducts = (arr) => {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name; 
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
        
    
    
    
    }
}
renderProducts(productList);