import css from './HomeTab.module.css';
import { MdEdit } from 'React-icons/md';
export const HomeTab = () => {
  const financeData = [
    {
      date: '2023-09-25',
      type: '-',
      category: 'Groceries',
      comment: 'Weekly grocery shopping',
      sum: 50.0,
    },
    {
      date: '2023-09-24',
      type: '+',
      category: 'Salary',
      comment: 'Monthly salary payment',
      sum: 2500.0,
    },
    {
      date: '2023-09-23',
      type: '-',
      category: 'Utilities',
      comment: 'Electricity bill payment',
      sum: 100.0,
    },
    {
      date: '2023-09-25',
      type: '-',
      category: 'Groceries',
      comment: 'Weekly grocery shopping',
      sum: 50.0,
    },
    {
      date: '2023-09-24',
      type: '+',
      category: 'Salary',
      comment: 'Monthly salary payment',
      sum: 2500.0,
    },
    {
      date: '2023-09-23',
      type: '-',
      category: 'Utilities',
      comment: 'Electricity bill payment',
      sum: 100.0,
    },
    {
      date: '2023-09-25',
      type: '-',
      category: 'Groceries',
      comment: 'Weekly grocery shopping',
      sum: 50.0,
    },
    {
      date: '2023-09-24',
      type: '+',
      category: 'Salary',
      comment: 'Monthly salary payment',
      sum: 2500.0,
    },
    {
      date: '2023-09-23',
      type: '-',
      category: 'Utilities',
      comment: 'Electricity bill payment',
      sum: 100.0,
    },
  ];

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

        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index} className={css.tableRow}>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.category}</td>
              <td>{item.comment}</td>
              <td>{item.sum}</td>
              <td>
                <button
                  className={css.buttonEdit}
                  onClick={() => handleEditFinance(item.id)}
                >
                  <MdEdit size={24} className={css.icon} />
                </button>
              </td>
              <td>
                <button
                  className={css.button}
                  onClick={() => handleDeleteFinance(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};
