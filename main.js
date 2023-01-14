const  menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const  menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const hamburguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
hamburguerIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleOrderMenu);

function toggleDesktopMenu() {     
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {     
    mobileMenu.classList.toggle('inactive');  
    
}

function toggleOrderMenu() {     
    const isMobileClosed = mobileMenu.classList.contains('inactive');
    console.log('Esta ingresando');
    if(!isMobileClosed){
        console.log('Esta ingresando 2');
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');  
    
}

const productList = [];

productList.push({
    name:'bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push({
    name:'screen',
    price: 200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push({
    name:'Laptop',
    price: 1000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

/*
product
*/


for(product of productList){
    document.cre
}


console.log(productList);



