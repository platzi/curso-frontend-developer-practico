const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuIcon = document.querySelector(".menu");

const shoppingCartAside = document.querySelector(".product-detail");
const navShoppingCart = document.querySelector(".navbar-shopping-cart");

const cardsContainer = document.querySelector(".cards-container");

navShoppingCart.addEventListener("click", ()=>{
    shoppingCartAside.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
})

mobileMenuIcon.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    shoppingCartAside.classList.add("inactive");
})

navEmail.addEventListener("click", ()=>{ //Uso una funcion de flecha para el evento ya que la funcion no se volvera a usar.
    
    desktopMenu.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    shoppingCartAside.classList.add("inactive");
});

function productConstructor(name, price, img){
    this.name = name,
    this.price = price,
    this.img = img
}

const productList = [];

productList.push(
    new productConstructor("bici", 200, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
    new productConstructor("auto", 3000, "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=400"),
    new productConstructor("moto", 1249, "https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
    new productConstructor("skate", 110, "https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
    new productConstructor("monociclo", 320, "https://images.pexels.com/photos/6156545/pexels-photo-6156545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
    new productConstructor("patines", 320, "https://images.pexels.com/photos/914996/pexels-photo-914996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
)

function newProductsCards(arr){
    for(product of arr){

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", product.img);
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const div = document.createElement("div");
        
        const priceElement = document.createElement("p");
        priceElement.append(`$${product.price}`);
        
        const nameElement = document.createElement("p");
        nameElement.append(product.name);
    
        const figure = document.createElement("figure");
    
        const cartIcon = document.createElement("img");
        cartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        figure.appendChild(cartIcon);
    
        div.append(priceElement, nameElement);
    
        productInfo.append(div, figure);
    
        productCard.append(imgElement, productInfo);
    
        
        cardsContainer.append(productCard);

    }
}
newProductsCards(productList);
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