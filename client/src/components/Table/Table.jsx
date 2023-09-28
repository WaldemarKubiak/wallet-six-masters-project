import css from './Table.module.css';
import { nanoid } from '@reduxjs/toolkit';

export const Table = ({ data }) => {
	// const filteredTab = data.filter(item => item === filterMethod);

	const getRandomColor = () => {
		return Math.floor(Math.random() * 16777215).toString(16);
	};
	return (
		<div className={css.table}>
			<div className={css.header}>
				<p>Category</p>
				<p>Sum</p>
			</div>
			{data.stats.map(item => (
				<ul className={css.list} key={nanoid()}>
					<li className={css.item}>
						<div className={css.categoryBox}>
							<span
								className={css.colorBox}
								style={{ backgroundColor: `#${getRandomColor()}` }}></span>
							<p className={css.categoryName}>{item.category}</p>
						</div>
						<p className={css.categoryVal}>{item.total}</p>
					</li>
				</ul>
			))}
			<div className={css.overviewBox}>
				<div className={css.overviewDataWrapper}>
					<p className={css.overviewName}>Expanses:</p>
					<p className={`${css.overviewVal} ${css.overviewExpenses}`}>
						{data.expenses}
					</p>
				</div>
				<div className={css.overviewDataWrapper}>
					<p className={css.overviewName}>Income:</p>
					<p className={css.overviewVal} style={{ color: '#24CCA7' }}>
						{data.income}
					</p>
				</div>
			</div>
		</div>
	);
};
