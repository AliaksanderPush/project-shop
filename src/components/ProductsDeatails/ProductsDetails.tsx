import React, { useEffect } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useActions } from '../../redux/customHooks/useAction';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';

export const ProductsDeatails = () => {
	const { id } = useParams();
	const { products, error, loading } = useTypedSelector((state) => state.products);
	const { role } = useTypedSelector((state) => state.cart);
	const { loadProduct, addToCart } = useActions();

	const { image, title, category, description, rating, price } = products[0];

	const addToCartHandler = () => {
		if (id) {
			const cartProduct = {
				id: +id,
				title,
				price,
				image,
				role,
				rate: rating.rate,
				rating: rating.rate,
				count: 1,
			};

			addToCart(cartProduct);
		}
	};

	useEffect(() => {
		if (id) {
			loadProduct(+id);
		}
	}, []);

	if (!products[0]) return <div></div>;
	return (
		<Container>
			<Row>
				<Col className='d-flex justify-content-center mt-4 mb-4'>
					<Card border='white' style={{ width: '32rem' }}>
						<Card.Img variant='top' src={image} />
						<Card.Body>
							<Card.Title>{title}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								Category: {category}
							</Card.Subtitle>
							<Card.Text>{description}</Card.Text>
							<ListGroup className='list-group-flush'>
								<ListGroupItem>Rate: {rating.rate}</ListGroupItem>
								<ListGroupItem>Count: {rating.count}</ListGroupItem>
								<ListGroupItem>$ {price}</ListGroupItem>
							</ListGroup>
							<Button onClick={addToCartHandler} variant='primary'>
								Add to cart
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};
