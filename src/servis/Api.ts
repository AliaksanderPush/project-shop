import axios from 'axios';
import { IProduct } from './Products.props';

const REACT_APP_API = 'https://fakestoreapi.com/products';

export const getProducts = async (): Promise<IProduct[]> => {
	const { data } = await axios.get(`${REACT_APP_API}`);
	return data;
};
