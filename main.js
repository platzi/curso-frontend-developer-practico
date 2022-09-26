const menuEmail = document.querySelector('.navbar-email');
const deskTopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDeskTopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDeskTopMenu() {
    deskTopMenu.classList.toggle('inactive');

    const IsAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!IsAsideClosed);{
        shoppingCartContainer.classList.add('inactive');
    }    
}

function toggleMobileMenu() {
    const IsAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!IsAsideClosed);{
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');  
}
    

function toggleCarritoAside() { 
    const IsMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const IsdeskTopMenuClosed = deskTopMenu.classList.contains('inactive');
    
    if (!IsMobileMenuClosed);{
        mobileMenu.classList.add('inactive');
    }

    if (!IsdeskTopMenuClosed);{
        deskTopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');  
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 300,
    image: 'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=600',
});

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/4523062/pexels-photo-4523062.jpeg?auto=compress&cs=tinysrgb&w=600',
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
</div> */

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv= document.createElement('div');

    const productPrice= document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName= document.createElement('p');
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