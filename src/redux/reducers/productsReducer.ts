import { IProductsState, ProductsAction, ProductsActionTypes } from '../types/products.types';

const initialState: IProductsState = {
	products: [],
	product: null,
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
				product: null,
			};
		case ProductsActionTypes.LOAD_PRODUCTS_SUCCESS:
			return {
				loading: false,
				error: null,
				products: action.payload,
				product: null,
			};

		case ProductsActionTypes.LOAD_PRODUCTS_ERROR:
			return {
				loading: false,
				error: action.payload,
				products: [],
				product: null,
			};

		case ProductsActionTypes.CHANGE_ATTRIBUTES: {
			const { products } = state;
			const index = products.findIndex((item) => item.id === action.Id);
			const changeProd = [...products];
			changeProd[index].isSelected = true;
			changeProd[index].countOrder = changeProd[index].countOrder + 1;
			changeProd[index].roles = action.user;
			return {
				...state,
				products: changeProd,
			};
		}

		case ProductsActionTypes.LOAD_PRODUCT: {
			const catProd = state.products.find((prod) => prod.id === action.prodId);
			if (catProd) {
				return {
					...state,
					product: catProd,
				};
			} else {
				return {
					...state,
				};
			}
		}
		case ProductsActionTypes.REMOVE_SELECTION: {
			const { products } = state;
			const { remId } = action;
			const ind = products.findIndex((item) => item.id === remId);
			const newState = [...products];
			newState[ind].isSelected = false;

			return {
				...state,
				products: newState,
			};
		}
		case ProductsActionTypes.SORT_BY_RATING:
			const { products } = state;
			const { popular } = action;
			if (!popular) {
				const newState = products.sort((a, b) => b.countOrder - a.countOrder);
				return {
					...state,
					products: newState,
				};
			} else {
				const newState = products.sort((a, b) => a.countOrder - b.countOrder);
				return {
					...state,
					products: newState,
				};
			}

		default:
			return state;
	}
};
