const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isCarritoClosed = aside.classList.contains('inactive')

    if (!isCarritoClosed) {
        aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isCarritoClosed = aside.classList.contains('inactive')

    if (!isCarritoClosed) {
        aside.classList.add('inactive')
    }

    menuMobile.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        menuMobile.classList.add('inactive')
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}

//Arrray de objetos (Porductos de la tienda -> objetos)
const productList = [];
productList.push ({ //Se agrega un nuevo elemento con el metodo .push()
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push ({ //Se agrega un nuevo elemento con el metodo .push()
    name: 'Phone',
    price: 340,
    image: 'https://images.pexels.com/photos/1260239/pexels-photo-1260239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push ({ //Se agrega un nuevo elemento con el metodo .push()
    name: 'Laptop',
    price: 720,
    image: 'https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        
        //product = {name, price, image}
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        const productInfoDiv = document.createElement('div');
        
        productInfo.appendChild(productInfoDiv);
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productFigure = document.createElement('figure');
        
        productInfo.appendChild(productFigure);
        
        const iconCart = document.createElement('img');
        iconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(iconCart);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);