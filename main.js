const emailButton = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileButton = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartButton = document.querySelector('.navbar-shopping-cart')
const asideModal = document.querySelector('.product-detail')
const cardsContainer =document.querySelector('.cards-container')
const itemDetail = document.querySelector(".item-detail")
const closeProductDetail = document.querySelector('.product-detail-close')

emailButton.addEventListener('click' , toggleMenu)
mobileButton.addEventListener('click' , toggleMobileMenu)
cartButton.addEventListener('click' , toggleAsideModal)
closeProductDetail.addEventListener('click' , closeItemDetail)

function toggleMenu() {
    const isAsideModalclose = asideModal.classList.contains('inactive')
    const isItemdDetailclose = itemDetail.classList.contains('inactive')

    if (!isItemdDetailclose) {
        itemDetail.classList.add('inactive')
    }


    if (!isAsideModalclose) {
        asideModal.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')

}

function toggleMobileMenu( ) {
    const isAsideModalclose = asideModal.classList.contains('inactive')
    const isItemdDetailclose = itemDetail.classList.contains('inactive')

    if (!isItemdDetailclose) {
        itemDetail.classList.add('inactive')
    }


    if (!isAsideModalclose) {
        asideModal.classList.add('inactive')
    }


    mobileMenu.classList.toggle('inactive')
}

function toggleAsideModal() { 
    const isMobileMenuclose = mobileMenu.classList.contains('inactive')
    const isDesktopMenuclose = desktopMenu.classList.contains('inactive')
    const isItemdDetailclose = itemDetail.classList.contains('inactive')

    if (!isItemdDetailclose) {
        itemDetail.classList.add('inactive')
    }

    if (!isDesktopMenuclose) {
        desktopMenu.classList.add('inactive')
    }

    if (!isMobileMenuclose) {
        mobileMenu.classList.add('inactive')
    }

    asideModal.classList.toggle('inactive')
}

function openItemdetail() {
    const isMobileMenuclose = mobileMenu.classList.contains('inactive')
    const isDesktopMenuclose = desktopMenu.classList.contains('inactive')
    const isAsideModalclose = asideModal.classList.contains('inactive')

    
    if (!isAsideModalclose) {
        asideModal.classList.add('inactive')
    }

   
    if (!isMobileMenuclose) {
        mobileMenu.classList.add('inactive')
    }

    if (!isDesktopMenuclose) {
        desktopMenu.classList.add('inactive')
    }

    itemDetail.classList.remove('inactive')
}

function closeItemDetail() { 
    itemDetail.classList.add('inactive')
}


let productList = []
productList.push({
    item: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    item: "PC gaming",
    price: 1200,
    img: "https://i.3djuegos.com/juegos/3405/_articulos_/fotos/articulos/_articulos_-5470038.webp"
})
productList.push({
    item: "monitor",
    price: 200,
    img: "https://http2.mlstatic.com/D_NQ_NP_927484-MLV49590589404_042022-O.webp"
})


// Cards template
// 
// <div class="product-card">
//   <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//   <div class="product-info">
//     <div>
//       <p>$120,00</p>
//       <p>Bike</p>
//     </div>
//     <figure>
//       <img src="./icons/bt_add_to_cart.svg" alt="">
//     </figure>
//   </div>
// </div>




function printProduct (arr) {
    for (product of arr) {
        const productcard = document.createElement('div')
        productcard.classList.add('product-card')

        const productImg = document.createElement('img')
        productImg.setAttribute('src' , product.img)
        productImg.addEventListener('click' , openItemdetail)

        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')

        const div = document.createElement('div')
        const price = document.createElement('p')
        price.innerText = `$ ${product.price}`
        const name = document.createElement('p')
        name.innerText = `${product.item}`

        const productFigure = document.createElement('figure')
        const imgCart = document.createElement('img')
        imgCart.setAttribute('src' , './icons/bt_add_to_cart.svg')

        productFigure.appendChild(imgCart)
        div.appendChild(price)
        div.appendChild(name)

        productInfo.appendChild(div)
        productInfo.appendChild(productFigure)

        productcard.appendChild(productImg)
        productcard.appendChild(productInfo)

        cardsContainer.appendChild(productcard)
    }
}

printProduct(productList)