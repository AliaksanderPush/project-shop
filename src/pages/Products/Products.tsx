import React, { useEffect } from 'react';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';
import { Spinner } from 'react-bootstrap';
import { ProductsItems } from '../../components';
import styles from './Product.module.css';
import { useDispatch } from 'react-redux';
import { productCount } from '../../redux/acshions/acshions.cart';

export const Products = () => {
	const { products, error, loading } = useTypedSelector((state) => state.products);
	const { cart, role } = useTypedSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		const arr = cart.filter((item) => item.roles === role);
		dispatch(productCount(arr.length));
	}, [cart, role, dispatch]);

	return (
		<>
			{loading ? (
				<div className={styles.spinner}>
					<Spinner animation='border' variant='primary' />
				</div>
			) : null}
			<div className={styles.content}>
				{error ? (
					<div className={styles.spinner}>
						<div style={{ color: 'red', fontSize: '50px' }}>Error</div>{' '}
					</div>
				) : null}
				<h1 style={{ textAlign: 'center', margin: '20px' }}>Products</h1>
				<ProductsItems info={products} />
			</div>
		</>
	);
};
