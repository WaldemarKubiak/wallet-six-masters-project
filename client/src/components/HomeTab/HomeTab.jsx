import css from './HomeTab.module.css';
import { MdEdit } from 'React-icons/md';
import { useSelector } from 'react-redux';
import { selectFinancesIsLoading } from '../../redux/finance/financeSelectors';
import { selectGetFinances } from '../../redux/finance/financeSelectors';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFinance } from '../../redux/finance/financeOperations';
export const HomeTab = () => {
  const dispatch = useDispatch();
  const financeData = useSelector(selectGetFinances);
  const financesLoading = useSelector(selectFinancesIsLoading);

  const sortedData = financeData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleEditFinance = id => {
    //open modal with id of financial
    //dispatch(EditModal())
  };
  const handleDeleteFinance = id => {
    //delete modal with id of financial
    //dispatch(DeleteFinal())
  };
  console.log(financeData);
  const cutDate = date => {
    const year = date.slice(0, 10);
    const time = date.slice(11, 16);

    return `${year}`;
  };
  return (
    <div className={css.tableWrapper}>
      <table className={css.table}>
        <thead className={css.tableHeader}>
          <tr className={css.tableTitles}>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {financeData.length > 0 ? (
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={item._id} className={css.tableRow}>
                <td>{cutDate(item.date)}</td>
                <td>{item.income ? '+' : '-'}</td>
                <td>{item.category}</td>
                <td>{item.comment}</td>
                <td>{item.sum}</td>
                <td>
                  <button
                    className={css.buttonEdit}
                    onClick={() => handleEditFinance(item._id)}
                  >
                    <MdEdit size={24} className={css.icon} />
                  </button>
                </td>
                <td>
                  <button
                    className={css.button}
                    onClick={() => handleDeleteFinance(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr key="example" className={css.tableRow}>
              <td>10-10-2023</td>
              <td>example</td>
              <td>example</td>
              <td>example</td>
              <td>example</td>
              <td>
                <button className={css.buttonEdit}>
                  <MdEdit size={24} className={css.icon} />
                </button>
              </td>
              <td>
                <button className={css.button}>Delete</button>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};
