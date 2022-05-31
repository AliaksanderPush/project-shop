import { IProduct } from '../../servis';

export interface IProductsState {
	products: IProduct[];
	loading: boolean;
	error: null | string;
}

export enum ProductsActionTypes {
	LOAD_PRODUCTS = 'LOAD_PRODUCTS',
	LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS',
	LOAD_PRODUCTS_ERROR = 'LOAD_PRODUCTS_ERROR',
	LOAD_PRODUCT = 'LOAD_PRODUCT',
}

interface ILoadProductsAction {
	type: ProductsActionTypes.LOAD_PRODUCTS;
}

interface ILoadSuccessProductsAction {
	type: ProductsActionTypes.LOAD_PRODUCTS_SUCCESS;
	payload: IProduct[];
}

interface ILoadErrorProductsAction {
	type: ProductsActionTypes.LOAD_PRODUCTS_ERROR;
	payload: string;
}
interface ILoadErrorProductAction {
	type: ProductsActionTypes.LOAD_PRODUCT;
	prodId: number;
}

export type ProductsAction =
	| ILoadProductsAction
	| ILoadSuccessProductsAction
	| ILoadErrorProductsAction
	| ILoadErrorProductAction;
