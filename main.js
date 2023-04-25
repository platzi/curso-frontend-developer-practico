const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenu = document.querySelector('.menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')
const productDetail2 = document.querySelector('#product-detail')
const closeProductDetailBtn = document.querySelector('.product-detail-close')

const toggleElement = (e) => {
	const elements = [mobileMenu, productDetail, desktopMenu, productDetail2]
	return () => {
		const otherElements = elements.filter(elem => elem !== e)
		e.classList.toggle('inactive')
		const isElementOpen = !e.classList.contains('inactive')
		// Hide other elements
		if (isElementOpen) otherElements.forEach(elem => elem.classList.add('inactive'))
	}
}

const openProductDetailAside = (product) => {
	return () => {
		const prodName = product.name
		const prodPrice = product.price
		const prodImg = product.image
		const detailPrice = productDetail2.querySelector('.product-detail__product-info p')
		const detailName = productDetail2.querySelector('.product-detail__product-info p:nth-child(2)');
		const detailImg = productDetail2.querySelector('img:nth-child(2)')
		detailPrice.innerText = prodPrice
		detailName.innerText = prodName
		detailImg.setAttribute('src', prodImg)

		toggleElement(productDetail2)()
		productDetail2.classList.remove('inactive')
	}
}

const closeProductDetail = () => {
	productDetail2.classList.add('inactive')
}

const productList = []
productTemplate = {
	img_source: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	price: 120,
	name: 'Bike',
}
// for (i of Array(9)) { productList.push(productTemplate) }
productList.push ({
	name:'Bike',
	price: 12700,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
	name:'Bicycle helmet',
	price: 1200,
	image: 'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
	name:'Bicycle helmet',
	price: 1600,
	image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
	name:'Bicycle helmet',
	price: 1500,
	image: 'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto'
});
productList.push ({
	name:'Seat',
	price: 300,
	image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});
productList.push ({
	name:'Tennis Montain Bike',
	price: 2200,
	image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
	name:'Sunglasses',
	price: 800,
	image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602'
});
productList.push ({
	name:'Sunglasses',
	price: 600,
	image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
productList.push ({
	name:'Bicycle seat bag',
	price: 876,
	image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg'
}); 

const renderProducts = () => {
	for (product of productList) {

		const productCard = document.createElement('div')
		productCard.classList.add('product-card')
	
		const img = document.createElement('img')
		img.setAttribute('src', product.image)
		img.addEventListener('click', openProductDetailAside(product))
	
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

menuEmail.addEventListener('click', toggleElement(desktopMenu))
burgerMenu.addEventListener('click', toggleElement(mobileMenu))
shoppingCart.addEventListener('click', toggleElement(productDetail))
renderProducts()
closeProductDetailBtn.addEventListener('click', closeProductDetail)

