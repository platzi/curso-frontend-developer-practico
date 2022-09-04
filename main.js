const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector(".mobile-menu");

const carritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCarritoPodructDetail = document.querySelector(".product-detail")

const cardContainer = document.querySelector('.cards-container');

function toggleDesktopMenu() {

    let ismobileMenuOpen = !mobileMenu.classList.contains('inactive');
    
    
    if (ismobileMenuOpen){
            
        mobileMenu.classList.add('inactive');

    }

    
    
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {

    let isasideOpen = !asideCarritoPodructDetail.classList.contains('inactive');

    if (isasideOpen){
            
        asideCarritoPodructDetail.classList.add('inactive');

    }
    
    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {

    let ismobileMenuOpen = !mobileMenu.classList.contains('inactive');

    let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    
    
    if (ismobileMenuOpen){
            
        mobileMenu.classList.add('inactive');

    }

    if (isDesktopMenuOpen){
            
        desktopMenu.classList.add('inactive');

    }
    
    asideCarritoPodructDetail.classList.toggle('inactive');

}

/* function inactiveisactive() {

    if(mobileMenu.classList.contains('inactive')){

        menuEmail.addEventListener('click', toggleDesktopMenu);

    }else{

        desktopMenu.classList.add('inactive')

    }


} */

//window.addEventListener('click', inactiveisactive);

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

carritoIcon.addEventListener('click', toggleCarritoAside);


/*
    Lista de productos
*/


const productList = [];
for (let index = 0; index < 50; index++) {
    
    productList.push({

        name: 'Bike',
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
    });

    productList.push({
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

    productList.push({
        name: 'Compu',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    
}

console.log(productList);

/* <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                <div>
                    <figure>
                        <img src="" alt="">
                    </figure>
                </div>
            </div>
 </div> */


function renderProducts(array) {

    array.forEach(product => {

        let productCard = document.createElement('div');
        productCard.classList.add('product-card')
    
        let productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        let productInfoDiv = document.createElement('div');
    
        let productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        let productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        let productInfoFigure = document.createElement('figure');
        let productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
        
    });
    
}

renderProducts(productList);

