'use strict'; 

window.addEventListener('load',()=>{

    // Declaración e inicialización de variables; 
    const menu = document.querySelector('.navbar-email'); 
    const desktop_menu = document.querySelector('.desktop-menu'); 
    const IconBurguer = document.querySelector('.menu'); 
    const mobile_menu = document.querySelector('.mobile-menu');  
    const shoppingCartContainer = document.querySelector('#shoppingCartContainer'); 
    const car = document.querySelector('.navbar-shopping-cart');
    const cards = document.querySelector('.cards-container'); 
    const productDetail = document.querySelector('#productDetail'); 
    const productDetailClose = document.querySelector('.product-detail-close');
    const imageDetail = document.querySelector('#imageDetail'); 
    const productList = []; 

    // Objetos; 
    productList.push({
        name:'Bike',
        price: 12700,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
    productList.push ({
        name:'Bicycle helmet',
        price: 1200,
        image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    });
    productList.push ({
        name:'Bicycle helmet',
        price: 1600,
        image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
    });
    productList.push ({
        name:'Bicycle helmet',
        price: 1500,
        image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
    });
    productList.push ({
        name:'Seat',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
    });
    productList.push ({
        name:'Tennis Montain Bike',
        price: 2200,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
    });
    productList.push ({
        name:'Sunglasses',
        price: 800,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
    });
    productList.push ({
        name:'Sunglasses',
        price: 600,
        image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
    });
    productList.push ({
        name:'Bicycle seat bag',
        price: 876,
        image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
    }); 


    // Instrucciones;
    // Añadir clase inactive; 
    menu.addEventListener('click',()=>{
        // Cada vez que se le da click, agrega o quita la clase inactive; 
        desktop_menu.classList.toggle('inactive'); 

        // Condición con operador ternario; 
        !shoppingCartContainer.classList.contains('inactive') ? shoppingCartContainer.classList.add('inactive') : 0;
        !mobile_menu.classList.contains('inactive') ? mobile_menu.classList.add('inactive') : 0; 
    })
    

    IconBurguer.addEventListener('click',()=>{
        mobile_menu.classList.toggle('inactive'); 

        // Condición con operador ternario; 
        !shoppingCartContainer.classList.contains('inactive') ? shoppingCartContainer.classList.add('inactive') : 0;
        !desktop_menu.classList.contains('inactive') ? desktop_menu.classList.add('inactive') : 0; 
        !productDetail.classList.contains('inactive') ? productDetail.classList.add('inactive') : 0; 
    }); 

    car.addEventListener('click',()=>{
        shoppingCartContainer.classList.toggle('inactive');

        // Condición con operador ternario; 
        !desktop_menu.classList.contains('inactive') ? desktop_menu.classList.add('inactive') : 0; 
        !mobile_menu.classList.contains('inactive') ? mobile_menu.classList.add('inactive') : 0; 
        !productDetail.classList.contains('inactive') ? productDetail.classList.add('inactive') : 0; 
    });


    let ProductListCard = (ListaProductos)=>{
        for(let product of ListaProductos){

            // Delcaración e inicialización de variables; 
            let productCard = document.createElement('div'); 
            let image = document.createElement('img'); 
            let card = document.createElement('div'); 
            let information = document.createElement('div'); 
            let price = document.createElement('p'); 
            let name = document.createElement('p'); 
            let figure = document.createElement('figure'); 
            let littleCar = document.createElement('img'); 
    
            // Asignación de clases; 
            productCard.classList.add('product-card'); 
            image.setAttribute('src',product.image); 
            card.classList.add('product-info'); 
            price.innerText = product.price; 
            name.innerText = product.name;
            littleCar.setAttribute('src', './icons/bt_add_to_cart.svg'); 
            productDetail.classList.add('inactive'); 
    
            // Eventos
            image.addEventListener('click',()=>{
                imageDetail.setAttribute('src',product.image)
                Opendetails();  
            }); 

            // Inserciones; 
            figure.append(littleCar); 
            card.append(information,figure); // Terciario; 
            information.append(price,name); // Cuarto; 
            productCard.append(image,card); // Secundario; 
    
            cards.append(productCard); // Primario

            image.addEventListener('click',()=>{
                Opendetails();  
            }); 
        }
    }

    ProductListCard(productList); 
     
    // Para abrir los detalles del producto; 
    let Opendetails = ()=>{
        // Abrir el contenedor de los detalles de cada producto; 
        productDetail.classList.remove('inactive');

        // Cerrar el carrito de compras; 
        shoppingCartContainer.classList.add('inactive');

        //Cerrar el menú mobile; 
        mobile_menu.classList.add('inactive');
    }
    
    let cerrar = ()=>{
    //Para cerrar los detalles del producto; 
        productDetail.classList.add('inactive'); 
    };

    productDetailClose.addEventListener('click',()=>{
        cerrar(); 
    }); 


 
}); 

