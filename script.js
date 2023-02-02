const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');
const productDetails = document.querySelector('#productDetail');
const cambioImgPorProducto = document.getElementById('productDetail');
const items = document.getElementById('count');
const cartContainer = document.querySelector('.my-order-content');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);





function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
        mobileMenu.classList.toggle('inactive');

        closeProductDetailAside()
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); 


    const isProductDetailsClosed = productDetails.classList.contains('inactive');

    if (!isProductDetailsClosed) {
        productDetails.classList.add('inactive');
 
    }
}

function openProductDetailAside() {
    aside.classList.add('inactive');
    productDetails.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetails.classList.add('inactive');
}


function cambiarImgPorProducto(productIndex){
    cleanProductDetailAside();

    const selectedProduct = productList[productIndex];

    const closeButtonContainer = document.createElement('div');
    closeButtonContainer.classList.add('product-details-close');
    closeButtonContainer.setAttribute('onclick', 'closeProductDetailAside()');

    const closeButtonImage = document.createElement('img');
    closeButtonImage.setAttribute('src','./icons/icon_close.png');

    closeButtonContainer.appendChild(closeButtonImage);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+selectedProduct.price;

    const productName = document.createElement('p');
    productName.innerText = selectedProduct.name;

    const productDescription = document.createElement('p');
    productDescription.innerText = selectedProduct.description;

    const productBuy = document.createElement('p');
    productBuy.innerText = selectedProduct.buyNow;

    const productBuys = document.createElement('p');
    productBuys.innerText = selectedProduct.buyNow2;

    const productImage = document.createElement('img');
    productImage.setAttribute('src', selectedProduct.image);

    const addToCardButton = document.createElement('button');
    addToCardButton.classList.add('add-to-cart-button');
    addToCardButton.classList.add('primary-button');
    addToCardButton.setAttribute('onclick', 'addProductToCart('+productIndex+')');
    
    const iconButton = document.createElement('img');
    iconButton.setAttribute('src','./icons/bt_add_to_cart.svg');

    addToCardButton.appendChild(iconButton);
    addToCardButton.innerText ='Add to Cart';

    cambioImgPorProducto.appendChild(closeButtonContainer)
    cambioImgPorProducto.appendChild(productImage);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productName);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(productBuy);
    productInfo.appendChild(productBuys);
    cambioImgPorProducto.appendChild(productInfo);
    cambioImgPorProducto.appendChild(addToCardButton);

}

function cleanProductDetailAside() {
    cambioImgPorProducto.innerHTML = '';
}
function addProductToCart(productIndex) {
    const selectedProduct = productList[productIndex];
    cart.push(selectedProduct);
    console.log(cart);
    updateCartContainer();
}
const cart = []

let total = 0;

function updateCartContainer() {
    cartContainer.innerHTML = '';
    total = 0;
 
    for(product of cart) {

        const shoppingCartDiv = document.createElement('div');
        shoppingCartDiv.classList.add('shopping-cart');

        const shoppingFig =  document.createElement('figure');
        shoppingCartDiv.appendChild(shoppingFig);

        const shoppingImg = document.createElement('img');
        shoppingImg.setAttribute('src', product.image);
        shoppingFig.appendChild(shoppingImg);

        const productName = document.createElement('p');
        productName.innerText = product.name;
        shoppingCartDiv.appendChild(productName)

        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
        total += product.price;
        shoppingCartDiv.appendChild(productPrice)

        const shoppingIcon = document.createElement('img');
        shoppingIcon.setAttribute('src','./icons/icon_close.png');
        shoppingIcon.setAttribute('onclick', 'deleteItem('+product.id+')');
        shoppingCartDiv.appendChild(shoppingIcon);



        cartContainer.appendChild(shoppingCartDiv)
    }  

    const divOrder = document.createElement('div');
    divOrder.classList.add('order');

    const orderParr = document.createElement('p');
        divOrder.appendChild(orderParr);

    const spanOrderTotal= document.createElement('span');
    spanOrderTotal.innerText = 'Total';
    orderParr.appendChild(spanOrderTotal)

    const priceFinal = document.createElement('p');
        priceFinal.innerText = '$' + total;
        
        divOrder.appendChild(priceFinal)
    
    const orderButton = document.createElement('button');
    orderButton.innerText = 'Checkout';
    orderButton.classList.add('primary-button')
    divOrder.appendChild(orderButton);


    cartContainer.appendChild(divOrder);
    cartContainer.appendChild(orderButton);

    const countContainer = document.getElementById('count');
    countContainer.innerText = cart.length;
        
}

