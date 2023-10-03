import { HomeTabMobile } from '../../components/HomeTabMobile/HomeTabMobile';
import HomeTab from '../../components/HomeTab/HomeTab';
import styles from './DashboardPage.module.css';
import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import { useMediaQuery } from 'react-responsive';

function DashboardPage() {
	const isMobile = useMediaQuery({ maxWidth: 756 });

	return (
		<div>
			{isMobile ? <HomeTabMobile /> : <HomeTab />}
			<div className={styles.btnModal}>
				<ButtonAddTransactions />
			</div>
		</div>
	);
}

export default DashboardPage;
