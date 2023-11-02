const menuEmail = document.querySelector('.navbar-email'); //--------------------------------->Menu email
const desktopMenu = document.querySelector('.desktop-menu');//-------------------------------->Menu email - Desplegable
const mobileIconMenu = document.querySelector('.menu');//------------------------------------->Menu mobile - Icon
const mobileMenu = document.querySelector('.mobile-menu');//---------------------------------->Menu mobile -Desplegable
const productDetailCloseIcon = document.querySelector('.product-detail-close');//------------->Modal - boton close
const productDetailContainer = document.querySelector('#productDetail');//-------------------->Modal - desplegable contenido del modal
const modal = document.querySelector('.modal');//--------------------------------------------->Modal - div que contiene al modal.
const modalContent = document.querySelector('.modal-content');//------------------------------>Modal - contenido del modal
const menuShoppingCartIcon = document.querySelector('.navbar-shopping-cart');//--------------->Carrito -icon
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');//------------->Carrito - desplegable
const cardsContainer = document.querySelector('.cards-container');//-------------------------->Productos - contenedor de todos los productos
const container = document.querySelector('.container');//------------------------------------->Resto modal - contenido bloqueado cuando se abre el modal
const iconoAgregar = document.querySelector('.agregar-carro');
const productDetail = document.querySelector('.product-detail');
const productCounter = document.querySelector('.product-counter');

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);//------------------>Evento que cierra el modal


function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive'); 

    modal.className = "modal is-visuallyHidden";
    setTimeout(function() {
        container.className = "container is-blurred";
        modal.className = "modal";
    }, 100);
    container.parentElement.className = "modal-open";
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');

    modal.className = "modal is-hidden is-visuallyHidden";
    container.className = "";
    container.className = "main-container";
    container.parentElement.className = "";
}

{/* <div class="shopping-cart">
<figure>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="bike">
</figure>
<p>Bike</p>
<p>$30,00</p>
<div class="img-close">
    <img src="./icons/icon_close.png" alt="close" class="img-close">
</div>

</div> */}

function addProduct(evt){
    //contador del carrito .-
    const numberProductCounter = productCounter.textContent;
    const counter = parseFloat(numberProductCounter);
    const totalCounter = counter +1;
    productCounter.innerText = totalCounter;
    const selectedProduct = searchProduct(evt.currentTarget.id);  
    const cartItem = document.createElement('div');
    cartItem.classList.add('shopping-cart');
    console.log(selectedProduct)
    const productImage = document.createElement('figure');
    const imageCart = document.createElement('img');
    imageCart.src = selectedProduct.image;
    imageCart.alt = selectedProduct.name;
    productImage.appendChild(imageCart);

    const productNameOrder = document.createElement('p');
    productNameOrder.innerHTML = selectedProduct.name;

    const productPriceOrder = document.createElement('div');
    productPriceOrder.innerText = "$" + selectedProduct.price;

    const removeButtonOrder = document.createElement('div');
    const removeIconOrder = document.createElement('img');
    removeIconOrder.src = './icons/icon_close.png';
    removeIconOrder.alt = 'close';
    removeButtonOrder.classList.add('img-close');
    removeButtonOrder.appendChild(removeIconOrder);

    cartItem.appendChild(productImage);
    cartItem.appendChild(productNameOrder);
    cartItem.appendChild(productPriceOrder);
    cartItem.appendChild(removeButtonOrder);

    const orderContainer = document.querySelector('.my-order-content');
    orderContainer.insertBefore(cartItem, orderContainer.lastElementChild);

    console.log('addProduct function is called with index:', evt.currentTarget.id);
}

function setupProductClickHandlers() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((productCard, index) => {
        productCard.addEventListener('click', function () {
            // Llama a la función para agregar el producto al carrito con el producto específico de productList
            addProductToCart(productList[index]);
        });
    });
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.className = "modal is-hidden";
        modal.className = "";
        container.className = "main-container";
        container.parentElement.className = "";
        modal.classList.add('inactive');
    }
}

