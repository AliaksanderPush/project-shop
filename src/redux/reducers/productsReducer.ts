import { IProductsState, ProductsAction, ProductsActionTypes } from '../types/products.types';
import { IProduct } from '../../servis';

const initialState: IProductsState = {
	products: [],
	loading: false,
	error: null,
};

export const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
	switch (action.type) {
		case ProductsActionTypes.LOAD_PRODUCTS:
			return {
				loading: true,
				error: null,
				products: [],
			};
		case ProductsActionTypes.LOAD_PRODUCTS_SUCCESS:
			return {
				loading: false,
				error: null,
				products: action.payload,
			};

		case ProductsActionTypes.LOAD_PRODUCTS_ERROR:
			return {
				loading: false,
				error: action.payload,
				products: [],
			};
		case ProductsActionTypes.LOAD_PRODUCT:
			const { products } = state;
			const product = products.filter((prod) => prod.id === action.prodId);
			return {
				...state,
				products: product,
			};

		default:
			return state;
	}
};
