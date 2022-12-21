//Fusión del menú en desktop
let navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const closeIcon = document.querySelector('.product-detail-close');


navEmail.addEventListener('click',()=>{
    if(!aside.classList.contains('inactive')|| !productDetailContainer.classList.contains('inactive')){
        aside.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        
    }
    desktopMenu.classList.toggle('inactive');  
});


// Fusion menu en mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click',()=>{
    if(!aside.classList.contains('inactive')||!productDetailContainer.classList.contains('inactive')){
        aside.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');  
});

//MY ORDER
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shopping-cart-container');

const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail')

menuCarritoIcon.addEventListener('click',()=>{
    if(!mobileMenu.classList.contains('inactive') ||!desktopMenu.classList.contains('inactive') ||!productDetailContainer.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetailContainer.classList.add('inactive');
        
    }
  
    aside.classList.toggle('inactive');
   
});
closeIcon.addEventListener('click',()=>{
    productDetailContainer.classList.add('inactive');
});

//Lista de productos: HTML a partir de arrays
const productList= [
    {
        id:1,
        name:"Bike",
        price:120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
    },
    {
        id:2,
        name:'Bicycle helmet',
        price: 1600,
        image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   

    },
    {
        id:3,
        name:'Seat',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
        
    },
    {
        id:4,
        name:'Tennis Montain Bike',
        price: 2200,
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est minima nostrum voluptatibus nisi quis.`   
    },
    {
        

    }
    
];

productList.push ({
   
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

function openProductDetailAside(){
    
}

function renderProducts(arr){
    for(product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',()=>{
            if(!mobileMenu.classList.contains('inactive') ||!desktopMenu.classList.contains('inactive') || !aside.classList.contains('inactive')){
                mobileMenu.classList.add('inactive');
                desktopMenu.classList.add('inactive');
                aside.classList.add('inactive');
                
            }
            productDetailContainer.classList.toggle('inactive')
        });
            
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productPrice.innerText='$'+product.price;
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}
 renderProducts(productList);
