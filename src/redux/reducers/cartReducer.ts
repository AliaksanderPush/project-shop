import { type } from 'os';
import { CartAction, CartActionTypes, ICartState } from '../types/cart.types';

const initialState: ICartState = {
	role: 'user',
	cart: [],
};

export const cartReducer = (state = initialState, action: CartAction): ICartState => {
	switch (action.type) {
		case CartActionTypes.GET_ROLE:
			return {
				...state,
				role: action.userRole,
				cart: state.cart,
			};
		case CartActionTypes.ADD_TO_CART_PRODUCT:
			const ind = state.cart.findIndex((item) => item.id === action.info.id);

			if (ind !== -1) {
				const array = [...state.cart];
				array[ind].count = array[ind].count + 1;
				array[ind].price += array[ind].price;
				return {
					...state,
					cart: array,
				};
			} else {
				return {
					...state,
					cart: [...state.cart, action.info],
				};
			}

		case CartActionTypes.INCREMENT_PRODUCT:
			const { cart } = state;
			const { id } = action;
			const index = cart.findIndex((item) => item.id === id);
			const newCart = [...cart];
			newCart[index].count = newCart[index].count + 1;
			newCart[index].price += newCart[index].price;
			return {
				...state,
				cart: newCart,
			};

		case CartActionTypes.DECREMENT_PRODUCT: {
			const { cart } = state;
			const { id } = action;
			const index = cart.findIndex((item) => item.id === id);
			if (cart[index].count > 1) {
				const newCart = [...cart];
				newCart[index].count = newCart[index].count - 1;
				newCart[index].price -= newCart[index].price;
				return {
					...state,
					cart: newCart,
				};
			} else {
				const newCart = cart.filter((item) => item.id !== id);
				return {
					...state,
					cart: newCart,
				};
			}
		}

		default:
			return state;
	}
};
