const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const car = document.querySelector('.navbar-shopping-cart');
const closeIconProductDetail = document.querySelector('.product-detail-close');

const shoppingDetail = document.querySelector('.shopping-detail');
const cardContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
car.addEventListener('click', toggleShoppingDetail);
closeIconProductDetail.addEventListener('click', closeProductDetail);


function toggleDesktopMenu(){
    shoppingDetail.classList.add('inactive');
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    shoppingDetail.classList.add('inactive');
    productDetail.classList.add('inactive');
    menuMobile.classList.toggle('inactive');
}

function toggleShoppingDetail(){
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    shoppingDetail.classList.toggle('inactive');
}

// function toggleProductDetail(){
//     shoppingDetail.classList.add('inactive');
//     productDetail.classList.toggle('inactive');
// }



function closeProductDetail(){
    productDetail.classList.add('inactive');
}

// function openProductDetail(){
//     menuMobile.classList.add('inactive');
//     desktopMenu.classList.add('inactive');
//     shoppingDetail.classList.add('inactive');
//     productDetail.classList.remove('inactive');
// }




const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 120,
    image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/plp/laptops/img/img-0914/kv.jpg'
});
productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://i.linio.com/p/61e22d0b6d4e10783283121fe5789f74-product.jpg'
});
productList.push({
    name: 'Screen',
    price: 120,
    image: 'https://image.coolblue.nl/624x351/content/a6ac9d0df4c1b58157a1f3c4f33aa245'
});
productList.push({
    name: 'Windows',
    price: 120,
    image: 'https://cdn.vox-cdn.com/thumbor/KxC2LWnSYgA4-DLXPytFBV03y7w=/0x0:1020x680/1200x628/filters:focal(510x340:511x341)/cdn.vox-cdn.com/uploads/chorus_asset/file/15429759/windows10boxart.0.0.1436779094.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 120,
    image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/plp/laptops/img/img-0914/kv.jpg'
});
productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://i.linio.com/p/61e22d0b6d4e10783283121fe5789f74-product.jpg'
});
productList.push({
    name: 'Screen',
    price: 120,
    image: 'https://image.coolblue.nl/624x351/content/a6ac9d0df4c1b58157a1f3c4f33aa245'
});
productList.push({
    name: 'Windows',
    price: 120,
    image: 'https://cdn.vox-cdn.com/thumbor/KxC2LWnSYgA4-DLXPytFBV03y7w=/0x0:1020x680/1200x628/filters:focal(510x340:511x341)/cdn.vox-cdn.com/uploads/chorus_asset/file/15429759/windows10boxart.0.0.1436779094.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 120,
    image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/south-pacific/ph/mkt/plp/laptops/img/img-0914/kv.jpg'
});
productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://i.linio.com/p/61e22d0b6d4e10783283121fe5789f74-product.jpg'
});
productList.push({
    name: 'Screen',
    price: 120,
    image: 'https://image.coolblue.nl/624x351/content/a6ac9d0df4c1b58157a1f3c4f33aa245'
});
productList.push({
    name: 'Windows',
    price: 120,
    image: 'https://cdn.vox-cdn.com/thumbor/KxC2LWnSYgA4-DLXPytFBV03y7w=/0x0:1020x680/1200x628/filters:focal(510x340:511x341)/cdn.vox-cdn.com/uploads/chorus_asset/file/15429759/windows10boxart.0.0.1436779094.jpg'
});

// OTRA FORMA
// for (product of productList) {
//     const template = `
//     <div class="product-card">
//         <img src= ${product.image} alt="">
//         <div class="product-info">
//             <div>
//                 <p>${product.price}</p>
//                 <p>${product.name}</p>
//             </div>
//             <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="">
//             </figure>
//         </div>
//     </div>`
//     cardContainer.innerHTML = cardContainer.innerHTMLtemplate;
// }

function renderProducts(arr){
    // for(product of arr){
    arr.forEach(product => {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        console.log(product);
        productCard.addEventListener('click',()=> {
            openProductDetail(product);
        })
        /* product = {name, price, image} */
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // productImg.addEventListener('click', openProductDetail);
    
        const infoProduct = document.createElement('div');
        infoProduct.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure')
        const productAdd = document.createElement('img');
        productAdd.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productAdd);
    
        infoProduct.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, infoProduct);
    
        cardContainer.append(productCard);
    });
}

const openProductDetail = (product) => {
    const aside = document.querySelector('.product-detail');
    const productImg = document.querySelector('.product-detail-img');
    const productPrice = document.querySelector('.product-info-card .product-price');
    const productName= document.querySelector('.product-info-card .product-name');
        aside.classList.remove('inactive');
        productImg.setAttribute('src',product.image);
        productPrice.textContent= product.price;
        productName.textContent= product.name;
}

renderProducts(productList);