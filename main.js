const menuEmail = document.querySelector('.navbar-email')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//toggle actúa como un Switch
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive')        
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive')
}

function toggleCarritoAside() {
   aside.classList.toggle('inactive');
   mobileMenu.classList.add('inactive')
   desktopMenu.classList.add('inactive')
}


// comentamos el código HTML que vamos a contruir con JS 
{/* <div class="product-card">
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
</div>  */}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" ,
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
});
productList.push({
    name: 'Compu',
    price: 620,
    image: "https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
});

// Creamos elemento por elemento de la lista de productos mediante JS
/* Colocar elementos mediane arrays */
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
        //product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name;
    
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
        
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList);