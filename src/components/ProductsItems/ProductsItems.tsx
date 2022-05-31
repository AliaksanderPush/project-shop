import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductSingle } from '..';
import { IProductItemsProps } from './ProductsItems.props';

export const ProductsItems = ({ info }: IProductItemsProps): JSX.Element => {
	if (!info) return <div></div>;
	return (
		<Container>
			<Row>
				{info.map((item) => {
					return (
						<Col className='d-flex justify-content-center' lg={4} md={6} key={item.id}>
							<ProductSingle item={item} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};
