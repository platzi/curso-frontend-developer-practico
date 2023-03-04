
// creation of a const in charge to open and close the desktop-menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const productsShoppingCartContainer = document.querySelector('.my-order-content');
const payTotal = document.querySelector('.pay-total');
const productsAmount = document.querySelector('.navbar-shopping-cart');
const productsAmountNumber = document.createElement('div');
productsAmount.appendChild(productsAmountNumber);
productsAmountNumber.classList.add('inactive');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toogleshoppingCartAside);
productDetailCloseIcon.addEventListener('click',closeProductDetail);

// Array to save the shopping cart products added


const productList = [];
productList.push({
    name: 'Bike',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Motorcyle',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1471466054146-e71bcc0d2bb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
});
productList.push({
    name: 'Scooter',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1519750292352-c9fc17322ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80'
});
productList.push({
    name: 'Book: The Subtle Art of Not Giving a F*ck',
    price: 40,
    image: 'https://joneytalks.com/wp-content/uploads/2018/09/IMG_4763-2-768x1024.jpg'
});
productList.push({
    name: 'Coffe Table',
    price: 1120,
    image: 'https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80'
});
productList.push({
    name: 'Toy: Buzz Lightyear',
    price: 20,
    image: 'https://images.unsplash.com/photo-1581557991964-125469da3b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1433&q=80'
});
productList.push({
    name: 'Max steel',
    price: 50,
    image: 'https://i.etsystatic.com/37183910/r/il/82ccfd/4450133782/il_fullxfull.4450133782_kgla.jpg'
});

// List to save products added
let shoppingCartProducts = [];


function toggleDesktopMenu(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    // The commented section was the challenge in the class and I did it in that way

    // if (desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // } else {
    //     desktopMenu.classList.add('inactive');
    // }

    //The teacher method:
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    // closing all open menus
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    //Opening mobile menu
    mobileMenu.classList.toggle('inactive');
}

function toogleshoppingCartAside(){
    // closing all open menus
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    // Adds products added and Opening Shopping Cart'
    renderProductsShoppingCart(shoppingCartProducts);


    // Multiply the amount to pay


    // // .reduce function avoid me the need to use a for loop (acc) = accumulator. Zero is the initial value.
    // const totalAmount = shoppingCartProducts.reduce((acc, obj) => acc + obj.price * obj.amount, 0);

    // payTotal.innerText = '$' +totalAmount;
    
    showProductsAmount()
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetail(product){

    // closing all open menus
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');

    // Opening Product Detail
    productDetailContainer.classList.remove('inactive');

    // Assigning the product selected and bringing the corresponded info

    const productImg = document.querySelector('.product-image');
    productImg.setAttribute('src', product.image);

    const productPrice = document.querySelector('.product-price');
    productPrice.innerText = '$' +product.price;

    const productName = document.querySelector('.product-name');
    productName.innerText = product.name;
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}
function renderProducts(arr) {
    for (let product = 0; product < productList.length; product++){
    // for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', productList[product].image);
        productImg.addEventListener('click', function(){
        openProductDetail(productList[product]);
        });
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + productList[product].price;
        const productName = document.createElement('p');
        productName.innerText = productList[product].name;
    
        productInfoDiv.append(productPrice, productName); // .append allows to add several elements
        
    
        const addToCart = document.createElement('figure');
        const imgAddToCart = document.createElement('img');
        imgAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // When the user clicks on the cart button, it adds it to the shoppingCartProducts array
        // addToCart.addEventListener('click', function(){
        //     const selectedProduct = productList[product];
        //     selectedProduct.amount = 1;
        //     shoppingCartProducts.push(selectedProduct);
        // });

        addToCart.addEventListener('click', function(){
            // findIndex help me to find if inside of shoppingCartProducts is already the item, if yes, it sums it to the same item
            const selectedProduct = productList[product];
            const index = shoppingCartProducts.findIndex(item => item.name === selectedProduct.name);
            if (index !== -1) {
                shoppingCartProducts[index].amount += 1;
            } else {
                selectedProduct.amount = 1;
                shoppingCartProducts.push(selectedProduct);
            }
        });
        addToCart.addEventListener('click',function(){
            showProductsAmount();
        })

    
        addToCart.appendChild(imgAddToCart); // .appendChils allows to add just one element
    
        productInfo.append(productInfoDiv, addToCart);
    
        productCard.append(productImg,productInfo);
    
        cardsContainer.appendChild(productCard);
    }
   
}

renderProducts(productList);


function renderProductsShoppingCart(arr) {
    for (let product = 0; product < arr.length; product++){

        // Card that holds each product
        const productCard = document.createElement('div');
        productCard.classList.add('shopping-cart');
    
        // Figure to place the product image
        const productImgContainer = document.createElement('figure');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', arr[product].image);
    
        // p to place name and price
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + arr[product].price*arr[product].amount;
        const productName = document.createElement('p');

        if (arr[product].amount>1){
            productName.innerText = `${arr[product].name} (x${arr[product].amount})`;
        } else{
            productName.innerText = arr[product].name;
        }
        // Close icon
        const closeButton = document.createElement('img');
        closeButton.setAttribute('src', './icons/icon_close.png');

        // Add Event Listener to remove from shopping list

        closeButton.addEventListener('click', function(){
            const index = shoppingCartProducts.findIndex(item => item.name === arr[product].name);
            if (index !== -1){
                if (shoppingCartProducts[index].amount > 1){
                    shoppingCartProducts[index].amount -= 1;
                } else {
                    shoppingCartProducts.splice(index, 1);
                }
            }

            showProductsAmount();
        });


        // Append image to figure
        productImgContainer.appendChild(productImg);

        
        // Append to main product card
        productCard.append(productImgContainer,productName,productPrice,closeButton);
    
        productsShoppingCartContainer.appendChild(productCard);
    }
   
}

function showProductsAmount(){
    productsShoppingCartContainer.innerHTML = "";
    // .reduce function avoid me the need to use a for loop (acc) = accumulator. Zero is the initial value.
    const totalAmount = shoppingCartProducts.reduce((acc, obj) => acc + obj.price * obj.amount, 0);

    payTotal.innerText = '$' +totalAmount;

    if (shoppingCartProducts.length>0){
        productsAmountNumber.classList.toggle('inactive');

        // Reduce help me to sum all the objects property amount
        const productsAmountsum = shoppingCartProducts.reduce((accumulator, currentObject) => {
            return accumulator + currentObject.amount;
        }, 0);
        productsAmountNumber.innerText =productsAmountsum;
    } else{
        productsAmountNumber.innerText ="";
        productsAmountNumber.classList.toggle('inactive');
    }
    renderProductsShoppingCart(shoppingCartProducts);
}

