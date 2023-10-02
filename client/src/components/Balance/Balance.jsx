import styles from './Balance.module.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../../redux/user/userSelectors';
import { selectAddedTransaction } from '../../redux/finance/financeSelectors';

function Balance() {
	const [balance, setBalance] = useState();
	const token = useSelector(selectUserToken);
	const addedBalance = useSelector(selectAddedTransaction);

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
		}
		if (token);
		fetch();
	}, [addedBalance]);
	return (
		<div className={styles.balance}>
			<div className={styles.balance__text}>YOUR BALANCE</div>
			<div className={styles.balance__amount}>
				<span className={styles.balance__currency}>₴</span> {balance}
			</div>
		</div>
	);
}

Balance.propTypes = {
	balance: PropTypes.any,
};

export default Balance;
