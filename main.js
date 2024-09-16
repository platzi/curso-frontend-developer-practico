const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
// modal
const cardModal = document.querySelector(".modal");
const cardImgModal = document.querySelector(".modal>.container>.product-img>img");
const closeModal = document.querySelector(".modal>.container>.close");
// modal data
const modalPrice = document.querySelector(".modal>.container>.product-info>.price");
const modalName = document.querySelector(".modal>.container>.product-info>.name");
const modalDescription = document.querySelector(".modal>.container>.product-info>.description");



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){ 
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){ 
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');     

    if(!isMobileMenuClosed){ 
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');     

    if(!isProductDetailClosed){ 
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');      
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
const productList = [];

productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descripcion:"Marcos INNOVA en acero o aluminio Set completo de llantas Timón: Rise bar / Drop bar / Bull horn Relación de coronilla intercambiable Manzanas Flip - Flop"
})
productList.push({
    name: 'Computador',
    price: 520,
    image: 'https://images.pexels.com/photos/11833898/pexels-photo-11833898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion:'Laptop HP 240 G7gris 15" intel Core i7 16GB de RAM 1T SSD, Windows 10 Home'
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion:'Monitor gamer  F22T35 led 22 dark blue gray 100V/240V'
})
productList.push({
    name: 'Reloj',
    price: 400,
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion:'Smartwatch Imilab W11L 1.09 caja de aleación de aluminio rosa, malla rosa de silicona'
})
productList.push({
    name: 'Control',
    price: 120,
    image: 'https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion:'Control joystick inalámbrico Microsoft Xbox Wireless Controller Series X|S carbon black'
})
productList.push({
    name: 'Sofa',
    price: 1200,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion:'Sofá Cama Alemán Plegable 3 Posiciones'
})
productList.push({
    name: 'tenis',
    price: 150,
    image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion:'Tenis Training adidas Grand Court 2.0 - Blanco'
})
productList.push({
    name: 'Balon ',
    price: 80,
    image: 'https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    descripcion:"Balón Fútbol Mundial  Alta Resistencia "
})


function renderProducts(arr) {
    for(product of productList){
        let img = product.image;
        let price = product.price;
        let name = product.name;
        let descripcion = product.descripcion;
        // Creamos el div que contiene todo el producto.
        const productCard = document.createElement('div');
        // Le añadimos una clase al div
        productCard.classList.add('product-card');

        // product = {name, price, image} -> product.image ==> el objeto a crear
        

        // Creamos la etiqueta img y se le da un atributo al src
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', () => {
            cardModal.style.display = "flex";
            cardImgModal.src = img;
            modalPrice.innerText = price;
            modalName.innerText = name;
            modalDescription.innerText = descripcion;
        });
        
        // Creamos el div que contiene la infomacion del producto
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        // Creamos un div dentro del div=>"product-info" que contiene Name y Price del producto
        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice, );
        productInfoDiv.appendChild(productName, );
        
        //Creamos la etiqueta figure dentro del div=> "product-info"
        const productInfoFigure = document.createElement('figure');
        //Creamos la etiqueta img y modificamos su atributo src
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        //Añadimos la etiqueta img dentro de figure
        productInfoFigure.appendChild(productImgCart);

        //añadimos las etiqueas div y figure a el div =>"product-info"
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        //Añadimos la etiqueta img y div => "product-card"
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        // agregamos el div=> "product-card" a el div =>"cards-container"
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList)

function closeModalFunc(){
    closeModal.addEventListener("click", () => {
        cardModal.style.display = "none"
    });
}
closeModalFunc();

/* function openModal(url) {
    cardModal.style.display = "flex";
    cardImgModal.src = url;
} */