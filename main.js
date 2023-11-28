const  navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
console.log();

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);


function toggleDesktopMenu(){
    const isnavEmailopen = aside.classList.contains('inactive');

    if (!isnavEmailopen) {
        aside.classList.add('inactive');
    }
 
    desktopMenu.classList.toggle('inactive');


};

function toggleMobileMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

};


function toggleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
     }   
    // si el mobileMenu esta open hay que cerrarlo

    aside.classList.toggle('inactive');
  
};

const productList = [];
productList.push({
    name: 'Bike',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Moto',
    price: 1000,
    image: 'https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/mt03_gris.png'
});
productList.push({
    name: 'phone',
    price: 700,
    image: 'https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/p/m/pms_1698307433.52595447_1.png'
});
productList.push({
    name: 'tv',
    price: 500,
    image: 'https://www.sony-africa.com/image/049f2e40c5919cfd7b407fa4f0a3f183?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9'
});
productList.push({
    name: 'shoes',
    price: 130,
    image: 'https://www.brickhousesneakers.com/cdn/shop/products/20221015_050935000_iOS_800x.jpg?v=1665811240'
});
productList.push({
    name: 'sweater',
    price: 70,
    image: 'https://m.media-amazon.com/images/I/612+t-hf8RL._AC_SL1500_.jpg'
});

//Atajo para recorrer un array
//for ('Nombre que se desee asignar a cada elemento del array' of 'array')
// cuando se usa el in trae el index de cada elemento y cuando se usa el on trae el valor de la palabra clave


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
        </div>*/

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name,price. image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
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
        const productImgCar = document.createElement('img');
        productImgCar.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCar);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }

};

renderProducts(productList);




