import { FC, useEffect } from 'react';
import { Products } from './pages';
import { Cart } from './pages';
import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Whoops404 } from './pages/404/Whoops404';
import { ProductsDeatails } from './components';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/acshions/acshions';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Products />} />
					<Route path='cart' element={<Cart />} />
					<Route path='/:id' element={<ProductsDeatails />} />
					<Route path='*' element={<Whoops404 />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
