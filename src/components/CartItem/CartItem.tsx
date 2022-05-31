import { Row, Col, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { ICartItem } from './CartItem.props';
import { useActions } from '../../redux/customHooks/useAction';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';

export const CartItem = ({ cart }: ICartItem): JSX.Element => {
	const { id, title, price, image, count, roles } = cart;
	const { role } = useTypedSelector((state) => state.cart);
	const { incrementProd, decrementProd, removeSelected } = useActions();

	const handleIncrementProd = () => {
		incrementProd(+id);
	};

	const handleDecrementProd = () => {
		if (count < 2) {
			removeSelected(+id);
		}
		decrementProd(+id);
	};

	return (
		<>
			{role === roles ? (
				<Row className='d-flex justify-content-center mt-4 mb-4'>
					<Col className='d-flex justify-content-center'>
						<Card border='black' style={{ width: '32rem' }}>
							<Card.Img variant='top' src={image} />
							<Card.Body>
								<ListGroup className='list-group-flush'>
									<ListGroupItem>{title}</ListGroupItem>
									<ListGroupItem>$ {price?.toFixed(2)}</ListGroupItem>
									<ListGroupItem>
										<Row>
											<Col>
												<Button
													onClick={handleIncrementProd}
													variant='primary'
												>
													+
												</Button>
											</Col>
											<Col className='d-flex justify-content-center'>
												<Card.Text>{count}</Card.Text>
											</Col>
											<Col className='d-flex justify-content-end'>
												<Button
													onClick={handleDecrementProd}
													variant='primary'
												>
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
			) : null}
		</>
	);
};