function deleteItem(productId) {
    const indexOfItemToDelete = cart.findIndex(item => item.id === productId);

    cart.splice(indexOfItemToDelete, 1);

    updateCartContainer();
}
    

const productList = [];
productList.push({
    id: 1,
    name: 'Marco MOD. Antell',
    price:  490,
    description: 'El toque fresco perfecto para tu espacio. Marco de madera, con fondo metalico y herrajes dorados.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 2,
    name: 'Sillon MOD. Tavari Color Gris',
    price: 5100,
    description: '¡Honra el pasado con estilo! El respaldo capitoneado del sillón Veintisiete le da ese aire vintage que combinará perfectamente con tu casa o departamento. La mezcla de su tapizado y la madera de sus patas lo hacen tan cómodo y único que tus invitados quedarán enamorados.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/6707630/pexels-photo-6707630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 3,
    name: 'Florero decorativo MOD. Mooon Stone ',
    price: 344,
    description: 'La pieza que estabas buscando y no puede faltar en tu decoración. Perfecta para los que les gusta lo único, el florero doble es la pieza que estabas soñando.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:'https://images.pexels.com/photos/8251592/pexels-photo-8251592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"',
});
productList.push({
    id: 4,
    name: 'Perchero MOD. Lena',
    price: 900,
    description: '¡Un toque único de estilo! El perchero de pie Lena cuenta con ese look natural propio del estilo escandinavo. Sus líneas rectas lo vuelven una estructura muy firme y segura, sin dejar de ser muy estético para completar tu decoración.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/4210317/pexels-photo-4210317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 5,
    name: 'Busto MOD. Asia paradisso',
    price: 1400,
    description: 'Toda decoración necesita esa pieza interesante y que llame la atención. Lógralo con la figura tin. Luce como ninguna otra figura de decoración.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/4203101/pexels-photo-4203101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 6,
    name: 'Sillon MOD. Yura  Color Esmeralda ',
    price: 6999,
    description: 'Haz que tu espacio sea único y agrega color en cualquier habitación con el sillón Yura color verde, asiento tapizado en 100% poliéster tipo terciopelo y patas metálicas de color dorado. Inclúyelo en tu espacio y dará ese toque de elegancia y confort que estás buscando. Encuentra todo lo que necesitas en Tamarindo y sigue armando tu espacio como a ti te gusta.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/6373660/pexels-photo-6373660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 7,
    name: 'Lampara De Vidrio Blanco Con Marco De Latón MOD. Queensland',
    price: 540,
    description: '¡Una opción perfecta para iluminar tus espacios! La lámpara colgante dorada tiene una imagen increíble para darle más vida a tu decoración',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/6186511/pexels-photo-6186511.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productList.push({
    id: 8,
    name: 'Sillon MOD. Rig',
    price: 6400,
    description: '¡Color y gran diseño vintage! El sillón Rig juega muy bien con sus elementos para crear una estructura del estilo vintage que alegrará tu decoración. Su capitoneado y patas de madera sólida combinan muy bien en un asiento muy cómodo.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/3965512/pexels-photo-3965512.jpeg?auto=compress&cs=tinysrgb&w=1600",
});
productList.push({
    id: 9,
    name: 'Juego silla y mesa de madera strell MOD. Luxith ',
    price: 8100,
    description: 'De solo verlo ya sabes que tiene estilo, personalidad, pero también luce divertido. No dudes en tenerlo en tu espacio.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/6368951/pexels-photo-6368951.jpeg",
});
productList.push({
    id: 10,
    name: 'Sillon Gris MOD. Lav ',
    price: 9000,
    description: 'Si buscas algo discreto, pero increíblemente cómodo ¡el sofá Lav es para ti! Decídete por su tapizado con apariencia de lino que da frescura, y su respaldo con cojines acolchonados que te abrazarán para quitar la tensión de un día pesado de trabajo. El estilo contemporáneo armoniza perfectamente con una sala sencilla. ¡Un sofá esencial para descansar!',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/4846432/pexels-photo-4846432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 11,
    name: 'Mesa de centro MOD. Stan ',
    price: 3000,
    description: '¡Dale el toque hogareño a tu sala! La sencillez de la mesa de centro Stan demuestra que menos, es más. Su estilo escandinavo aprovecha su acabado con chapa de nogal para dar esa sensación de calor de hogar. Será un gran complemento.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/6621078/pexels-photo-6621078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 12,
    name: 'Sillon doble MOD. Veintiséis',
    price: 5400,
    description: 'Un sillón cómodo, sencillo y versátil. ¡Increíble! El sillón Veintiséis tiene todas las características para aprovechar al máximo el espacio de tu sala, departamento u oficina, aportando estilo. El asiento tapizado con apariencia y tacto de lino y sus patas de acero inoxidable le dan, al mismo tiempo, frescura y durabilidad.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 13,
    name: 'Sillon individual MOD. Drul',
    price: 7500,
    description: 'El sillón Drul luce increíble, divertido, y muy cómodo. Agrégalo a tu espacio y siente como se transforma. Su mecanismo giratorio la vuelven muy especial. Para los que les gusta lo diferente.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/5490306/pexels-photo-5490306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 14,
    name: 'Marco Fotografico MOD. Klints',
    price: 500,
    description: 'El portarretrato ideal es el que le da más vida a tus fotos. Elije el modelo perfecto para ti de nuesta amplia colección de accesorios para enmarcar tus recuerdos.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/7318973/pexels-photo-7318973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 15,
    name: 'Biombo de madera Gris y Negro MOD. Esri ',
    price: 2000,
    description: 'Todo espacio luce más amplio con un buen biombo decorativo. Con el modelo Esri tendrás estilo y una pieza increíble que todos amarán.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/6186514/pexels-photo-6186514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 16,
    name: 'Juego de Cuadro y banca MOD. Magic Woods ',
    price: 3150,
    description: '¡Estilo y comodidad como nunca lo habías pensado! tiene un natural diseño contemporáneo con una estructura de madera, que además de resistente, es muy decorativa, hará que se convierta en tu lugar preferido.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800. MXN.',
    image:"https://images.pexels.com/photos/4993081/pexels-photo-4993081.jpeg",
});
productList.push({
    id: 17,
    name: 'Espejo Grande MOD. Lev ',
    price: 1100,
    description: '¡El complemento perfecto para reflejar tu estilo único! El espejo con marco LEV tiene un diseño escandinavo que explota en luz y energía. Su toque de nogal en color gris le da una imagen especial que querrás tener.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/8888147/pexels-photo-8888147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    id: 18,
    name: 'Lampara MOD. Quest ',
    price: 900,
    description: 'Una lámpara de mesa con una personalidad diferente para ti. Su diseño combina la madera con detalles de metal para darle una imagen natural, llena de vida y perfecta para tu espacio.',
    buyNow: 'Elige planes de 6, 12 o 18 meses.',
    buyNow2: ' Aplica en compras con Tickets mayores a $ 1,800 MXN.',
    image:"https://images.pexels.com/photos/12908581/pexels-photo-12908581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});



function renderProducts(arr) {
    for (const [index,product] of arr.entries()) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('onclick', 'cambiarImgPorProducto('+index+')');
     
         //PRODUCT = {NAME, PRICE, IMAGE} --> product.image
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
         const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCard);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardContainer.appendChild(productCard);
     }
}
renderProducts(productList);