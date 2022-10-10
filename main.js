
//Selectors
const userMenuDesktop=document.querySelector('.desktop-menu');
const userEmail=document.querySelector('.navbar-email');
const burguerMenuIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const cartMenuIcon=document.querySelector('.navbar-shopping-cart');
const closeIconProductDetail=document.querySelector('.product-detail-close')
const cartMenu=document.querySelector('#cartContainer');
const cardContainer=document.querySelector('.cards-container');
const productDetailContainer=document.querySelector('#productDetail');
let productSelect=null;


//events to opens menus (userMenu, burguermenu in mobile, cartmenu)
userEmail.addEventListener("click",function(){toggleMenu(userMenuDesktop)});
burguerMenuIcon.addEventListener("click", function(){toggleMenu(mobileMenu)});
cartMenuIcon.addEventListener("click",function(){toggleMenu(cartMenu)});

closeIconProductDetail.addEventListener("click",closeProductDetailAside);

//function to open menus
function toggleMenu(elemento){

    if(elemento==userMenuDesktop){
        mobileMenu.classList.add("inactive");
        cartMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
        userMenuDesktop.classList.toggle("inactive");
    }
    else if(elemento==mobileMenu){
        userMenuDesktop.classList.add("inactive");
        cartMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
    else if(elemento==cartMenu){
        userMenuDesktop.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
        cartMenu.classList.toggle("inactive");
    }

}

// function openProductDetailAside(){
//     mobileMenu.classList.add("inactive");
//     cartMenu.classList.add("inactive");
//     userMenuDesktop.classList.add("inactive");
//     productDetailContainer.classList.remove("inactive");



// }

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}


//array with pruducts
const productList=[];
productList.push({
    name: 'Bike',
    price: '120',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: "Comfortable e-Bike with the power of a confident ride. Como lets you go with the flow by giving you a full-power, confidence-inspiring, utterly delightful experience on a bike that feels effortless to ride."
});
productList.push({
    name: 'Tablet',
    price: '220',
    image:'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?cs=srgb&dl=pexels-josh-sorenson-1334597.jpg&fm=jpg',
    description: "Samsung Galaxy Tab A7 Lite, the tablet that's made to be shared. With its compact 8.7 screen, Galaxy Tab A7 Lite is perfectly sized for entertainment on the go. Its sturdy metal frame is built to be brought along from the living room to your beach vacation, or wherever you want to take it. Galaxy Tab A7 Lite also simplifies entertainment needs for everyone under your roof, with a powerful processor and plenty of storage."
});
productList.push({
    name: 'TV',
    price: '520',
    image:'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?cs=srgb&dl=pexels-rene-asmussen-333984.jpg&fm=jpg',
    description: "View your favorite content at four times the resolution of 1080p with the Samsung TU7000 65 Class HDR 4K UHD Smart LED TV."
});

//Function to render products with iteration of array
function renderProducts(arr){
    for (product of arr){

        const productCard=document.createElement('div');
        productCard.classList.add('product-card');

        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
        // productImg.addEventListener('click',openProductDetailAside); ESTE FUNCIONA
        
        const productDescription=document.createElement('p');
        productDescription.innerText=product.description;

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

        //add ID to each product to show their detail product
        productCard.setAttribute('id','product');

        cardContainer.appendChild(productCard);


        //ESTA FUNCIÒN ES UN INTENTO DE VOLVER DINAMICOS LOS VALORES DEL ASIDE DESPLEGABLE DE LOS PRODUCT DETAILS NO PUDE ??
        productImg.addEventListener('click',function(){

            productDetailContainer.classList.add("inactive");
            mobileMenu.classList.add("inactive");
            cartMenu.classList.add("inactive");
            userMenuDesktop.classList.add("inactive");
            productDetailContainer.classList.remove("inactive");

            console.log(productDescription);
            //create and renderizing ProductInfoDetailAside
            const productAsideInfo=document.createElement('div');
            productAsideInfo.classList.add("product-info");

            const productPriceAside = document.createElement("p");
            productPriceAside.innerText ="$"+product.price;
    
            const productNameAside = document.createElement("p");
            productNameAside.innerText =  product.name;
    
            const productDescriptionAside = document.createElement("p");
            productDescriptionAside.innerText = product.description;

            const buttonAsideProductDetail=document.createElement("button");
            buttonAsideProductDetail.classList.add("primary-button");
            buttonAsideProductDetail.classList.add("add-to-cart-button");
            
            buttonAsideProductDetail.innerText="Add to cart"

            const cartIconProductDetail=document.createElement("img");
            cartIconProductDetail.setAttribute("src","./icons/bt_add_to_cart.svg");
            cartIconProductDetail.setAttribute("alt","add to cart");
            buttonAsideProductDetail.append(cartIconProductDetail);

            productAsideInfo.append(productPriceAside,productNameAside,productDescriptionAside,buttonAsideProductDetail);  
            
            productDetailContainer.appendChild(productAsideInfo);
        });
    }
}

renderProducts(productList);