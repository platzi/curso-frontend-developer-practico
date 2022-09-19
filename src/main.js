const menuEmail = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');

const menuHamIcon  = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');

const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const aside  = document.querySelector('.product-detail');

const cardsContainer  = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);



function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive');
    
    if(!isAsideClose){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');
    
    if(!isAsideClose){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    
    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList = [];

class Producto{
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const Bike = new Producto('Bike', 120, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");

const Monitor = new Producto('LG led mostro', 230, "https://media.gcflearnfree.org/content/5ce56bebc0220e22c08b9f74_05_22_2019/monitor-01_xl.png");

const Computador = new Producto('Asus pro max', 1300, "https://imgs.ponto.com.br/1531924465/1xg.jpg")
const Perro = new Producto('Asus pro max', 1300, "https://imgs.ponto.com.br/1531924465/1xg.jpg")
const perrra = new Producto('Asus pro max', 1300, "https://imgs.ponto.com.br/1531924465/1xg.jpg")
const Computewe = new Producto('Asus pro max', 1300, "https://imgs.ponto.com.br/1531924465/1xg.jpg")


productList.push(Bike, Monitor, Computador, perrra, Computewe);


const renderProducts =(arr)=>{

    for (let Product of arr){
        console.log(`Productos:`+ Product.name);
    
       const ProductCard = document.createElement('div');
       ProductCard.classList.add('product-card');
    
       const ProductImg = document.createElement('img');
       ProductImg.setAttribute('src', Product.image)
    
       const ProductInfo = document.createElement('div');
       ProductInfo.classList.add("product-info");
    
       const ProductInfoDiv = document.createElement('div');
       const productPrice = document.createElement('p');
       productPrice.innerText = `$ ${Product.price}`;
    
       const productName = document.createElement('p');
       productName.innerText = `Nombre: ${Product.name}`;
    
       ProductInfoDiv.appendChild(productPrice);
       ProductInfoDiv.appendChild(productName);
    
    
    
       const ProductInfoFigure = document.createElement('figure');
       const ProductInfoImgCart = document.createElement('img');
       ProductInfoImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
       ProductInfoFigure.appendChild(ProductInfoImgCart);
    
       ProductInfo.appendChild(ProductInfoDiv);
       ProductInfo.appendChild(ProductInfoFigure);
    
       ProductCard.appendChild(ProductImg);
       ProductCard.appendChild(ProductInfo);
    
       cardsContainer.appendChild(ProductCard);
    }
    

}

renderProducts(productList);
