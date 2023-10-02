import PropTypes from 'prop-types';
import css from './Chart.module.css';
import { useEffect, useState } from 'react';
import { selectUserToken } from '../../redux/user/userSelectors';
import { useSelector } from 'react-redux';
import axios from 'axios';

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
	const colors = dataStatsArr.map(item => item.color);

	const data = {
		labels: categories,
		datasets: [
			{
				label: 'Sum',
				data: values,
				backgroundColor: colors,
				borderWidth: 1,
				borderColor: ['transparent'],
			},
		],
	};

	const [balance, setBalance] = useState();
	const token = useSelector(selectUserToken);
	// console.log(token);

	useEffect(() => {
		async function fetch() {
			const response = await axios.get(
				'https://wallet-project-4dhb.onrender.com/api/transactions/stats/balance',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setBalance(response.data.data.balance);
			console.log(response);
			console.log(balance);
		}
		if (token);
		fetch();
	}, [balance]);

	const textCenter = {
		id: 'textCenter',
		beforeDatasetsDraw(chart) {
			const { ctx } = chart;
			ctx.save();
			ctx.font = 'bold 18px arial';
			ctx.fillStyle = '#000000';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
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
		<div className={css.doughnut}>
			<Doughnut data={data} options={options} plugins={[textCenter]}></Doughnut>
			<p className={css.balance}>${balance}</p>
		</div>
	);
};

Chart.propTypes = {
	dataToRender: PropTypes.shape({
		stats: PropTypes.arrayOf(
			PropTypes.shape({
				category: PropTypes.string.isRequired,
				total: PropTypes.number.isRequired,
				color: PropTypes.string.isRequired,
			})
		).isRequired,
		expenses: PropTypes.number.isRequired,
		income: PropTypes.number.isRequired,
	}).isRequired,
};

export default Chart;
