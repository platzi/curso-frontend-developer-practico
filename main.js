const clickMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburguesa = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

clickMail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toogleMobileMenu);
menuCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    const menuCarritoClosed = productDetail.classList.contains('inactive');
    // Si product detail no tiene la clase active (o sea que está abierto)
    if(!menuCarritoClosed){
       productDetail.classList.add('inactive');
    }
}
function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}
function toggleCarrito(){
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    const menuDesktopClosed = desktopMenu.classList.contains('inactive');
    if(!menuDesktopClosed){
       desktopMenu.classList.add('inactive');
    }
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 870,
    image: 'https://images.pexels.com/photos/6316067/pexels-photo-6316067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Laptop',
    price: 540,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

for (product of productList){
    console.table(product.price);
}