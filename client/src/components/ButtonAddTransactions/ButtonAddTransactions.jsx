import { useDispatch } from 'react-redux';
import css from './ButtonAddTransactions.module.css';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    //trzeba podłączyć funkcje do zmiany globalnego stanu
    // dispatch(changleisModalAddTransactionOpen(true) )
  };
  return (
    <button className={css.btn} type="button" onClick={() => handleOnClick()}>
      +
    </button>
  );
};
