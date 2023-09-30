import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './TableChart.module.css';
import { getTransactions } from '../../../redux/finance/financeOperations';
import { nanoid } from 'nanoid';

const monthToNumber = {
	January: '01',
	February: '02',
	March: '03',
	April: '04',
	May: '05',
	June: '06',
	July: '07',
	August: '08',
	September: '09',
	October: '10',
	November: '11',
	December: '12',
};

const TableChart = ({ dataToRender }) => {
	const dataStats = dataToRender.stats;
	const dataExpenses = dataToRender.expenses;

	const formattedExpenses = dataExpenses
		.toLocaleString(undefined, {
			useGrouping: true,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})
		.replace(',', '.');

	const dataIncome = dataToRender.income;

	const formattedIncome = dataIncome
		.toLocaleString(undefined, {
			useGrouping: true,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})
		.replace(',', '.');

	const [selectedMonth, setSelectedMonth] = useState('01');
	const [selectedYear, setSelectedYear] = useState('2023');
	const dispatch = useDispatch();

	const handleMonthChange = event => {
		const selectedMonthNumber = event.target.value;
		setSelectedMonth(selectedMonthNumber);
	};

	const handleYearChange = event => {
		setSelectedYear(event.target.value);
	};

	const dataStatsArr = [];

	for (const obj in dataStats) {
		dataStatsArr.push(dataStats[obj]);
	}

	useEffect(() => {
		const data = { selectedMonth: selectedMonth, selectedYear };

		dispatch(getTransactions(data));
	}, [dispatch, selectedMonth, selectedYear]);

	return (
		<div className={css.tableWrap}>
			<div className={css.selectWrapper}>
				<select
					className={css.selectMonth}
					value={selectedMonth}
					onChange={handleMonthChange}>
					{Object.keys(monthToNumber).map(month => (
						<option key={month} value={monthToNumber[month]}>
							{month}
						</option>
					))}
				</select>

				<select
					className={css.selectYear}
					value={selectedYear}
					onChange={handleYearChange}>
					{['2020', '2021', '2022', '2023', '2024', '2025', '2026'].map(
						year => (
							<option key={year} value={year}>
								{year}
							</option>
						)
					)}
				</select>
			</div>

			<div className={css.header}>
				<div className={css.headerItem}>Category</div>
				<div className={css.headerItem}>Sum</div>
			</div>

			<ul className={css.list}>
				{dataStatsArr.map(({ category, color, total }) => (
					<li className={css.listItem} key={nanoid()}>
						<div className={css.listItemWrap}>
							<div
								style={{
									backgroundColor: color,
									width: '24px',
									height: '24px',
									borderRadius: '2px',
									marginRight: '16px',
								}}></div>
							<p className={css.category}>{category}</p>
						</div>
						<p>{total.toFixed(2)}</p>
					</li>
				))}
			</ul>
			<div className={css.resultsWrap}>
				<div className={css.results}>
					<p className={css.resultsTitle}>Expenses:</p>
					<p className={css.resultsExpenses}>{formattedExpenses}</p>
				</div>
				<div className={css.results}>
					<p className={css.resultsTitle}>Income:</p>
					<p className={css.resultsIncome}>{formattedIncome}</p>
				</div>
			</div>
		</div>
	);
};

TableChart.propTypes = {
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

export default TableChart;
