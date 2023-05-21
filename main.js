const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

// toggleDestokMenu
menuEmail.addEventListener('click', () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    productDetailContainer.classList.add('inactive');

    // cerrar shoppingCartContainer si esta abiero
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
});

// toggleMobileMenu
menuHamIcon.addEventListener('click', () => {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    productDetailContainer.classList.add('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
});

// toggleCarritoAside
menuCarIcon.addEventListener('click', () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClose) {
       productDetailContainer.classList.add('inactive');
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
});

productDetailCloseIcon.addEventListener('click', function () {
    productDetailContainer.classList.add('inactive');
});

const productList = [
    {
        name: 'Bike',
        description: 'With ',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        name: 'Macbook Pro',
        description: 'With its practical',
        price: 400,
        image: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Computer Desktop',
        description: 'With its practical position, this',
        price: 450,
        image: 'https://images.pexels.com/photos/6804098/pexels-photo-6804098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Mouse Ergonimico',
        description: 'With its practical position, this bike ',
        price: 20,
        image: 'https://images.pexels.com/photos/5241055/pexels-photo-5241055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Ram hddr4 16gb',
        description: 'With its practical position, this bike also',
        price: 30,
        image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Laptop Hp',
        description: 'With its practical position, this bike also fulfills',
        price: 240,
        image: 'https://images.pexels.com/photos/11129922/pexels-photo-11129922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Control de play',
        description: 'With its practical position, this bike also fulfills a ',
        price: 30,
        image: 'https://images.pexels.com/photos/1371985/pexels-photo-1371985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Xbox',
        description: 'With its practical position, this bike also fulfills a decorative',
        price: 300,
        image: 'https://images.pexels.com/photos/10997582/pexels-photo-10997582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        name: 'Playstation 1',
        description: 'With its practical position, this bike also fulfills a decorative function, ',
        price: 250,
        image: 'https://images.pexels.com/photos/4219892/pexels-photo-4219892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
];

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price,image} ->product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('id', `${product.name}`)
        productImg.addEventListener('click', function () {

            // Cambiar productos por nombre
            changeProductInfo(this.getAttribute('id'), productList);

            // ocultar cartContainer 
            shoppingCartContainer.classList.add('inactive');

            // ocultar destokMenu
            desktopMenu.classList.add('inactive');
            
            // mostrar product detail
            productDetailContainer.classList.remove('inactive');
        });

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
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

function changeProductInfo(name, arr) {

    for (product of arr) {
        if (name != product.name) {
            continue;
        }else{
            const img = document.querySelector('#productDetail > img');
            img.setAttribute('src', product.image);
            
            const pPrice = document.querySelector('#productDetail .product-info p:nth-child(1)');
            const pName = document.querySelector('#productDetail .product-info p:nth-child(2)');
            const pDescription = document.querySelector('#productDetail .product-info p:nth-child(3)');
            pPrice.innerText = product.name;

            pName.innerText = '$' + product.price;

            pDescription.innerText = product.description;
        }
    }
}

function desestructuracion(arr) {
    for(const {name: nombre, description: descripcion, price: precio} of arr) {
        console.log(`${nombre}, 
        descripcion: ${descripcion}, 
        precio: ${precio}`);
    }
}