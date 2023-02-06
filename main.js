// alert("Chacking that JS is working")

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartMenu = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const productDetailCloseIcon = document.querySelector(".product-detail-big-close")
const cardsContainer = document.querySelector(".cards-container") 

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
shoppingCartMenu.addEventListener("click", toggleShoppingCartAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

// The next functions are created to show or hide certain cards of the code, and while doing so, closing or opening other elements
function toggleDesktopMenu() {
    // Creating constants in order to represent when the tags are closed
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")
    
    // If the tag "is not" (!) closed... then its open, so please close it
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
    
    // ".toggle" allows me to remove or set the class "inactive"
    desktopMenu.classList.toggle("inactive")
    
    // Close the product detail container
    productDetailContainer.classList.add("inactive")
}

function toggleMobileMenu() { 
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")
    
    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }

    closeProductDetailAside();
    
    mobileMenu.classList.toggle("inactive")
}

function toggleShoppingCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    
    shoppingCartContainer.classList.toggle("inactive");

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive")
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if(!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")
    }
}

function openProductDetailAside(e) {
    shoppingCartContainer.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    productDetailContainer.classList.remove("inactive")
    
    // Changing the information to be shown in the detail card:
    const productImg = document.querySelector('#img_product');
    productImg.src = e.target.src
    
    const productPrice = document.querySelector('#product_price');
    productPrice.innerText = e.target.nextElementSibling.firstChild.children[0].innerText
    
    const productName = document.querySelector('#product_name');
    productName.innerText = e.target.nextElementSibling.firstChild.children[1].innerText
    
    const descripProd = document.querySelector('#product_description');
    descripProd.classList.remove("inactive")
    descripProd.innerText = e.target.nextElementSibling.firstChild.children[2].innerText
}


function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive")
}

// Array created with the products to be shown, so that is not necessary to have them in HTML. Ideally, this must be loaded from a database, but for this course it´s going to be done in this way:
const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
});

productList.push({
    name: "Screen",
    price: 310,
    image: "https://images.pexels.com/photos/5861325/pexels-photo-5861325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "The perfect screen to split your code and the visualization of the results."
});

productList.push({
    name: "Computer",
    price: 2400,
    image: "https://images.pexels.com/photos/259091/pexels-photo-259091.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Practical and powerful at the same time. The perfect fit when working outside your station."
});

productList.push({
    name: "Stationery",
    price: 80,
    image: "https://images.pexels.com/photos/7718747/pexels-photo-7718747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Never miss an idea, a date or special task to be done in the future. Also you´ll have a way to express yourself and inspire"
});

productList.push({
    name: "Lamp",
    price: 437,
    image: "https://images.pexels.com/photos/6029034/pexels-photo-6029034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Fancy and healthy light when working off the desk, reading a book or simply drinking a beverage."
});

productList.push({
    name: "Bench",
    price: 689,
    image: "https://images.pexels.com/photos/4559954/pexels-photo-4559954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Furniture that resists the elements, allows to share with others and decorate outer spaces."
});

productList.push({
    name: "Armchair",
    price: 550,
    image: "https://images.pexels.com/photos/5749125/pexels-photo-5749125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "With this comfortable armchair you´ll never have back pain and will be able to relax when getting away your desktop."
});


// Function for creating a card
function renderProducts(arr) {
    // Iterating through each object of the array, in order to manipulate the DOM
    for (product of productList) {
        // console.log(product.name)
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetailAside)

        // The event will be used to create a bigger card when the product is clicked:
        productImg.addEventListener("click", (e) => {
            openProductDetailAside(e)
        })
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;

        const productDescription = document.createElement("p");
        productDescription.innerText = product.description;
        // The description will be shown only in the detail card:
        productDescription.classList.add("inactive");
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productInfoDiv.appendChild(productDescription)
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)

        // Understanding how the "target", "nextElementSibling" and "firstChild" properties work:
        // const productPressed = (e) => {
        //     console.log("a click was made on " + e.target.src)
        //     console.log("the next element to the image is " + e.target.nextElementSibling)
        //     console.log("within the previous element, there are other elements. This is the first one: " + e.target.nextElementSibling.firstChild.children[0].textContent)
        //     console.log("and this is the second one: " + e.target.nextElementSibling.firstChild.children[1].textContent)
        // } 

        // productImg.addEventListener("click", productPressed)
    }
}

// // Iterating the array through the function created for this purpose
renderProducts(productList);
