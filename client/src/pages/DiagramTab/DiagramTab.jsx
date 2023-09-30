import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectTransactionsData } from '../../redux/finance/financeSelectors';
import Chart from '../../components/Chart/Chart';
import TableChart from '../../components/Chart/Table/TableChart';

import css from './DiagramTab.module.css';

const DiagramTab = () => {
	const dataToRender = useSelector(selectTransactionsData);

	return (
		<div className={css.diagramWrap}>
			<h2>Statistic</h2>
			<Chart dataToRender={dataToRender} />
			<TableChart dataToRender={dataToRender} />
		</div>
	);
};

export default DiagramTab;
