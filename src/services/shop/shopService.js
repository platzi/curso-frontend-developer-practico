import {
	cardsContainer,
	desktopMenu,
	cartIconMenu,
	mobileMenu,
	productDetailContainer,
	productImg,
	productInfoPrice,
	productInfoName,
	productInfoDescription,
	iconClose,
} from '../dom/getElements.js';

class ShopService {
	constructor(shop, shoppingCartService) {
		this.shoppingCartService = shoppingCartService;
		this.shop = shop;
	}

	renderProducts() {
		for (let product of this.shop.products) {
			this.renderProduct(product);
		}
	}

	renderProduct(product) {
		const productCard = this.createProductElement(product);
		cardsContainer.append(productCard);
	}

	createProductElement(product) {
		// product card
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');

		// product image
		const productImg = document.createElement('img');
		productImg.setAttribute('src', product?.image);

		// product information
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
		const productInfoDiv = document.createElement('div');
		const productInfoPrice = document.createElement('p');
		productInfoPrice.innerText = `$${product.price}`;
		const productInfoName = document.createElement('p');
		productInfoName.innerText = product.name;
		const productInfoFigure = document.createElement('figure');
		const productInfoFigureImg = document.createElement('img');
		productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

		productImg.addEventListener('click', () =>
			this.openProductDetailAside(product)
		);

		productInfoFigureImg.addEventListener('click', () =>
			this.shoppingCartService.addProduct(product)
		);

		productInfoFigure.append(productInfoFigureImg);
		productInfoDiv.append(productInfoPrice, productInfoName);
		productInfo.append(productInfoDiv, productInfoFigure);
		productCard.append(productImg, productInfo);
		return productCard;
	}

	openProductDetailAside(product) {
		mobileMenu.classList.add('inactive');
		desktopMenu.classList.add('inactive');
		cartIconMenu.classList.add('inactive');
		productDetailContainer.classList.remove('inactive');

		// update information
		productImg.setAttribute('src', product.image);
		productInfoName.innerText = product.name;
		productInfoPrice.innerText = '$' + product.price;
		productInfoDescription.innerText = product.description;
	}

	addSpecificationEvents() {
		iconClose.addEventListener('click', () => {
			mobileMenu.classList.add('inactive');
			desktopMenu.classList.add('inactive');
			cartIconMenu.classList.add('inactive');
			productDetailContainer.classList.toggle('inactive');
		});
	}
}

export { ShopService };
