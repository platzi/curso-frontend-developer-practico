//funciones 
function renderList(arr){
    for (product of arr){
        const ProductCard = document.createElement('div');
        ProductCard.classList.add("product-card");
    
        const Img = document.createElement('img');
        Img.setAttribute('src' ,product.image);
    
        const ProductInfo = document.createElement('div');
        ProductInfo.classList.add("product-info");
    
        const ProductInfoDiv = document.createElement('div');
    
        const Price = document.createElement('p');
        Price.innerText = "Q" + product.price;
        
        const Name = document.createElement('p');
        Name.innerText = product.name;
    
        const ProductInfoFigure = document.createElement('figure');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src' , "./icons/bt_add_to_cart.svg");
    
        // 1. ingresamos el nodo ProductImg al ProductInfoFigure
        ProductInfoFigure.appendChild(ProductImg);
    
        // 2. llamamos los nodos name y price al ProductInfoDiv
        ProductInfoDiv.append(Price,Name);
    
        // 3. ingresamos los nodos ProductInfoDiv,ProductInfoFigure al ProductInfo
        ProductInfo.append(ProductInfoDiv,ProductInfoFigure);
    
        // 4. ingresamos los nodos Img,ProductInfo al ProductCart
        ProductCard.append(Img,ProductInfo);
    
        // 5. ingresamos el nodo ProducrCard al CardsContiner 
        CardsContainer.appendChild(ProductCard);
    
    }
}

function exchangeDesktopMenu (){
    const IsAsideClosed = shoppingCartContainer.classList.contains ("inactive");

    if (!IsAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    DesktopMenu.classList.toggle("inactive");
}

function exchangeMobileMenu (){
    const IsAsideClosed = shoppingCartContainer.classList.contains ("inactive");

    if (!IsAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    MobileMenu.classList.toggle("inactive");
}

function exchangeCartAside (){
    const IsMobileMenuClosed = MobileMenu.classList.contains ("inactive");

    if (!IsMobileMenuClosed ){
        MobileMenu.classList.add("inactive")
    }
    shoppingCartContainer.classList.toggle("inactive");
}
//const
const ProductList = [];
const NavEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const BurgerStyleMenuBar = document.querySelector(".menu");
const MobileMenu = document.querySelector(".mobile-menu");
const CartMenu = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const CardsContainer = document.querySelector(".cards-container");
//eventos 
NavEmail.addEventListener("click" , exchangeDesktopMenu);
BurgerStyleMenuBar.addEventListener("click" , exchangeMobileMenu);
CartMenu.addEventListener("click" , exchangeCartAside);

//ingreso manual de los productos 
ProductList.push({
    name: "Bike",
    price: 5032,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
ProductList.push({
    name: "Bike Helmet",
    price: 300,
    image: "https://images.ecestaticos.com/Mpwpmj5ARlWM9PptocBcRCUb5I4=/0x123:996x662/1440x810/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe03%2F611%2Fbad%2Fe03611bad2690e2a5189c3a8b01acf33.jpg"
});
ProductList.push({
    name: "sunglasses",
    price: 127877,
    image: "https://i.ebayimg.com/thumbs/images/g/r0gAAOSwJOlisdcn/s-l300.jpg"
});
 
//llamando la funcion y le ingresamos como argumento el ProductList
renderList(ProductList);