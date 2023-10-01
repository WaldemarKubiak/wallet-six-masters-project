import css from "./HomeTab.module.css";
import { MdEdit } from "React-icons/md";
import { useSelector } from "react-redux";
import { selectFinancesIsLoading } from "../../redux/finance/financeSelectors";
import { selectGetFinances } from "../../redux/finance/financeSelectors";
import { useDispatch } from "react-redux";
import { importEditTransactionData } from "../../redux/finance/finanseSlice";

const HomeTab = () => {
  const dispatch = useDispatch();
  // const financeData = useSelector(selectGetFinances);

  const financeData = [
    {
      date: "2023-09-29",
      income: true,
      category: "Salary",
      comment: "Monthly income",
      sum: 2500,
      id: "abc123",
    },
    {
      date: "2023-09-28",
      income: false,
      category: "Groceries",
      comment: "Weekly grocery shopping",
      sum: 150,
      id: "def456",
    },
    {
      date: "2023-09-27",
      income: false,
      category: "Utilities",
      comment: "Electricity bill",
      sum: 100,
      id: "ghi789",
    },
  ];

  const financesLoading = useSelector(selectFinancesIsLoading);

  const sortedData = financeData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const handleEditFinance = (id) => {
    const foundTransaction = financeData.find((element) => element._id === id);

    const data = {
      date: foundTransaction.date,
      income: foundTransaction.income,
      category: foundTransaction.category,
      comment: foundTransaction.comment,
      sum: foundTransaction.sum,
      id: foundTransaction._id,
    };
    console.log(data);
    //open modal with id of financial
    dispatch(importEditTransactionData(data));
  };
  const handleDeleteFinance = (id) => {
    //open delete modal with id of financial
    //dispatch(DeleteFinal())
  };

  const cutDate = (date) => {
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
                <td>{item.income ? "+" : "-"}</td>
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

export default HomeTab;
