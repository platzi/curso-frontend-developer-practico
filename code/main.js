
const menuEmail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")

const MenuBurger = document.querySelector(".menuBurger")
const mobileMenu = document.querySelector(".mobile-menu")

const menuCarrito = document.querySelector(".navbar-shopping-cart")
const menuMyorder = document.querySelector(".product-detail")

const cardsContainer = document.querySelector(".cards-container")
 
menuEmail.addEventListener('click',correoMenu)

function correoMenu(){
    DesktopMenu.classList.toggle('inactive')
    menuMyorder.classList.add("inactive")

}

MenuBurger.addEventListener("click",toogleMobile)
function toogleMobile(){

    mobileMenu.classList.toggle("inactive")

    menuMyorder.classList.add("inactive");

}

menuCarrito.addEventListener('click',toogleMyOrder)
function toogleMyOrder() {
    menuMyorder.classList.toggle("inactive")

   mobileMenu.classList.add("inactive")

   DesktopMenu.classList.add('inactive')


}


const productList = []
productList.push({
    //imagen precio nombre
    name: "higado",
    price: 120,
    image:"https://images.pexels.com/photos/8272928/pexels-photo-8272928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

productList.push({
    //imagen precio nombre
    name: "Pulmones",
    price: 100000,
    image:"https://imgs.search.brave.com/dh_Mjj5R_AIHMtR5BhT3_FsN5DdckfpmwqInba19GQU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bHVuZ3NhbmR5b3Uu/Y29tL3N0YXRpYy9p/bWFnZXMvcHJvZ3Jl/c3Npb24vbm9ybWFs/LWx1bmdzLmpwZw"
})

productList.push({
    //imagen precio nombre
    name: "Riñones",
    price: 120,
    image:"https://e7.pngegg.com/pngimages/779/986/png-clipart-kidney-kidney-failure-membranoproliferative-glomerulonephritis-minimal-change-disease-membranous-glomerulonephritis-kidney-miscellaneous-hand.png"
})

function renderProducts(arr){
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        productCard.innerHTML = `
        <img src="${product.image}" alt="">
        <div class="product-info">
            <div>
                <p>$ ${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
        `
        cardsContainer.appendChild(productCard);
    }

}

renderProducts(productList)