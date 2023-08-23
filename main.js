const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuicon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const shoppingicon = document.querySelector('.navbar-shopping-cart');
const shoppingmenu = document.querySelector('#shoppingCartContainer');
const cardscontainer = document.querySelector('.cards-container');
const productdetail = document.querySelector('#productDetail');
const closeicon = document.querySelector('.product-detail-close');

menuemail.addEventListener('click',toggleDesktopmenu);
menuicon.addEventListener('click',toggleMobilemenu);
shoppingicon.addEventListener('click',toggleShoppingmenu);
closeicon.addEventListener('click',toggleCloseicon);

function toggleDesktopmenu(){
    const isshoppingmenuclosed = shoppingmenu.classList.contains('inactive');
    const isproductdetailclosed = productdetail.classList.contains('inactive');
    if (!isshoppingmenuclosed){
        shoppingmenu.classList.add('inactive');
    }
    if (!isproductdetailclosed){
        productdetail.classList.add('inactive');
    }
    desktopmenu.classList.toggle('inactive');
};
function toggleMobilemenu(){
    const isshoppingmenuclosed = shoppingmenu.classList.contains('inactive');
    const isproductdetailclosed = productdetail.classList.contains('inactive');
    if (!isshoppingmenuclosed){
        shoppingmenu.classList.add('inactive');
    }
    if (!isproductdetailclosed){
        productdetail.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');
};
function toggleShoppingmenu(){
    const ismobilemenuclosed = mobilemenu.classList.contains('inactive');
    const isdesktopmenuclosed = desktopmenu.classList.contains('inactive');
    const isproductdetailclosed = productdetail.classList.contains('inactive');
    if (!isdesktopmenuclosed){
        desktopmenu.classList.add('inactive')
    };
    if (!ismobilemenuclosed){
        mobilemenu.classList.add('inactive');
    };
    if (!isproductdetailclosed){
        productdetail.classList.add('inactive');
    }
    shoppingmenu.classList.toggle('inactive');
};
function toggleProductdetail(){
    const ismobilemenuclosed = mobilemenu.classList.contains('inactive');
    const isdesktopmenuclosed = desktopmenu.classList.contains('inactive');
    const isshoppingmenuclosed = shoppingmenu.classList.contains('inactive');
    if (!isdesktopmenuclosed){
        desktopmenu.classList.add('inactive')
    };
    if (!ismobilemenuclosed){
        mobilemenu.classList.add('inactive');
    };
    productdetail.classList.remove('inactive');
};
function toggleCloseicon(){
    productdetail.classList.add('inactive')
};
function renderproducts(productlist){
    for (product of productlist){
        const productcard = document.createElement('div');
        productcard.classList.add('product-card');
        const productimg = document.createElement('img');
        productimg.setAttribute('src',product.image);
        productimg.addEventListener('click',toggleProductdetail);
        // product = {name,price,image} -> product.image
    
        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');
    
        const productinfodiv = document.createElement('div');
    
        const productprice = document.createElement('p');
        productprice.innerText='$'+product.price;
        const productname = document.createElement('p');
        productname.innerText=product.name;
    
        productinfodiv.appendChild(productprice);
        productinfodiv.appendChild(productname);
    
        const productinfofigure = document.createElement('figure');
        const productinfoimg = document.createElement('img');
        productinfoimg.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productinfofigure.appendChild(productinfoimg);
    
        productinfo.appendChild(productinfodiv);
        productinfo.appendChild(productinfofigure);
    
        productcard.appendChild(productimg);
        productcard.appendChild(productinfo);
    
        cardscontainer.appendChild(productcard);
    }
};

const productlist = [];

productlist.push(
    {
        name:'Bike',
        price:120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productlist.push(
    {
        name:'Computer',
        price:220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productlist.push(
    {
        name:'Mouse',
        price:40,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

renderproducts(productlist);