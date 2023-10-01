import styles from './DashboardPage.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/Balance/Balance';
import Currency from '../../components/Currency/Currency';
import { HomeTab } from '../../components/HomeTab/HomeTab';
import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTabMobile } from '../../components/HomeTabMobile/HomeTabMobile';
import { useMediaQuery } from 'react-responsive';
function DashboardPage() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className={styles.dashboard_desktop}>
      <div className={styles.dashboard}>
        {' '}
        <div className={styles.dashboard__content}>
          <div className={styles.dashboard__navigation}>
            <Navigation />
          </div>
          <div className={styles.dashboard__balance}>
            <Balance amount="24 000.00" />{' '}
          </div>
        </div>
        <div className={styles.dashboard__content}>
          <div className={styles.dashboard__currency}>
            <Currency />
          </div>
        </div>
      </div>
      <div>{isMobile ? <HomeTabMobile /> : <HomeTab />}</div>
      <div className={styles.dashboard__btnNewTransWrapper}>
        <ButtonAddTransactions />
      </div>
    </div>
  );
}

export default DashboardPage;