function searchProduct(id){
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].id == id) return productList[i] ;
    }
    return null;
}

const productList = [];

productList.push({
    id:"mla0000000001",
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: function () {
        return  `${this.name} is a versatile, high-quality product that adapts perfectly to your needs. Designed with durability and performance in mind, this product offers an exceptional combination of functionality and style.`
    },
    category: 'others'
});
productList.push({
    id:"mla0000000002",
    name: 'T-shirt',
    price: 150,
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/153/691/products/16b25046-a824-4582-910f-dd652b35e3581-96f315f88eb863c3bf16771081513352-640-0.jpeg',
    description: function () {
        return  `${this.name} is a versatile, high-quality product that adapts perfectly to your needs. Designed with durability and performance in mind, this product offers an exceptional combination of functionality and style.`
    },
    category: 'clothes'
});
productList.push({
    id:"mla0000000003",
    name: 'Pants',
    price: 195,
    image: 'https://lisboa.com.ar/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-17-at-11.11.40-AM.jpeg',
    description: function () {
        return  `${this.name} is a versatile, high-quality product that adapts perfectly to your needs. Designed with durability and performance in mind, this product offers an exceptional combination of functionality and style.`
    },
    category: 'clothes'
});
productList.push({
    id:"mla0000000004",
    name: 'Dress',
    price: 500,
    image: 'https://acdn.mitiendanube.com/stores/128/259/products/496590539-12696102751-850d386933006fe5c816266518539268-1024-1024.webp',
    description: function () {
        return  `${this.name} is a versatile, high-quality product that adapts perfectly to your needs. Designed with durability and performance in mind, this product offers an exceptional combination of functionality and style.`
    },
    category: 'clothes'
});
productList.push({
    id:"mla0000000005",
    name: 'Joystick',
    price: 250,
    image: 'https://images.start.com.ar/QAU-00082-3.jpg',
    description: function () {
        return  `${this.name} is a versatile, high-quality product that adapts perfectly to your needs. Designed with durability and performance in mind, this product offers an exceptional combination of functionality and style.`
    },
    category: 'electronics'
});
productList.push({
    id:"mla0000000006",
    name: 'Floor lamp',
    price: 100,
    image: 'https://deccoshop.com/19495-large_default/lampara-de-pie-tripode.jpg',
    description: function () {
        return  `${this.name} is a versatile, high-quality product that adapts perfectly to your needs. Designed with durability and performance in mind, this product offers an exceptional combination of functionality and style.`
    },
    category: 'fornitures'
});
productList.push({
    id:"mla0000000007",
    name: 'Moto',
    price: 59,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/YQ/ZW/HS/156000095/kids-car-500x500.png',
    description: function () {
        return  `${this.name} is a versatile, high-quality product that adapts perfectly to your needs. Designed with durability and performance in mind, this product offers an exceptional combination of functionality and style.`
    },
    category: 'toys'
});
productList.push({
    id:"mla0000000008",
    name: 'Dog',
    price: 26,
    image: 'https://di2ponv0v5otw.cloudfront.net/posts/2022/10/05/633df0ede5460f0516776257/m_633df1eceb7e7a61763780e8.jpeg',
    description: function () {
        return  `${this.name} is a versatile, high-quality product that adapts perfectly to your needs. Designed with durability and performance in mind, this product offers an exceptional combination of functionality and style.`
    },
    category: 'toys'
});

console.log(productList[0].description())

/* 
function renderProducts(array){
    for (product of array) {
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
        //productName.classList.add('product-name-card');
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.addEventListener('click', addProduct);
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);  */
function renderProducts(array) {
    for (let i = 0; i < array.length; i++) {
        const product = array[i];
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
        // Agrega un atributo de datos para almacenar la posición en el array
        productImgCart.id = product.id;
        productImgCart.addEventListener('click', addProduct);

        //----
/*         productImgCart.addEventListener('click', function () {
            addProduct(i); // Pasa el índice al llamar a la función addProduct
        }); */

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);



