const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive')    
  
}

const productList = [];
    productList.push({
        name: 'Bike',
        price: '120',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push({
        name: 'Sofa',
        price: '280',
        image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Guitar',
        price: '200',
        image: 'https://images.pexels.com/photos/5080428/pexels-photo-5080428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Computer',
        price: '480',
        image: 'https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Mirror',
        price: '40',
        image: 'https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Table',
        price: '100',
        image: 'https://images.pexels.com/photos/2082092/pexels-photo-2082092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Jeans',
        price: '20',
        image: 'https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'PSone',
        price: '90',
        image: 'https://images.pexels.com/photos/9281224/pexels-photo-9281224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Earphones',
        price: '30',
        image: 'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Clock',
        price: '35',
        image: 'https://images.pexels.com/photos/210528/pexels-photo-210528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Box games',
        price: '30',
        image: 'https://images.pexels.com/photos/4887249/pexels-photo-4887249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Sweater',
        price: '10',
        image: 'https://images.pexels.com/photos/6577696/pexels-photo-6577696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    productList.push({
        name: 'Classic Telephone',
        price: '40',
        image: 'https://images.pexels.com/photos/9463833/pexels-photo-9463833.jpeg'
    });
    productList.push({
        name: 'Shoes',
        price: '20',
        image: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });

    
  function renderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product={name, price, image} -> product.image
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


























