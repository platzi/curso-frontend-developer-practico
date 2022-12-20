// Getting DOM elements

//Menu triggers
const navbarEmail = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const shopyCart = document.querySelector('.navbar-shopping-cart');
const asideArrow = document.querySelector('.product-detail--arrow');
const detailClose = document.querySelector('.full-product-detail-close');
//PopUp menu  
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const asideMyOrder = document.querySelector('.product-detail');
    const myorderContent = document.querySelector('.my-order-content');
    const totalOrder = document.querySelector('.order p:nth-child(2)');
    const infoTotalOrder = document.querySelector('.order p span');

const asideOrderDetail = document.querySelector('.full-product-detail');
    const asideOrderDetailImg  = document.querySelector('#ProductDetailImg');
    const asidePrice = document.querySelector('.product-info-detail p:nth-child(1)');
    const asideName = document.querySelector('.product-info-detail p:nth-child(2)');
    const asideDescription = document.querySelector('.product-info-detail p:nth-child(3)');
const PopUpmenus = [desktopMenu, mobileMenu, asideMyOrder,asideOrderDetail];

// Product list (main)
const cardContainer = document.querySelector('.cards-container');

//shopping cart of the main cards (Aside behaivor)




//Important, show people at platzi your new method to do it more easy to maintain (carrito de compras clase) 

// Events
navbarEmail.addEventListener('click', () =>{
    showPopUp(desktopMenu);
    // desktopMenu.classList.toggle('inactive');
});

burgerIcon.addEventListener('click', () =>{
    showPopUp(mobileMenu);
    // mobileMenu.classList.toggle('inactive');
});

shopyCart.addEventListener('click', () =>{
    showPopUp(asideMyOrder);
    if (totalItemShoppingCart() == 0 ){
        infoTotalOrder.innerText = "There's no a item in the cart yet, add a product to see here!"
    }

    // asideMyOrder.classList.toggle('inactive');
});

asideArrow.addEventListener('click', () =>{
    asideMyOrder.classList.add('inactive');
})





//functions 

function totalItemShoppingCart(){
    return document.querySelectorAll('.shopping-cart').length;
}



function showPopUp(e){
    // this function close all the other pop-up menus that are already open and then
    //toggle the pop-up that we passed using the parametrer "e"
    PopUpmenus.forEach((element) => {
        if (element != e){
            element.classList.add('inactive');
           
        }else{
            element.classList.toggle('inactive');
        }
        
        // the case of "asideOrderDetail" it's a special, it doesn't need to be
        // toggle, it shold to be close because it has another behaivor
        //(if it's inactive show it if isn't close it).
        if (e == asideOrderDetail && e == element){
            element.classList.remove('inactive');
        }
        
    })
}


function mainRender(arr){ //arr it's a array with objects to be render as a card in main 
    for (element of arr){
        //HTMl layouting of product card
        //creating Container of the card
        const productCardContainer = document.createElement('div');
        productCardContainer.classList.add('product-card');
            //adding the image
            const image = document.createElement('img');
            image.setAttribute('src', element.Img);
            productCardContainer.append(image);
            //creating product info
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
            productCardContainer.append(productInfo);
                const infoContainer = document.createElement('div');
                    const price = document.createElement('p');
                    price.innerText = `$${element.price}`;
                    infoContainer.append(price);
                    const name = document.createElement('p');
                    name.innerText = element.name;
                    infoContainer.append(name);
                    productInfo.append(infoContainer);
                const figure = document.createElement('figure');
                    const cartIcon  = document.createElement('img');
                    cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
                    figure.append(cartIcon);          
                    productInfo.append(figure);

        cardContainer.append(productCardContainer);

        //Set productCardContainer event
        element.imageCard = image;
        element.cart = cartIcon;
    }   
}

//product list (main)
const productList = [];
productList.push({
    id: 0,
    name: 'Bike',
    price: '120,00',
    Img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});

productList.push({
    id: 1,
    name: 'Computer',
    price: '920,00',
    Img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:'This is the new lever experince in laptop!!!!, with the computer 2.0 enjoy your favorite games in ultra high resolution.'  
})

productList.push({
    id: 2,
    name: 'MotorBike',
    price: '2220,00',
    Img: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:'The fastest Motorbike of the market, enjoy the road with the new model that could ride more than 200KM/hour'
});
mainRender(productList);

let actualAside;
let totalCart = 0;

detailClose.addEventListener('click', () => {
    asideOrderDetail.classList.add('inactive');
    actualAside = undefined;    
})
productList.forEach((element)=>{
 element.imageCard.addEventListener('click',()=>{

    if (actualAside == element.id && (!asideOrderDetail.classList.contains('inactive'))){
        asideOrderDetail.classList.add('inactive');
        actualAside = undefined;
        return;
    }

    //showpopup closes all the other menus that could be open
    showPopUp(asideOrderDetail);
    
    actualAside = element.id;
    // asideOrderDetail.classList.toggle('inactive')
    asideOrderDetailImg.setAttribute('src',element.Img);
    asidePrice.innerText = element.price;
    asideName.innerText = element.name;
    asideDescription.innerText = element.description;
 })



 element.cart.addEventListener("click",() =>{
    const shoppingCart = document.createElement('div');
        shoppingCart.classList.add('shopping-cart');
            const shoppingCartFigure = document.createElement('figure');
                const shoppingCartFigureImg = document.createElement('img');
                shoppingCartFigureImg.setAttribute('src', element.Img);
            shoppingCartFigure.append(shoppingCartFigureImg);
    shoppingCart.append(shoppingCartFigure);

        const cartItemPrice = document.createElement('p');
        cartItemPrice.innerText = element.price;
    shoppingCart.append(cartItemPrice);

        const cartItemName = document.createElement('p');
        cartItemName.innerText = element.price;
    shoppingCart.append(cartItemName);

        const eliminateItem = document.createElement('img');
        eliminateItem.setAttribute('src', './icons/icon_close.png');
        eliminateItem.setAttribute('style', 'cursor: pointer;');
    shoppingCart.append(eliminateItem);

    myorderContent.prepend(shoppingCart);
    
    infoTotalOrder.innerText = 'Total'    
    totalCart += Number(element.price.replace(',','.'));
    totalOrder.innerText = `$${totalCart}`;    

 })

})
