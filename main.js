//let  = document.querySelector('');
let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let menuHamIcon = document.querySelector('.menu');
let menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
let productDetailCloseIcon = document.querySelector('.product-detail-close');
let mobileMenu = document.querySelector('.mobile-menu');
let shoppingCartContainer = document.querySelector('#shoppingCartContainer');
let cardsContainer = document.querySelector('.cards-container');
let productDetailContainer = document.querySelector('#productDetail');
let shoppingCartProduct = document.querySelector('#shopping_cart');

let infoDelProduct = document.querySelector('#info-product');

let imgProduct = document.querySelector('#image-description');
let priceProduct = document.querySelector('#price-description');
let nameProduct = document.querySelector('#name-description');
let descriptionProduct = document.querySelector('#description');

let addProduct = document.querySelector('#btn-product');
let imgOrder = document.querySelector('#order-image');
let figureOrder = document.querySelector('#order-figure');
let nameOrder = document.querySelector('#order-name');
let priceOrder = document.querySelector('#order-price');
let closeOrder = document.querySelector('#order-close');

let totalPriceOrder = document.querySelector('#totalPrice');

let productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:' https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    parragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptate?',
    id: 11,
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image:' https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nobis.',
    id: 22,
});
productList.push({
    name: 'Cumputador',
    price: 620,
    image:' https://images.pexels.com/photos/13564604/pexels-photo-13564604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita.',
    id: 33,
});
productList.push({
    name: 'Reloj',
    price: 90,
    image:' https://images.pexels.com/photos/1217573/pexels-photo-1217573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, impedit!',
    id: 44,
});
productList.push({
    name: 'Guitarra',
    price: 190,
    image:' https://images.pexels.com/photos/164729/pexels-photo-164729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, dolorum.',
    id: 55,
});
productList.push({
    name: 'Gafas',
    price: 140,
    image:' https://images.pexels.com/photos/185769/pexels-photo-185769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem?',
    id: 66,
});

//

productList.push({
    name: 'Bike',
    price: 120,
    image:' https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    parragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptate?',
    id: 77,
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image:' https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nobis.',
    id: 88,
});
productList.push({
    name: 'Cumputador',
    price: 620,
    image:' https://images.pexels.com/photos/13564604/pexels-photo-13564604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, expedita.',
    id: 99,
});
productList.push({
    name: 'Reloj',
    price: 90,
    image:' https://images.pexels.com/photos/1217573/pexels-photo-1217573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, impedit!',
    id: 111,
});
productList.push({
    name: 'Guitarra',
    price: 190,
    image:' https://images.pexels.com/photos/164729/pexels-photo-164729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, dolorum.',
    id: 222,
});
productList.push({
    name: 'Gafas',
    price: 140,
    image:' https://images.pexels.com/photos/185769/pexels-photo-185769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    parragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem?',
    id: 333,
});


//.addEventListener('click', );
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
closeOrder.addEventListener('click', closeProductOrder);


function toggleDesktopMenu() {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    closeProductDetailAside()   
}

function toggleMobileMenu() {
    let isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside()
}

function toggleCarritoAside() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } 
    // Aside productDetail
    let isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }    
    shoppingCartContainer.classList.toggle('inactive');
    //addProductButton(productList)
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    //
    //const productIndex = event.target.dataset.index;
    //const product = productList[productIndex];
    //console.log(productIndex); 
   
   // mostrarDetalles(productList);
   // console.log(event.target.src)
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


function closeProductOrder(){
    // shoppingCartProduct.classList.add('inactive');
    nameOrder.textContent = "";
    priceOrder.textContent = "";
    imgOrder.classList.add('inactive');
    closeOrder.removeAttribute('src', './icons/icon_close.png');
    //figureOrder.classList.add('inactive');
    figureOrder.setAttribute('class', 'inactive');
    totalPriceOrder.textContent =  "";
}

function showProductDetails(index) {
    let product = productList[index];
    imgProduct.setAttribute('src', product.image);
    priceProduct.textContent = '$' + product.price;
    nameProduct.textContent = product.name;
    descriptionProduct.textContent = product.parragraph;
    productDetailContainer.classList.remove('inactive');
    totalPriceOrder.textContent =  product.price;

    addProduct.addEventListener('click', addProductButton);

    function addProductButton() {
        imgOrder.setAttribute('src', product.image);
        nameOrder.textContent = product.name;
        priceOrder.textContent = '$' + product.price;
        closeOrder.setAttribute('src', './icons/icon_close.png');
        figureOrder.setAttribute('class', 'active');
        imgOrder.setAttribute('class', 'active');

       console.log("funciona el boton");
       closeProductDetailAside();
       console.log(product.id);
       //alert("Guardado");
    } 
}

function renderProducts(arr) {
    for (let i = 0; i < arr.length; i++) {
        const product = arr[i];
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('id', product.id);
        productCard.addEventListener('click', function () {
            showProductDetails(i); 
            console.log(this.id);
        });
     
        // product = {name, price, image} -> product.image
        let productimg = document.createElement('img');
        productimg.setAttribute('src', product.image);
        productimg.setAttribute('data-index', i);
        // productimg.addEventListener('click', openProductDetailAside);
     
        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        let productInfoDiv = document.createElement('div');
     
        let productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        productPrice.setAttribute('data-index', i);

        let productName = document.createElement('p');
        productName.innerText = product.name;
        productPrice.setAttribute('data-index', i);
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        let productInfoFigure = document.createElement('figure');
        let productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.addEventListener('click', addProductIcon);
        function addProductIcon() {
            imgOrder.setAttribute('src', product.image);
            nameOrder.textContent = product.name;
            priceOrder.textContent = '$' + product.price;
            
            totalPriceOrder.textContent =  product.price;
            closeOrder.setAttribute('src', './icons/icon_close.png');
            //console.log("funciona el icon");   
            
            figureOrder.setAttribute('class', 'active');
            imgOrder.setAttribute('class', 'active');
        }
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productimg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     }
}

renderProducts(productList);






