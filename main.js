// Selección de elementos del DOM
const menuEmail          = document.querySelector(".navbar-email");
const desktopMenu        = document.querySelector(".desktop-menu");
const burguerMenu        = document.querySelector(".menu");
const menuCarIcon        = document.querySelector(".navbar-shopping-cart");
const mobileMenu         = document.querySelector(".mobile-menu");
const aside              = document.querySelector(".product-detail");
const productDetailFocus = document.querySelector(".product-detail-secundary")
const productDetailClose = document.querySelector(".product-detail-close")
const cardsContainer     = document.querySelector('.cards-container')
// Elementos productDetailFocus
const productDetailImage = document.querySelector(".product-image");
const productDetailPrice = document.querySelector(".product-info-secundary p:nth-child(1)");
const productDetailName = document.querySelector(".product-info-secundary p:nth-child(2)");
const productDetailDescription = document.querySelector(".product-info-secundary p:nth-child(3)");

// Agrupación de elementos que podrían tener la clase 'active'
const allElementsHTML   = [menuEmail, menuCarIcon, burguerMenu  ]
const allActiveElements = [desktopMenu, aside, mobileMenu];

// Función para agregar un escuchador de eventos de clic a un elemento
function addToggleListener(element, active) {
    element.addEventListener("click", function(event){
        event.stopPropagation();
        toggleActiveState(active);
    });
} 

allActiveElements.forEach((activeElement, index) => {
    addToggleListener(allElementsHTML[index], activeElement);
})

// Función para alternar el estado activo del elemento seleccionado
function toggleActiveState(element) {
    if (element.classList.contains("inactive")) {
        removeActiveState();
    }
    element.classList.toggle("active");
    element.classList.toggle("inactive");
    if (productDetailFocus.classList.contains("active") && element.classList.contains("active"))
    {
        closeProductDetail()
    }
    let index = allActiveElements.indexOf(element);    
    if (index !== -1) {
        allElementsHTML[index].classList.toggle("animation-nav");
    }
}

// Función para eliminar el estado activo de todos los elementos
function removeActiveState() {
    allActiveElements.forEach(element => {
        element.classList.remove("active");
        element.classList.add("inactive");
    });
    allElementsHTML.forEach(element => {
        element.classList.remove("animation-nav");
    });
}

// Agregación de escuchador de eventos al documento
document.addEventListener("click", function(event) {
    let isInsideActiveElement = allActiveElements.some((activeElement) => activeElement.contains(event.target));
    if (!isInsideActiveElement) {
        removeActiveState();
    }
});

function openProductDetail(product) {
    productDetailImage.src = product.image;
    productDetailPrice.textContent = "$" + product.price;
    productDetailName.textContent = product.name;
    productDetailDescription.textContent = product.description; 

    productDetailFocus.classList.add("active");
    productDetailFocus.classList.remove("inactive");
}

productDetailClose.addEventListener("click", function(){
    closeProductDetail()
})
function closeProductDetail () {
        productDetailFocus.classList.remove("active")
        productDetailFocus.classList.add("inactive")
}


const productList = [
    {
        name: 'Bike',
        price: 12700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        description: 'This is a high-quality bike suitable for all terrains.'
    },
    {
        name: 'Bicycle helmet',
        price: 1200,
        image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
        description: 'A robust bicycle helmet to keep you safe on your rides.'
    },
    {
        name: 'Bicycle helmet',
        price: 1500,
        image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
        description: 'A stylish bicycle helmet with advanced safety features.'
    },
    {
        name: 'Seat',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
        description: 'A comfortable seat for long rides.'
    },
    {
        name: 'Tennis Montain Bike',
        price: 2200,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
        description: 'Mountain bike shoes designed for performance and comfort.'
    },
    {
        name: 'Sunglasses',
        price: 800,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
        description: 'Stylish sunglasses that offer great UV protection.'
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
        description: 'Sunglasses with clear lenses for foggy conditions.'
    },
    {
        name: 'Bicycle seat bag',
        price: 876,
        image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
        description: 'A convenient seat bag for storing essentials during your rides.'
    }
];


function renderProducts(arr) {
    for(let product of arr){
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const productImg = document.createElement('img');
        productImg.className = 'product-img';
        productImg.src = product.image;
        productImg.addEventListener("click", function(){
            openProductDetail(product);
        })
        

        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';

        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.src = './icons/bt_add_to_cart.svg';

        productInfoFigure.append(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);
        cardsContainer.append(productCard);

    }
}
renderProducts(productList);

