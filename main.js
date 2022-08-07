const navright = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const burgermenu = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const shoppingCard = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail'); 
const myorderscontent = document.querySelector('.my-orders-content');
const cardsContainer = document.querySelector('.cards-container');
const productDetailItem = document.querySelector('.product-detail-item');
const  divContent = document.querySelector(".divContent");
const productDetailClose = document.querySelector('.product-detail-close');




navright.addEventListener('click', toggleDesktopmenu);
burgermenu.addEventListener('click', toggleMobileMenu);
shoppingCard.addEventListener('click', toggleProductDetail);
productDetailClose.addEventListener('click', productDetailCloseAcction);

function  toggleDesktopmenu (){
    aside.classList.add('inactive');
    mobilemenu.classList.add('inactive');

    desktopmenu.classList.toggle('inactive');
}   


function  toggleMobileMenu (){
    aside.classList.add('inactive');
    desktopmenu.classList.add('inactive');

    mobilemenu.classList.toggle('inactive');
}   

function  toggleProductDetail (){
    mobilemenu.classList.add('inactive');
    desktopmenu.classList.add('inactive');
    productDetailItem.classList.add('inactive');
    const isAsideInactive = aside.classList.contains('inactive');
    const ismyorderscontentInactive = myorderscontent.classList.contains('inactive');


    if (isAsideInactive){
        aside.classList.remove('inactive');
        myorderscontent.classList.remove('inactive');
    }else if(ismyorderscontentInactive){
        myorderscontent.classList.remove('inactive');
    }else {
        aside.classList.add('inactive');
        myorderscontent.classList.add('inactive');
    }
    

}  

function  toggleItemDetail (id){
    
    renderItemDetail(id,productsArray);
    mobilemenu.classList.add('inactive');
    desktopmenu.classList.add('inactive');
    myorderscontent.classList.add('inactive'); 
    const isAsideInactive = aside.classList.contains('inactive');
    const isProductDetailItemInactive =  productDetailItem.classList.contains('inactive');
    
    if (isAsideInactive){
        aside.classList.remove('inactive');
    }
    if (isProductDetailItemInactive){
        productDetailItem.classList.remove('inactive');
    }
    
    
}  

function productDetailCloseAcction(){
    aside.classList.add('inactive');
    productDetailItem.classList.add('inactive');
}

const productsArray = [];
productsArray.push(
    {
        id:0,
        name:"Bike",
        price:120,
        description:"With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id:1,
        name:"Computer",
        price:659,
        description:"With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id:2,
        name:"Monitor",
        price:230,
        description:"With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }
    );

 function renderProducts(arr){
    for( product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('onclick',  `toggleItemDetail(${product.id});`);
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',  product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const divInfo = document.createElement('div');
        const price = document.createElement('p');
        price.innerText = product.price;
        const detailName = document.createElement('p');
        detailName.innerText = product.name;
        divInfo.appendChild(price);
        divInfo.appendChild(detailName);
    
        const figureAddCard = document.createElement('figure');
        const figureImage = document.createElement('img');
        figureImage.setAttribute('src',  './icons/bt_add_to_cart.svg');
    
        figureAddCard.appendChild(figureImage);
    
        productInfo.appendChild(divInfo);
        productInfo.appendChild(figureAddCard);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    
    }

 }



 function renderItemDetail(id,arr){ 
    divContent.innerHTML='';

    const imgItem = document.createElement('img');
    imgItem.classList.add('detail-item-img');
    imgItem.setAttribute('src',  arr[id].image);

    const divInfoItem = document.createElement('div');
    divInfoItem.classList.add('product-info-item');

    const pPrice = document.createElement('p');
    pPrice.innerText = '$ ' +arr[id].price;

    const pName = document.createElement('p');
    pName.innerText = arr[id].name;

    const pDesciption = document.createElement('p');
    pDesciption.innerText = arr[id].description;

    const addButton = document.createElement('button');
    addButton.classList.add('primary-button');
    addButton.classList.add('add-to-cart-button');
    
    const imgCard = document.createElement('img');
    imgCard.setAttribute('src',  './icons/bt_add_to_cart.svg');
    imgCard.setAttribute('alt',  'add to cart');
    addButton.append(imgCard,'Add to cart') ;

    divInfoItem.append(pPrice,pName,pDesciption,addButton);
    divContent.append(imgItem,divInfoItem);
    productDetailItem.append(divContent);


    
    

 }

 renderProducts(productsArray);

