/* Seleciono elementos del menu desktop */
const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');


/* Seleciono elementos del menu Mobile */

const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


/* Seleciono elementos del Shopping Car */

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
// Cambio product-detail por l ide shopingCartContainer
// const asideCar = document.querySelector('.product-detail');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click',toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleAsideMenu);


function toggleAsideMenu(){
    shopingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive')  
    desktopMenu.classList.add('inactive');  
}


// Esta si la realicé como lo explicó el teacher, 
//Le puse el cursor en mobile pero me parece que no va.
function toggleMobileMenu(){    
    mobileMenu.classList.toggle('inactive');        
    shopingCartContainer.classList.add('inactive');
}

// El ejercicio lo realicé antes de terminr la clase por eso salio sin el metodo contain del atributo class
// Pendiente de Modificar

/*  
    desktopMenu.classList.contain('inactive')

*/ 
function toggleDesktopMenu(){
    //Asi lo realizó el teacher.
    desktopMenu.classList.toggle('inactive');
    //let toggleClass = desktopMenu.getAttribute('class')
    //console.log(toggleClass)
    // if (toggleClass === 'desktop-menu inactive') {
    //desktopMenu.classList.remove('inactive');
    shopingCartContainer.classList.add('inactive');
    // }

    // if (toggleClass === 'desktop-menu') {
    mobileMenu.classList.add('inactive');
    // }

    
}

const productList = [];
console.log(productList)
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

console.log(productList)
productList.push({
    name: 'Scooter',
    price: 300,
    image: 'https://images.squarespace-cdn.com/content/v1/5defdaadc0d6df613ed4c82f/9aa3e754-987d-4fd4-a49a-815b4a7e3ca2/2022+SP+scooter+studio+photos+no+background.png?format=500w',

})
productList.push({
    name: 'Motorcycle',
    price: 1200,
    image: 'https://i1.wp.com/jolta.com/wp-content/uploads/2021/10/MotoTec_36v-500w_ElectricBike4.jpeg?fit=1000%2C750&ssl=1',

})

/*
<div class="product-card">
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
</div>

*/

function renderProducts (arrays){
    for (item of arrays) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img')
        img.setAttribute('src',item.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');
    
    
        // Div pra el precio y el Nombre --> productPrice y productName
        const divProductInfo = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerHTML = `$ ${item.price}`
    
        const productName = document.createElement('p');
        productName.innerHTML = `${item.name}`
    
        // Empaquetado de las etiquet P en el Div de divProductInfo
        divProductInfo.append(productPrice,productName)
    
        // Figure para  --> imgBtn
        const productFigures = document.createElement('figure');
       
        const imgBtn = document.createElement('img')
        imgBtn.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        // Empaquetado de imgBtn en productFigures
        productFigures.appendChild(imgBtn)
    
        // Empaquetado de productInfo --> divProductInfo y productFigures
        productInfo.append(divProductInfo,productFigures)
    
        // Empaquetado del productCard --> productInfo e img 
        productCard.append(img,productInfo)
    
        // Empaquetado del contenedor cardsContainer --> productCard
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);