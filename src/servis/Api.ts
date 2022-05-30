import axios from 'axios';
import { IProduct, IFetchProd } from './Products.props';

const REACT_APP_API = 'https://fakestoreapi.com/products';

export const getProducts = async (): Promise<IProduct[]> => {
	const { data } = await axios.get(`${REACT_APP_API}`);
	return await data.map(serelizeProd);
};

const serelizeProd = (obj: IFetchProd): IProduct => {
	const add = { roles: '', isSelected: false, countOrder: 0 };
	return { ...obj, ...add };
};
