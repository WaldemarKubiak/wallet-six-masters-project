import { MdEdit } from 'React-icons/md';
import { useSelector } from 'react-redux';
import { selectFinancesIsLoading } from '../../redux/finance/financeSelectors';
import { selectGetFinances } from '../../redux/finance/financeSelectors';
import { useDispatch } from 'react-redux';
import css from './HomeTabMobile.module.css';
import { nanoid } from '@reduxjs/toolkit';
export const HomeTabMobile = () => {
  const dispatch = useDispatch();
  const financeData = useSelector(selectGetFinances);
  const financesLoading = useSelector(selectFinancesIsLoading);

  // const sortedData = financeData.sort(
  // 	(a, b) => new Date(b.date) - new Date(a.date)
  // );
  const handleEditFinance = id => {
    //open modal with id of financial
    //dispatch(EditModal())
  };
  const handleDeleteFinance = id => {
    //open delete modal with id of financial
    //dispatch(DeleteFinal())
  };

  const cutDate = date => {
    const year = date.slice(0, 10);
    const time = date.slice(11, 16);

    return `${year}`;
  };
  return (
    <ul className={css.tablesList}>
      {financeData.length > 0 ? (
        <>
          {financeData.map(item => (
            <li key={nanoid()} className={css.tableItem}>
              <ul>
                <li className={css.dataItem}>
                  <p className={css.dataName}>Date</p>
                  <p className={css.dataVal}>{cutDate(item.date)}</p>
                </li>
                <li className={css.dataItem}>
                  <p className={css.dataName}>Type</p>
                  <p className={css.dataVal}>{item.income ? '+' : '-'}</p>
                </li>
                <li className={css.dataItem}>
                  <p className={css.dataName}>Category</p>
                  <p className={css.dataVal}>{item.category}</p>
                </li>
                <li className={css.dataItem}>
                  <p className={css.dataName}>Comment</p>
                  <p className={css.dataVal}>{item.comment}</p>
                </li>
                <li className={css.dataItem}>
                  <p className={`${css.dataName}`}>Sum</p>
                  <p
                    className={`${css.dataVal} ${
                      item.income ? css.isSum : css.noSum
                    }`}
                  >
                    {item.sum}
                  </p>
                </li>
                <li className={css.dataItem}>
                  <button
                    className={css.button}
                    onClick={() => handleDeleteFinance(item._id)}
                  >
                    Delete
                  </button>
                  <button
                    className={css.buttonEdit}
                    onClick={() => handleEditFinance(item._id)}
                  >
                    <MdEdit size={24} className={css.icon} /> Edit
                  </button>
                </li>
              </ul>
            </li>
          ))}
        </>
      ) : (
        <p>No finance data</p>
      )}
    </ul>
  );
};
