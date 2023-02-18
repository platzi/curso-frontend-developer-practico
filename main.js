//varibles// 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
// events
menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleAside);

// functions
function toggleDesktopMenu(){
   
    const asideClose = aside.classList.contains('inactive')

    if(!asideClose){
        aside.classList.add('inactive');
    } 
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const asideClose = aside.classList.contains('inactive')

    mobileMenu.classList.toggle('inactive');

    if(!asideClose){
        aside.classList.add('inactive');
    }
}

function toggleAside(){
    const mobileMenuClose= mobileMenu.classList.contains('inactive');

    aside.classList.toggle('inactive');

    if(!mobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
}

const productList = [];
    productList.push({
        name: 'bici',
        price: 100,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
    productList.push({
        name: 'bicicleta',
        price: 110,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
    productList.push({
        name: 'bici',
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })
    productList.push({
        name: 'bici',
        price: 130,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    })

  
function renderProducts(arr){
    for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

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