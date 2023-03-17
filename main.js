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
    price: 100,
    descr: 'Cuenta con un cuadro de aluminio resistente y ligero, frenos de disco para mayor seguridad en cualquier tipo de terreno',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400',
});
productList.push({
    name: 'Computadora Gamer',
    price: 500,
    descr: 'Esta computadora gamer es perfecta para aquellos que buscan una experiencia de juego de alta calidad.',
    image: 'https://expertopc.com/wp-content/uploads/poner-el-ordenador-en-la-mesa.jpg',
});
productList.push({
    name: 'Mouse Gamer',
    price: 80,
    descr: 'Mouse Gamer tiene la mejor sensibilidad que otros',
    image: 'https://assets.reedpopcdn.com/g502x_f9QuuM8.jpeg/BROK/thumbnail/1200x1200/quality/100/g502x_f9QuuM8.jpeg',
});
productList.push({
    name: 'Guitarra ElectroAcústica',
    price: 120,
    descr: 'Es una excelente guitarra para empezar como principiante',
    image: 'https://murosdeabsenta.com/wp-content/uploads/2020/12/aprender-a-tocar-la-guitarra-e1640366518607.jpg',
});
productList.push({
    name: 'Piano',
    price: 150,
    descr: 'Este piano es una excelente opción para aquellos que buscan un instrumento de alta calidad y un sonido impresionante. Con una construcción sólida y una cuidadosa selección de materiales',
    image: 'https://www.casioteclados.com/wp-content/uploads/2020/12/pianos-hibridos.jpg',
});
productList.push({
    name: 'Violin',
    price: 200,
    descr: 'Este instrumento es una joya para cualquier músico que busque un violín de calidad y con un sonido excepcional.',
    image: 'https://musicopolix.com/blog/wp-content/uploads/2022/04/tipos-de-violines-portada.jpg',
});
productList.push({
    name: 'Muebles de Sala',
    price: 400,
    descr: 'Sofá de lujo ligero de los muebles del sofá de 3PCS',
    image: 'https://m.media-amazon.com/images/I/41PtgQtlXtS._SL500_.jpg',
});
productList.push({
    name: 'Chucky',
    price: 200,
    descr: 'Es uno de los juguetes más utilizados para películas de terror',
    image: 'https://juguetesdecoleccion.com/wp-content/uploads/munecos-de-chucky.jpg',
});
productList.push({
    name: 'Ukelele',
    price: 100,
    descr: 'Instrumento utilizado para canciones suaves',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Guitare_oukelele_et_charango.jpg/275px-Guitare_oukelele_et_charango.jpg',
});
productList.push({
    name: 'Mochila Adidas Branca e Preta',
    price: 40,
    descr: 'La mejor mochila para que pongas tus cuadernos y tus pertenencias',
    image: 'https://photos.enjoei.com.br/mochila-adidas-branca-e-preta/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy83Mjg2NTc5LzRhMWVlOGViMDcwYjdlOTc3NTQyOGU3Y2EwZWRmM2Y5LmpwZw',
});
productList.push({
    name: 'Refrigeradora Indurama',
    price: 600,
    descr: 'Una de las mejores refrigeradoras para congelar todos tus productos',
    image: 'http://digitalstore.com.ec/web/image/product.template/1945/image_1024?unique=8b0bb56',
});
productList.push({
    name: 'Carro Marvel de HotWheels',
    price: 25,
    descr: 'El Mejor carro veloz para hacer uso de sus funciones',
    image: 'https://novomundo.vteximg.com.br/arquivos/ids/908494-1000-1000/PRODUTO.jpg?v=636035953224470000',
});
productList.push({
    name: 'Laptop I7 Gaming',
    price: 350,
    descr: 'Excelente Laptop para hacer uso de sus trabajos universitarios y ser un jugador profesional gaming',
    image: 'https://cdn.cs.1worldsync.com/syndication/feeds/hp/inline-content/KV/B/B/8/6/D/BB86DF4F24BC2C798758311848D7CEB36CBCF42E_gallery.jpg',
});
productList.push({
    name: 'Arduino',
    price: 70,
    descr: 'Excelente estado y uso para el funcionamiento electrónico',
    image: 'https://www.fundacionaquae.org/wp-content/uploads/2017/02/arduino.jpg',
});
productList.push({
    name: 'Bateria PDP',
    price: 200,
    descr: 'Instrumento realizado con los metales de mejor excelencia',
    image: 'https://www.importmusic.ec/wp-content/uploads/2020/09/PDMA2215BK8.jpg',
});
productList.push({
    name: 'Gorra Nike Pipa',
    price: 60,
    descr: 'Unas de las gorras mayor utilizadas por la industria de influencers',
    image: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/856/941/products/image-41-d4028867238320ec0016612267438839-640-0.jpg',
});
productList.push({
    name: 'Televisor 50°',
    price: 850,
    descr: 'Excelente Telvisor para poder ver las mejores películas',
    image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/05/nokia-smart-tv-5000a-50-analisis-opinion-2711303.jpg?tf=3840x',
});
productList.push({
    name: 'Impresora Epson L4260',
    price: 400,
    descr: 'Unas de las mejores impresoras para el uso de escaner y copias nítidas',
    image: 'https://digitalserver.com.ec/wp-content/uploads/2023/02/581202206091147540238.jpg',
});
productList.push({
    name: 'Barbie Nueva Generacion',
    price: 10,
    descr: 'Juguete de niña que ha sido la inspiracion para nuevas generaciones',
    image: 'https://media.vogue.mx/photos/619800d355e89a26388f0bb0/16:9/w_1280,c_limit/barbie-ejecutiva.jpg',
});
productList.push({
    name: 'Minoxidil',
    price: 50,
    descr: 'El mejor tratamiento de crecimiento de vellos y cabello',
    image: 'https://globalmedicalgroupint.com/userfiles/2022/08/MINOXIDIL-FORTE-SOLUCION-TOPICA-5-FRASCO-X-60-ML-TQ.jpg',
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
