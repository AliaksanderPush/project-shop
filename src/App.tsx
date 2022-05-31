import { FC, useEffect } from 'react';
import { Products } from './pages';
import { Cart } from './pages';
import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Whoops404 } from './pages/404/Whoops404';
import { ProductsDeatails } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/acshions/acshions';
import { useActions } from './redux/customHooks/useAction';

const App: FC = () => {
	const { fetchProducts } = useActions();

	useEffect(() => {
		fetchProducts();
	}, []);

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
