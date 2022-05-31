import { ICartProduct } from '../../pages/Cart/Cart.props';

export interface ICartState {
	role: string;
	cart: ICartProduct[];
	prodCount: number;
}

export enum CartActionTypes {
	GET_ROLE = 'GET_ROLE',
	ADD_TO_CART_PRODUCT = 'ADD_TO_CART_PRODUCT',
	INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
	DECREMENT_PRODUCT = 'DECREMENT_PRODUCT',
	SHOW_ROLE_CART = 'SHOW_ROLE_CART',
	PRODUCT_COUNT = 'PRODUCT_COUNT',
}

interface ICartAction {
	type: CartActionTypes.GET_ROLE;
	userRole: string;
}

interface IAddToCartProduct {
	type: CartActionTypes.ADD_TO_CART_PRODUCT;
	info: ICartProduct;
	userRoles: string;
}

interface IIncrementProduct {
	type: CartActionTypes.INCREMENT_PRODUCT;
	id: number;
}

interface IDecrementProduct {
	type: CartActionTypes.DECREMENT_PRODUCT;
	id: number;
}

interface IShowRoleCart {
	type: CartActionTypes.SHOW_ROLE_CART;
	roles: string;
}

interface IProductCount {
	type: CartActionTypes.PRODUCT_COUNT;
	count: number;
}

export type CartAction =
	| ICartAction
	| IAddToCartProduct
	| IIncrementProduct
	| IDecrementProduct
	| IShowRoleCart
	| IProductCount;
