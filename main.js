const navbarEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const MenuDesplegableHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector ('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')


const toggleMenuHam = () => { 
const IsshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')
if (!IsshoppingCartContainerClose){ 
shoppingCartContainer.classList.add('inactive')
}
productDetailContainer.classList.add('inactive')
mobileMenu.classList.toggle('inactive')
} 




const toggleDesktopMenu = () => { 
const IsshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive')
if(!IsshoppingCartContainerClose) 
shoppingCartContainer.classList.add('inactive')
DesktopMenu.classList.toggle('inactive')
}



const toggleMenuCarrito = () => { 
const IsMobileMenuClosed = mobileMenu.classList.contains('inactive')
const IsProductDetailClosed = productDetailContainer.classList.contains('inactive')
const IsDesktopMenuClosed = DesktopMenu.classList.contains('inactive')

if(!IsProductDetailClosed){
    productDetailContainer.classList.add('inactive') 
}

if (!IsDesktopMenuClosed) { 
    DesktopMenu.classList.add('inactive')
}
if (!IsMobileMenuClosed){ 
 mobileMenu.classList.add('inactive')
}
shoppingCartContainer.classList.toggle('inactive'); 
}


const openProductDetailAside = () =>  { 
    productDetailContainer.classList.remove('inactive')
}

const CloseIcon = () => { 
    productDetailContainer.classList.add('inactive')
}



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



const renderProductos = (arr) => { 
for ( product of arr) {
const productCard =   document.createElement('div');
productCard.classList.add('product-card');

const productImg = document.createElement('img');
productImg.setAttribute('src', product.image);
productImg.addEventListener('click', openProductDetailAside)

const productInfo =   document.createElement('div');
productInfo.classList.add('product-info');
 
const productInfoDiv = document.createElement('div');

const producPrice = document.createElement('p');
producPrice.innerText = '$' + product.price;
const productName = document.createElement('p');
productName.innerText = product.name;

productInfoDiv.appendChild(producPrice);
productInfoDiv.appendChild(productName);


const productInfoFigure = document.createElement('figure');
const productImgCart = document.createElement('img');
productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

productInfoFigure.appendChild(productImgCart);

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(productImg)
productCard.appendChild(productInfo)

cardsContainer.appendChild(productCard)

}
}



const productList = []

productList.push({
    name:'Bike',
    price:120,
    image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})


productList.push({
    name:'Pantalla',
    price:220,
    image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


productList.push({
    name:'compu',
    price:620,
    image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'Bike',
    price:120,
    image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})


productList.push({
    name:'Pantalla',
    price:220,
    image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


productList.push({
    name:'compu',
    price:620,
    image:'https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

    

    


renderProductos(productList)




navbarEmail.addEventListener('click', toggleDesktopMenu);
MenuDesplegableHam.addEventListener('click', toggleMenuHam);
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);
productDetailCloseIcon.addEventListener('click', CloseIcon)
/*
Primero, se crea una constante llamada navbarEmail que utiliza el método querySelector para buscar en el documento HTML un elemento que tenga la clase navbar-email.

Luego, se crea otra constante llamada DesktopMenu que utiliza el método querySelector para buscar en el documento HTML un elemento que tenga la clase desktop-menu.

Después, se crea una función llamada toggleDesktopMenu que simplemente utiliza el método classList.toggle() para agregar o eliminar la clase inactive del elemento DesktopMenu. Esto significa que, si el elemento DesktopMenu ya tiene la clase inactive, la función la eliminará y viceversa.

Por último, se añade un "event listener" al elemento navbarEmail. En concreto, se agrega un evento "click" que activa la función toggleDesktopMenu. Esto significa que, cuando se haga clic en el elemento navbarEmail, se activará la función toggleDesktopMenu, lo que hará que el elemento DesktopMenu cambie de tener la clase inactive a no tenerla, o viceversa.
*/