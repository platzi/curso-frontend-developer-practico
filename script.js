
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',ToggleDesktopMenu);

menuHamIcon.addEventListener('click', ToggleMobileMenu);
menuCarritoIcon.addEventListener('click', ToggleCarritoAside);


function ToggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}


function ToggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    //se cierra cualquier menu abierto//
    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}


function ToggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
// cuando este abieerto que cierre las otras ventanas//
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productDetailContainer = document.querySelector('#productDetail');
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
}

const productDetailCloseIcon = document.querySelector('.product-detail-close');
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 600,
    image:'https://s3.abcstatics.com/media/favorito/2021/11/29/mejores-monitores-PC-oferta-U72777153102iNy-620x349@abc.jpg',
});
productList.push({
    name: 'Computador',
    price: 1000,
    image:'https://http2.mlstatic.com/D_NQ_NP_674644-MCO51292543691_082022-F.webp',
});
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 600,
    image:'https://s3.abcstatics.com/media/favorito/2021/11/29/mejores-monitores-PC-oferta-U72777153102iNy-620x349@abc.jpg',
});
productList.push({
    name: 'Computador',
    price: 1000,
    image:'https://http2.mlstatic.com/D_NQ_NP_674644-MCO51292543691_082022-F.webp',
});
productList.push({
    name: 'Pantalla',
    price: 600,
    image:'https://s3.abcstatics.com/media/favorito/2021/11/29/mejores-monitores-PC-oferta-U72777153102iNy-620x349@abc.jpg',
});
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
<div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
              <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>*/

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
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