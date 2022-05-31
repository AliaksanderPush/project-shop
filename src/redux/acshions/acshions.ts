import axios from 'axios';
import { Dispatch } from 'redux';
import { getProducts } from '../../servis';
import { ProductsAction, ProductsActionTypes } from '../types/products.types';

export const fetchProducts = () => {
	return async (dispatch: Dispatch<ProductsAction>) => {
		try {
			dispatch({ type: ProductsActionTypes.LOAD_PRODUCTS });
			const response = await getProducts();
			dispatch({
				type: ProductsActionTypes.LOAD_PRODUCTS_SUCCESS,
				payload: response,
			});
		} catch (e) {
			dispatch({
				type: ProductsActionTypes.LOAD_PRODUCTS_ERROR,
				payload: 'Error',
			});
		}
	};
};

export const loadProduct = (id: number) => {
	return {
		type: ProductsActionTypes.LOAD_PRODUCT,
		prodId: id,
	};
};
