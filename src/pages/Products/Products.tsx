import React, { useEffect } from 'react';
import { useActions } from '../../redux/customHooks/useAction';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';
import { fetchProducts } from '../../redux/acshions/acshions';
import { ProductsItems } from '../../components';

export const Products = () => {
	const { products, error, loading } = useTypedSelector((state) => state.products);
	const { fetchProducts } = useActions();

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div>
			<h1 style={{ textAlign: 'center', margin: '20px' }}>Products</h1>
			<ProductsItems info={products} />
		</div>
	);
};
