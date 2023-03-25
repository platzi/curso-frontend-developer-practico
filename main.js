let btnMail = document.querySelector('.navbar-email');
let menuEscritorio = document.querySelector('.desktop-menu')


btnMail.addEventListener('click', function(){
    menuEscritorio.classList.toggle('inactive')
    
})

let btnMenuCategoriasMobile = document.querySelector('#btn-menu-categorias-mobile');
let menuMobile = document.querySelector('.mobile-menu')

btnMenuCategoriasMobile.addEventListener('click', function(){
    menuMobile.classList.toggle('inactive')
    menuCarritodeCompras.classList.add('inactive')
})


let btnCarritodeCompras = document.querySelector('.navbar-shopping-cart');
let menuCarritodeCompras = document.querySelector('.product-detail-carrito');

btnCarritodeCompras.addEventListener('click', function(){
    menuCarritodeCompras.classList.toggle('inactive')
    menuMobile.classList.add('inactive')
})

const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail')

const productList = [];

productList.push({
    id: 1,
    name: 'iPhone XS MAX 256GB',
    price: 450,
    description: 'Este iphone cuenta con un procesador Snapdragon 940 de 8 nucleos, con 6GB de memoria RAM',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/116/601/products/xs-max-gold1-f77df19bbfa2120ea116376872330226-640-0.png'
});

productList.push({
    id: 2,
    name: 'iPhone 11 Pro 256GB',
    price: 650,
    description: 'Este iphone cuenta con un procesador Snapdragon 940 de 8 nucleos, con 6GB de memoria RAM',
    image: 'https://celutronic.com/wp-content/uploads/2021/04/iphone-12-pro-max-7.jpg'
});

productList.push({
    id: 3,
    name: 'iPhone 12 Pro Max',
    price: 820,
    description: 'Este iphone cuenta con un procesador Snapdragon 940 de 8 nucleos, con 6GB de memoria RAM',
    image: 'https://celutronic.com/wp-content/uploads/2021/04/iphone-12-pro-max-7.jpg'
});
productList.push({
    id: 4,
    name: 'iPhone 13 128GB',
    price: 1020,
    description: 'Este iphone cuenta con un procesador Snapdragon 940 de 8 nucleos, con 6GB de memoria RAM',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh3iKtEmemxwzYMhonFg2WaeFxNokctq7tXdEOsxvvC9NDwA&usqp=CAc'
});

productList.push({
    id: 5,
    name: 'iPhone 14 Pro Max 512GB',
    price: 1320,
    description: 'Este iphone cuenta con un procesador Snapdragon 940 de 8 nucleos, con 6GB de memoria RAM',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXh3iKtEmemxwzYMhonFg2WaeFxNokctq7tXdEOsxvvC9NDwA&usqp=CAc'
});




function renderProductList(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        var imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', product.image);
        imageProduct.classList.add('.image-producto')
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');
     
         const productInfoDiv = document.createElement('div')
     
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p')
        productName.innerText = product.name;
        productName.classList.add('name')
     
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img')
     
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCard)
     
        productInfoDiv.append(productPrice, productName)
        productInfo.append(productInfoDiv, productInfoFigure)
     
        productCard.append(imageProduct, productInfo)
     
        cardsContainer.append(productCard)
     }
}


/*
    <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    <div class="product-detail-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
        </button>
    </div>  
*/

function renderProductDetail(arr){
    for(product of arr){
        const containerDetailProduct = document.createElement('div')
        containerDetailProduct.classList.add('inactive', 'container-product')

        const productDetailClose = document.createElement('div')
        productDetailClose.classList.add('product-detail-close')

        const imageClose = document.createElement('img')
        imageClose.setAttribute('src', './icons/icon_close.png')

        const imageProduct = document.createElement('img')
        imageProduct.setAttribute('src', product.image)
        imageProduct.classList.add('img-cont-product-detail')

        const productDetailInfo = document.createElement('div')
        productDetailInfo.classList.add('product-detail-info')


        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p')
        productName.innerText = product.name;
        productName.classList.add('name')
        const productDescription = document.createElement('p')
        productDescription.innerText = product.description;
        
        const buttonAddCart = document.createElement('button');
        buttonAddCart.classList.add('primary-button', 'add-to-cart-button')

        const imageAddtoCart = document.createElement('img')
        imageAddtoCart.setAttribute('src', './icons/bt_add_to_cart.svg')

        buttonAddCart.append(imageAddtoCart)

        productDetailInfo.append(productPrice, productName, productDescription, buttonAddCart)

        productDetailClose.append(imageClose)

        containerDetailProduct.append(productDetailClose, imageProduct, productDetailInfo)

        productDetail.append(containerDetailProduct)
    }
}


renderProductDetail(productList);
renderProductList(productList);

let productsCard= document.querySelectorAll('.product-card')



productsCard.forEach(producto => {
    producto.addEventListener('click', () => {
        const todosLosProductos = document.querySelectorAll('.container-product')
        todosLosProductos.forEach(producto => {
            producto.classList.add('inactive')
        })

        let name = producto.querySelector('.name').textContent;
        console.log('El nombre del articulo seccionado es: ', name)
       
        let containerProducts = document.querySelectorAll('.container-product')
        containerProducts.forEach(productoDetalle =>{
            let nombreProducto = productoDetalle.querySelector('.container-product .product-detail-info .name').textContent
            if(name === nombreProducto){
                productoDetalle.classList.remove('inactive')
            }
        })
        
    })
})


let btnsDetailProductClose = document.querySelectorAll('.product-detail-close')

btnsDetailProductClose.forEach(btn =>{
    btn.addEventListener('click', function(){
        console.log('click boton close')
        const todosLosProductos = document.querySelectorAll('.container-product')
            todosLosProductos.forEach(producto => {
                producto.classList.add('inactive')
        })
    })
})
