import {
	menuCartIcon,
	returnArrowImg,
	cartIconMenu,
	mobileMenu,
	desktopMenu,
	productDetailContainer,
} from '../dom/getElements.js';

class ShoppingCartService {
	constructor(shoppingCart) {
		this.shoppingCart = shoppingCart;
	}

	addProduct(product) {
		this.shoppingCart.addProduct(product);
		this.updateShoppingCart();
	}

	renderShoppingCart() {
		menuCartIcon.addEventListener('click', this.toggleCartMenu);
		returnArrowImg.addEventListener('click', this.toggleCartMenu);

		const shoppingCartContainer = document.createElement('div');
		shoppingCartContainer.classList.add('shopping-cart-container');

		//Elemento order
		const order = document.createElement('div');
		order.classList.add('order');
		const nameContainer = document.createElement('p');
		const nameSpan = document.createElement('span');
		nameSpan.classList.add('cart__default');
		nameSpan.innerText = 'You have not added items to the cart';
		const totalPrice = document.createElement('p');
		totalPrice.classList.add('total__price');
		nameContainer.append(nameSpan);
		order.append(nameContainer, totalPrice);
		//Elemento button
		const primaryButton = document.createElement('button');
		primaryButton.classList.add('primary-button', 'inactive');
		primaryButton.innerText = 'Checkout';

		cartIconMenu.append(shoppingCartContainer, order, primaryButton);
	}

	updateShoppingCart() {
		const shoppingCartContainer = document.querySelector(
			'.shopping-cart-container'
		);

		const nameSpan = document.querySelector('.cart__default');

		nameSpan.textContent =
			this.shoppingCart.products.length > 0
				? 'total: ' + this.shoppingCart.getTotal()
				: 'You have not added items to the cart';

		shoppingCartContainer.innerHTML = '';
		const myOrderContent = document.createElement('div');
		myOrderContent.classList.add('my-order-content');
		const shoppingCartElement = document.createElement('div');
		shoppingCartElement.classList.add('shopping-cart');

		for (let product of this.shoppingCart.products) {
			const productFigure = document.createElement('figure');
			const productImg = document.createElement('img');
			productImg.classList.add('product__img');
			const productName = document.createElement('p');
			productName.classList.add('product__name');
			const productPrice = document.createElement('p');
			productPrice.classList.add('product__price');

			const deleteProduct = document.createElement('img');
			deleteProduct.setAttribute('src', './icons/icon_close.png');
			deleteProduct.setAttribute('alt', 'close');

			productImg.setAttribute('src', product.image);
			productName.innerText = product.name;
			productPrice.innerText = '$' + product.price + 'x' + product.quantity;

			productFigure.append(productImg);
			shoppingCartElement.append(
				productFigure,
				productName,
				productPrice,
				deleteProduct
			);
		}

		myOrderContent.append(shoppingCartElement);
		shoppingCartContainer.append(myOrderContent);
	}

	toggleCartMenu() {
		mobileMenu.classList.add('inactive');
		desktopMenu.classList.add('inactive');
		productDetailContainer.classList.add('inactive');
		cartIconMenu.classList.toggle('inactive');
	}
}

export { ShoppingCartService };
