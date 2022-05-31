import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productsActionCreators } from '../acshions';

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(productsActionCreators, dispatch);
};
