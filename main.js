const homeMenu = document.querySelector('.logo')
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideMenu = document.querySelector('.product-detail');
const productDetailContainer = document.querySelector('.product-detail-main');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer= document.querySelector('.cards-container');
const titleMyOrderMenu = document.querySelector('#arrow-image');

homeMenu.addEventListener('click',goHomePage)
menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartMenu.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailMain)
titleMyOrderMenu.addEventListener('click',toggleCartAside)


function goHomePage(){
    location.href='./index.html';
}

function toggleDesktopMenu(){

    const IsAsideMenuClosed= asideMenu.classList.contains('inactive');
    

    if (!IsAsideMenuClosed){
        //abrir el menu mobile

        //si AsideMenu está abierto, hay que cerrarlo

        asideMenu.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const IsAsideMenuClosed= asideMenu.classList.contains('inactive');

    if (!IsAsideMenuClosed){
        //abrir el menu mobile

        //si AsideMenu está abierto, hay que cerrarlo

        asideMenu.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailMain();
}

function toggleCartAside(){

    //En las variabloes, se valida si el elemento HTML tiene inactive en la clase

    const IsMobileMenuClosed= mobileMenu.classList.contains('inactive');
    const IsDesktopMenuClosed= desktopMenu.classList.contains('inactive');
    const IsProductDetailClosed= productDetailContainer.classList.contains('inactive');
    /* const IsTitleMyOrderMenuClosed = titleMyOrderMenu.classList.contains('inactive'); */

    if (!IsMobileMenuClosed){
        //abrir el aside

        //si MobileMenu estáabierto, hay que cerrarlo

        mobileMenu.classList.add('inactive')
    }

    if (!IsDesktopMenuClosed){
        //abrir el aside

        //si MobileMenu estáabierto, hay que cerrarlo

        desktopMenu.classList.add('inactive')
    }

    if (!IsProductDetailClosed){
        //abrir el aside

        //si MobileMenu estáabierto, hay que cerrarlo

        productDetailContainer.classList.add('inactive');
        
    }
    

    asideMenu.classList.toggle('inactive');
}

function openProductDetailMain(){



    asideMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailMain(){
        productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Xbox',
    price: 1200,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Camisa',
    price: 50,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Xbox',
    price: 1200,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Camisa',
    price: 50,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/* <div class="product-card">
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

function renderProducts(array){
    for (product of array){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src',product.img);
        img.addEventListener('click',openProductDetailMain)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const figure = document.createElement('img');
        figure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(figure);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);



