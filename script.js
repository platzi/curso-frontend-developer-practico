const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isCarritoClosed = shoppingCartContainer.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isCarritoClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isCarritoClosed = shoppingCartContainer.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isCarritoClosed) {
        shoppingCartContainer.classList.add('inactive')
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }

    menuMobile.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        menuMobile.classList.add('inactive')
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}
function openProductDetail() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isCarritoClosed = shoppingCartContainer.classList.contains('inactive')
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    if (!isCarritoClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}
function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

//Arrray de objetos (Porductos de la tienda -> objetos)
const productList = []; //Creamos o declaramos un array y lo llenamos de objetos
productList.push ({ //Se agrega un nuevo elemento con el metodo .push()
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push ({ //Se agrega un nuevo elemento con el metodo .push()
    name: 'Phone',
    price: 340,
    image: 'https://images.pexels.com/photos/1260239/pexels-photo-1260239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push ({ //Se agrega un nuevo elemento con el metodo .push()
    name: 'Laptop',
    price: 720,
    image: 'https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

function renderProducts(array) {
    for (product of array) { // for of Loop, donde product es el elemento del array
        const productCard = document.createElement('div'); //Creamos una etiqueta o elemnto HTML desde JavaScript
        productCard.classList.add('product-card');//Le añadimos una clase a la etiqueta o elemnto div
    
        
        //product = {name, price, image}
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);//Agregamos un atributo al elemento img
        productImage.addEventListener('click', openProductDetail); //Puedo agregar un addEventListner a un elemnto HTML creado desde JS

        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        productCard.appendChild(productImage); //Asignamos como hijo directo con el metodo appendChild()
        productCard.appendChild(productInfo);
    
        const productInfoDiv = document.createElement('div');
        
        productInfo.appendChild(productInfoDiv);
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price; //Asignamos un contenido o texto a la etiqueta p con el metodo innerText()
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productFigure = document.createElement('figure');
        
        productInfo.appendChild(productFigure);
        
        const iconCart = document.createElement('img');
        iconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(iconCart);
    
        cardsContainer.appendChild(productCard);
    }
} //Lo convertimos en una funcion donde array es el parametro de la funcion

renderProducts(productList); //Se invoca la funcion en el .js para que funcione en la web