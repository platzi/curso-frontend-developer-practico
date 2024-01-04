//DECLARACION E INICIALIZACION DE VARIABLE
const menuEmail = document.querySelector('.navbar-email') // selecionamos el elemento que daremos click 
const desktopMenu = document.querySelector('.desktop-menu') // selecionamos el elemento mostraremos al dar click 

const menuHamIcon = document.querySelector('.menu') // selecionamos el elemento que daremos clickd
const mobileMenu = document.querySelector('.mobile-menu') // selecionamos el elemento mostraremos al dar click shopping cart

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart') // selecionamos el elemento que daremos click 
const shoopingCartContainer = document.querySelector('#shoppingCartContainer') // selecionamos el elemento mostraremos al dar click 




//EVENTOS
menuEmail.addEventListener('click', toggleDesktopMenu) // metodo para ejecutar algo cuando le demos click al elemento selecionado
menuHamIcon.addEventListener('click', toggleMobileMenu) // metodo para ejecutar algo cuando le demos click al elemento selecionado
menuCarritoIcon.addEventListener('click', toggleCarritoAside) // metodo para ejecutar algo cuando le demos click al elemento selecionado




//FUNCIONES
// funcion para que el menu aparezca y desaparezca 
function toggleDesktopMenu (){
    const isAsideClosed = shoopingCartContainer.classList.contains('inactive')
    
    if(!isAsideClosed)
    {
        shoopingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')// le pone o le quita la clase inactive si la tiene o no 
}

function toggleMobileMenu(){
    const isAsideClosed = shoopingCartContainer.classList.contains('inactive')
    
    if(!isAsideClosed)
    {
        shoopingCartContainer.classList.add('inactive')
    }
       
    mobileMenu.classList.toggle('inactive')// le pone o le quita la clase inactive si la tiene o no 
}

function toggleCarritoAside(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive')

    if(!ismobileMenuClosed)
    {
        mobileMenu.classList.add('inactive')
    }
       shoopingCartContainer.classList.toggle('inactive')    
}

//crearemos una lista de prodcuto desde cero
const productList = []; // creamos un array que nos devuel la lista
//creamos productos y lo insertamos al array mediante un objeto
productList.push({
    name: 'BIKE',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'BIKE',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'BIKE2',
    price: 122,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name: 'BIKE3',
    price: 124,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

const cardsContainer = document.querySelector('.cards-container')


//insertamos en nuestro HTML los objetos y lo devemos recorrer con un ciclo for
function renderproducts(arr){
    for (product of arr){
        //creamos cada uno de los elementos del HTML
        const productcard = document.createElement('div') // creamos el div como primero que tiene la clase productcard
        productcard.classList.add('product-card')//le asignamos la clase que tiene el elemento
    
        const productImg = document.createElement('img')// creamos el elemento imagen img
        productImg.setAttribute('src', product.image) // se pasamos la imagen al atributo
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const producInfoDiv = document.createElement('div')
    
        //creamos las etiquetas parrafos y se les pasa el valor 
        const producPrice = document.createElement('p')
        producPrice.innerText='$' + product.price // asinamos el valor en la etiqueta p
        const producName = document.createElement('p')
        producName.innerText= product.name // asinamos el valor en la etiqueta p
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg') // se pasamos la imagen al atributo
    
    
        //metemos cada etiqueta HTML dentro de su Etiqueta padre
        productInfoFigure.appendChild(productImgCart)
        producInfoDiv.appendChild(producPrice)
        producInfoDiv.appendChild(producName)
        productInfo.appendChild(producInfoDiv)
        productInfo.appendChild(productInfoFigure)
        productcard.appendChild(productImg)
        productcard.appendChild(productInfo)
        cardsContainer.appendChild(productcard)
    
    }
}

renderproducts(productList)