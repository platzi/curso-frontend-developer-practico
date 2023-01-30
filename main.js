// Mobile menu, desktop menu & shoping cart
const desktopMenuToggle = document.querySelector("#desktop-menu-toggle");
const mobileMenuToggle = document.querySelector("#mobile-menu-toggle");
const shoppingCartToggle = document.querySelector("#shopping-cart-toggle");
const desktopMenu = document.querySelector("#desktop-menu");
const mobileMenu = document.querySelector("#mobile-menu");
const shoppingCart = document.querySelector("#shopping-cart");

function toggleElement(element, toggleButton, otherElementToHide){
    toggleButton.addEventListener("click", () => {
        element.classList.toggle("inactive");
        if (otherElementToHide){
            if (!element.classList.contains("inactive")){
                otherElementToHide.classList.add("inactive");
            }
        }
    })
}

toggleElement(desktopMenu, desktopMenuToggle);
toggleElement(mobileMenu, mobileMenuToggle, shoppingCart);
toggleElement(shoppingCart, shoppingCartToggle, mobileMenu);

// Product grid
class Product {
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
const productList = [];
productList.push(new Product("Bike", 120, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
productList.push(new Product("Skate", 90, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
productList.push(new Product("Computer", 300, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
productList.push(new Product("Phone", 220, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))
productList.push(new Product("Keyboard", 100, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"))

productList.forEach((product) => {
    let productCard = new DocumentFragment;
    let container = document.createElement("div");
    container.classList.add("product-card");

    let image = document.createElement("img");
    image.setAttribute("src", product.image);
    image.setAttribute("alt", `Image of ${product.name}`);

    let info = document.createElement("div");
    info.classList.add("product-info");

    let nameAndPrice = document.createElement("div");

    let price = document.createElement("p");
    price.textContent = product.price;

    let name = document.createElement("p");
    name.textContent = product.name;

    let buttonFigure = document.createElement("figure");

    let buttonImage = document.createElement("img");
    buttonImage.setAttribute("src", "./icons/bt_add_to_cart.svg");
    buttonImage.setAttribute("alt", "Add to cart");

    nameAndPrice.append(price, name);
    buttonFigure.append(buttonImage);
    info.append(nameAndPrice, buttonFigure);
    container.append(image, info);
    productCard.append(container);

    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.append(productCard)
})