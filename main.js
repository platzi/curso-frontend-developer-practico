const email = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.menu');
const cart = document.querySelector('.navbar-shopping-cart');
/*Menu */
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideDetail = document.querySelector('.product-detail');

const cardsContainer =  document.querySelector('.cards-container');
const productDetailCards =  document.querySelector('.product-detail-cards');
const productDetailClose = document.querySelector('.product-detail-cards-close');



email.addEventListener('click', () =>{
    toggleMenu(desktopMenu, asideDetail, mobileMenu);
});

burgerMenu.addEventListener('click', () =>{
    toggleMenu(mobileMenu, asideDetail, desktopMenu);
});

cart.addEventListener('click', () =>{
    toggleMenu(asideDetail, mobileMenu, desktopMenu);
});

const toggleMenu = (menuOne, menuTwo, menuTree)=>{
    menuOne.classList.toggle('inactive');
    menuTwo.classList.add('inactive')
    menuTree.classList.add('inactive')
    productDetailCards.classList.add('inactive')


}

function openProductDetailCards(menuOne, menuTwo, menuTree){
    productDetailCards.classList.remove('inactive')
    menuOne.classList.add('inactive');
    menuTwo.classList.add('inactive')
    menuTree.classList.add('inactive')
    
}

const closeDetailProduct = productDetailClose.addEventListener('click', ()=>{
    productDetailCards.classList.add('inactive')
})

/* Product List*/

const productList =[];
productList.push({
    name: "Kids Bike",
    price: 90,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: "Bike",
    price: 230,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: "Mountain Bike",
    price: 349,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});




function renderProducts(arr)
{arr.map((product) => {

    productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', ()=>{
        openProductDetailCards(desktopMenu, asideDetail, mobileMenu)
    });

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    

    const productInfoDiv = document.createElement('div');

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productPrice = document.createElement('p');
    productPrice.innerText =`$${product.price}`;

    productInfoDiv.append(productName, productPrice)

    const productFigure = document.createElement('figure');
    const productImgFigure = document.createElement('img');
    productImgFigure.setAttribute('src', "./icons/bt_add_to_cart.svg");  
    productFigure.appendChild(productImgFigure);

    productInfo.append(productInfoDiv, productFigure);
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
})}

renderProducts(productList);

// for(product of productList){
//     console.log(product.name);
// }