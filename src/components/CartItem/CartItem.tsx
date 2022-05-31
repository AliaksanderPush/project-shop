import React from 'react';
import { Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { ICartItem } from './CartItem.props';
import { useActions } from '../../redux/customHooks/useAction';

export const CartItem = ({ cart }: ICartItem): JSX.Element => {
	const { id, title, price, image, count } = cart;
	const { incrementProd, decrementProd } = useActions();

	const handleIncrementProd = () => {
		incrementProd(+id);
	};

	const handleDecrementProd = () => {
		decrementProd(+id);
	};

	return (
		<Row className='d-flex justify-content-center mt-4 mb-4'>
			<Col className='d-flex justify-content-center'>
				<Card border='black' style={{ width: '32rem' }}>
					<Card.Img variant='top' src={image} />
					<Card.Body>
						<ListGroup className='list-group-flush'>
							<ListGroupItem>{title}</ListGroupItem>
							<ListGroupItem>$ {price}</ListGroupItem>
							<ListGroupItem>
								<Row>
									<Col>
										<Button onClick={handleIncrementProd} variant='primary'>
											+
										</Button>
									</Col>
									<Col className='d-flex justify-content-center'>
										<Card.Text>{count}</Card.Text>
									</Col>
									<Col className='d-flex justify-content-end'>
										<Button onClick={handleDecrementProd} variant='primary'>
											-
										</Button>
									</Col>
								</Row>
							</ListGroupItem>
						</ListGroup>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	);
};
