import styles from "./DashboardPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Balance from "../../components/Balance/Balance";
import Currency from "../../components/Currency/Currency";
import { HomeTab } from "../../components/HomeTab/HomeTab";

function DashboardPage() {
	return (
		<div className={styles.dashboard_desktop}>
			<div className={styles.dashboard}>
				{" "}
				<div className={styles.dashboard__content}>
					<div className={styles.dashboard__navigation}>
						<Navigation />
					</div>
					<div className={styles.dashboard__balance}>
						<Balance amount="24 000.00" />{" "}
					</div>
				</div>
				<div className={styles.dashboard__content}>
					<div className={styles.dashboard__currency}>
						<Currency />
					</div>
				</div>
			</div>
			<div>
				<HomeTab />
			</div>
		</div>
	);
}

export default DashboardPage;
