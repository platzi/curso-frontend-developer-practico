// vamos a funcionar los distintos elementos

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const mainContainer = document.querySelector(".main-container");

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

// constante para navegar en el menu
const menusRopa = document.querySelector('.ropa');
const menusJoyeria = document.querySelector('.joyeria');
const menusPinturas = document.querySelector('.pinturas');
const menusAdornos = document.querySelector('.adornos');
const menusOtros = document.querySelector('.otros');

navEmail.addEventListener("click",toggleDesktopMenu);
menuIcon.addEventListener("click",toggleMobileMenu);
shoppingCart.addEventListener("click",toggleProductDetail);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

// escuchar los clicks para navegar en el menu

//enable & disable desktop menu while also desibling the other menus
function toggleDesktopMenu() {
    console.log("click");
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
}

//enable & disable mobile menu while also desibling the other menus
function toggleMobileMenu() {
    console.log("click");
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
}

//enable & disable product detail while also desibling the other menus
function toggleProductDetail() {
    console.log("click");
    shoppingCartContainer.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
}

//opens and close the product detail with a click
function openProductDetailaside() {
    console.log("click");
    productDetailContainer.classList.toggle('inactive');
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
}

console.log("JS funcionando");

//closes the product detail with a click
function closeProductDetailAside() {
    console.log("click");
    productDetailContainer.classList.add('inactive');
}

console.log("JS funcionando");


// allows the input of new products and its characteristics

//Ropa
const productListRopa = [];
productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

productListRopa.push({
    name: 'Chal Tradicional',
    price: 120,
    image: "https://p1.pxfuel.com/preview/471/230/482/women-mexico-poverty-chatina.jpg",
});

//Joyería
const productListJoyeria = [];
productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

productListJoyeria.push({
    name: 'Máscara de Plata',
    price: 1000,
    image: "https://e0.pxfuel.com/wallpapers/322/665/desktop-wallpaper-ms-mask-blue-jewel-feathers-mardi-gras.jpg",
});

//Pinturas
const productListPinturas = [];
productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

productListPinturas.push({
    name: 'Cuadro Dos Mundos',
    price: 75,
    image: "https://e0.pxfuel.com/wallpapers/605/85/desktop-wallpaper-azteca-quetzalcoatl.jpg",
});

//Adornos
const productListAdornos = [];
productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

productListAdornos.push({
    name: 'Calendario Solar',
    price: 50,
    image: "https://e0.pxfuel.com/wallpapers/925/866/desktop-wallpaper-maya-calendar-mayan.jpg",
});

//Otros
const productListOtros = [];
productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

productListOtros.push({
    name: 'Manualidad de Piedra',
    price: 20,
    image: "https://e1.pxfuel.com/desktop-wallpaper/813/328/desktop-wallpaper-aztecs-azteca.jpg",
});

// función para renderizar ropa

const cardsContainerRopa = document.createElement('div');
cardsContainerRopa.classList.add('card-container-ropa'); 

function renderProductsRopa(arr) {
    
    for (product of arr) {
        
        // product ={name, price, image} -> product.image
        const productCardRopa = document.createElement('div');
        productCardRopa.classList.add('product-card'); 
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardRopa.append(productImg, productInfo);
    
        cardsContainerRopa.appendChild(productCardRopa);

        mainContainer.appendChild(cardsContainerRopa);

        productCardRopa.classList.add('inactive');

        //shows the product in the cathegory "Ropa"

        menusRopa.addEventListener('click',toggleMenuRopa);

        function toggleMenuRopa() {
            console.log("click");
            productCardRopa.classList.toggle('inactive');
            productCardJoyeria.classList.add('inactive');
            productCardPinturas.classList.add('inactive');
            productCardAdornos.classList.add('inactive');
            productCardOtros.classList.add('inactive');
        }
    }
    
}

// función para renderizar joyería

const cardsContainerJoyeria = document.createElement('div');
cardsContainerJoyeria.classList.add('card-container-joyeria'); 

function renderProductsJoyeria(arr) {
    
    for (product of arr) {

        const productCardJoyeria = document.createElement('div');
        productCardJoyeria.classList.add('product-card');  

        // product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardJoyeria.append(productImg, productInfo);
    
        cardsContainerJoyeria.appendChild(productCardJoyeria);

        mainContainer.appendChild(cardsContainerJoyeria);

        productCardJoyeria.classList.add('inactive');   
    
        //shows the product in the cathegory "Joyeria"
    
        menusJoyeria.addEventListener('click',toggleMenuJoyeria);
    
        function toggleMenuJoyeria() {
            console.log("click");
            productCardJoyeria.classList.toggle('inactive');
            productCardRopa.classList.add('inactive');
            productCardJoyeria.classList.toggle('inactive');
            productCardPinturas.classList.add('inactive');
            productCardAdornos.classList.add('inactive');
            productCardOtros.classList.add('inactive');  
        }
    }
    
}

