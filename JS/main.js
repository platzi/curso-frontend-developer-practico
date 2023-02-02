const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburgeIcon=document.querySelector('.menuHamburger');
const mobileMenu=document.querySelector('.mobile-menu');

const shoppingCartIcon=document.querySelector('.navbar-shoppingCart-icon')
const detailShoppingCart=document.querySelector('.product-detail');

const mainContainerCards=document.querySelector('.cards-container');


navEmail.addEventListener('click',toogleDesktopMenu);
menuHamburgeIcon.addEventListener('click',toogleMobileMenu);
shoppingCartIcon.addEventListener('click',toogleShoppingCart);

function toogleDesktopMenu(){
    // forma larga
    // if(desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // }
    // else{
    //     desktopMenu.classList.add('inactive');
    // }

    //forma profesional
    const isdetailShoppingCartClosed=detailShoppingCart.classList.contains('inactive');
    if(!isdetailShoppingCartClosed){
        detailShoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');

}
function toogleMobileMenu(){
    const isdetailShoppingCartClosed=detailShoppingCart.classList.contains('inactive');
    if(!isdetailShoppingCartClosed){
        detailShoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toogleShoppingCart(){
    const isMenuMobileClosed=mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed=desktopMenu.classList.contains('inactive');
    if(!isMenuMobileClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isMenuDesktopClosed){
        desktopMenu.classList.add('inactive');
    }
    detailShoppingCart.classList.toggle('inactive');
}

const productList=[];
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Camera',
    price:720,
    image:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name:'Bag of coffee',
    price:100,
    image:'https://images.pexels.com/photos/4829069/pexels-photo-4829069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name:'Soap',
    price:80,
    image:'https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name:'Jeans',
    price:320,
    image:'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function showProductList(productLists){
    productLists.forEach(productList => {
        const {image,price,name}=productList;
        const productContainer=document.createElement('div');
        productContainer.classList.add('product-card');
        const imgProdut=document.createElement('img');
        imgProdut.classList.add('product-card-image');
        imgProdut.src=image;
        imgProdut.addEventListener('click',showDetailProduct);

        const productInfoContainer=document.createElement('div');
        productInfoContainer.classList.add('product-info');

        const priceNameContainer=document.createElement('div');
        const priceProduct=document.createElement('p');
        priceProduct.classList.add('product-info-price');
        priceProduct.innerText="$"+price+",00";
        const nameProduct=document.querySelector('p');
        nameProduct.classList.add('product-info-name');
        nameProduct.innerText=name;
        priceNameContainer.appendChild(priceProduct);
        priceNameContainer.appendChild(nameProduct);

        const iconContainer=document.createElement('figure');
        const iconAddShoppingCart=document.createElement('img');
        iconAddShoppingCart.classList.add('product-info-icon');
        iconAddShoppingCart.src="./icons/bt_add_to_cart.svg";
        iconContainer.appendChild(iconAddShoppingCart);
        priceNameContainer.appendChild(iconContainer);

        productInfoContainer.appendChild(priceNameContainer);
        productInfoContainer.appendChild(iconContainer);


        productContainer.appendChild(imgProdut);
        productContainer.appendChild(productInfoContainer);

        /*Vista en el HMTL */
        mainContainerCards.appendChild(productContainer);
    });

}

function showDetailProduct(){
    console.log("Estoy haciendo click para poder ver los detalles de los productos");
}

showProductList(productList);