import { MdEdit } from 'React-icons/md';
import { useSelector } from 'react-redux';
import { selectGetFinances } from '../../redux/finance/financeSelectors';
import { useDispatch } from 'react-redux';
import css from './HomeTabMobile.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { importEditTransactionData } from '../../redux/finance/finanseSlice';

export const HomeTabMobile = () => {
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
		<ul className={css.tablesList}>
			{financeData.length > 0 ? (
				<>
					{financeData.map(item => (
						<li key={nanoid()} className={css.tableItem}>
							<ul>
								<li className={css.dataItem}>
									<p className={css.dataName}>Date</p>
									<p className={css.dataVal}>{cutDate(item.date)}</p>
								</li>
								<li className={css.dataItem}>
									<p className={css.dataName}>Type</p>
									<p className={css.dataVal}>{item.income ? '+' : '-'}</p>
								</li>
								<li className={css.dataItem}>
									<p className={css.dataName}>Category</p>
									<p className={css.dataVal}>{item.category}</p>
								</li>
								<li className={css.dataItem}>
									<p className={css.dataName}>Comment</p>
									<p className={css.dataVal}>{item.comment}</p>
								</li>
								<li className={css.dataItem}>
									<p className={`${css.dataName}`}>Sum</p>
									<p
										className={`${css.dataVal} ${
											item.income ? css.isSum : css.noSum
										}`}>
										{item.sum}
									</p>
								</li>
								<li className={css.dataItem}>
									<button
										className={css.button}
										onClick={() => handleEditFinance(item._id)}>
										Delete
									</button>
									<button
										className={css.buttonEdit}
										onClick={() => handleEditFinance(item._id)}>
										<MdEdit size={24} className={css.icon} /> Edit
									</button>
								</li>
							</ul>
						</li>
					))}
				</>
			) : (
				<p>No finance data</p>
			)}
		</ul>
	);
};
