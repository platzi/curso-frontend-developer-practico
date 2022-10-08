
//Selectors
const userMenuDesktop=document.querySelector('.desktop-menu');
const userEmail=document.querySelector('.navbar-email');
const burguerMenuIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const cartMenuIcon=document.querySelector('.navbar-shopping-cart');
const cartMenu=document.querySelector('.product-detail');
const cardContainer=document.querySelector('.cards-container');


//events to opens menus (userMenu, burguermenu in mobile, cartmenu)
userEmail.addEventListener("click",function(){toggleMenu(userMenuDesktop)});
burguerMenuIcon.addEventListener("click", function(){toggleMenu(mobileMenu)});
cartMenuIcon.addEventListener("click",function(){toggleMenu(cartMenu)});

//function to open menus
function toggleMenu(elemento){
    
    if(elemento==userMenuDesktop){
        mobileMenu.classList.add("inactive");
        cartMenu.classList.add("inactive");
        userMenuDesktop.classList.toggle("inactive");
    }
    else if(elemento==mobileMenu){
        userMenuDesktop.classList.add("inactive");
        cartMenu.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
    else if(elemento==cartMenu){
        userMenuDesktop.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        cartMenu.classList.toggle("inactive");
    }

}


//array with pruducts
const productList=[];
productList.push({
    name: 'Bike',
    price: '120',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tablet',
    price: '220',
    image:'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?cs=srgb&dl=pexels-josh-sorenson-1334597.jpg&fm=jpg'
});
productList.push({
    name: 'TV',
    price: '520',
    image:'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?cs=srgb&dl=pexels-rene-asmussen-333984.jpg&fm=jpg'
});
//Function to render products with iteration of array 
function renderProducts(arr){
    for (product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        
    
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;
        const productName=document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.append(productPrice,productName);
    
        const productInfoFigure=document.createElement('figure');
    
        const icon=document.createElement('img');
        icon.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(icon);
    
    
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(productImg,productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);