import css from './HomeTab.module.css';
import { MdEdit } from 'React-icons/md';
import { useSelector } from 'react-redux';
import { selectGetFinances } from '../../redux/finance/financeSelectors';
import { useDispatch } from 'react-redux';
import { importEditTransactionData } from '../../redux/finance/finanseSlice';

const HomeTab = () => {
	const dispatch = useDispatch();
	const financeData = useSelector(selectGetFinances);

	const handleEditFinance = id => {
		const foundTransaction = financeData.find(element => element._id === id);

		const data = {
			date: foundTransaction.date,
			income: foundTransaction.income,
			category: foundTransaction.category,
			comment: foundTransaction.comment,
			sum: foundTransaction.sum,
			id: foundTransaction._id,
		};
		
		dispatch(importEditTransactionData(data));
	};

	const cutDate = date => {
		const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
		const formattedDate = new Date(date).toLocaleDateString(undefined, options);
		return formattedDate;
	};

	return (
		<div className={css.tableWrapper}>
			<table className={css.table}>
				<thead className={css.tableHeader}>
					<tr className={css.tableTitles}>
						<th>Date</th>
						<th>Type</th>
						<th>Category</th>
						<th>Comment</th>
						<th>Sum</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				{financeData.length > 0 ? (
					<tbody>
						{financeData.map(item => (
							<tr key={item._id} className={css.tableRow}>
								<td className={css.tableRowTd}>{cutDate(item.date)}</td>
								<td className={css.tableRowTd}>{item.income ? '+' : '-'}</td>
								<td className={css.tableRowTd}>{item.category}</td>
								<td className={css.tableRowTd}>{item.comment}</td>
								<td
									className={`${css.tableRowTd} ${
										item.income ? css.isSum : css.noSum
									}`}>
									{item.sum}
								</td>
								<td>
									<button
										className={css.buttonEdit}
										onClick={() => handleEditFinance(item._id)}>
										<MdEdit size={24} className={css.icon} />
									</button>
								</td>
								<td>
									<button
										className={css.button}
										onClick={() => handleEditFinance(item._id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				) : (
					<tbody>
						<tr key='example' className={css.tableRow}>
							<td style={{ color: 'grey' }}>date</td>
							<td>type</td>
							<td>category</td>
							<td>comm</td>
							<td>10</td>
							<td>
								<button className={css.buttonEdit}>
									<MdEdit size={24} className={css.icon} />
								</button>
							</td>
							<td>
								<button className={css.button}>Delete</button>
							</td>
						</tr>
					</tbody>
				)}
			</table>
		</div>
	);
};

export default HomeTab;
