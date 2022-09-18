const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const carritoCompras = document.querySelector('.navbar-shopping-cart')

const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
carritoCompras.addEventListener('click', toggleAsideCompras)

function toggleDesktopMenu() {
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobilMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {

    const isCarritoClosed = aside.classList.contains('inactive')

    if(!isCarritoClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleAsideCompras() {
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobilMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}

    let productos = []

    productos.push({
        price: 120,
        name: 'Bike',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
    productos.push({
        price: 320,
        name: 'Laptop HP',
        img: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 120,
        name: 'Computer',
        img: 'https://images.pexels.com/photos/6177552/pexels-photo-6177552.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 11200,
        name: 'Car',
        img: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 120,
        name: 'Minimoto',
        img: 'https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 320,
        name: 'Laptop HP',
        img: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 120,
        name: 'Computer',
        img: 'https://images.pexels.com/photos/6177552/pexels-photo-6177552.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 11200,
        name: 'Car',
        img: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 1200,
        name: 'Moto',
        img: 'https://images.pexels.com/photos/163210/motorcycles-race-helmets-pilots-163210.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 320,
        name: 'Laptop HP',
        img: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 120,
        name: 'Computer',
        img: 'https://images.pexels.com/photos/6177552/pexels-photo-6177552.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 11200,
        name: 'Car',
        img: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 120,
        name: 'Vestido',
        img: 'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 100,
        name: 'Vestido',
        img: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 120,
        name: 'Vestido',
        img: 'https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=600'
    })
    productos.push({
        price: 30,
        name: 'Vestido',
        img: 'https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?auto=compress&cs=tinysrgb&w=600'
    })

    const cardsContainer = document.querySelector('.cards-container')

    for (const producto of productos) {

        // Creamos el contenedor principal
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        // Creamos la img
        const imageCard = document.createElement('img')
        imageCard.setAttribute('src', producto.img)

        // Creamos el div con producto info
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        // Creamos el div que agrupa el precio y el nombre
        const productDiv = document.createElement('div')

        // Creamos la etiqueta p para el precio y para el nombre
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + producto.price

        const productName = document.createElement('p')
        productName.innerText = producto.name 

        // Creamos figure
        const figureIcon = document.createElement('figure')

        // Creamos el icono
        const iconFigure = document.createElement('img')
        iconFigure.setAttribute('src', './icons/bt_add_to_cart.svg')

        //Estructuramos el html
        figureIcon.appendChild(iconFigure)  // Agregamos el icono al figure

        productDiv.append(productPrice, productName)    // Agregamos precio y nombre a div

        productInfo.append(productDiv, figureIcon)  // Agregamos etiquetas e icono a produc-info

        productCard.append(imageCard, productInfo)    // Agregamos la imagen y product-info al contenedor principal

        cardsContainer.appendChild(productCard)  // agregamos al contenedor de html

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

    }