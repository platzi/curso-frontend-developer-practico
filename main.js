const navEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const shoppingcartcontainer = document.querySelector ('#shoppingcartcontainer');
const cardscontainer = document.querySelector('.cards-container');
const productdetailcontainer = document.querySelector('#productdetail');
const closeicon = document.querySelector('.product-detail-close');



navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
closeicon.addEventListener('click', closeproductdetailaside);



function toggleDesktopMenu(){
    const Asideclosed = shoppingcartcontainer.classList.contains('inactive');
    if(!Asideclosed){
        shoppingcartcontainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const Asideclosed = shoppingcartcontainer.classList.contains('inactive');
    if(!Asideclosed){
        shoppingcartcontainer.classList.add('inactive');
    }
    closeproductdetailaside();
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');

   if(!mobileMenuClosed){
    mobileMenu.classList.add('inactive');
}
const productdetailclosed = productdetailcontainer.classList.contains('inactive');

if(!productdetailclosed){
    productdetailcontainer.classList.add('inactive');
}
    shoppingcartcontainer.classList.toggle('inactive');
}
function productdetailaside(){
    shoppingcartcontainer.classList.add('inactive');
    
    productdetailcontainer.classList.remove('inactive');
}
function closeproductdetailaside(){
    productdetailcontainer.classList.add('inactive');
}


const productlist = [];
productlist.push({
name: 'Bike',
price: 120,
image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productlist.push({
    name: 'Bike',
    price: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
productlist.push({
name: 'Computer',
price: 320,
image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderproducts(arr){
    for ( product of productlist){
        const productcard =  document.createElement('div');
        productcard.classList.add('product-card');
    
        //product = {name,price,image} -> product.image
        const productimg = document.createElement('img');
        productimg.setAttribute('src', product.image);
        productimg.addEventListener('click', productdetailaside);
    
        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');
    
        const productinfodiv = document.createElement('div');
    
        const productprice = document.createElement('p');
        productprice.innerText = '$' + product.price;
    
        const productname = document.createElement('p');
        productname.innerText = product.name;
    
        productinfodiv.appendChild(productprice);
        productinfodiv.appendChild(productname);
    
        const productinfofigure = document.createElement('figure');
        const productimgcart = document.createElement('img');
        productimgcart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productinfofigure.appendChild(productimgcart);
    
    
        productinfo.appendChild(productinfodiv);
        productinfo.appendChild(productinfofigure);
    
        productcard.appendChild(productimg);
        productcard.appendChild(productinfo);
    
        cardscontainer.appendChild(productcard);
    }
}

renderproducts(productlist);