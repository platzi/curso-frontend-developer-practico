const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const carsdContainer = document.querySelector('.cards-container');
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    
}
function toogleCarritoAside(){
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');  
}


const productList = [];

productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWqp3-eDaaN39-ydrk4kqw3C8YMGmF2lY9Q&usqp=CAU',
});
productList.push({
    name: 'Computadora',
    price: 120,
    image: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg',
});
productList.push({
    name: 'Bocina',
    price: 120,
    image: 'https://i.blogs.es/9d091b/bocina/450_1000.jpeg',
});
productList.push({
    name: 'Monitor',
    price: 2500,
    image: 'https://i0.wp.com/botechnews.com/wp-content/uploads/2021/04/GIGABYTE-AORUS-FI27Q-P-Monitor-Gamer-G-SYNC-Compatible-Precio-Mexico.jpg?fit=928%2C596&ssl=1',

})
productList.push({
    name: 'Gorra',
    price: 2500,
    image: 'https://cf.shopee.com.mx/file/21a48445342ccec2e7c77bca64209dcb',

})
productList.push({
    name: 'Playera',
    price: 2500,
    image: 'https://cf.shopee.com.mx/file/a17854060f67571698601aa3769a7217',

})
productList.push({
    name: 'Bocina Contra Agua',
    price: 2500,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlityYmI1OzIRC0X3YGKAAEANGIe0rDFLlPVfCYqrECRdCdLOH2V0OmgVx5AS3K7AKh8&usqp=CAU',

})
productList.push({
    name: 'Tenis',
    price: 2500,
    image: 'https://i0.wp.com/lopezdoriga.com/wp-content/uploads/2021/03/nike-tenis-marca.jpg?fit=1920%2C1080&ssl=1',

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
for(product of array){
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

    
    carsdContainer.appendChild(productCard);

}
}

renderProducts(productList);