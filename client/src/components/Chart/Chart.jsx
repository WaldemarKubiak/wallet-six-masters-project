import PropTypes from 'prop-types';
import css from './Chart.module.css';

import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Colors,
	Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Colors, Legend);

const Chart = ({ dataToRender }) => {
	const dataStats = dataToRender.stats;

	const dataStatsArr = [];

	for (const obj in dataStats) {
		dataStatsArr.push(dataStats[obj]);
	}

	const categories = dataStatsArr.map(item => item.category);
	const values = dataStatsArr.map(item => item.total);

	const data = {
		labels: categories,
		datasets: [
			{
				label: 'Sum',
				data: values,
				backgroundColor: [
					'#fed057',
					'#ffd8d0',
					'#fd9498',
					'#c5baff',
					'#6e78e8',
					'#4a56e2',
					'#81e1ff',
					'#24cca7',
					'#00ad84',
				],
				borderWidth: 1,
				borderColor: ['transparent'],
			},
		],
	};

	const textCenter = {
		id: 'textCenter',
		beforeDatasetsDraw(chart) {
			const { ctx } = chart;
			ctx.save();
			ctx.font = 'bold 18px arial';
			ctx.fillStyle = '#000000';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText(
				// `$${balance}`,
				`$ 24 000.00`,
				chart.getDatasetMeta(0).data[0].x,
				chart.getDatasetMeta(0).data[0].y
			);
		},
	};

	const options = {
		cutout: '65%',
		plugins: {
			colors: {
				forceOverride: false,
			},
			legend: {
				display: false,
			},
		},
	};

	return (
		<div className={css.chartWrap}>
			<div>
				<Doughnut
					data={data}
					options={options}
					plugins={[textCenter]}></Doughnut>
			</div>
		</div>
	);
};

Chart.propTypes = {
	dataToRender: PropTypes.shape({
		stats: PropTypes.arrayOf(
			PropTypes.shape({
				category: PropTypes.string.isRequired,
				total: PropTypes.number.isRequired,
			})
		).isRequired,
		expenses: PropTypes.number.isRequired,
		income: PropTypes.number.isRequired,
	}).isRequired,
};

export default Chart;
