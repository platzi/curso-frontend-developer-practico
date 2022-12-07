// Getting DOM elements

//Menu triggers
const navbarEmail = document.querySelector('.navbar-email');
const burgerIcon = document.querySelector('.menu');
const shopyCart = document.querySelector('.navbar-shopping-cart');
const asideArrow = document.querySelector('.product-detail--arrow');

//PopUp menu  
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideMyOrder = document.querySelector('.product-detail');
const PopUpmenus = [desktopMenu, mobileMenu, asideMyOrder];

// Product list (main)
const cardContainer = document.querySelector('.cards-container');



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
    // asideMyOrder.classList.toggle('inactive');
});

asideArrow.addEventListener('click', () =>{
    asideMyOrder.classList.add('inactive');
})

//functions 
function showPopUp(e){
    // this function close all the other pop-up menus that are already open and then
    //toggle the pop-up that we passed using the parametrer "e"
    PopUpmenus.forEach((element) => {
        if (element != e){
            element.classList.add('inactive');
        }else{
            element.classList.toggle('inactive');
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
    }   
}

//product list (main)
const productList = [];
productList.push({
    name: 'Bike',
    price: '120,00',
    Img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computer',
    price: '920,00',
    Img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'MotorBike',
    price: '2220,00',
    Img: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
mainRender(productList);