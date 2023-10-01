import css from "../ButtonCancel/ButtonCancel.module.css";

import { useState } from "react";
import Modal from "react-modal";

const ButtonCancel = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  console.log(modalIsOpen);

  const handleAddTransaction = () => {
    // Implement your logout logic here
    // Example: Perform a logout API call or clear user session
    // After successful logout, you can redirect the user to the login page or another appropriate action.

    // For this example, we will simply call the onLogout callback and close the modal.
    if (onAddTransaction) {
      onAddTransaction();
    }
    closeModal();
  };
  return (
    <button
      type="button"
      className={css.ButtonCancel}
      onClick={() => closeModal}
    >
      {text}
    </button>
  );
};

export default ButtonCancel;

//  button className={css.btn} type="button" onClick={() => handleOnClick()}
