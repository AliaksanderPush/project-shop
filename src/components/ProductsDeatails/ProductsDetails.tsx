import React, { useEffect } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useActions } from '../../redux/customHooks/useAction';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';

export const ProductsDeatails = () => {
	const { id } = useParams();
	const { product } = useTypedSelector((state) => state.products);
	const { role } = useTypedSelector((state) => state.cart);
	const { loadProduct, addToCart, changeAttributes } = useActions();

	const addToCartHandler = () => {
		if (id) {
			const cartProduct = {
				id: +id,
				title: product?.title,
				image: product?.image,
				coast: product?.price,
				price: product?.price,
				roles: role,
				count: 1,
			};
			changeAttributes(+id, role);
			addToCart(cartProduct, role);
		}
	};

	useEffect(() => {
		if (id) {
			loadProduct(+id);
		}
	}, [id]);

	return (
		<Container>
			<Row>
				<Col className='d-flex justify-content-center mt-4 mb-4'>
					<Card border='white' style={{ width: '32rem' }}>
						<Card.Img variant='top' src={product?.image} />
						<Card.Body>
							<Card.Title>{product?.title}</Card.Title>
							<Card.Subtitle className='mb-2 text-muted'>
								Category: {product?.category}
							</Card.Subtitle>
							<Card.Text>{product?.description}</Card.Text>
							<ListGroup className='list-group-flush'>
								<ListGroupItem>Rate: {product?.rating.rate}</ListGroupItem>
								<ListGroupItem>Count: {product?.rating.count}</ListGroupItem>
								<ListGroupItem>$ {product?.price}</ListGroupItem>
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
