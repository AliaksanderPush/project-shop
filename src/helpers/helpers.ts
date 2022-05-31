import { ICartProduct } from '../pages/Cart/Cart.props';

export const roleFiter = (cart: ICartProduct[], role: string): ICartProduct[] => {
	return cart.filter((item) => item.roles === role);
};
