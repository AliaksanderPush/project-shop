import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children }: any) => {
	return (
		<div className={styles.content_all}>
			<Header />
			<main id='main'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
