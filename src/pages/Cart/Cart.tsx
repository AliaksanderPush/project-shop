import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CartItem } from '../../components';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';

export const Cart = () => {
	const { cart } = useTypedSelector((state) => state.cart);

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
