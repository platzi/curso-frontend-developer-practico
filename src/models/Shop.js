import { Product } from '../models/Product.js';

class Shop {
	constructor() {
		this.products = [];
	}

	addProducts(products) {
		for (let product of products) {
			this.addProduct(product);
		}
	}

	addProduct(product) {
		const { id, name, image, price, description } = product;
		const newProduct = new Product(id, name, image, price, description);
		this.products.push(newProduct);
	}
}

export { Shop };
