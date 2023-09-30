import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/auth-selectors";
import axios from "axios";

function Transactions() {
	const [transactions, setTransactions] = useState([]);
	const token = useSelector(selectToken);

	useEffect(() => {
		async function fetch() {
			const response = await axios(
				"https://wallet-project-4dhb.onrender.com/api/transactions",
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setTransactions(response.data.data.transactions);
		}

		fetch();
	}, [token]);

	return (
		<div>
			<div>Date{transactions.date}</div>
			<div>Type{transactions.income}</div>
			<div>Category{transactions.category}</div>
			<div>Comment{transactions.comment}</div>
			<div>Sum{transactions.sum}</div>
		</div>
	);
}

export default Transactions;
