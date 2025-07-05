export const load = async ({ fetch }) => {
	const Productres = await fetch('https://dummyjson.com/products');
	const ProductData = await Productres.json();
	if (!ProductData) {
		throw new Error('Failed to fetch product data');
	}
	if (ProductData.length === 0) {
		throw new Error('No products found');
	} else {
		const products = ProductData.products;
		return {
			products: products
		};
	}
};
