const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carButtonIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const productDetailAside = document.querySelector('#product-detail');
const closeProductDetailIcon = document.querySelector('.product-detail-close');
const orderContent = document.querySelector('.my-order-content');
const order = document.querySelector('.order');
const productDetailsClose = document.querySelector('.product-detail-close');
let index = 0;

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

        closeProductDetail();
    }

carButtonIcon.addEventListener('click', toggleProductDetail);
    function toggleProductDetail(){
        const isMobileMenuOpen = mobileMenu.classList.contains('inactive');
        const isDesktopMenuOpen = desktopMenu.classList.contains('inactive');
        const isProductAsideOpen = productDetailAside.classList.contains('inactive');

        if(!isMobileMenuOpen){
            mobileMenu.classList.add('inactive');
        }else if(!isDesktopMenuOpen){
            desktopMenu.classList.add('inactive');
        }

        shoppingCart.classList.toggle('inactive');
        
        if(!isProductAsideOpen){
            productDetailAside.classList.add('inactive');
        }
        closeProductDetail();
    }

    /* Lista de productos */
    let productDetail = [];
    productDetail.push({
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120.00',
        name: 'Bike'
    })
    productDetail.push({
        image: 'https://www.sellcell.com/assets/images/home/sell-phone.png',
        price: '250.00',
        name: 'Phone'
    })    
    productDetail.push({
        image: 'https://static2.4gsm.com/eng_pl_WK-Design-Wireless-Bluetooth-Headphones-black-M8-black-79905_1.jpg',
        price: '20.00',
        name: 'Headphone'
    })
    productDetail.push({
        image: 'https://panamericana.vteximg.com.br/arquivos/ids/373973-414-317/camara-instantanea-square-sq1-azul-74101203400.jpg?v=637437445697130000',
        price: '80.00',
        name: 'Camera'
    })
    productDetail.push({
        image: 'https://http2.mlstatic.com/D_NQ_NP_997147-MLA49718399013_042022-V.jpg',
        price: '350.00',
        name: 'Laptop'
    })
    productDetail.push({
        image: 'https://www.venta-de.com.co/sh-img/u_10167312_monitor%2Bpc.jpg',
        price: '440.00',
        name: 'Computer'
    })
    productDetail.push({
        image: 'https://www.sony.com.co/image/d7b7a583061ec800dfa74bea7bc37941?fmt=pjpeg&wid=220&bgcolor=FFFFFF&bgc=FFFFFF',
        price: '40.00',
        name: 'wireless headphones'
    })


    function createProductCard(arr){
        for(product of arr){
            const productCard = document.createElement('div');
                productCard.classList.add('product-card');

            const imgCard = document.createElement('img')
                imgCard.setAttribute('src', product.image);
                
                imgCard.addEventListener('click', addActive);
                imgCard.addEventListener('click', openProductDetail);

                function addActive(){
                    productCard.setAttribute('id', 'activeCard');
                }

            
            const productInfo = document.createElement('div');
                productInfo.classList.add('product-info');
                
            const productInfoDiv = document.createElement('div');
                
            const productPrice = document.createElement('p');
                productPrice.innerText= '$' + product.price;
                productPrice.setAttribute('id', 'price');

            const productName= document.createElement('p');
                productName.innerText= product.name;
                productName.setAttribute('id', 'name');

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

    let getDataList = [];

    function getProductsDetail(){
        const productCardActive = document.querySelector('#activeCard');

        const productCardActiveImg = productCardActive.firstElementChild;
        const productCardActiveImgUrl = productCardActiveImg.getAttribute('src');
        getDataList.push(productCardActiveImgUrl);
        const oldImgCard = document.getElementById('product-detail-img');
        oldImgCard.setAttribute('src', productCardActiveImgUrl);

        const nextSiblingElement = productCardActiveImg.nextElementSibling;
        const productInfo = nextSiblingElement.querySelector('div');
        const nameProduct = productInfo.querySelector('#name').textContent;
        getDataList.push(nameProduct);
        const priceProduct = productInfo.querySelector('#price').textContent;
        getDataList.push(priceProduct);

        const getPrice = document.getElementById('product-price');
        const getName = document.getElementById('product-name');

        getPrice.innerText = priceProduct;
        getName.innerText = nameProduct;    
    }

    function openProductDetail(){
        shoppingCart.classList.add('inactive');
        productDetailAside.classList.remove('inactive');
        
        getProductsDetail();
    }
    closeProductDetailIcon.addEventListener('click',closeProductDetail);
        function closeProductDetail(){
            productDetailAside.classList.add('inactive');

            const activeCard = document.querySelector('#activeCard');

            activeCard.removeAttribute('id');
        }

        function createProductInfo(){
            const shoppingCart = document.createElement('div');
                shoppingCart.classList.add('shopping-cart');
            const shoppingFigure = document.createElement('figure');
            const shoppingFigureImg = document.createElement('img');
                shoppingFigureImg.setAttribute('src', getDataList[index]);
            const shoppingName = document.createElement('p');
                shoppingName.innerText= getDataList[index+1];
            const shoppingPrice = document.createElement('p');
                shoppingPrice.innerText= getDataList[index+2];
            const shoppingCloseImg =  document.createElement('img');
                shoppingCloseImg.setAttribute('src', "./assets/icons/icon_close.png")
                shoppingCloseImg.setAttribute('alt', "close")
            
            shoppingFigure.appendChild(shoppingFigureImg);
            shoppingCart.append(shoppingFigure,shoppingName,shoppingPrice,shoppingCloseImg);
            orderContent.insertBefore(shoppingCart,order);

        }

