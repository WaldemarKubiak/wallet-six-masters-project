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
	// export default function Chart() {
	//   const rawData = {
	//     data: {
	//       stats: [
	//         { category: "Main expenses", total: 8700.0 },
	//         { category: "Products", total: 3800.74 },
	//         { category: "Car", total: 1500.0 },
	//         { category: "Self care", total: 800.0 },
	//         { category: "Child care", total: 2208.5 },
	//         { category: "Household products", total: 300.0 },
	//         { category: "Education", total: 3400.0 },
	//         { category: "Leisure", total: 1230.0 },
	//         { category: "Other expenses", total: 610.0 }
	//       ],
	//       expenses: 1302,
	//       income: 0
	//     }
	//   };

	const dataStats = dataToRender.data.stats;

	const categories = dataStats.map(item => item.category);
	const values = dataStats.map(item => item.total);

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
			ctx.font = 'bold 24px arial';
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

export default Chart;
