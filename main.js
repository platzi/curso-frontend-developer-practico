const menuEmail = document.querySelector('.navbar-email')
const menuIcon = document.querySelector('.menu-icon')
const cartIcon = document.querySelector('.navbar-shopping-cart')

const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cartMenu = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu() {
  cartMenu.classList.contains('innactive') || cartMenu.classList.add('innactive')
  desktopMenu.classList.toggle('innactive')
}
menuIcon.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu() {
  cartMenu.classList.contains('innactive') || cartMenu.classList.add('innactive')
  mobileMenu.classList.toggle('innactive')
}
cartIcon.addEventListener('click', toggleCartAside)
function toggleCartAside() {
  mobileMenu.classList.contains('innactive') || mobileMenu.classList.add('innactive')
  desktopMenu.classList.contains('innactive') || desktopMenu.classList.add('innactive')
  cartMenu.classList.toggle('innactive')
}

const productsList = [
  {
    name: 'Rockstar t-shirt',
    price: 220,
    description: 'Your go-to weekend jersey, the Imogen Tank will never go out of style. Made from a lightweight fabric in a slim fit with a crew neck and sleeveless silhouette.',
    img: 'https://images.pexels.com/photos/3715196/pexels-photo-3715196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Oversized Sweater',
    price: 400,
    description: "Cosy up in the Whitby Jumper. This lightweight option is perfect to ease into cooler weather. It's crafted from a recycled cashmere-wool blend with a roll neck and long sleeves.",
    img: 'https://images.pexels.com/photos/13983674/pexels-photo-13983674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Turtle-neek Sweater',
    price: 450,
    description: "Cosy up in the Whitby Jumper. This lightweight option is perfect to ease into cooler weather. It's crafted from a recycled cashmere-wool blend with a roll neck and long sleeves.",
    img: 'https://images.pexels.com/photos/6995901/pexels-photo-6995901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Yellow street hoodie',
    price: 350,
    description: "Lounge about in The Pippa Hoodie. It's crafted from soft cotton, in a relaxed silhouette. It's got our AllSaints signature embroidered. Pair it with joggers or a dress - you're sorted.",
    img: 'https://images.pexels.com/photos/1925166/pexels-photo-1925166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Vintage Coat',
    price: 820,
    description: "The Hallie Liner Jacket is a welcomed update for leopard print. Our new print is called Emelia. Made from conscious fabrics and cut to a relaxed silhouette, it has a diamond quilted texture.",
    img: 'https://images.pexels.com/photos/11428508/pexels-photo-11428508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Flowers dress',
    price: 480,
    description: "This is the Flowers Alessandra Dress. The fluid fabric offers a v-neckline and short length silhouette. Gathering and soft frill detailing add a feminine touch.",
    img: 'https://images.pexels.com/photos/12502186/pexels-photo-12502186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Winter Sweater',
    price: 350,
    description: "A relaxed silhouette, the Ridley Jumper is made from a wool and cashmere blend. Volume in the body with a slouchy funnel neckline to contrast with fitted sleeves.",
    img: 'https://images.pexels.com/photos/2658451/pexels-photo-2658451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Forest Sweater',
    price: 350,
    description: "Cosy up in the Whitby Jumper. This lightweight option is perfect to ease into cooler weather. It's crafted from a recycled cashmere-wool blend with a roll neck and long sleeves.",
    img: 'https://images.pexels.com/photos/2099205/pexels-photo-2099205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
]

const displayList = (arr) => {
  arr.map(product => {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')

    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.img)
    
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
    
    const divInfo = document.createElement('div')
    const productName = document.createElement('p')
    productName.innerText = product.name 
    const productPrice = document.createElement('p')
    productPrice.innerText = `Mex$${product.price}`
    
    const figureLogo = document.createElement('figure')
    const cartLogo = document.createElement('img')
    cartLogo.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    productCard.append(productImg, productInfo)
    productInfo.append(divInfo, figureLogo)
    divInfo.append(productName, productPrice)
    figureLogo.appendChild(cartLogo)

    cardsContainer.appendChild(productCard)
  })
}

displayList(productsList)