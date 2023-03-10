//Declaracion de Variables

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const IconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const CarritoMenu = document.querySelector('.navbar-shopping-cart');
const DetailsProduct = document.querySelector('.product-detail');
const ContenedorCard = document.querySelector('.cards-container');

//Lista de Productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400',
});
productList.push({
    name: 'Computadora Gamer',
    price: 300,
    image: 'https://expertopc.com/wp-content/uploads/poner-el-ordenador-en-la-mesa.jpg',
});
productList.push({
    name: 'Mouse Gamer',
    price: 150,
    image: 'https://assets.reedpopcdn.com/g502x_f9QuuM8.jpeg/BROK/thumbnail/1200x1200/quality/100/g502x_f9QuuM8.jpeg',
});

//Eventos de Click
menuEmail.addEventListener('click', toggleDesktopMenu);
IconMenu.addEventListener('click', toggleMobileMenu);
CarritoMenu.addEventListener('click', toggleDetailsMenu);

//Funciones
function toggleDesktopMenu(){
    const DetailsProductClosed = DetailsProduct.classList.contains('inactive');

    if (!DetailsProductClosed){
        DetailsProduct.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const DetailsProductClosed = DetailsProduct.classList.contains('inactive');

    if (!DetailsProductClosed){
        DetailsProduct.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleDetailsMenu(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!mobileMenuClosed || !desktopMenuClosed){
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }

    DetailsProduct.classList.toggle('inactive');
}

//Maquetacion de HTML en JS

function renderProductos(arr_prod){
    for(product of arr_prod){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

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
