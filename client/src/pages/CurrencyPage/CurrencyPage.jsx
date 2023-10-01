// import Currency from "../../components/Currency/Currency";
import Currency from "../../components/Currency/Currency";
import NavigationCurrency from "../../components/NavigationCurrency/NavigationCurrency";
// import DashboardPage from "../DashboardPage/DashboardPage";
import styles from "./CurrencyPage.module.css";

import Header from "../../components/Header/Header";

function CurrencyPage() {
  return (
    <>
      <Header />
      <div className={styles.currency_page}>
        <div className={styles.currency_page__content}>
          <div className={styles.currency_page__navigation}>
            <NavigationCurrency />
          </div>
          <div>
            <Currency />
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrencyPage;
