import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectTransactionsData } from "../../redux/finance/financeSelectors";
import Chart from "../../components/Chart/Chart";
import TableChart from "../../components/Chart/Table/TableChart";
import Navigation from "../../components/Navigation/Navigation";

import css from "./DiagramTab.module.css";
import Header from "../../components/Header/Header";

const DiagramTab = () => {
  const dataToRender = useSelector(selectTransactionsData);

  return (
    <div className={css.container}>
      <Header />
      <Navigation />
      <p className={css.diagramTitle}>Statistic</p>
      <div className={css.diagramWrap}>
        <Chart dataToRender={dataToRender} />
        <TableChart dataToRender={dataToRender} />
      </div>
    </div>
  );
};

export default DiagramTab;
