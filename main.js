const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productList = [];
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const tipoProducto = ["clothes", "electronics", "futernitures", "toys", "others"]


function toggleDesktopMenu(){
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    if (isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleShoppingCartContainer(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const productDetailAsideOpen = !productDetailContainer.classList.contains('inactive');
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    if (productDetailAsideOpen){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const productDetailAsideOpen = !productDetailContainer.classList.contains('inactive');
    if (isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    if (productDetailAsideOpen){
        productDetailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function renderProducts(arr){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}
function openProductDetailAside(){
    const isshoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    if (isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add('inactive');
    }
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

/* function renderProductDetail(){
    const productDetail = document.createElement('aside');
    productDetail.setAttribute('id', 'productDetail');
    productDetail.classList.add('inactive');

    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close');

    productDetail.appendChild(productDetailClose);

    const closeDetailImage = document.createElement('img');
    closeDetailImage.setAttribute('src', './icons/icon_close.png');
    closeDetailImage.setAttribute('alt', 'close');

    productDetailClose.appendChild(closeDetailImage);

    const productDetailImg = document.createElement('img');
    productDetailImg.setAttribute('src', "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    productDetailImg.setAttribute('alt', 'bike');
    const productDetailDiv = document.createElement('div');
    productDetailDiv.classList.add("product-info");

    productDetail.appendChild(productDetailDiv);
    productDetail.appendChild(productDetailImg);

    const productDetailPrice = document.createElement('p');
    productDetailPrice.innerText = '$' + 35; 
    const productDetailItem = document.createElement('p');
    productDetailItem.innerText = 'Bike';
    const productDetailDescription = document.createElement('p');
    productDetailDescription.innerText = 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.';

    productDetailDiv.appendChild(productDetailPrice);
    productDetailDiv.appendChild(productDetailItem);
    productDetailDiv.appendChild(productDetailDescription);

    const productDetailBuy = document.createElement('button');
    productDetailBuy.classList.add('primary-button');
    productDetailBuy.classList.add('add-to-cart-button');

    productDetailDiv.appendChild(productDetailBuy);

    const productDetailBuyImg = document.createElement('img');
    productDetailBuyImg.setAttribute('src', "./icons/bt_add_to_cart.svg");
    productDetailBuyImg.setAttribute('alt', "add to cart");
    productDetailBuy.innerText = 'Add to cart';

    productDetailBuy.appendChild(productDetailBuyImg);

} */

navEmail.addEventListener('click', toggleDesktopMenu);
shoppingCart.addEventListener('click', toggleShoppingCartContainer);
menuHamburguer.addEventListener('click', toggleMobileMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

productList.push({
    name: 'Chaleco Scott, De Hombre, Cuello Alto, Marino, Equus',
    price: 32.990,
    image: './images/Chaleco.png',
    type: tipoProducto[0],
    description: "Chaleco de Nylon matelaseado, con cuello alto. Acceso frontal con cierre plástico. Dos bolsillos ojal con cierre invisible. Sisa elástica. Bolsillos internos.",
    id: 0,
});
productList.push({
    name: 'Campera Macowens Deportiva Clásica Azul Hombre Macowens 0100',
    price: 19.999,
    image: './images/Campera.png',
    type: tipoProducto[0],
    description: "Campera tipo deportiva con capucha. De color azul marino. Cuenta con cierre central y bolsillos waterproof. Un bolsillo en el pecho y dos en los laterales. Ideal para un look casual.",
    id: 1,
});
productList.push({
    name: 'Remera Gold Coast De Mujer 47 Steet',
    price: '8.999',
    image: './images/Remera.png',
    type: tipoProducto[0],
    description: "Remera manga corta de jersey con cuello redondo aplicado. Detalle de dobladillo en ruedo de manga. Largo a la cadera. Molderia cuadrada. Estampa centrada en frente.",
    id: 2,
});
productList.push({
    name: 'Sweater Hoddied Copenhague - Marfil Mujer Desiderata',
    price: '13.455',
    image: './images/Sweater.png',
    type: tipoProducto[0],
    description: "Hoddie de calce holgado, manga larga con lazo para atar.",
    id: 3,
});
productList.push({
    name: 'Camisa Carol Army Wanama Oficial',
    price: '22.990',
    image: './images/Camisa.png',
    type: tipoProducto[0],
    description: "Camisa de calce amplio con charreteras en hombros, con bolsillos en delanteros, acceso por cartera delantera con botones. puños con botón.",
    id: 4,
});
productList.push({
    name: 'Aire Acondicionado Philco split frío/calor 4472 frigorías blanco 220V',
    price: '274.999',
    image: './images/Aire.png',
    type: tipoProducto[1],
    description: "Climatizar tus espacios a lo largo del año es sin duda algo importante para tu comodidad y la de tus seres queridos. Contar con un aire acondicionado con función frío/calor es la mejor decisión. Con este aire Philco conseguí una mejor relación costo-beneficio.",
    id: 5,
});
productList.push({
    name: 'Ventilador de pared y de piso Indelplas IV16 negro con 5 palas, 16" de diámetro 220 V',
    price: '9.508',
    image: './images/Ventilador.png',
    type: tipoProducto[1],
    description: "¡Aire limpio y fresco en tus ambientes! El ventilador Indelplas IV16 es un elemento útil para dar frescura en el hogar. Con su óptimo rendimiento, la sensación térmica disminuirá. Es un aparato práctico, fácil de armar e instalar.",
    id: 6,
});
productList.push({
    name: 'Microondas Grill Samsung MG23F3K3TA negro 23L 220V',
    price: '46.990',
    image: './images/Microondas.png',
    type: tipoProducto[1],
    description: "No pierdas tiempo en la cocina. En simples pasos, podés disfrutar de tus comidas favoritas gracias a la tecnología y evolución de Samsung. El mismo cuenta con recetas preprogramadas para tu comodidad. Cocina fácilmente todo, desde arroz integral hasta pechuga de pollo deshuesada y filetes de salmón a la parrilla, con la garantía de que el resultado será comida fresca y sabrosa.",
    id: 7,
});
productList.push({
    name: 'Lavarropas automático Samsung WW90AA46B inverter silver 9kg 220 V',
    price: '209.999',
    image: './images/Lavarropas.png',
    type: tipoProducto[1],
    description: "Únicamente necesita que se introduzcan los productos de limpieza y se elija el programa deseado. A diferencia de los semiautomáticos, no requiere que estés presente en todas las etapas del proceso, por lo que vas a tener prendas limpias y perfumadas sin esfuerzo.",
    id: 8,
});
productList.push({
    name: 'Heladera Gafa HGF388AFB blanca con freezer',
    price: '174.299',
    image: './images/Heladera.png',
    type: tipoProducto[1],
    description: "Disfrutá de tus alimentos frescos y almacenalos de manera práctica y cómoda en la heladera Gafa, la protagonista de la cocina.",
    id: 9,
});
productList.push({
    name: 'Mesa De Escritorio Maximo Un Cajon Con Bandeja Para Teclado Nogal',
    price: '17.800',
    image: './images/Escritorio.png',
    type: tipoProducto[2],
    description: "La solución para tu casa u oficina está en el escritorio Máximo 100, no ocupa mucho espacio y cabe perfecto tu pc o notebook. Es fácil de armar (incluye manual de instrucciones) y la calidad de los materiales es excelente.",
    id: 10,
});
productList.push({
    name: 'Estanteria Biblioteca Nordica Escandinava Moderna Juvenil E7',
    price: '21.290',
    image: './images/Estanteria.png',
    type: tipoProducto[2],
    description: "El mueble va ARMADO. Por favor tomalo en cuenta al ver cómo ingresarlo a tu domicilio.",
    id: 11,
});
productList.push({
    name: 'Mueble Panel Tv 32 A 50 Modular Rack 18mm Armado Gratis',
    price: '17.990',
    image: './images/Mueble-Tele.png',
    type: tipoProducto[2],
    description: "La publicación corresponde a 1 panel para tv colgante, ¡APTO PARA TV DE HASTA 45 PULGADAS! Melamina 18 mm Cantos en PVC",
    id: 12,
});
productList.push({
    name: 'Sillón Gamer Ergonómico Masajeador Apoya Pie Silla Reclinabl',
    price: '52.249',
    image: './images/Sillon-Gamer.png',
    type: tipoProducto[2],
    description: "// SILLÓN GAMER MASAJEADOR //",
    id: 13,
});
productList.push({
    name: 'Cama Hierro Madera Industrial Caño Estructural Queen',
    price: '85.000',
    image: './images/Cama.png',
    type: tipoProducto[2],
    description: "Cama industrial quuen",
    id: 14,
});
productList.push({
    name: 'Juego de mesa Crazy gorilla Ditoys 611',
    price: '3.620',
    image: './images/Gorilla.png',
    type: tipoProducto[3],
    description: "¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Crazy gorilla vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.",
    id: 15,
});
productList.push({
    name: 'Figura de acción Señor Cara de Papa 27657 de Hasbro Plasyskool',
    price: '4.500',
    image: './images/Cara de Papa.png',
    type: tipoProducto[3],
    description: "Al tener marcadas las articulaciones podrás manejar y acomodar tus figuras como más te guste. Con ellas, vas a poder crear historias en la que los personajes puedan movilizarse y cobrar vida.",
    id: 16,
});
productList.push({
    name: 'Muñeca Barbie Básica Modelo Nuevo T7439',
    price: '4.995',
    image: './images/Barbie.png',
    type: tipoProducto[3],
    description: "Muñeca Barbie Básica Modelo Nuevo T7439",
    id: 17,
});
productList.push({
    name: 'Juego de mesa Ludo matic Habano 1001',
    price: '1.688',
    image: './images/Ludo.png',
    type: tipoProducto[3],
    description: "¡Para aprender y disfrutar jugando! El juego Ludo matic está pensado para desarrollar habilidades y potenciar las capacidades cognitivas y creativas de las y los niños. Ejercitarán el pensamiento y la concentración, a la vez que se divierten con este método de aprendizaje lúdico y relajado.",
    id: 18,
});
productList.push({
    name: 'Peluche Rainbow Friends Amigo Arcoiris 30cm',
    price: '1.869',
    image: './images/Peluche.png',
    type: tipoProducto[3],
    description: "Peluches de los personajes de RAINBOW FRIENDS DEL VIDEOJUEGO DE ROBLOX",
    id: 19,
});
productList.push({
    name: 'Ford Bronco 2.0 T Sport Wildtrak 2023',
    price: '18.612.700',
    image: './images/Bronco.png',
    type: tipoProducto[4],
    description: "La unidades se entregan el mismo dia que se abona el vehiculo, con la mejor atencion, Confiabilidad, Servicio y Gestoria en la actualidad del mercado. Solicite su turno para ver tu vehiculo!!",
    id: 20,
});
productList.push({
    name: 'Stereo Auto Doble Din Pantalla Tactil Mirrorlink Camara Rev',
    price: '20.069',
    image: './images/Stereo.png',
    type: tipoProducto[4],
    description: "Increíble estéreo doble DIN de pantalla de 7 Pulgadas con soporte de definición Full HD 1080p, para ver películas, fotos y tener una conectividad total bluetooth con tus dispositivos.",
    id: 21,
});
productList.push({
    name: 'Batería De Auto Herbo 12x75 Instalación Sin Cargo',
    price: '24.300',
    image: './images/Bateria.png',
    type: tipoProducto[4],
    description: "En caso de requerir la instalación se debe dejar la batería usada según la Ley N° 24051 a favor del medio ambiente.",
    id: 22,
});
productList.push({
    name: 'Pistola De Calor Daewoo 550° 2000w Con Accesorios En Kit',
    price: '8.940',
    image: './images/Pistola de calor.png',
    type: tipoProducto[4],
    description: "Producto nuevo y sellado.",
    id: 23,
});
productList.push({
    name: 'Amoladora Angular Daewoo Daag115-90 115mm 4.1/2 11000rpm 900w 220v',
    price: '16.180',
    image: './images/Amoladora.png',
    type: tipoProducto[4],
    description: "Daewoo ofrece una amplia variedad de líneas de productos, todas ellas específicamente pensadas y diseñadas para brindar la máxima satisfacción.",
    id: 24,
});


renderProducts(productList);



