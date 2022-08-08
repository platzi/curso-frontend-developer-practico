const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carButtonIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
    function toggleDesktopMenu(){
        desktopMenu.classList.toggle('inactive');
    }

burgerMenuIcon.addEventListener('click', toggleMobileMenu);
    function toggleMobileMenu(){
        const isProductDetail = shoppingCart.classList.contains('inactive');

        if(!isProductDetail){
            shoppingCart.classList.add('inactive');
        }
        mobileMenu.classList.toggle('inactive');
    }

carButtonIcon.addEventListener('click', toggleProductDetail);
    function toggleProductDetail(){
        const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
        const isDesktopMenuOpen = desktopMenu.classList.contains('inactive');

        if(!isMobileMenuOpen){
            mobileMenu.classList.add('inactive');
        }else if(!isDesktopMenuOpen){
            desktopMenu.classList.add('inactive');
        }
        shoppingCart.classList.toggle('inactive');
    }

    /* Lista de productos */
    let productDetail = [];
    productDetail.push({
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: 120.00,
        name: 'Bike'
    })
    productDetail.push({
        image: 'https://www.sellcell.com/assets/images/home/sell-phone.png',
        price: 250.00,
        name: 'Phone'
    })    
    productDetail.push({
        image: 'https://static2.4gsm.com/eng_pl_WK-Design-Wireless-Bluetooth-Headphones-black-M8-black-79905_1.jpg',
        price: 20.00,
        name: 'Headphone'
    })
    productDetail.push({
        image: 'https://panamericana.vteximg.com.br/arquivos/ids/373973-414-317/camara-instantanea-square-sq1-azul-74101203400.jpg?v=637437445697130000',
        price: 80.00,
        name: 'Camera'
    })
    productDetail.push({
        image: 'https://http2.mlstatic.com/D_NQ_NP_997147-MLA49718399013_042022-V.jpg',
        price: 350.00,
        name: 'Laptop'
    })
    productDetail.push({
        image: 'https://www.venta-de.com.co/sh-img/u_10167312_monitor%2Bpc.jpg',
        price: 440.00,
        name: 'Computer'
    })

    function createProductCard(arr){
        for(product of arr){
            const productCard = document.createElement('div');
                productCard.classList.add('product-card');

            const imgCard = document.createElement('img')
                imgCard.setAttribute('src', product.image);
            
            const productInfo = document.createElement('div');
                productInfo.classList.add('product-info');
                
            const productInfoDiv = document.createElement('div');
                
            const productPrice = document.createElement('p');
                productPrice.innerText= '$' + product.price;

            const productName= document.createElement('p');
                productName.innerText= product.name;

            const productFigureLogo = document.createElement('figure')

            const productImgLogo = document.createElement('img')
                productImgLogo.setAttribute('src', './assets/icons/bt_add_to_cart.svg');

            productFigureLogo.appendChild(productImgLogo);
            productInfoDiv.append(productPrice,productName);
            productInfo.append(productInfoDiv,productFigureLogo);
            productCard.append(imgCard,productInfo);
            cardsContainer.appendChild(productCard);
        }
    }

    createProductCard(productDetail);