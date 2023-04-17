const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenu = document.querySelector('.menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

const toggleElement = (e) => {
	const elements = [mobileMenu, productDetail, desktopMenu]
	return () => {
		const otherElements = elements.filter(elem => elem !== e)
		e.classList.toggle('inactive')
		const isElementOpen = !e.classList.contains('inactive')
		// Hide other elements
		if (isElementOpen) otherElements.forEach(elem => elem.classList.add('inactive'))
	}
}

const productList = []
productTemplate = {
	img_source: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	price: 120,
	name: 'Bike',
}

const renderProducts = () => {
	for (product of productList) {

		const productCard = document.createElement('div')
		productCard.classList.add('product-card')
	
		const img = document.createElement('img')
		img.setAttribute('src', product.img_source)
	
		const productInfo = document.createElement('div')
		productInfo.classList.add('product-info')
	
		const price = document.createElement('p')
		price.innerText = `$ ${product.price}`
		
		const name = document.createElement('div')
		name.innerText = product.name
		
		const productInfoDiv = document.createElement('div')
		productInfoDiv.appendChild(price)
		productInfoDiv.appendChild(name)
		
		const img2 = document.createElement('img')
		img2.setAttribute('src', './icons/bt_add_to_cart.svg')
		img2.setAttribute('alt', '')
		const fig = document.createElement('figure')
		fig.appendChild(img2)
	
		productInfo.appendChild(productInfoDiv)
		productInfo.appendChild(fig)
	
		productCard.appendChild(img)
		productCard.appendChild(productInfo)
	
		cardsContainer.appendChild(productCard)
	}
}

for (i of Array(9)) { productList.push(productTemplate) }

menuEmail.addEventListener('click', toggleElement(desktopMenu))
burgerMenu.addEventListener('click', toggleElement(mobileMenu))
shoppingCart.addEventListener('click', toggleElement(productDetail))
renderProducts()