const navEmail = document.querySelector('.navbar-email');
const navDesktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

navEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', togglehamburgerMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu(){
  // navDesktopMenu.classList.remove('inactive') Este lo hice yo pensando en remover la clase
  const isAsideClose = aside.classList.contains('inactive')
  if(!isAsideClose){
    aside.classList.add('inactive');
  }
  
  navDesktopMenu.classList.toggle('inactive');
}

function togglehamburgerMenu(){
  const isAsideClose = aside.classList.contains('inactive')
  if(!isAsideClose){
    aside.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClose = navDesktopMenu.classList.contains('inactive')
  
  if(!isMobileMenuClose){
    mobileMenu.classList.add('inactive');
  }
  if(!isDesktopMenuClose){
    navDesktopMenu.classList.add('inactive');
  }

  aside.classList.toggle('inactive');

}


const productList = [];
productList.push({
  name: 'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'monitor',
  price: 300,
  image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/02/dos-monitores-2947672.jpg?tf=1200x',
})


/* REFERENCIA PARA UTILZAR Y CREAR UN DIV CON LO ELEMNTOS DE UN ARRAY
<div class="product-card">
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

function renderProdcuts(array){
  array.map((product) => {
  
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    // product = {name,price,image}
  
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
  
  })
}

renderProdcuts(productList);