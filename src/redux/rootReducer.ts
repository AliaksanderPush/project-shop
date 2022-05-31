import { combineReducers } from 'redux';
import { productsReducer } from './reducers/productsReducer';
import { cartReducer } from './reducers/cartReducer';

export const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
