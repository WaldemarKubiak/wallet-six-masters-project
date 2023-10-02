import { useState } from 'react';
import Modal from 'react-modal';
import Notiflix from 'notiflix';

import css from '../ModalAddTransaction/ModalAddTransaction.module.css';

import FormInput from '../FormInput/FormInput';
import IncomeBar from '../../components/IncomeBar/IncomeBar';
import TextArea from '../../components/TextArea/TextArea';
import DateCalendar from '../../components/DateCalendar/DateCalendar';

import indicative from 'indicative';
import { useDispatch } from 'react-redux';

import { postTransactions } from '../../redux/finance/financeOperations';

import { setIsModalAddTransactionOpen } from '../../redux/global/globalSlice';

Modal.setAppElement('#root');

const AddTransactionModal = ({ isOpen }) => {
	// const [modalIsOpen, setModalIsOpen] = useState(false);

	// const openModal = () => {
	//   setModalIsOpen(true);
	// };

	const closeModal = () => {
		dispatch(setIsModalAddTransactionOpen(false));
	};

	const [expense, setExpense] = useState(false);

	const clickExpense = () => {
		setExpense(true);
	};

	const clickIncome = () => {
		setExpense(false);
	};

	const dispatch = useDispatch();

	const handleAddTransaction = e => {
		e.preventDefault();
		const form = e.currentTarget;

		// const rules = {
		//   amount: "required|min:1",
		// };

		// const data = {
		//   amount: form.elements.amount.value,
		// };

		// indicative.validateAll(data, rules).then(function () {
		dispatch(
			postTransactions({
				date: Date.parse(
					form.elements.date.value.split('-').reverse().join(' ')
				),
				income: !expense,
				category: expense ? form.elements.select.value : 'income',
				comment: form.elements.comment.value
					? form.elements.comment.value
					: ' ',
				sum: Math.round(form.elements.amount.value),
			})
		);

		form.reset();

		// .catch(function (err) {
		//   Notiflix.Notify.init({
		//     timeout: 15000,
		//   });
		//   Notiflix.Notify.failure("Amount is required as a number.");
		//   console.error(err);
		// });

		closeModal();
	};

	const options = [
		'Main expenses',
		'Products',
		'Car',
		'Self care',
		'Child care',
		'Household products',
		'Education',
		'Leisure',
		'Entertainment',
		'Other expenses',
	];

	return (
		<div>
			<Modal
				className={css.ModalAddTransaction}
				isOpen={isOpen}
				onRequestClose={closeModal}
				contentLabel='Add Modal'
				style={{
					overlay: {
						zIndex: 9999,
						height: '100%',
					},
					content: {
						top: '50%',
						left: '50%',
						right: 'auto',
						marginRight: '-50%',
						transform: 'translate(-50%, -50%)',
						width: '540px',
						height: '80%',
						marginTop: '20%',
						borderRadius: '20px',
					},
				}}>
				<div className={css.inputBox}>
					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className={css.close}
						onClick={closeModal}>
						<path d='M1 1L17 17' stroke='black' />
						<path d='M1 17L17 0.999999' stroke='black' />
					</svg>

					<h3 className={css.addTransactionTitle}>Add transaction</h3>
					<IncomeBar
						onClickIncome={clickIncome}
						onClickExpense={clickExpense}
						expenseState={expense}
					/>
					<form
						className={css.addTransactionForm}
						onSubmit={handleAddTransaction}>
						{expense && (
							<select
								defaultValue='income'
								name='select'
								className={css.selector}>
								{options.map(category => (
									<option value={category} key={category}>
										{category}
									</option>
								))}
							</select>
						)}

						<div className={css.tabletVersion}>
							<FormInput
								type='amount'
								name='amount'
								placeholder='0.00'
								className={css.amount}></FormInput>
							<DateCalendar />
						</div>
						<TextArea type='comment' name='comment' placeholder='Comment' />

						<button type='submit' className={css.buttonAdd}>
							Add
						</button>
					</form>
					<div className={css.buttons}>
						<button
							type='button'
							className={css.ButtonCancel}
							onClick={closeModal}>
							Cancel
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default AddTransactionModal;

// <div className="modal-buttons">
//  <button onClick={handleAddTransaction}>Add</button>
//  <button onClick={closeModal}>Cancel</button>
// </div>;

// onClick={() => closeModal}

//   <ButtonCancel onClick={closeModal} text="Cancel" />
