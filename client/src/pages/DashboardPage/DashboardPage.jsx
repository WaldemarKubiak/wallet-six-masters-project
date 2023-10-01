// const DashboardPage = () => {
// 	return <div>DashboardPage</div>;
// };

// export default DashboardPage;
import AddTransactionModal from "../../components/ModalAddTransaction/modalAddTransaction";
import EditTransactionModal from "../../components/EditTransactionModal/EditTransactionModal";
import styles from "./DashboardPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
// import Balance from "../../components/Balance/Balance";
// import Transactions from "../../components/transactions/transactions";
import Currency from "../../components/Currency/Currency";

import Header from "../../components/Header/Header";

function DashboardPage() {
  return (
    <div>
      <Header />

      <div className={styles.dashboard}>
        {" "}
        <div className={styles.dashboard__content}>
          {/* <div className={styles.dashboard__border}> */}
          <div className={styles.dashboard__navigation}>
            <Navigation />
          </div>
          <div className={styles.dashboard__balance}></div>
        </div>
        {/* <Transactions /> */}
        <AddTransactionModal />
        <EditTransactionModal />
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

// <Balance amount="24 000.00" />{" "}
