import { useState } from "react";
import Modal from "react-modal";

// import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
// import ButtonCancel from "../../components/ButtonCancel/ButtonCancel";
import css from "../ModalAddTransaction/ModalAddTransaction.module.css";

import React from "react";
import TransactionsDropdown from "../../components/TransactionsDropdown/TransactionsDropdown";

import FormInput from "../FormInput/FormInput";
import IncomeBar from "../../components/IncomeBar/IncomeBar";
import TextArea from "../../components/TextArea/TextArea";
import Date from "../../components/Date/Date";

import indicative from "indicative";
import { useDispatch } from "react-redux";

// Make sure to set appElement to the root of your app for accessibility
Modal.setAppElement("#root");
// const onAddTransaction = true;

const AddTransactionModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

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

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements);
    console.log(form.elements.amount.value);
    console.log(form.elements.comment.value);
    console.log(form.elements.date.value);

    const rules = {
      amount: "required",
      date: "required",
      //    category: "required",
    };

    const data = {
      amount: form.elements.amount.value,
      date: form.elements.date.value,
      //    category: form.elements.SelectedOption.value,
    };

    // console.log(data.amount);
    // console.log(data.date);
    // console.log(data.category);

    //     indicative.validateAll(data, rules);
    //     .then(function () {
    //     dispatch(
    //     signIn({
    //      email: form.elements.email.value,
    //      password: form.elements.password.value,
    form.reset();
  };
  // )
  //   );

  //   form.reset();
  // })
  // .catch(function (err) {
  //   Notiflix.Notify.init({
  //    timeout: 5000,
  //   });
  //   Notiflix.Notify.failure(
  //     "All fields are required to complete the sign in process."
  //   );
  //   console.error(err);
  // });

  const options = [
    "Main expenses",
    "Products",
    "Car",
    "Self care",
    "Child care",
    "Household products",
    "Education",
    "Leisure",
    "Entertainment",
    "Other expenses",
  ];

  function Select() {
    return (
      <div className={css.Select}>
        <TransactionsDropdown options={options} />
      </div>
    );
  }

  return (
    <div>
      <button onClick={openModal}>Add</button>
      <Modal
        className={css.ModalAddTransaction}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Modal"
        style={{
          overlay: {
            zIndex: 9999,
            height: "100%",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "540px",
            height: "80%",
            marginTop: "20%",
            borderRadius: "20px",
          },
        }}
      >
        <div className={css.inputBox}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css.close}
            onClick={closeModal}
          >
            <path d="M1 1L17 17" stroke="black" />
            <path d="M1 17L17 0.999999" stroke="black" />
          </svg>

          <h3 className={css.addTransactionTitle}>Add transaction</h3>
          <IncomeBar
            onClickIncome={clickIncome}
            onClickExpense={clickExpense}
            expenseState={expense}
          />
          <form
            className={css.addTransactionForm}
            onSubmit={handleAddTransaction}
          >
            {expense && <Select />}
            <div className={css.tabletVersion}>
              <FormInput
                type="amount"
                name="amount"
                placeholder="0.00"
                className={css.amount}
              ></FormInput>
              <Date />
            </div>
            <TextArea type="comment" name="comment" placeholder="Comment" />

            <button type="submit" className={css.buttonAdd}>
              Add
            </button>
          </form>
          <div className={css.buttons}>
            <button
              type="button"
              className={css.ButtonCancel}
              onClick={closeModal}
            >
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
