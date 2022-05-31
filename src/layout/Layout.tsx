import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import { ILoyoutProps } from './Layout.props';

export const Layout = ({ children }: ILoyoutProps): JSX.Element => {
	return (
		<div className={styles.content_all}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
