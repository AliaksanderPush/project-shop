import { FC, useEffect, lazy } from 'react';
import { Layout } from './layout/Layout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/acshions/acshions';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = lazy(() => import('./pages').then(({ Products }) => ({ default: Products })));
const Cart = lazy(() => import('./pages').then(({ Cart }) => ({ default: Cart })));
const ProductsDeatails = lazy(() =>
	import('./components').then(({ ProductsDeatails }) => ({ default: ProductsDeatails })),
);
const Whoops404 = lazy(() => import('./pages').then(({ Whoops404 }) => ({ default: Whoops404 })));

const App: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<BrowserRouter basename='/project-shop'>
			<Routes>
				<Route exact path='/project-shop' element={<Layout children />}>
					<Route index element={<Products />} />
					<Route path='cart' element={<Cart />} />
					<Route path='/:id' element={<ProductsDeatails />} />
					<Route path='*' element={<Whoops404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
