//Declaracion de Variables

//Icon
const menuEmail = document.querySelector('.navbar-email');
const IconMenu = document.querySelector('.menu');
const CarritoMenu = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const DetailsProduct = document.querySelector('#shoppingcart');
const ContenedorCard = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#ProductDetail');

const imagen = document.querySelector("#infoImages");
const nameProduct = document.querySelector(".name");
const priceProduct = document.querySelector(".price");
const descrProduct = document.querySelector(".description");

//Lista de Productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    descr: 'Bicicleta de lo mejor',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400',
});
productList.push({
    name: 'Computadora Gamer',
    price: 300,
    descr: 'La mejor computadora utilizara para stremear',
    image: 'https://expertopc.com/wp-content/uploads/poner-el-ordenador-en-la-mesa.jpg',
});
productList.push({
    name: 'Mouse Gamer',
    price: 150,
    descr: 'El mejor mouse utilizado en el mercado',
    image: 'https://assets.reedpopcdn.com/g502x_f9QuuM8.jpeg/BROK/thumbnail/1200x1200/quality/100/g502x_f9QuuM8.jpeg',
});

//Eventos de Click
menuEmail.addEventListener('click', toggleDesktopMenu);
IconMenu.addEventListener('click', toggleMobileMenu);
CarritoMenu.addEventListener('click', toggleDetailsMenu);
productDetailCloseIcon.addEventListener('click', togglecloseproduct);

//Funciones
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //Toggle Cambia el estado de visibilidad del elemento HTML
    DetailsProduct.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    DetailsProduct.classList.add('inactive');
    togglecloseproduct();

}

function toggleDetailsMenu(){
    DetailsProduct.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    togglecloseproduct();

}

function openProductDetails(event){
    DetailsProduct.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

    imagen.setAttribute("src", event.target.src);

    // Se busca la descripción del producto en el array a partir de la imagen
    const product = productList.find(item => item.image === event.target.src);

    nameProduct.innerText = product.name;
    priceProduct.innerText = "$" + product.price;
    descrProduct.innerText = product.descr;

}

function togglecloseproduct(){
    productDetailContainer.classList.add('inactive');
}
//Maquetacion de HTML en JS

function renderProductos(arr_prod){
    for(product of arr_prod){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.setAttribute("id", "imagen");
        productImage.addEventListener('click', openProductDetails);

        const ProductoInfoDiv = document.createElement('div');
        ProductoInfoDiv.classList.add('product-info');

        const ParrafoDiv = document.createElement('div');

        const ContenedorParrafo1 = document.createElement('p');
        ContenedorParrafo1.innerText = "$" + product.price;

        const ContenedorParrafo2 = document.createElement('p');
        ContenedorParrafo2.innerText = product.name;

        const FigureProduct = document.createElement('figure');

        const FigureImage = document.createElement('img');
        FigureImage.setAttribute('src', './icons/bt_add_to_cart.svg');

        //Encapsularemos toda la maquetacion como se le corresponde

        //Img in Figure
        FigureProduct.appendChild(FigureImage);

        //P in Div
        ParrafoDiv.append(ContenedorParrafo1, ContenedorParrafo2);

        //Components in Div
        ProductoInfoDiv.append(ParrafoDiv, FigureProduct);

        //Components in Div ProductCard
        productCard.append(productImage,ProductoInfoDiv);

        //Div ProductCard in ContainerCard
        ContenedorCard.appendChild(productCard);
    }
}

renderProductos(productList);
