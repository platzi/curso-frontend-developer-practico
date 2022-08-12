const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu()
{
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed)
    {
        aside.classList.add('inactive');       
    }
    desktopMenu.classList.toggle('inactive')// Esto lo que hace es que la va a intercambiar osea la quitara o pondra.
}

function toggleMobileMenu()
{
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed)
    {
        aside.classList.add('inactive');       
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside()
{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed)
    {
        desktopMenu.classList.add('inactive');       
    }

    if(!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');       
    }
 
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({

    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({

    name: 'Smart TV',
    price: 1200,
    image: 'https://images.samsung.com/is/image/samsung/mx-full-hd-t5300-un43t5300afxzx-frontblack-234815390?$650_519_PNG$',

})

productList.push({

    name: 'Gamer PC',
    price: 500,
    image: 'https://quieromipc.com.mx/wp-content/uploads/2022/03/Pc-GAMER-Media-Ryzen-7-5700g-16gb-Fusion-X-1.png',

})


/*<div class="product-card">
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
      </div>
*/

function renderProducts(array){

    for (product of array){
        // Por cada producto estamos maqueteando HTML
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
        
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = '$'+ product.price;
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
        
            const productFigure = document.createElement('figure');
            const imgFigure = document.createElement('img');
            imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
        
            // Ahora hay que irlos anidando
        
            productFigure.appendChild(imgFigure);
        
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productFigure)
        
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
        
            cardsContainer.appendChild(productCard);
        
        }

}

renderProducts(productList);