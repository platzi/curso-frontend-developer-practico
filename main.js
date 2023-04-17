const menuEmail = document.querySelector('.navbar-email') //Selecciona el elemento que recibirá el click
//Seleccionar el desktop menu
const desktopMenu = document.querySelector('.desktop-menu')
//Icono que recibira la escucha. MEnu hamburguesa
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
     //Comprobar T/F si el aside está cerrado
     const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    //Toggle pone o quita la clase .inactive dependiendo si la tiene o no
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    //Comprobar T/F si el aside está cerrado
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    //Si el aside está abierto, se asigna la clase inactive y se desaparece
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetailAside()
    //Se togglea el mobilemenu
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
     //Si el mobilemenu estra open, hay que cerrarlo para que no se solape con el aside
     if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive'); 
    }
      

    shoppingCartContainer.classList.toggle('inactive')

}

function openProductDetailAside(){
    //Cuando se abre el product detail se cierra el shopping cart
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Pantalla",
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Computador",
    price: 650,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


//Función para recorrer un array de productos, maquetarlo en html y ponerle los datos correspondientes. Recibe el array que se desea recorrer
function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div') //Se crea el div del product card
        productCard.classList.add('product-card')
        // product = {name,price,image} -> product.image
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image)
        //Podemos poner a la escucha elementos de html creados desde js
        productImg.addEventListener('click',openProductDetailAside)
        //Crrear contenedor product info y asignarle la clase product-info
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        //Crear el div que contiene el precio y el nombre y pasarle los valores con innerText
        const productInfoDiv= document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText='$'+product.price
        const productName = document.createElement('p')
        productName.innerText = product.name

        //Se asignan los párrafos como hijos de productInfoDiv
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart=document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

        //Se asigna la img como hijo de figure. 
        productInfoFigure.appendChild(productImgCart)

        //Se agrega infodiv y figure al div productInfo. Append permite agregar varios hijos a la vez,. Appendchild solo uno
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
   
        //Se agrega  la img y el product info a la product-card
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        //Se agrega finalmente la tarjeta terminada al contenedor de cards
        cardsContainer.appendChild(productCard)
    }
}


//Se invoca la funcion mandandole el array de product list como parametro
renderProducts(productList);