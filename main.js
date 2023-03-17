const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// const menuMobileButton = document.querySelector('.email');

const cardsContainer= document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritAside);


// menuMobileButton.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu(){
    console.log('func toggle Menu');
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu(){
    console.log('func toggle Menu Mobile');
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleCarritAside(){
    console.log('func toggle Aside');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

// Lista de productos
const productList = []      // Array para lista de productos
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'

})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'

})
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'

})
productList.push({
    name: 'Dildo',
    price: 820,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg'

})


function renderProducts( arrList){

    let innerTotal=''

    for(let product of arrList){
        innerTotal += `<div class="product-card">
                                        <img src="${product.image}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                                        <div class="product-info">
                                            <div>
                                            <p>$ ${product.price}</p>
                                            <p>${product.name}</p>
                                            </div>
                                            <figure>
                                            <img src="./icons/bt_add_to_cart.svg" alt="">
                                            </figure>
                                        </div>
                                    </div>`
    }

    cardsContainer.innerHTML= innerTotal;
}

/* Alternativa engorosa vista en clases  */
function renderProducts2(arr) {

    for (product of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // product= {name, price, image} -> product.image
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