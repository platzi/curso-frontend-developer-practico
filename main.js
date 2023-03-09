const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')


navEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){

    const asideMenuClosed = aside.classList.contains('inactive');

    if(!asideMenuClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const asideMenuClosed = aside.classList.contains('inactive')
    
    if(!asideMenuClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){

    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!desktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}

const producList = [];
producList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

producList.push({
    name: 'Televisión',
    price: 120,
    image: 'https://www.lg.com/in/images/tvs/md07554883/gallery/55UQ7500PSF-D-3.jpg',
})

producList.push({
    name: 'Telefono',
    price: 120,
    image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-125834/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg',
})

producList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

producList.push({
    name: 'Televisión',
    price: 120,
    image: 'https://www.lg.com/in/images/tvs/md07554883/gallery/55UQ7500PSF-D-3.jpg',
})

producList.push({
    name: 'Telefono',
    price: 120,
    image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-125834/Apple-iPhone-14_FINAL_featured-image-packshot-review.jpg',
})

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
    
        productPrice.innerText = '$' + product.price;
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
    
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(producList);

