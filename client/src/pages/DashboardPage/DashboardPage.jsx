// const DashboardPage = () => {
// 	return <div>DashboardPage</div>;
// };

import { selectIsModalAddTransaction } from '../../redux/global/globalSelectors';

import { useSelector } from 'react-redux';

// export default DashboardPage;
import AddTransactionModal from '../../components/ModalAddTransaction/modalAddTransaction';
import EditTransactionModal from '../../components/EditTransactionModal/EditTransactionModal';
import { HomeTabMobile } from '../../components/HomeTabMobile/HomeTabMobile';
// import HomeTab from '../../components/HomeTab/HomeTab';
import HomeTab from '../../components/HomeTab/HomeTab';

import styles from './DashboardPage.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
// import Transactions from "../../components/transactions/transactions";
import Currency from '../../components/Currency/Currency';

import Header from '../../components/Header/Header';
import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import { setIsModalAddTransactionOpen } from '../../redux/global/globalSlice';
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
