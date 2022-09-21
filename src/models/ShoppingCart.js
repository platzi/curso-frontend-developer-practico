class ShoppingCart {
	constructor() {
		this.products = [];
	}

	getPosition(productId) {
		//return -1 if the product is not in the array else return the index.
		return this.products.findIndex((product) => product.id === productId);
	}

	addProduct(product) {
		let pos = this.getPosition(product.id); // get index of the product
		if (pos !== -1) {
			//if the product exists, we increase the quantity.
			this.products[pos].quantity++;
			return;
		}
		product.quantity = 1;
		this.products.push(product); // if the product does not exists, we add it to the array
	}

	getTotal() {
		return this.products.reduce((prev, current) => {
			return prev + current.quantity * current.price;
		}, 0);
	}
}

export { ShoppingCart };
