const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetail_img = document.querySelector('.productDetail_img');
const productDetail_price = document.querySelector('.productDetail_price');
const productDetail_message = document.querySelector('.productDetail_message');
const productDetail_name = document.querySelector('.productDetail_name');
const closeDetails = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
mobileMenu.addEventListener("mouseout", outMobil);
desktopMenu.addEventListener("mouseout", outDesktop);
aside.addEventListener("mouseout", outAside);

function toggleDesktopMenu() {
    //desktopMenu.classList.toggle('inactive');
    if (mobileMenu.classList.contains('inactive') || aside.classList.contains('inactive') || productDetail.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
        aside.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // mobileMenu.classList.toggle('inactive');
    if (desktopMenu.classList.contains('inactive') || aside.classList.contains('inactive') || productDetail.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
        aside.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    if (desktopMenu.classList.contains('inactive') || mobileMenu.classList.contains('inactive') || productDetail.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

function outMobil() {
    mobileMenu.classList.toggle('inactive');
}
function outDesktop() {
    desktopMenu.classList.toggle('inactive');
}
function outAside() {
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Hotcakes',
    price: 45,
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    class: "photo1", 
    message: '¡Deléitate con la perfección de nuestros hotcakes! 🥞✨ Esponjosos, dorados y llenos de sabor. ¡Una experiencia única en cada bocado! 😋 ¡Te esperamos para disfrutarlos juntos!'
});
productList.push({
    name: 'Potato Salad',
    price: 75,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    class: "photo2", 
    message: '¡Sorprende tu paladar con nuestra Ensalada de Papas! 🥔🌿 Ingredientes frescos y una mezcla única de sabores se combinan en cada bocado. ¡Una deliciosa explosión de frescura que no querrás perderte! 😋🥗'
});
productList.push({
    name: 'Roasted skewer',
    price: 135,
    image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    class: "photo3", 
    message: 'Descubre la irresistible fusión de sabores en nuestras Brochetas de Carne. 🍢🔥 Jugosas y marinadas a la perfección, estas brochetas son el deleite perfecto para los amantes de la carne. ¡Una experiencia que satisfará tus antojos más exigentes! '
});
productList.push({
    name: 'Fruit with yogurt',
    price: 56,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    class: "photo4", 
    message: 'Refresca tu día con nuestro Platillo de Fruta con Yogurt. 🍓🍍 Una mezcla saludable y deliciosa que te transportará a la frescura de cada mordida. ¡La combinación perfecta entre dulzura y cremosidad para un placer ligero y delicioso! 😋🍇'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');


        productCard.innerHTML = `
        <img src="${product.image}" alt="Product Image" class="${product.class}">
        <div class="product-info">
            <div>
                <p class="price">$${product.price}.00</p>
                <p class="name">${product.name}</p>
                <p class='message inactive'>${product.message}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="Add to Cart">
            </figure>
        </div>
    `;
    cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);



/*Define los detalles de la pestalla de cada producto que muestra sus caracteristicas*/
cardsContainer.addEventListener("click", details);

function details(e) {
    if (mobileMenu.classList.contains('inactive') || aside.classList.contains('inactive') || desktopMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
        aside.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    productDetail.classList.remove('inactive')
    productDetail_img.src = e.target.src;

    // Obtengo el contendor padre para poder acceder a la clase .price
    var contenedor = e.target.parentElement;
    // Buscamos el elemento con la clase 'price' dentro del contenedor padre(contenedor)
    var precioElement = contenedor.querySelector('.price');
    var messageElement = contenedor.querySelector('.message');
    var nameElement = contenedor.querySelector('.name');
    // Le cambiamos el valor del precio a nuestra seccion de 'productDetail_price'
    productDetail_price.innerText = precioElement.innerText;
    productDetail_message.innerText = messageElement.innerText;
    productDetail_name.innerText = nameElement.innerText;
}

/* Cierra la ventana que muestra los detalles de cada producto */
closeDetails.addEventListener('click', closeDetail);

function closeDetail(){
    productDetail.classList.add('inactive')
}