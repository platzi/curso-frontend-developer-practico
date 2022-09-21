import { Shop } from './models/Shop.js';
import { ShoppingCart } from './models/ShoppingCart.js';
import { fetchProducts } from './services/api/getProducts.js';
import { ShopService } from './services/shop/shopService.js';
import { ShoppingCartService } from './services/shoppingCart/shoppingCartService.js';

(async () => {
	const PRODUCTS_URL = 'src/data/products.json';
	const { products } = await fetchProducts(PRODUCTS_URL);

	const shop = new Shop();
	shop.addProducts(products);
	const shoppingCart = new ShoppingCart();
	const shoppingCartService = new ShoppingCartService(shoppingCart);

	const shopService = new ShopService(shop, shoppingCartService);
	shopService.renderProducts();
	shopService.addSpecificationEvents();

	shoppingCartService.renderShoppingCart();
})();
