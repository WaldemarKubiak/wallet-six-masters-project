import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectTransactionsData } from '../../redux/finance/financeSelectors';
import Chart from '../../components/Chart/Chart';
import TableChart from '../../components/Chart/Table/TableChart';

import css from './DiagramTab.module.css';

const DiagramTab = () => {
	const dataToRender = useSelector(selectTransactionsData);

	return (
		<div className={css.containerBackground}>
			<div className={css.container}>
				<div className={css.diagramWrap}>
					<h1 className={css.diagramTitle}>Statistic</h1>
					<Chart dataToRender={dataToRender} />
				</div>
				<div className={css.containerDiagramTab}>
					<TableChart dataToRender={dataToRender} />
				</div>
			</div>
		</div>
	);
};

export default DiagramTab;
