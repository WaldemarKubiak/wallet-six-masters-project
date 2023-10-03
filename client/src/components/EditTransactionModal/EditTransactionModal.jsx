import { useState } from 'react';
import Modal from 'react-modal';
import css from '../EditTransactionModal/EditTransactionModal.module.css';
import FormInput from '../FormInput/FormInput';
import IncomeBar from '../IncomeBar/IncomeBar';
import TextArea from '../TextArea/TextArea';
import DateCalendar from '../DateCalendar/DateCalendar';
import { useDispatch } from 'react-redux';
import { editTransaction } from '../../redux/finance/financeOperations';

Modal.setAppElement('#root');

const EditTransactionModal = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const [expense, setExpense] = useState(false);

	const clickExpense = () => {
		setExpense(true);
	};

	const clickIncome = () => {
		setExpense(false);
	};

	const dispatch = useDispatch();

	const handleSaveTransaction = e => {
		e.preventDefault();
		const form = e.currentTarget;
		dispatch(
			editTransaction({
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

		closeModal();
	};

	return (
		<div>
			<Modal
				className={css.ModalAddTransaction}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='Add Modal'
				style={{
					overlay: {
						zIndex: 9999,
						height: '60%',
					},
					content: {
						top: '50%',
						left: '50%',
						right: 'auto',
						marginRight: '-50%',
						transform: 'translate(-50%, -50%)',
						width: '540px',
						height: '60%',
						marginTop: '10%',
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

					<h3 className={css.addTransactionTitle}>Edit transaction</h3>
					<IncomeBar
						onClickIncome={clickIncome}
						onClickExpense={clickExpense}
						expenseState={expense}
					/>
					<form
						className={css.addTransactionForm}
						onSubmit={handleSaveTransaction}>
						<div className={css.tabletVersion}>
							<FormInput
								type='amount'
								name='amount'
								placeholder='0.00'
								className={css.amount}></FormInput>
							<DateCalendar />
						</div>
						<TextArea
							type='comment'
							name='comment'
							value='comment'
							placeholder='Comment'
						/>

						<button type='submit' className={css.buttonSave}>
							Save
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

export default EditTransactionModal;
