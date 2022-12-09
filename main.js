const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.burguerMenu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailInfoPrice =  document.querySelector('.product-detail__info-price');
const productDetailInfoName =  document.querySelector('.product-detail__info-name');
const productDetailInfoDescription =  document.querySelector('.product-detail__info-description');
const productDetailImg = document.querySelector('.product-detail__img')
const productList = []

// Desplegables
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideShoppingCar = document.querySelector('.shoppingCar-detail');
const asideProductDetails = document.querySelector('.product-detail')
const productDetailClose = document.querySelector('.product-detail-close');

// Modal desplegable
const darken = document.querySelector('.darken')

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailClose.addEventListener('click', closeProductDetails);

darken.addEventListener('click', closeDarken);

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideProductDetails = asideProductDetails.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isAsideProductDetails) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        asideProductDetails.classList.add('inactive');
    }
    asideShoppingCar.classList.toggle('inactive')
    darken.classList.remove('inactive')
}

function toggleMobileMenu() {
    const isAsideShoppingCarClosed = asideShoppingCar.classList.contains('inactive');
    const isAsideProductDetails = asideProductDetails.classList.contains('inactive');

    if (!isAsideShoppingCarClosed || !isAsideProductDetails) {
        asideShoppingCar.classList.add('inactive');
        asideProductDetails.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    darken.classList.remove('inactive')
}

function toggleDesktopMenu() {
    const isAsideShoppingCarClosed = asideShoppingCar.classList.contains('inactive');
    const isAsideProductDetails = asideProductDetails.classList.contains('inactive');

    if (!isAsideShoppingCarClosed || !isAsideProductDetails) {
        asideShoppingCar.classList.add('inactive');
        asideProductDetails.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
    darken.classList.remove('inactive')
}

function toogleProductDetails(product){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideShoppingCarClosed = asideShoppingCar.classList.contains('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isAsideShoppingCarClosed){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        asideShoppingCar.classList.add('inactive');
    }
    productDetailImg.setAttribute('src', product.imagen)
    productDetailInfoPrice.innerText = `$${product.price}`;
    productDetailInfoName.innerText = product.name;
    productDetailInfoDescription.innerText = product.description; 
    asideProductDetails.classList.toggle('inactive');
    darken.classList.remove('inactive')
}

function closeProductDetails(){
    asideProductDetails.classList.add('inactive');
    darken.classList.add('inactive');
}

function closeDarken(){
    darken.classList.add('inactive');
    asideShoppingCar.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideProductDetails.classList.add('inactive');
}

// Lista de productos creado hardcodeado
productList.push({
    name: 'Bike',
    price: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});
productList.push({
    name: 'Audifonos',
    price: 50,
    imagen: 'https://media.istockphoto.com/id/1193373535/es/foto/auriculares-renderizado-3d-realista-amante-de-la-m%C3%BAsica-fondo-minimalista-con-auriculares-de.jpg?s=612x612&w=is&k=20&c=1O2fm8HGvcp01_AF0rhRsXr-eZJRWfWT1f7XOvb9ItE=',
    description: "Reconocida calidad de sonido de Sennheiser para una experiencia auditiva única",
});
productList.push({
    name: 'Lipstick',
    price: 12,
    imagen: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Labial líquido Studio Look mate de larga duración, un match perfecto para combinar todos tus looks.",
});
productList.push({
    name: 'Camera',
    price: 1200,
    imagen: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "POINT-AND-SHOOT CAMERA: Large, 1-inch 20.1-megapixel MOS sensor plus 10X zoom LEICA DC VARIO-ELMARIT lens (25-250mm) and HYBRID O.I.S. (Optical Image Stabilizer) delivers brighter, more colorful photos with fewer image artifacts",
});
productList.push({
    name: 'Bocina',
    price: 100,
    imagen: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Deja que la música te acompañe siempre El SRS-XB13 es resistente y portátil e incluye una correa diseñada para que sea fácil llevártelo a cualquier lugar. Pero que no te engañe su pequeño tamaño, gracias a Extra Bass y el procesador de difusión de sonido, este altavoz es muy potente.",
});
productList.push({
    name: 'Jar',
    price: 24,
    imagen: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "rústico para diseño complementa perfectamente el té helado o limonada",
});
productList.push({
    name: 'Lighter',
    price: 15,
    imagen: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Diseño a prueba de agua: Diseño a prueba de agua Encendedor de pulso de arco eléctrico doble, cuando vas de campamento o escalada, necesitas un encendedor de diseño a prueba de agua. Muy útil para usar en los días de lluvia.",
});
productList.push({
    name: 'Coca Cola',
    price: 2,
    imagen: 'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "El sabor clásico de Coca-Cola pero sin azúcar, sin calorías",
});
productList.push({
    name: 'Lente de camara',
    price: 500,
    imagen: 'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "La lente de la cámara CS de 2,5 mm especialmente diseñada se puede utilizar en cualquier cámara de cuerpo estándar con capacidades de montaje",
});
productList.push({
    name: 'Perfume',
    price: 120,
    imagen: 'https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Usher Eau De Toilette Spray 3.4 Oz/ 100 Ml for Men by Usher Usher is a tangy, zesty, citrusy, flavorful and enjoyable masculine fragrance containing all juicy, luscious, delicious notes such as melon, sandalwood, blue lavender, lemon, white pepper, pineapple, amber and violet leaf. The aroma is extremely pleasant and nice having a long lasting silage, making it an perfume for a daytime wear.",
});
productList.push({
    name: 'Memory SD',
    price: 187,
    imagen: 'https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Especificaciones de gama alta A1 V30 Clase 10, ideal para grabación y reproducción de fotos/videos 4K Ultra HD (UHD).",
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
        productImg.alt = product.name;
        productImg.addEventListener('click', (e) => {
            const objeto = array.filter(producto => producto.name === e.target.alt)
            const productoDetails = objeto[0]
            toogleProductDetails(productoDetails);
        });
    
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
