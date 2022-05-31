import * as ProductsActionCreators from './acshions';
import * as CartActionCreators from './acshions.cart';

export const productsActionCreators = { ...ProductsActionCreators, ...CartActionCreators };
