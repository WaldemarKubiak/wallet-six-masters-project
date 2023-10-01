import React from "react";

import HomeScreen from "../../components/HomeScreen/HomeScreen";
import FormSignIn from "../../components/FormSignIn/FormSignIn";

// import LogoutModal from "../../components/ModalLogout/modalLogout";
// import AddTransactionModal from "../../components/ModalAddTransaction/modalAddTransaction";

// import EditTransactionModal from "../../components/EditTransactionModal/EditTransactionModal";

import Header from "../../components/Header/Header";

import { useAuth } from "../../hook/useAuth/useAuth";
import { signIn } from "../../redux/user/userOperations";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(signIn());
  }, [dispatch]);
  // const isLoggedIn = true;
  console.log(isLoggedIn);

  return (
    <HomeScreen>
      {isLoggedIn && <Header />}

      <FormSignIn />
    </HomeScreen>
  );
};

export default HomePage;

// <AddTransactionModal />;

// <Header />
//     <AddTransactionModal />
//     <EditTransactionModal />
