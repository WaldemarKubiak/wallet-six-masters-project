// const DashboardPage = () => {
// 	return <div>DashboardPage</div>;
// };

// export default DashboardPage;

import styles from "./DashboardPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Balance from "../../components/Balance/Balance";
// import Transactions from "../../components/transactions/transactions";
import Currency from "../../components/Currency/Currency";

function DashboardPage() {
	return (
		<div>
			{/* <header>Header</header> */}
			<div className={styles.dashboard}>
				{" "}
				<div className={styles.dashboard__content}>
					{/* <div className={styles.dashboard__border}> */}
					<div className={styles.dashboard__navigation}>
						<Navigation />
					</div>
					<div className={styles.dashboard__balance}>
						<Balance amount="24 000.00" />{" "}
					</div>
				</div>
				{/* <Transactions /> */}
				<div className={styles.dashboard__content}>
					<div className={styles.dashboard__currency}>
						<Currency />
					</div>
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}

export default DashboardPage;
