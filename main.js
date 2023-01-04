const menu_email=document.querySelector('.navbar-email');
const desktop_menu=document.querySelector('.desktop-menu');


const iconoHamburguesa=document.querySelector('.menu');
const mobile_menu=document.querySelector('.mobile-menu');

const Carrito_compras=document.querySelector('.navbar-shopping-cart');
const detalleCarrito=document.querySelector('#shoppingcarcontainer');
const cards_container=document.querySelector('.cards-container');
const productdetailcontainer=document.querySelector('#productdetail');
const productdetailcloseicon=document.querySelector('.product-detail-close');

menu_email.addEventListener('click',toggle_desktop_menu)
iconoHamburguesa.addEventListener('click',toggle_mobile_menu)
Carrito_compras.addEventListener('click',toggle_carrito_detalle)
productdetailcloseicon.addEventListener('click', closeproductdetail)

function toggle_desktop_menu(){
    const isCarritoClose=detalleCarrito.classList.contains('inactive');
    

    if(!isCarritoClose){
        detalleCarrito.classList.add('inactive');
    }

    closeproductdetail()

    desktop_menu.classList.toggle('inactive')
}

function toggle_mobile_menu(){
    const isCarritoClose=detalleCarrito.classList.contains('inactive');

    if(!isCarritoClose){
        detalleCarrito.classList.add('inactive');
    }

    closeproductdetail()

    mobile_menu.classList.toggle('inactive')
}

function toggle_carrito_detalle(){
    const isMobielMenuClose=mobile_menu.classList.contains('inactive');
    const isMenuMailClose=desktop_menu.classList.contains('inactive');
    const isproductDetailClose=productdetailcontainer.classList.contains('inactive');

    if(!isMenuMailClose){
        productdetailcontainer.classList.add('inactive');
    }
    

    if(!isMenuMailClose){
        desktop_menu.classList.add('inactive');
    }

    if(!isMobielMenuClose){
        mobile_menu.classList.add('inactive');
    }

    if(!isproductDetailClose){
        productdetailcontainer.classList.add('inactive');
    }

    detalleCarrito.classList.toggle('inactive')
}

function opendetailproduct(){
    productdetailcontainer.classList.remove('inactive')

    const isproductdetailClose=productdetailcontainer.classList.contains('inactive');
    if(!isproductdetailClose){
        detalleCarrito.classList.add('inactive');
        desktop_menu.classList.add('inactive');
    }

}

function closeproductdetail(){
    productdetailcontainer.classList.add('inactive');
}

function render_products(array){
    for (product of array){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card')
    
        const product_img= document.createElement('img');
        product_img.setAttribute('src', product.image);
        product_img.addEventListener('click', opendetailproduct);
    
        const infoproduct= document.createElement('div');
        infoproduct.classList.add('product-info')
    
        const infodiv = document.createElement('div');
    
        const product_price = document.createElement('p');
        product_price.innerText= '$' + product.price;
    
        const product_name = document.createElement('p');
        product_name.innerText=  product.name;
    
        infodiv.append(product_price,product_name)
    
        const product_loguito=document.createElement('figure')
        const imagecart= document.createElement('img')
    
        imagecart.setAttribute('src',"./icons/bt_add_to_cart.svg")
    
        product_loguito.appendChild(imagecart);
    
        infoproduct.appendChild(infodiv)
        infoproduct.appendChild(product_loguito)
    
        productCard.appendChild(product_img)
        productCard.appendChild(infoproduct)
    
        cards_container.appendChild(productCard)
    
    }
}

const productList=[];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Guitar',
    price: 320,
    image: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Desktop',
    price: 520,
    image: "http://www.unbosque.edu.co/sites/default/files/2020-07/computadores_0.jpg"
})
productList.push({
    name: 'Guitar',
    price: 320,
    image: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Desktop',
    price: 520,
    image: "http://www.unbosque.edu.co/sites/default/files/2020-07/computadores_0.jpg"
})
productList.push({
    name: 'Guitar',
    price: 320,
    image: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: 'Desktop',
    price: 520,
    image: "http://www.unbosque.edu.co/sites/default/files/2020-07/computadores_0.jpg"
});

render_products(productList)



