import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CartItem } from '../../components';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { productCount } from '../../redux/acshions/acshions.cart';
import { roleFiter } from '../../helpers/helpers';
import { ICartProduct } from './Cart.props';

export const Cart = (): JSX.Element => {
	const { cart, role } = useTypedSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [summa, setSumma] = useState<number>(0);

	const getTotalSumm = (arr: ICartProduct[]) => {
		let summ = arr.reduce((acc, it) => acc + it.price!, 0);
		const num = summ.toFixed(2);
		setSumma(+num);
	};

	useEffect(() => {
		const arr = roleFiter(cart, role);
		getTotalSumm(arr);
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
			<Row>
				<Col>
					{' '}
					<h2 className='text-center'>Total: {summa}</h2>
				</Col>
			</Row>
		</Container>
	);
};
