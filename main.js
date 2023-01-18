//DESKTOP MENU
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//MOBILE MENU
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//ASIDE CARRITO
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
//PRODUCT LIST
const cardsContainer = document.querySelector('.cards-container')

//DESKTOP MENU
menuEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
        //Si el aside esta abierto al querer abrir el menu, se cerrara el aside
    }
    desktopMenu.classList.toggle('inactive') 
    //Intercambiar el agregar/quitar un clase
}

//MOBILE MENU
menuHamIcon.addEventListener('click',toggleMobileMenu)
function toggleMobileMenu(){
    //Saber si el aside esta cerrado
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
        //Si el aside esta abierto al querer abrir el menu, se cerrara el aside
    }

    mobileMenu.classList.toggle('inactive')
}

//ASIDE CARRITO
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
function toggleCarritoAside(){
    const isMobileClosed = mobileMenu.classList.contains('inactive')
    const isDesktopClosed = desktopMenu.classList.contains('inactive')

    if(!isMobileClosed){
        mobileMenu.classList.add('inactive')
    }

    if(!isDesktopClosed){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}

//PRODUCT LIST
const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    name: 'Pantalla',
    price: 1800,
    image: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

})
productList.push({
    name: 'Laptop',
    price: 600,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg'

})

/*
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

//POR CADA ELEMENTO DEL ARREGLO, SE HARA UN DIV CON EL CONTENIDO DEL PRODUCTO
function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div') //CREAR UN ELEMENTO
        productCard.classList.add('product-card') //AGREGAR LA CLASE AL ELEMENTO

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image) //MODIDICAR EL VALOR DE UN ATRIBUTO
        //product = {name, price, image} -> product.image

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const productInfoDiv = document.createElement('div')

        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price //MODIFICAR EL TEXTO

        const productName = document.createElement('p')
        productName.innerText = product.name

        productInfoDiv.appendChild(productPrice) //AGREGAR UN ELEMENTO DENTRO DE OTRO
        productInfoDiv.appendChild(productName)

        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        productInfoFigure.appendChild(productImgCart)

        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)

        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)

        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)