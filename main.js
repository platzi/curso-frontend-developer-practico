const menuEmail = document.querySelector(".navbar-email"); 
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector('.mobile-menu'); 
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);//activa el menu del escritorio
menuHamIcon.addEventListener('click', togglemobileMenu);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');//ponemos la clase inactivepor defecto
}
function togglemobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

//creacion de la lista de productos 
const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">'
});
productList.push({
    name: 'pantalla',
    price: '220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">'
});

productList.push({
    name: 'compu',
    price: '620',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">'
});

//referencia del html que vamos a crear
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
        </div>*/

function renderProducts(arr) {
          for (product of arr) {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
       
          const img = document.createElement('img');
          img.setAttribute('src', product.image);
          //product= {name,price,image}-> product.image
       
           const productInfo = document.createElement('div');
           productInfo.classList.add('product-info');
       
           const productInfoDiv = document.createElement('div');
       
           
          
       
           const productprice = document.createElement('p');
           productprice.innerText = '$' + product.price;
           const productName = document.createElement('p');
           productName.innerText = product.name;
       
           productInfoDiv.appendChild(productprice);
           productInfoDiv.appendChild(productName);
       
           const productInfoFigure = document.createElement('figure');
           const productImgCart = document.createElement('img');
           productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
       
           productInfoFigure.appendChild(productImgCart);
       
           productInfo.appendChild(productInfoDiv);
           productInfo.appendChild(productInfoFigure);
       
           productCard.appendChild(img);
           productCard.appendChild(productInfo);
       
           cardsContainer.appendChild(productCard);     
}

}
renderProducts(productList);
