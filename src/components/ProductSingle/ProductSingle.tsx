import React from 'react';
import { Card } from 'react-bootstrap';
import { IProductsSingleProps } from './ProductSingle.props';
import { CartIcon } from '..';
import styles from './ProductsSingle.module.css';
import { Link } from 'react-router-dom';

export const ProductSingle = ({ item }: IProductsSingleProps): JSX.Element => {
	const { title, price, image, id } = item;

	return (
		<Link style={{ textDecoration: 'none', color: 'black' }} to={`/${id}`}>
			<div className={styles._cards}>
				<div className={styles._cards_icon}>
					<CartIcon />
				</div>
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
