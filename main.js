const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(event) {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    } 


    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    } 

    mobileMenu.classList.toggle('oculto');

}
function toggleCarritoAside(){

    const ismobileMenuClosed = mobileMenu.classList.contains('oculto');
    
    if(!ismobileMenuClosed){
        mobileMenu.classList.add('oculto');
    } 
    
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: '130',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: '2000',
    image:'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Pantalla Retro',
    price: '2000',
    image:'https://images.pexels.com/photos/5721881/pexels-photo-5721881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'bike',
    price: '130',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: '2000',
    image:'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Pantalla Retro',
    price: '2000',
    image:'https://images.pexels.com/photos/5721881/pexels-photo-5721881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});




function renderProducts(arr){
    for (product of arr) {
        //Declarar los elementos y agregarlos con la constante
       const productCard = document.createElement('div');
       //Se agrega una clase al elemento que se creó en la constante
        productCard.classList.add('product-card');
    
        
       const productImg = document.createElement('img');
       //se agrega el atributo de src a la etiqueta creada con la constante y lo que va dentro del atributo (product.image)
        productImg.setAttribute('src', product.image);
    
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText =  product.name;
    
        const productInfoFigure= document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //se maquetan las etiquetas creadas agregandose dentro de sus contenedores especificos
        productCard.append(productImg, productInfo)
    
        productInfo.append(productInfoDiv, productInfoFigure);
        productInfoDiv.append(productPrice, productName);
    
        productInfoFigure.appendChild(productImgCard);
    
        //se mandan estos hacia la clase contenedora en html y así reflejarlos
        cardsContainer.append(productCard);
    
    }
}

renderProducts(productList);