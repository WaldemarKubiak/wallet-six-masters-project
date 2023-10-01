import css from "../Header/Header.module.css";

// import LogoutModal from "../../components/ModalLogout/modalLogout";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUser } from "../../redux/user/userSelectors";
import { signOut } from "../../redux/user/userOperations";

// import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import { setIsModalLogoutOpen } from "../../redux/global/globalSlice";

import { selectIsModalLogoutOpen } from "../../redux/global/globalSelectors";

Modal.setAppElement("#root");

const Header = () => {
  const user = useSelector(selectUser);

  const name = user.firstName;

  // const [modalIsOpen, setModalIsOpen] = useState(false);

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  const isModalOpen = useSelector(selectIsModalLogoutOpen);

  const closeModal = () => {
    dispatch(setIsModalLogoutOpen(false));
  };

  const handleLogout = () => {
    dispatch(signOut());
    closeModal();
  };

  const handleOnclick = () => {
    dispatch(setIsModalLogoutOpen(true));
  };

  const dispatch = useDispatch();

  return (
    <div>
      <div className={css.HeaderMainBox}>
        <div className={css.modalHeaderBox}>
          <div className={css.homeScreen__titleBox}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.52059 7.14286L18.7187 2.88927L17.9139 1.22119C17.3873 0.13694 16.1029 -0.310807 15.0455 0.229123L1.43994 7.14286H3.52059Z"
                fill="#24CCA7"
              />
              <path
                d="M23.2625 2.85718C23.0793 2.85718 22.8962 2.8845 22.713 2.93916L19.2414 3.97757L8.6394 7.1429H20.6734H25.9182L25.2688 4.53776C25.0191 3.52212 24.1782 2.85718 23.2625 2.85718Z"
                fill="#24CCA7"
              />
              <path
                d="M26.5873 8.03705H26.2032H25.6811H25.1589H21.1735H6.52891H4.60864H2.99158H2.69175H1.68782C1.15553 8.03705 0.680516 8.28104 0.370578 8.66542C0.229085 8.84257 0.12128 9.04645 0.0606401 9.27039C0.0235822 9.41077 0 9.55784 0 9.70825V9.90879V11.814V28.3287C0 29.2512 0.754632 29.9999 1.68445 29.9999H26.5839C27.5137 29.9999 28.2684 29.2512 28.2684 28.3287V23.6661H18.2729C16.6929 23.6661 15.4093 22.3926 15.4093 20.8251V19.2942V18.7762V18.2581V17.1083C15.4093 16.3396 15.7193 15.641 16.2212 15.1296C16.6659 14.675 17.2622 14.3675 17.9292 14.2907C18.0404 14.2773 18.155 14.2706 18.2695 14.2706H26.8669H27.3891H27.9113H28.2684V9.70825C28.2717 8.78574 27.5171 8.03705 26.5873 8.03705Z"
                fill="#4A56E2"
              />
              <path
                d="M29.4508 15.8683C29.2824 15.7146 29.0836 15.5976 28.8613 15.5207C28.6894 15.4639 28.5075 15.4305 28.3155 15.4305H28.2717H28.238H27.7158H25.8326H18.2728C17.343 15.4305 16.5884 16.1792 16.5884 17.1017V17.9339V18.452V18.9701V20.8218C16.5884 21.7443 17.343 22.493 18.2728 22.493H28.2717H28.3155C28.5075 22.493 28.6894 22.4595 28.8613 22.4027C29.0836 22.3292 29.2824 22.2089 29.4508 22.0551C29.7877 21.751 29.9999 21.3098 29.9999 20.8218V17.1017C29.9999 16.6137 29.7877 16.1725 29.4508 15.8683ZM21.7899 19.2943C21.7899 19.7555 21.4126 20.1299 20.9477 20.1299H20.3885C19.9236 20.1299 19.5463 19.7555 19.5463 19.2943V18.7395C19.5463 18.4721 19.6709 18.2348 19.8697 18.0843C20.0145 17.974 20.1931 17.9039 20.3885 17.9039H20.53H20.9477C21.4126 17.9039 21.7899 18.2782 21.7899 18.7395V19.2943Z"
                fill="#4A56E2"
              />
            </svg>
            <h2 className={css.homeScreen__title}>Wallet</h2>
          </div>
          <div className={css.userLogoutBlock}>
            <div className={css.name}>{name}</div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleOnclick}
            >
              <g clipPath="url(#clip0_39706_1104)">
                <path
                  d="M11.2788 13.0708H12.6844V15.8818C12.6844 17.0443 11.7386 17.99 10.5761 17.99H2.10814C0.945786 17.99 0 17.0443 0 15.8818V2.10814C0 0.945786 0.945786 0 2.10814 0H10.5761C11.7386 0 12.6844 0.945786 12.6844 2.10814V4.91913H11.2788V2.10814C11.2788 1.72073 10.9637 1.40543 10.5761 1.40543H2.10814C1.72073 1.40543 1.40543 1.72073 1.40543 2.10814V15.8818C1.40543 16.2692 1.72073 16.5845 2.10814 16.5845H10.5761C10.9637 16.5845 11.2788 16.2692 11.2788 15.8818V13.0708ZM14.6872 5.68213L13.6934 6.67598L15.3096 8.29234H6.21922V9.69777H15.3096L13.6934 11.314L14.6872 12.3078L18 8.99506L14.6872 5.68213Z"
                  fill="#BDBDBD"
                />
              </g>
              <defs>
                <clipPath id="clip0_39706_1104">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className={css.exit}>Exit</div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Logout Modal"
        className={css.LogoutModal}
        style={{ overlay: { zIndex: 9999 } }}
      >
        <div className={css.LogoutModalContent}>
          <h2>Confirm Logout</h2>
          <p>Are you sure you want to logout?</p>
          <div className="modal-buttons">
            <button onClick={handleLogout}>Logout</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
