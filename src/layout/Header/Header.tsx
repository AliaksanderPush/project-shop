import { FC, useEffect, useState } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CartIconWhite } from '../../components';
import { useTypedSelector } from '../../redux/customHooks/useTypedSelector';
import { addRole } from '../../redux/acshions/acshions.cart';
import { useActions } from '../../redux/customHooks/useAction';

export const Header: FC = () => {
	const [showDrop, setShowDrop] = useState<boolean>(false);
	const [userRole, setUserRole] = useState<boolean>(false);

	const { addRole } = useActions();

	const handleChange = () => {
		setShowDrop(!showDrop);
	};

	const handleRole = () => {
		setUserRole(!userRole);
		if (!userRole) {
			addRole('admin');
		} else {
			addRole('user');
		}
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
								{' '}
								<CartIconWhite />{' '}
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
