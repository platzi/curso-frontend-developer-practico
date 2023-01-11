//Parte de que aparezca o desaparezca el menú del carrito
//Apuntamos a donde queremos que le de click
const menuEmail = document.querySelector('.navbar-email')
//Apuntamos al menú
const desktopmenu = document.querySelector('.desktop-menu')

//Creamos icono de cierre
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//Creamos un selector para el icono del menú mobile
const menuHamIcon = document.querySelector('.menu');
//Para el menú mobile
const mobileMenu = document.querySelector('.mobile-menu');
//Carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
//Ahora del product detail que es lo que saldrá al seleccionar el carrito
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
//Product detail
const productDetailContainer = document.querySelector('#productDetail');
//List products
const cards_container = document.querySelector('.cards-container')


//Ejecutamos un evento 
menuEmail.addEventListener('click',toggleDesktopmenu);
//Ejecutamos un evento 
menuHamIcon.addEventListener('click',toggleMobilepmenu);
//Ejecutamos un evento
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
//Create event
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);




//Activa o desactiva el menú en desk
function toggleDesktopmenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');   
    }
    desktopmenu.classList.toggle('inactive');
};
//Activa o desactiva el menú en movil
function toggleMobilepmenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');   
    }
    //Cierra el product details cuando abrimos menu movile
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
};
//Activa o desactiva el carrito

//Explicación de la función
/**
 * Cada vez que le demos click al carrito vamos a cerrar el menu movile
 */
function toggleCarritoAside(){
    //Para que no se peguen el carrito y el menú hamburguesa
    //Colocamos si están cerrados
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    //Si el mobileMenu esta abierto, hay que cerrar
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');   
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    //Si el product detalles esta abierto
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');   
    }
    //Quita el inactive
    shoppingCartContainer.classList.toggle('inactive');

}
//Abrirá los dtalles de algún producto
function openProductDetailAside(){
    //Simplificando pasos y condicionales simplemente borrar clases
    shoppingCartContainer.classList.add('inactive');  


    //Aparece..
    productDetailContainer.classList.remove('inactive');
    
}
//Cerrará al seleccionar el icono tachita
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


/**Lista de productos */
const productList=[];
//Add new element
productList.push({
    name:'Bike',
    price: 1500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
//Add new element
productList.push({
    name:'Pantalla',
    price: 6000,
    image: 'https://cdn1.coppel.com/images/catalog/pm/2896793-1.jpg'
});

//Add new element
productList.push({
    name:'Computadora',
    price: 8500,
    image: 'https://cdn1.coppel.com/images/catalog/mkp/5698/3000/56981188-1.jpg'
});

//INSERT INTO
function renderProducts(array){
    for(product of array){
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
        //product = {name,price,image}->product.img
        const product_img = document.createElement('img');
        product_img.setAttribute('src', product.image);
        //Ejecutará una función que abrirá sus detalles
        product_img.addEventListener('click', openProductDetailAside);

        //ready
        const product_info = document.createElement('div');
        product_info.classList.add('product-info');

        const product_infoDiv = document.createElement('div');
        
        const product_price = document.createElement('p');
        product_price.innerText = '$' + product.price;
        const product_name = document.createElement('p');
        product_name.innerText = product.name;
        //Another way and better
        //It´s as put all her son's
        product_infoDiv.append(product_price, product_name)
        //product_infoDiv.appendChild(product_price);
        //product_infoDiv.appendChild(product_name);

        const product_infoFigure = document.createElement('figure');
        const product_Figureimg = document.createElement('img');
        product_Figureimg.setAttribute('src','./icons/bt_add_to_cart.svg');

        product_infoFigure.appendChild(product_Figureimg);
        
        product_info.appendChild(product_infoDiv);
        product_info.appendChild(product_infoFigure);

        product_card.appendChild(product_img);
        product_card.appendChild(product_info);

        //query selector top
        cards_container.appendChild(product_card);
    }
}

//Execute
renderProducts(productList);