import Chart from '../../components/Chart/Chart';
import Table from '../../components/Chart/Table/TableChart';
import css from './DiagramTab.module.css';

const DiagramTab = () => {
	const dataToRender = {
		data: {
			stats: [
				{ category: 'Main expenses', total: 8700.0 },
				{ category: 'Products', total: 3800.74 },
				{ category: 'Car', total: 1500.0 },
				{ category: 'Self care', total: 800.0 },
				{ category: 'Child care', total: 2208.5 },
				{ category: 'Household products', total: 300.0 },
				{ category: 'Education', total: 3400.0 },
				{ category: 'Leisure', total: 1230.0 },
				{ category: 'Other expenses', total: 610.0 },
			],
			expenses: 22549.24,
			income: 27350.0,
		},
	};

	return (
		<div className={css.diagramWrap}>
			<h2>Statistic</h2>
			<Chart dataToRender={dataToRender} />
			<Table dataToRender={dataToRender} />
		</div>
	);
};

export default DiagramTab;