// función para renderizar pinturas

const cardsContainerPinturas = document.createElement('div');
cardsContainerPinturas.classList.add('card-container-pinturas'); 

function renderProductsPinturas(arr) {
    
    for (product of arr) {

        const productCardPinturas = document.createElement('div');
        productCardPinturas.classList.add('product-card');  

        // product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardPinturas.append(productImg, productInfo);
    
        cardsContainerPinturas.appendChild(productCardPinturas);

        mainContainer.appendChild(cardsContainerPinturas);
    
        productCardPinturas.classList.add('inactive');  
    
        //shows the product in the cathegory "Pinturas"
    
        menusPinturas.addEventListener('click',toggleMenuPinturas);
    
        function toggleMenuPinturas() {
            console.log("click");
            productCardPinturas.classList.toggle('inactive');  
            productCardRopa.classList.add('inactive');
            productCardJoyeria.classList.add('inactive');
            productCardPinturas.classList.toggle('inactive');
            productCardAdornos.classList.add('inactive');
            productCardOtros.classList.add('inactive'); 
        }
    }

}

// función para renderizar adornos

const cardsContainerAdornos = document.createElement('div');
cardsContainerAdornos.classList.add('card-container-adornos'); 

function renderProductsAdornos(arr) {
    
    for (product of arr) {
    
        const productCardAdornos = document.createElement('div');
        productCardAdornos.classList.add('product-card'); 

        // product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardAdornos.append(productImg, productInfo);
    
        cardsContainerAdornos.appendChild(productCardAdornos);

        mainContainer.appendChild(cardsContainerAdornos);

        productCardAdornos.classList.add('inactive');
    
        //shows the product in the cathegory "Adornos"
    
        menusAdornos.addEventListener('click',toggleMenuAdornos);
    
        function toggleMenuAdornos() {
            console.log("click");
            productCardAdornos.classList.toggle('inactive');
            productCardRopa.classList.add('inactive');
            productCardJoyeria.classList.add('inactive');
            productCardPinturas.classList.add('inactive');
            productCardAdornos.classList.toggle('inactive');
            productCardOtros.classList.add('inactive');
        }
    }

}

// función para renderizar otros

const cardsContainerOtros = document.createElement('div');
cardsContainerOtros.classList.add('card-container-otros'); 

function renderProductsOtros(arr) {
    
    for (product of arr) {

        const productCardOtros = document.createElement('div');
        productCardOtros.classList.add('product-card'); 
    
        // product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardOtros.append(productImg, productInfo);
    
        cardsContainerOtros.appendChild(productCardOtros);

        mainContainer.appendChild(cardsContainerOtros);
    
        productCardOtros.classList.add('inactive');    
    
        //shows the product in the cathegory "Otros"
    
        menusOtros.addEventListener("click",toggleMenuOtros);
    
        function toggleMenuOtros() {
            console.log("click");
            productCardOtros.classList.toggle('inactive');    
            productCardRopa.classList.add('inactive');
            productCardJoyeria.classList.add('inactive');
            productCardPinturas.classList.add('inactive');
            productCardAdornos.classList.add('inactive');
            productCardOtros.classList.toggle('inactive');
        }
    }
 
}

renderProductsRopa(productListRopa);
renderProductsJoyeria(productListJoyeria);
renderProductsPinturas(productListPinturas);
renderProductsAdornos(productListAdornos);
renderProductsOtros(productListOtros);

/*
for (product of productListRopa) {
    console.log(product.name);
}

for (product in productListRopa) {
    console.log(product);
}
*/

/*
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
*/

/*
const validacion = false;

switch (validacion) {
    case menusRopa.classList.contains('off'):
        
        break;
    case menusJoyeria.classList.contains('off'):
        
        break;
    case menusPinturas.classList.contains('off'):
        
        break;
    case menusAdornos.classList.contains('off'):
        
        break;
    case menusOtros.classList.contains('off'):
        
        break;
    break;
}
*/

/*
function menuProductos() {
    if(menusRopa.classList.contains('off') == false) {
        console.log (menusRopa.classList.contains('off') == false);
        renderProducts(productListRopa);
        return;
    } else if(menusJoyeria.classList.contains('off') == false) {
        console.log (menusJoyeria.classList.contains('off') == false);
        renderProducts(productListJoyeria);
        return;
    } else if(menusPinturas.classList.contains('off') == false){
        renderProducts(productListPinturas);
        return;
    } else if(menusAdornos.classList.contains('off') == false){
        renderProducts(productListAdornos);
        return;
    } else if(menusOtros.classList.contains('off') == false){
        renderProducts(productListOtros);
        return;
    };

}

menuProductos();
*/