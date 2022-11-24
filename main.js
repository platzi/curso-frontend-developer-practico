//Desktop Menu toggle

const navEmail= document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");

navEmail.addEventListener("click",toggleDesktopMenu);

function toggleDesktopMenu(){
    /* if (desktopMenu.className=="desktop-menu inactive"){
        desktopMenu.className="desktop-menu";
    }
    else{
        desktopMenu.className="desktop-menu inactive";
    } */
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
}

//Mobile Menu Toggle

const menuHamIcon= document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");

menuHamIcon.addEventListener("click",toggleMobileMenu);

function toggleMobileMenu(){    
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.add('inactive');
    mobileMenu.classList.toggle("inactive");
}

//Carrito shoppingCartContainer toggle

const carritoIcon= document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer= document.querySelector("#shoppingCartContainer");

carritoIcon.addEventListener("click",toggleCarritoshoppingCartContainer);

function toggleCarritoshoppingCartContainer(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add("inactive");
    productDetail.classList.add('inactive');
    shoppingCartContainer.classList.toggle("inactive");
}

const productList= [];

productList.push({
    name:"Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
    );
productList.push({
    name:"Pantalla",
    price: 140,
    img: "https://www.hd-tecnologia.com/imagenes/articulos/2016/12/La-competencia-se-calienta-en-el-mercado-de-los-Monitores-Gamers.jpg"}
    );
productList.push({
    name:"Computador",
    price: 220,
    img: "https://themark.com.co/wp-content/uploads/2022/07/CORSAIR-CARBIDE-SPEC-OMEGA-BLANCO-1.png"}
    );

 
{/* <div class="product-card">
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
      </div> */}

const productsContainer = document.querySelector(".cards-container")


function renderProducts(products){
    for (product of productList){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');    
    
        // product= {name,price,img}
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.setAttribute('id', "product-img");
        productImg.addEventListener("click",openDetails)    
    
        const productInfoDiv = document.createElement('div');
         
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productPrice = document.createElement('p');
        productPrice.innerText= '$ '+ product.price;
    
        productInfoDiv.append(productName,productPrice);
    
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
    
        productInfo.append(productInfoFigure);           
    
        productCard.append(productImg,productInfo);
    
        productsContainer.append(productCard)
    }
}

renderProducts(productList)

//Product Details aside toggle

const productDetail= document.querySelector('#product-detail');
const productDetailCloseIcon= document.querySelector('.product-detail-close');

function openDetails(){
    productDetail.classList.remove('inactive');
    shoppingCartContainer.classList.add("inactive");
}
productDetailCloseIcon.addEventListener('click',toggleDetails);

function toggleDetails(){
    
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add("inactive");
    

}


