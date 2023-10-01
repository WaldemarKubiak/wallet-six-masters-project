import { useState } from "react";
import Modal from "react-modal";

import ButtonAdd from "../ButtonAdd/ButtonAdd";
// import ButtonCancel from "../../components/ButtonCancel/ButtonCancel";
import css from "../EditTransactionModal/EditTransactionModal.module.css";

import React from "react";
import TransactionsDropdown from "../TransactionsDropdown/TransactionsDropdown";

import FormInput from "../FormInput/FormInput";
import IncomeBar from "../IncomeBar/IncomeBar";
import TextArea from "../TextArea/TextArea";
import Date from "../Date/Date";

import indicative from "indicative";
import { useDispatch } from "react-redux";

// Make sure to set appElement to the root of your app for accessibility
Modal.setAppElement("#root");
// const onEditTransaction = true;

const EditTransactionModal = () => {
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

  const handleSaveTransaction = () => {
    // Implement your logout logic here
    // Example: Perform a logout API call or clear user session
    // After successful logout, you can redirect the user to the login page or another appropriate action.

    // For this example, we will simply call the onLogout callback and close the modal.
    if (onEditTransaction) {
      onEditTransaction();
    }
    closeModal();
  };

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

  // const isExpense = true;

  return (
    <div>
      <button onClick={openModal}>Edit</button>
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

          <h3 className={css.addTransactionTitle}>Edit transaction</h3>
          <IncomeBar
            onClickIncome={clickIncome}
            onClickExpense={clickExpense}
            expenseState={expense}
          />
          <form
            className={css.addTransactionForm}
            onSubmit={handleSaveTransaction}
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
            <TextArea
              type="comment"
              name="comment"
              value="comment"
              placeholder="Comment"
            />

            <button type="submit" className={css.buttonSave}>
              Save
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

export default EditTransactionModal;

// <div className="modal-buttons">
//  <button onClick={handleAddTransaction}>Add</button>
//  <button onClick={closeModal}>Cancel</button>
// </div>;

// onClick={() => closeModal}

//   <ButtonCancel onClick={closeModal} text="Cancel" />
