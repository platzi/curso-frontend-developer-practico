const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContent = document.querySelector('#mainShoppingCartDiv');
let selectedItemValues = {};
let total = 0;
let cartObjects = [];

function toggleDesktopMenu(){
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const productDetailAsideOpen = !productDetailContainer.classList.contains('inactive');
    if (isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    if (productDetailAsideOpen){
        productDetailContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleShoppingCartContainer(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const productDetailAsideOpen = !productDetailContainer.classList.contains('inactive');
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    if (productDetailAsideOpen){
        productDetailContainer.classList.add('inactive');
    }
    addCartItem();
    document.getElementById('shopping-cart-total').innerHTML = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(total);;
    shoppingCartContainer.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const productDetailAsideOpen = !productDetailContainer.classList.contains('inactive');
    if (isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    };
    if (productDetailAsideOpen){
        productDetailContainer.classList.add('inactive');
    };
    mobileMenu.classList.toggle('inactive');
}
function renderProducts(){
    productList.forEach((product) =>{
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('mouseover', () =>{
            selectedItemValues=({
                name: product.name,
                image: product.image,
                description: product.description,
                price: product.price,
                id: product.id,
            });
        productImg.addEventListener('click', openProductDetailAside);
        });
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price);
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.addEventListener('mouseover', closeShoppingCartContainer);
        productImgCart.addEventListener('click',() =>{
            cartObjects.push({
                name: product.name,
                image: product.image,
                description: product.description,
                price: product.price,
                id: product.id,
            });
        });
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    });
}

function openProductDetailAside(){
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if (isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    };
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    };
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    };
    document.getElementById('product-detail-image').src = selectedItemValues.image;
    document.getElementById('product-detail-name').innerHTML = selectedItemValues.name;
    document.getElementById('product-detail-description').innerHTML = selectedItemValues.description;
    document.getElementById('product-detail-price').innerHTML = selectedItemValues.price;
    productDetailContainer.classList.remove('inactive');
};
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
};
function addCartItem(){
    let j=0
    cartObjects.forEach((product) =>{
        const itemFigure = document.createElement('figure');
        const itemImage = document.createElement('img');
        itemImage.setAttribute('src', product.image);
        itemImage.setAttribute('alt', product.name);
        itemFigure.setAttribute('id', product.id);

        itemFigure.appendChild(itemImage);
        shoppingCartContent.appendChild(itemFigure);

        const itemName = document.createElement('p');
        itemName.innerHTML = product.name;
        itemName.setAttribute('id', product.id);

        const itemPrice = document.createElement('p');
        itemPrice.innerHTML = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price);
        itemPrice.setAttribute('id', product.id);

        const itemCancelImg = document.createElement('img');
        itemCancelImg.setAttribute('src', './icons/icon_close.png');
        itemCancelImg.setAttribute('id', product.id);

        shoppingCartContent.appendChild(itemName);
        shoppingCartContent.appendChild(itemPrice);
        shoppingCartContent.appendChild(itemCancelImg); 
 
        total = total + product.price;
        cartObjects = [];
    });
};
function closeShoppingCartContainer(){
    shoppingCartContainer.classList.add('inactive');
};

navEmail.addEventListener('click', toggleDesktopMenu);
shoppingCart.addEventListener('click', toggleShoppingCartContainer);
menuHamburguer.addEventListener('click', toggleMobileMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

renderProducts(productList);




