import { selectIsModalAddTransaction } from '../../redux/global/globalSelectors';

import { useSelector } from 'react-redux';

// export default DashboardPage;
import AddTransactionModal from '../../components/ModalAddTransaction/modalAddTransaction';
import EditTransactionModal from '../../components/EditTransactionModal/EditTransactionModal';
// import { HomeTabMobile } from '../../components/HomeTabMobile/HomeTabMobile';
// import HomeTab from '../../components/HomeTab/HomeTab';
// import HomeTab from '../../components/HomeTab/HomeTab';

import styles from './Layout.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';

import Currency from '../../components/Currency/Currency';

import Header from '../../components/Header/Header';
// import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
// import { setIsModalAddTransactionOpen } from '../../redux/global/globalSlice';
// import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

function Layout() {
	const isModalAddTransactionOpen = useSelector(selectIsModalAddTransaction);
	// const isMobile = useMediaQuery({ maxWidth: 756 });

	return (
		<div className={styles.background}>
			<svg
				className={styles.homeScreenBox__pinkellipse}
				width='368'
				height='383'
				viewBox='0 0 368 383'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M552.107 266.556C464.047 389.872 304.59 405.532 169.898 358.273C15.3836 296.022 -34.5853 121.79 24.0597 -23.7743C78.4665 -158.819 240.298 -106.092 378.52 -109.726C634.294 -114.397 718.967 49.4746 552.107 266.556Z'
					fill='#FFD8D0'
				/>
			</svg>

			<svg
				className={styles.homeScreenBox__purpellipse}
				width='496'
				height='323'
				viewBox='0 0 496 323'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M426.671 362.925C349.878 493.555 192.436 523.277 54.0872 488.134C-105.334 439.813 -170.538 270.69 -125.016 120.504C-82.7835 -18.8283 83.0818 19.3577 220.438 3.49611C474.794 -23.8102 573.649 131.918 426.671 362.925Z'
					fill='#C5BAFF'
				/>
			</svg>
			<div className={styles.header}>
				<Header />
			</div>

			<div className={styles.dashboard}>
				<div className={styles.layout}>
					<div className={styles.dashboard__content}>
						<div className={styles.navigationBox}>
							<div>
								<div className={styles.dashboard__navigation}>
									<Navigation />
								</div>
								<div className={styles.balancecontent}>
									<div className={styles.dashboard__balance}>
										<Balance />
									</div>
								</div>
							</div>
							<div className={styles.dashboard__content}>
								<div className={styles.dashboard__currency}>
									<Currency />
								</div>
							</div>
						</div>
					</div>
					<div className={styles.outlet}>
						<Outlet />
					</div>
				</div>
			</div>

			<EditTransactionModal />
			{isModalAddTransactionOpen && (
				<div className={styles.modalBackdrop}>
					<AddTransactionModal isOpen={isModalAddTransactionOpen} />
				</div>
			)}
		</div>
	);
}

export default Layout;
