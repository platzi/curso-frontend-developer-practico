//DESKTOP
const menuEmail = document.querySelector('.navbar-email');   // clase de email
const desktopMenu = document.querySelector('.desktop-menu'); //clase de contenedor desktopMenu

//MOBILE
const iconMenu = document.querySelector('.menu'); //clase del icono Menu del mobile
const mobileMenu = document.querySelector('.mobile-menu'); //contenedor MenuMobile

//ASIDE
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//CONTENEDOR DE LISTA DE PRODUCTOS
const cardsContainer = document.querySelector('.cards-container');

//cada vez que se le haga click a email, pasara a la funcion
menuEmail.addEventListener('click', toggleDesktopEmail);
//ESCUCHADOR DE MOBILE
iconMenu.addEventListener('click', toggleMobileMenu);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// la funcion tiene por opcion el TOGGLE que es para aparecer y desaparecer
// classList nos permite tener algunos metodos de desktopMenu
function toggleDesktopEmail(){
    //para que el aside se cierre cada vez que hago click a email
    const isAside = aside.classList.contains('inactive');
    if(!isAside){
        aside.classList.add('inactive');
    }
    //para que abra y se cierre 
    desktopMenu.classList.toggle('inactive');
}

//FUNCION DE MOBILE MENU
function toggleMobileMenu(){
    //para que el aside se cierre cada vez que hago click en MenuMobile
    const isAside = aside.classList.contains('inactive');
    if(!isAside){
        aside.classList.add('inactive');
    }

    //para que abra y se cierre
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    /*para que el menu del mobile y el carrito se cierren cada que se abre el otro */
    /*como le estamos pasando el inactive, estamos diciendo que esta cerrado */
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopEmail = desktopMenu.classList.contains('inactive')
    /*Preguntamos si no esta cerrado */
    if(!isMobileMenuClose){ 
        //si esta abierto el menu, le pasamos para que se cierre
        mobileMenu.classList.add('inactive');
    }
    //para que el email se cierre cada vez que hago click en carrito
    if(!isDesktopEmail){
        desktopMenu.classList.add('inactive')
    }

    //para que se cierre o se habra el contenedor
    aside.classList.toggle('inactive');
}

//LISTA DE PRODUCTOS CREADA DESDE JAVASCRIP
//1.Creamos el array
const productList = []
//Creamos el push para que se vayan añadiendo los objetos
productList.push({
    name: 'bike', 
    price: 250,
    Image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Pantalla', 
    price: 250,
    Image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Computadora', 
    price: 250,
    Image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:'Bike',
    price: 12700,
    Image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name:'Bicycle helmet',
    price: 1200,
    Image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});

productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    Image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    Image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
    name:'Seat',
    price: 300,
    Image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    Image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    Image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    Image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    Image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 


        /*<div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <div class="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
              </figure>
            </div>
        </div> */

//Creamos los elementos de nuestros array
for (product of productList){
    //creamos el elemento DIV y su clase product-card
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

        //CREAMOS EL ELEMENTO IMG
        //product = {name, price, image} -> product.image
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.Image)

        //CREAMOS EL DIV DE LA CLASS:product-info
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

            //CREAMOS EL DIV DONDE VA EL PRECIO Y NOMBRE
            const productInfoDiv = document.createElement('div');
                //Creamos el precio
                const productPrice = document.createElement('p');
                productPrice.innerHTML= '$'+ product.price;
                //Creamos el name
                const productName = document.createElement('p');
                productName.innerHTML= product.name;

            //TENEMOS QUE INTRODUCIR LOS ELEMENTOS A LOS CONTENEDOR DIV
            productInfoDiv.appendChild(productPrice) 
            productInfoDiv.appendChild(productName)

        
            //CREO EL CONTENEDOR FIGURE
            const productInfoFigure = document.createElement('figure');
                //CREO LA IMG QUE ESTA DENTRO DEL CONTENEDOR FIGURE
                const productImgCard = document.createElement('img');
                productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

            //TENEMOS QUE INTRODUCIR LOS ELEMENTOS AL CONTENEDOR FIGURE
            productInfoFigure.appendChild(productImgCard)
        
        //TENEMOS QUE INTRODUCIR LOS ELEMENTOS AL CONTENEDOR PRODUCT-INFOR
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
    //TENEMOS QUE INTRODUCIR LOS ELEMENTOS AL CONTENEDOR PRODUCT-CARD
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

//CONTENEDOR GENERAL, QUE VIENE DESDE HTML
cardsContainer.appendChild(productCard)
}