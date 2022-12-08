const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.burguerMenu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container')
const productList = []

// Desplegables
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

// Lista de productos creado hardcodeado
productList.push({
    name: 'Bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Audifonos',
    price: 50,
    imagen: 'https://media.istockphoto.com/id/1193373535/es/foto/auriculares-renderizado-3d-realista-amante-de-la-m%C3%BAsica-fondo-minimalista-con-auriculares-de.jpg?s=612x612&w=is&k=20&c=1O2fm8HGvcp01_AF0rhRsXr-eZJRWfWT1f7XOvb9ItE=',
});
productList.push({
    name: 'Lipstick',
    price: 12,
    imagen: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Camera',
    price: 1200,
    imagen: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Bocina',
    price: 100,
    imagen: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Jar',
    price: 24,
    imagen: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Lighter',
    price: 15,
    imagen: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Coca Cola',
    price: 2,
    imagen: 'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Lens',
    price: 500,
    imagen: 'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Perfume',
    price: 120,
    imagen: 'https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Memory SD',
    price: 187,
    imagen: 'https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

// TITULO: Maquetado dinamico de los productos

// APUNTES: A continuacion se maquetara el siguiente HTML para que se pueda visualizar en el la pagina web, cabe mencionar que este se podria realizar ingresando el HTML directamente utilizando el atributo "innertHTML", sin embargo esto se evitara por cuestiones de seguridad

{/* <section class="main-container">
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
</section>  */}

// APUNTES: 1. Dentro de un bucle for se tomara cada uno de los productos de nuestra lista. 2. se creara una variable por cada elemento indicado en el HTML. 3. Finalamente una vez creado los elementos con sus respectivos atributos, los empezaremos a anexar con el metodo "append(con este metodo se pueden agregar varios nodos o texto de manera simultanea)" o "appendChild(solo nos permite agreagar un nodo a la vez)";
// ALERTA: Es importante hacer el "append" de adentro hacía afuera, de esta manera cuando se haga el último append este ya tomara todo el bloque de etiquetas que debería de tomar.

function renderProducts(array){
    for (product of array){


        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.append(productPrice, productName);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList)
