const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu=document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer= document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);

menuHamIcon.addEventListener('click',toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//fucntion 1
function toggleDesktopMenu(){
    console.log('Click');
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//fucntion 2
function toggleMobileMenu(){
    console.log('Click');

    const isAsideClosed= shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

//fucntion 3
function toggleCarritoAside(){
    console.log('click');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }



    shoppingCartContainer.classList.toggle('inactive');
    
}

//function 4

function openProductDetailAside(){

    
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

//function 5
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


//funcion products
const productList =[];
productList.push({
    name: 'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla TV',
    price:220,
    image: 'https://images.pexels.com/photos/5721865/pexels-photo-5721865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Compu',
    price:620,
    image: 'https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Patineta',
    price:1200,
    image: 'https://images.pexels.com/photos/10675618/pexels-photo-10675618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Teclado pc',
    price:120,
    image: 'https://images.pexels.com/photos/5185150/pexels-photo-5185150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Dron',
    price:2000,
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

function renderProducts(arr){
    for(product of arr){

        //CREAR LA MAQUETACION DEL HTML
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        //product ={name,price,image}-> product.image
        const productImg = document.createElement('img'); //Crea el elemento imagen
        productImg.setAttribute('src', product.image); // Se le agrega el atributo a la imagen con la lista de productos del array que se hizo arriba
        productImg.addEventListener('click',openProductDetailAside);


        const productInfo = document.createElement('div'); // Crea el contenedor div
        productInfo.classList.add('product-info'); // le añade la clase product-info al productInfo(div)
    
        const productInfoDiv = document.createElement('div');//Crea el contenedor div vacio
    
        const productPrice= document.createElement('p');//Crea el parrafo <p>
        productPrice.innerText= '$' + product.price;//le añade el precio al parrafo productPrice con la lista de productos del array que se hizo
        
        const productName = document.createElement('p');//Crea el parrafo <p>
        productName.innerText = product.name;//le añade el nombre al parrafo productName con la lista de productos del array que se hizo arriba
    
        const productInfoFigure= document.createElement('figure'); //Crea el figure<figure>
        const productImgCart=document.createElement('img');//Crea el elemento imagen
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');//le añade el atributo de la imagen a productImgCart

        //APPENCHILD LA MAQUETACION Al HTML DE ARRIBA HACIA ABAJO 
        cardsContainer.appendChild(productCard); //arriba se selecciono la clase (cards-container)estamos apendiando el productCard

        productCard.appendChild(productImg);//Se le hizo append el productImg al productCard
        productCard.appendChild(productInfo);//se le hizo append el productInfo al productCard

        productInfoDiv.appendChild(productPrice);//se le hizo append el productPrice al productInfoDiv
        productInfoDiv.appendChild(productName);//se le hizo append el productName al productInfoDiv

        productInfo.appendChild(productInfoDiv);//se le hizo apppend el productInfoDiv al productInfo
        productInfo.appendChild(productInfoFigure);//se le hizo apppend el productInfoFigure al productInfo
        productInfoFigure.appendChild(productImgCart);//se le hizo append el productImgCart al productInfoFigure
       
    
        
    
        
    }
}

renderProducts(productList);