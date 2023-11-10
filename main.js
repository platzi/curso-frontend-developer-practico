//Codigo de JS para unir Proyecto de HTML y CSS - Curso Practico Frontend
const navEmail= document.querySelector('.navbar-email');
const burguerMenuIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const closeProductDetailIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.product-detail-shopping-cart');
const cardContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCartMenu);
closeProductDetailIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    shoppingCart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleMobileMenu() {
    shoppingCart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleCartMenu() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCart.classList.toggle('inactive');
    closeProductDetailAside();
}

function openProductDetailAside(event) {
    // infoProductDetail();
    const imageClicked= event.target;
    const infoProduct= infoProductDetail(imageClicked);

    const imageProductDetail = document.querySelector('.product-detail > img'); 
    imageProductDetail.setAttribute('src',infoProduct[0].image);
    
    const priceProductDetail = document.querySelector('.product-detail .product-info p:nth-child(1)')
    priceProductDetail.innerText="$ "+infoProduct[0].price;

    const nameProductDetail = document.querySelector('.product-detail .product-info p:nth-child(2)')
    nameProductDetail.innerText=infoProduct[0].name;

    const descriptionProductDetail = document.querySelector('.product-detail .product-info p:nth-child(3)')
    descriptionProductDetail.innerText="It is a "+infoProduct[0].name+ " that cost: $ "+infoProduct[0].price;

    productDetail.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCart.classList.add('inactive');
}

function closeProductDetailAside() {
    productDetail.classList.add('inactive');
}

function infoProductDetail(imageSelected){
    const infoProduct = productList.filter(function(articulo){ //Esta sintaxis es MUY IMPORTANTE para trabajar en JavaScript
        return articulo.image == imageSelected.src; //La condicion de filtracion se plantea aqui. Regresa TODOS LOS OBJETOS que cumplan esa condicion
    });
    return infoProduct
}
// Code to generate HTML estructured cards with JS (dynamic layout of DOM) 
const productList =[]; //Construir
productList.push({
    name: 'Bike',
    price: "120,00",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bag',
    price: "20,00",
    image: "https://www.catfootwear.com.pk/cdn/shop/products/PeoriaUniSchoolBag20L.jpg?v=1678220236"
}
);
productList.push({
    name: 'Computer',
    price: "630,00",
    image: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg"
});
productList.push({
    name: 'Iphone 14',
    price: "1100,00",
    image: "https://webobjects2.cdw.com/is/image/CDW/7167157?$product-main$"
});
productList.push({
    name: 'Xbox',
    price: "900,00",
    image: "https://assets.sams.com.mx/image/upload/f_auto,q_auto:eco,w_350,c_scale,dpr_auto/mx/images/product-images/img_medium/980023267m.jpg"
}
);
productList.push({
    name: 'Mario Kart 8 Deluxe',
    price: "30,00",
    image: "https://elektra.vtexassets.com/arquivos/ids/3795245-800-450?v=638338070674570000&width=800&height=450&aspect=true"
});

//This function creates a new structure component in a list of components in HTML 
renderList(productList);
function renderList(arrComp){
    for (product of arrComp){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        cardContainer.append(productCard);
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src',product.image);
        productImage.addEventListener('click',openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        productCard.append(productImage,productInfo);
    
        const productDiv = document.createElement('div');
        const productPrice= document.createElement('p');
        productPrice.innerText="$ "+product.price;
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productDiv.append(productPrice,productName);
    
        const productFigure = document.createElement('figure');
        const iconImage= document.createElement('img');
        iconImage.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productFigure.append(iconImage);
        productInfo.append(productDiv,productFigure);
        
    }
}
