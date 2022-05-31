import { useState } from 'react';
import { Nav, Navbar, Container, Button, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CartIconWhite } from '../../components';
import { useActions } from '../../redux/customHooks/useAction';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';
import styles from './Header.module.css';

export const Header = (): JSX.Element => {
	const [userRole, setUserRole] = useState<boolean>(false);
	const [countProd, setCountProd] = useState<number>(0);
	const { cart } = useTypedSelector((state) => state.cart);
	const { addRole, sotByRating } = useActions();

	const handleRole = () => {
		setUserRole(!userRole);
		if (!userRole) {
			addRole('admin');
			userProductCounter('admin');
		} else {
			addRole('user');
			userProductCounter('user');
		}
	};

	const handleFilterByData = (value: string | null) => {
		if (value === '#/action-1') {
			sotByRating(false);
		} else {
			sotByRating(true);
		}
	};

	const userProductCounter = (rol: string) => {
		const arr = cart.filter((item) => item.roles === rol);
		setCountProd(arr.length);
	};

	return (
		<Navbar bg='primary' variant='dark' expand='lg'>
			<Container>
				<Navbar.Brand href='#'>Shop</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-6 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<LinkContainer to='/' className='mx-4'>
							<Nav.Link>Products</Nav.Link>
						</LinkContainer>
						<Button onClick={handleRole} variant='success'>
							{!userRole ? 'User' : 'Admin'}
						</Button>{' '}
						<LinkContainer to='/cart' className='mx-4'>
							<Nav.Link>
								<div className={styles.cart}>
									{' '}
									<CartIconWhite />{' '}
									{cart.length > 0 ? (
										<div className={styles.product_count}>{countProd}</div>
									) : null}
								</div>
							</Nav.Link>
						</LinkContainer>
						{!userRole ? (
							<></>
						) : (
							<Dropdown onSelect={(value) => handleFilterByData(value)}>
								<Dropdown.Toggle variant='primary' id='dropdown-basic'>
									Sort by rating
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item href='#/action-1'>more popular</Dropdown.Item>
									<Dropdown.Item href='#/action-2'>less popular</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
