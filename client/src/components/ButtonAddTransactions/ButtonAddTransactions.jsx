import { useDispatch } from 'react-redux';
import css from './ButtonAddTransactions.module.css';

import { setIsModalAddTransactionOpen } from '../../redux/global/globalSlice';

export const ButtonAddTransactions = () => {
	const dispatch = useDispatch();

	const handleOnClick = () => {
		dispatch(setIsModalAddTransactionOpen(true));
	};
	return (
		<button className={css.btn} type='button' onClick={() => handleOnClick()}>
			+
		</button>
	);
};
