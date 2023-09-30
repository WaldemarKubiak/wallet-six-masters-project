import service from '../services/category.service.js';

export const getStatistics = async (transactions) => {
  const categories = await service.getCategories();

  // const stats = categories
  //   .map((category) => category.name)
  //   .map((category) => ({
  //     category,
  //     total: transactions
  //       .filter((element) => element.category === category)
  //       .reduce((acc, element) => (acc = acc + element.sum), 0),
  //   }));

  const stats = categories.map((category) => ({
    category: category.name,
    color: category.color,
    total: transactions
      .filter((element) => element.category === category.name)
      .reduce((acc, element) => (acc = acc + element.sum), 0),
  }));

  const expenses = transactions
    .filter((element) => !element.income)
    .reduce((acc, element) => (acc = acc + element.sum), 0);

  const income = transactions
    .filter((element) => element.income)
    .reduce((acc, element) => (acc = acc + element.sum), 0);

  const data = {
    stats,
    expenses,
    income,
  };

  return data;
};
