let emailMenu = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let iconMenuMobile = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let iconShopping = document.querySelector('.navbar-shopping-cart');
let asideShopping = document.querySelector('.product-detail');
let divcardscontainer = document.querySelector('.cards-container')

emailMenu.addEventListener('click', toggleMenu);
iconMenuMobile.addEventListener('click', toggleMenuMobile);
iconShopping.addEventListener('click', toggleAsideShopping)


function toggleMenu(){
    asideShopping.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile(){
    asideShopping.classList.add('inactive');
    mobileMenu.classList.toggle('inactive')
    
}

function toggleAsideShopping(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
    asideShopping.classList.toggle('inactive')
}


let productList = []
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name:"bake",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderListProduct(productList){
    for (const product of productList) {
        let divproductCard = document.createElement('div')
        let imgproductcard = document.createElement('img')
        let divproductinfo = document.createElement('div')
        let divdivproductinfo = document.createElement('div')
        let pprice = document.createElement('p')
        let pname = document.createElement('p')
        let figureproductinfo = document.createElement('figure')
        let imgproductinfo = document.createElement('img')
        divproductCard.classList.add('product-card')
        imgproductcard.setAttribute('src', product.image)
        divproductinfo.classList.add('product-info')
        pprice.innerText ='$' + product.price
        pname.innerText = product.name
        imgproductinfo.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        figureproductinfo.appendChild(imgproductinfo)
        divdivproductinfo.appendChild(pprice)
        divdivproductinfo.appendChild(pname)

        divproductinfo.appendChild(divdivproductinfo)
        divproductinfo.appendChild(figureproductinfo)

        divproductCard.appendChild(imgproductcard)
        divproductCard.appendChild(divproductinfo)

        divcardscontainer.appendChild(divproductCard)

    }
    

}

renderListProduct(productList);