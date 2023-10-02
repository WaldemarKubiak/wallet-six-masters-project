// const DashboardPage = () => {
// 	return <div>DashboardPage</div>;
// };

import { selectIsModalAddTransaction } from "../../redux/global/globalSelectors";

import { useSelector } from "react-redux";

// export default DashboardPage;
import AddTransactionModal from "../../components/ModalAddTransaction/modalAddTransaction";
import EditTransactionModal from "../../components/EditTransactionModal/EditTransactionModal";
import HomeTab from "../../components/HomeTab/HomeTab";

import styles from "./DashboardPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
// import Balance from "../../components/Balance/Balance";
// import Transactions from "../../components/transactions/transactions";
import Currency from "../../components/Currency/Currency";

import Header from "../../components/Header/Header";
import { ButtonAddTransactions } from "../../components/ButtonAddTransactions/ButtonAddTransactions";
import { setIsModalAddTransactionOpen } from "../../redux/global/globalSlice";

function DashboardPage() {
  const isModalAddTransactionOpen = useSelector(selectIsModalAddTransaction);
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
        <EditTransactionModal />
        <HomeTab />
        <div className={styles.dashboard__content}>
          <div className={styles.dashboard__currency}>
            <Currency />
          </div>
        </div>
      </div>
      {/* </div> */}
      <ButtonAddTransactions />
      {isModalAddTransactionOpen && (
        <div className={styles.modalBackdrop}>
          <AddTransactionModal isOpen={isModalAddTransactionOpen} />
        </div>
      )}
    </div>
  );
}

export default DashboardPage;

// <Balance amount="24 000.00" />{" "}
