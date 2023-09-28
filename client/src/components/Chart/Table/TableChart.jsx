import css from './TableChart.module.css';

const Table = ({ dataToRender }) => {
	const dataStats = dataToRender.data.stats;
	const dataExpenses = dataToRender.data.expenses;
	const dataIncome = dataToRender.data.income;

	const categoryColors = {
		'Main expenses': '#fed057',
		Products: '#ffd8d0',
		Car: '#fd9498',
		'Self care': '#c5baff',
		'Child care': '#6e78e8',
		'Household products': '#4a56e2',
		Education: '#81e1ff',
		Leisure: '#24cca7',
		'Other expenses': '#00ad84',
	};

	return (
		<div className={css.tableWrap}>
			<div className={css.header}>
				<div className={css.headerItem}>Category</div>
				<div className={css.headerItem}>Sum</div>
			</div>

			<ul className={css.list}>
				{dataStats.map(({ category, total }) => (
					<li className={css.listItem} key={category}>
						<div className={css.listItemWrap}>
							<div
								style={{
									backgroundColor: categoryColors[category], //TO DO - podział kolorów
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
					<p className={css.resultsExpenses}>{dataExpenses}</p>
				</div>
				<div className={css.results}>
					<p className={css.resultsTitle}>Income:</p>
					<p className={css.resultsIncome}>{dataIncome}</p>
				</div>
			</div>
		</div>
	);
};

export default Table;
