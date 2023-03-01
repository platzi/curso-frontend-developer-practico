const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuBtnMobileIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuBtnCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

//* Event Listeners
menuEmail.addEventListener('click', toggleDesktopMenu)
menuBtnMobileIcon.addEventListener('click', toggleMobileMenu)
menuBtnCarritoIcon.addEventListener('click', toggleCarritoAside)

//* Functions
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside(){
    mobileMenu.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive')
}
//Creando la estructura de los productos e insertandolos en el HTML
function renderProducts(arrayProducts){
    for(product of arrayProducts){
        //Creando el div contenedor
        const protuctCard = document.createElement('div')
        protuctCard.classList.add('product-card')
    
        //Creando la imagen del producto
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        //Creando contenedor para la informacion del producto
        const protuctInfo = document.createElement('div')
        protuctInfo.classList.add('product-info')
        //Div donde se va a insertar la info
        const protuctInfoDiv = document.createElement('div')
        
        //Creando la informacion del producto
        const protuctPrice = document.createElement('p')
        protuctPrice.textContent = '$' + product.price
    
        const protuctName = document.createElement('p')
        protuctName.textContent = product.name
    
        //Figure donde se va a insertar el boton para agregar a carrito
        const protuctInfoFigure = document.createElement('figure')
    
        //Imagen de agregar al carrito
        const protuctImgCart = document.createElement('img')
        protuctImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    
        /*Insertando los elementos con sus padres e hijos correspondientes
        //! Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo. 
        */
        cardsContainer.appendChild(protuctCard)
        protuctCard.append(productImg, protuctInfo)
        protuctInfo.append(protuctInfoDiv, protuctInfoFigure)
        protuctInfoDiv.append(protuctPrice, protuctName)
        protuctInfoFigure.appendChild(protuctImgCart)
    }
}

//*Lista de productos
const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/6527054/pexels-photo-6527054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Computadora',
    price: 1250,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Audifonos',
    price: 200,
    image: 'https://images.pexels.com/photos/4526396/pexels-photo-4526396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Teclado',
    price: 20,
    image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Control Play Station',
    price: 130,
    image: 'https://images.pexels.com/photos/3945659/pexels-photo-3945659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Lentes VR',
    price: 190,
    image: 'https://images.pexels.com/photos/3764550/pexels-photo-3764550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Control xbox',
    price: 140,
    image: 'https://images.pexels.com/photos/14541069/pexels-photo-14541069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

//Mandando llamar a la funcion con el parametro del array que queremos que se muestre en el HTML
renderProducts(productList)
