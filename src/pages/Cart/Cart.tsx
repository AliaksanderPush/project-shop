import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CartItem } from '../../components';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { productCount } from '../../redux/acshions/acshions.cart';

export const Cart = () => {
	const { cart, role } = useTypedSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		const arr = cart.filter((item) => item.roles === role);
		dispatch(productCount(arr.length));
	}, [cart, role, dispatch]);
	return (
		<Container>
			<Row>
				<Col>
					{!cart
						? 'cart is Empry'
						: cart.map((item) => {
								return <CartItem key={item.id} cart={item} />;
						  })}
				</Col>
			</Row>
		</Container>
	);
};
