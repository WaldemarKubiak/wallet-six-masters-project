import { ButtonAddTransactions } from '../../components/ButtonAddTransactions/ButtonAddTransactions';
import { HomeTab } from '../../components/HomeTab/HomeTab';
import { Table } from '../../components/Table/Table';
const HomePage = () => {
  const fakeData = {
    stats: [
      {
        category: 'Main expenses',
        total: 0,
      },
      {
        category: 'Products',
        total: 0,
      },
      {
        category: 'Car',
        total: 1302,
      },
      {
        category: 'Self care',
        total: 0,
      },
      {
        category: 'Child care',
        total: 0,
      },
      {
        category: 'Household products',
        total: 0,
      },
      {
        category: 'Education',
        total: 0,
      },
      {
        category: 'Leisure',
        total: 0,
      },
      {
        category: 'Entertainment',
        total: 0,
      },
      {
        category: 'Other expenses',
        total: 0,
      },
    ],
    expenses: 1302,
    income: 0,
  };

  return (
    <div>
      <HomeTab />
      <Table data={fakeData} />
      <ButtonAddTransactions />
    </div>
  );
};

export default HomePage;
