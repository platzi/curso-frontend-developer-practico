const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerIcon = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailImg = document.querySelector('#img_product');
const productDetailPrice = document.querySelector('#product_price');
const productDetailName = document.querySelector('#product_name');
const productDetailDescription = document.querySelector('#product_descript');
const filterDarker = document.querySelector(".darken");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerIcon.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", toggleCartAside);
productDetailCloseIcon.addEventListener("click",closeProductDetailAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    filterDarker.classList.add("inactive");
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    filterDarker.classList.add("inactive");
}

function toggleCartAside(){
    shoppingCartContainer.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    filterDarker.classList.add("inactive");
    filterDarker.classList.add("inactive");
} 
function openProductDetailAside (index){
    const product = productList[index];
    productDetailContainer.classList.remove("inactive"); 
    productDetailImg.setAttribute("src", event.target.src);
    productDetailPrice.innerText = "$" + product.price;
    productDetailName.innerText = product.name;
    productDetailDescription.innerText = product.descript;
    filterDarker.classList.remove("inactive");
}
function closeProductDetailAside () {
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    filterDarker.classList.add("inactive");
}

const productList = [];
productList.push({
    name:"Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descript: "Our MTB 29er is meticulously crafted to deliver top-tier performance. The 29-inch wheels roll over obstacles with ease, providing improved stability and control, especially on rough terrains. The lightweight but durable aluminum frame ensures agile handling while absorbing shocks, allowing you to tackle challenging trails without hesitation."
});
productList.push({
    name:"Pantalla",
    price: 120,
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descript: "Whether you're setting up a new workstation, expanding your gaming rig, or upgrading your entertainment center, our 25-inch used monitor is a cost-effective way to improve your setup."
});
productList.push({
    name:"Toyota FJ 80",
    price: 1000,
    image: "https://images.pexels.com/photos/11756872/pexels-photo-11756872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    descript: "Take on the wildest terrains with confidence. This FJ Model 80 with Hellcat power boasts superior off-road capabilities, including impressive ground clearance, four-wheel drive, and advanced suspension, making it unstoppable in the great outdoors."
});
productList.push({
    name:"Yamaha Dt 200",
    price: 500,
    image: "https://i.ebayimg.com/images/g/GTwAAOSwopRYm1cI/s-l1600.jpg",
    descript:"The Yamaha DT 200 in white and pink is designed to appeal to riders of all levels of experience. It's an excellent choice for both beginners looking for a stylish ride and seasoned riders seeking a reliable, eye-catching companion."
});
productList.push({
    name:"iphone",
    price: 1200,
    image: "https://images.pexels.com/photos/3036882/pexels-photo-3036882.jpeg",
    descript: "The Red iPhone is a true showstopper. Its sleek, alluring design in vibrant red is a testament to Apple's commitment to aesthetics and innovation. It's not just a phone; it's a fashion accessory."
});

function renderProducts(arr){
    // El siguiente bloque de código es un bucle 'for' que se utiliza para iterar a través de un arreglo de productos.
// Este bucle permite procesar cada elemento del arreglo 'arr' de manera individual.

// La estructura del bucle 'for' es la siguiente:
// - `let i = 0;` Inicializa una variable 'i' que actuará como contador, comenzando en 0.
// - `i < arr.length;` Establece la condición bajo la cual el bucle se ejecutará. Mientras 'i' sea menor que la longitud del arreglo 'arr', el bucle continuará ejecutándose.
// - `i++` Es la expresión que se ejecuta después de cada iteración. Incrementa el valor de 'i' en 1 después de procesar cada elemento.

// Dentro del bucle 'for', se realiza lo siguiente:
// - `const product = arr[i];` Esta línea declara una constante llamada 'product' y la iguala al elemento en la posición 'i' del arreglo 'arr'.
//   Esto significa que en cada iteración, 'product' contendrá un elemento de la lista de productos, permitiendo que se realicen acciones específicas en cada uno de ellos.

// En resumen, este bucle 'for' recorre el arreglo 'arr' elemento por elemento, permitiendo el procesamiento individual de cada producto almacenado en el arreglo.
    for (let i= 0; i < arr.length; i++) {
        const product = arr[i];
        const productCard = document.createElement("div");
// El método classList.add se utiliza para agregar una o varias clases a un elemento HTML en el DOM (Modelo de Objetos del Documento).

        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.image);
// La siguiente línea de código se utiliza para agregar un evento de clic a la imagen de cada producto en la función de renderizado.
// Cuando se hace clic en una imagen de producto, se llama a la función openProductDetailAside con el índice del producto como argumento.
// Esto asegura que la descripción y los detalles correctos del producto se muestren cuando se abre el detalle del producto.
        productImg.addEventListener("click",() => openProductDetailAside(i));
// Desglose de la línea:
// - `productImg.addEventListener("click", ...)` agrega un evento de clic a la imagen del producto.
// - `() => openProductDetailAside(i)` es una función de flecha que se ejecuta cuando se hace clic en la imagen.
// - `i` es el índice del producto actual en el bucle de renderizado.
// - `openProductDetailAside(i)` llama a la función openProductDetailAside con el índice como argumento.

// Esta estructura garantiza que se capture el índice correcto del producto y se pase a la función openProductDetailAside, lo que permite mostrar los detalles correctos del producto en el detalle del producto.  
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice= document.createElement("p");
// La propiedad innerText se utiliza para obtener o establecer el contenido de texto de un elemento en el DOM (Modelo de Objetos del Documento).
// A diferencia de innerHTML, innerText solo devuelve el texto visible dentro del elemento, sin incluir etiquetas HTML.

        productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement("p");
        productName.innerText =  product.name ;

// El método appendChild se utiliza para agregar un elemento como hijo al final de otro elemento dentro del DOM (Modelo de Objetos del Documento).

// Se crean y agregan elementos HTML al DOM para construir una tarjeta de producto en un contenedor de tarjetas.
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
};
renderProducts(productList);