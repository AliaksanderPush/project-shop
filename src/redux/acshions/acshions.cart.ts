import { CartActionTypes } from '../types/cart.types';
import { ICartProduct } from '../../pages/Cart/Cart.props';

export const addRole = (role: string) => {
	return {
		type: CartActionTypes.GET_ROLE,
		userRole: role,
	};
};

export const addToCart = (data: ICartProduct) => {
	return {
		type: CartActionTypes.ADD_TO_CART_PRODUCT,
		info: data,
	};
};

export const incrementProd = (ProdId: number) => {
	return {
		type: CartActionTypes.INCREMENT_PRODUCT,
		id: ProdId,
	};
};
export const decrementProd = (ProdId: number) => {
	return {
		type: CartActionTypes.DECREMENT_PRODUCT,
		id: ProdId,
	};
};
