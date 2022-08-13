const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuBar = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const menuCarritoItem = document.querySelector('.navbar-shopping-cart');
const DivproductDetail = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

    menuEmail.addEventListener('click', toggleDesktopMenu);
    menuBar.addEventListener('click', toggleMobileMenu);
    menuCarritoItem.addEventListener('click', toggleProductDetail);
    productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

        function toggleDesktopMenu(){

            const isProductDetailClosed = DivproductDetail.classList.contains('inactive');

            if (!isProductDetailClosed){
                DivproductDetail.classList.add('inactive');
            }
            
            desktopMenu.classList.toggle('inactive');
        }
  
        function toggleMobileMenu(){

            const isProductDetailClosed = DivproductDetail.classList.contains('inactive');

                if (!isProductDetailClosed){
                    DivproductDetail.classList.add('inactive');
                }

                mobileMenu.classList.toggle('inactive');
                closeProductDetailAside();
        }
    
        function toggleProductDetail(){

            const ismobileMenuClosed = mobileMenu.classList.contains('inactive');

                if (!ismobileMenuClosed){
                    mobileMenu.classList.add('inactive');
                }

        const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

            if (!isProductDetailClosed){
                productDetailContainer.classList.add('inactive');
            }

            DivproductDetail.classList.toggle('inactive');
           
        }

        function openProductDetailAside(){

            DivproductDetail.classList.add('inactive');
            productDetailContainer.classList.remove('inactive');
        }
        
        function closeProductDetailAside(){
            productDetailContainer.classList.add('inactive');
        }

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Screen',
    price: 200,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
})

productList.push({
    name: 'Xbox Controller',
    price: 50,
    image: 'https://images.pexels.com/photos/12718985/pexels-photo-12718985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})



function renderProducts(arr) {
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.src = product.image;
        imgProduct.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfodiv = document.createElement('div');
        const productInfoFigure = document.createElement('figure');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const cartIcon = document.createElement('img');
        cartIcon.src = './icons/bt_add_to_cart.svg';
    
        productInfoFigure.appendChild(cartIcon);
    
        productInfo.appendChild(productInfodiv);
        productInfo.appendChild(productInfoFigure);
    
        productInfodiv.appendChild(productName);
        productInfodiv.appendChild(productPrice);
    
    
        productCard.appendChild(imgProduct)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);