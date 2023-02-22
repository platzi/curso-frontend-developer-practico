const barraEmail=document.querySelector('.navbar-email');
const DesktopMenu=document.querySelector('.desktop-menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuMobileIcon=document.querySelector('.menu');

const carrito=document.querySelector('.navbar-shopping-cart');
const asideProductDetailCarrito=document.querySelector('.product-detail');

const cardsContainer=document.querySelector('.cards-container')


barraEmail.addEventListener('click', mostrarBarraEmail);
menuMobileIcon.addEventListener('click', mostrarMobileMenu);
carrito.addEventListener('click', mostrarProductDetail);

function mostrarBarraEmail(){
    const asideClosed=asideProductDetailCarrito.classList.contains('inactive');
    if(!asideClosed){
        asideProductDetailCarrito.classList.add('inactive')
    }
    DesktopMenu.classList.toggle('inactive');
}
function mostrarMobileMenu(){

    // LA CONSTANTE CREADA ES PARA SABER SI EL ELEMENTO MENCIONADO CONTIENE LA CLASE "INACTIVE"
    
    const asideClosed=asideProductDetailCarrito.classList.contains('inactive');
    // EL IF CHECKEA SI EL ELEMENTO TIENE O NO ESA CLASE, Y EN CASO DE NO TENERLA SE LA AGREGA PARA QUE NO SE MUESTRE SOBRE EL ELEMENTO QUE QUEREMOS MOSTRAR EN LA FUNCTION. LUEGO LE QUITA LA CLASE INACTIVE AL ELEMENTO A MOSTRAR PARA QUE ESTE APAREZCA
    if(!asideClosed){
        asideProductDetailCarrito.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}
function mostrarProductDetail(){
    const desktopMenuClosed=DesktopMenu.classList.contains('inactive')
    if (!desktopMenuClosed){
        DesktopMenu.classList.add('inactive')
    }
    const mobileMenuClosed=mobileMenu.classList.contains('inactive');
    if (!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    asideProductDetailCarrito.classList.toggle('inactive');
}

const productList=[]
productList.push({
    name:'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
)
productList.push({
    name:'Nova SS',
    price: 30000,
    image: 'https://www.kindpng.com/picc/m/736-7363802_chevy-nova-ss-1969-png-transparent-png.png'
}
)
productList.push({
    name:'ToyotaCorolla',
    price: 12000,
    image: 'https://www.pngitem.com/pimgs/m/638-6380605_toyota-corolla-car-png-transparent-png.png'
}
)
productList.push({
    name:'lambo',
    price: 54000,
    image: 'https://www.pngitem.com/pimgs/m/2-25960_lamborghini-png-image-lamborghini-gallardo-lp560-4-transparent.png'
}
)


{/* 
<div class="cards-container">
    
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
</div> 
*/
}

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg=document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    const infoDiv=document.createElement('div')
    
    const productPrice=document.createElement('p')
    productPrice.innerText = '$' + product.price
    const productName=document.createElement('p')
    productName.innerText = product.name
    
    infoDiv.appendChild(productPrice)
    infoDiv.appendChild(productName)


    const productFigure=document.createElement('figure')
    const productImgFigure=document.createElement('img')
    productImgFigure.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    productFigure.appendChild(productImgFigure)

    productInfo.appendChild(infoDiv)
    productInfo.appendChild(productFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)

}