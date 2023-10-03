import styles from './Balance.module.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../../redux/user/userSelectors';
import { selectAddedTransaction } from '../../redux/finance/financeSelectors';

function Balance() {
	const [balance, setBalance] = useState(null);
	const token = useSelector(selectUserToken);
	const addedBalance = useSelector(selectAddedTransaction);

	useEffect(() => {
		const handleLogout = () => {
			setBalance(null);
		};
		window.addEventListener('logout', handleLogout);

		async function fetchData() {
			if (token) {
				try {
					const response = await axios.get(
						'https://wallet-project-4dhb.onrender.com/api/transactions/stats/balance',
						{
							headers: {
								Authorization: `Bearer ${token}`,
							},
						}
					);
					setBalance(response.data.data.balance);
				} catch (error) {
					console.error(error);
					setBalance(null);
				}
			} else {
				setBalance(null);
			}
		}

		fetchData();

		return () => {
			window.removeEventListener('logout', handleLogout);
		};
	}, [addedBalance, token]);

	return (
		<div className={styles.balance}>
			<div className={styles.balance__text}>YOUR BALANCE</div>
			<div className={styles.balance__amount}>
				<span className={styles.balance__currency}>$</span>{' '}
				{balance !== null
					? balance
							.toLocaleString('en-US', { minimumFractionDigits: 2 })
							.replace(',', ' ')
					: 'Loading...'}
			</div>
		</div>
	);
}

Balance.propTypes = {
	balance: PropTypes.any,
};

export default Balance;
