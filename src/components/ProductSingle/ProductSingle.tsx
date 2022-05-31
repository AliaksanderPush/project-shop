import React from 'react';
import { Card } from 'react-bootstrap';
import { IProductsSingleProps } from './ProductSingle.props';
import { CartIcon } from '..';
import styles from './ProductsSingle.module.css';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';

export const ProductSingle = ({ item }: IProductsSingleProps): JSX.Element => {
	const { title, price, image, id, isSelected, roles } = item;
	const { role } = useTypedSelector((state) => state.cart);

	return (
		<Link style={{ textDecoration: 'none', color: 'black' }} to={`/${id}`}>
			<div className={styles._cards}>
				{role === roles && isSelected ? (
					<div className={styles._cards_icon}>
						<CartIcon />
					</div>
				) : null}

				<Card border='black' style={{ width: '18rem' }}>
					<Card.Img variant='top' src={image} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>${price}</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</Link>
	);
};
