import service from "../services/transaction.service.js";
import { getStatistics } from "../helpers/getStatistics.js";

const get = async (req, res, next) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  try {
    const transactions = await service.getTransactions(
      req.user.id,
      currentMonth,
      currentYear
    );

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        transactions,
      },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const transaction = await service.getTransactionById(id);
    if (transaction) {
      res.json({
        status: "success",
        code: 200,
        data: { transaction },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Transaction id not found: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const add = async (req, res, next) => {
  const { date, income, category, comment, sum } = req.body;

  try {
    const transaction = await service.addTransaction({
      date,
      income,
      category,
      comment,
      sum,
      owner: req.user.id,
    });

    res.status(201).json({
      status: "success",
      code: 201,
      data: { transaction },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { date, category, comment, sum } = req.body;
  try {
    const transaction = await service.updateTransaction(id, {
      date,
      category,
      comment,
      sum,
    });
    if (transaction) {
      res.status(200).json({
        status: "success",
        code: 200,
        data: { transaction },
      });
    } else {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Transaction id not found: ${id}`,
        data: "Not Found",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getStats = async (req, res, next) => {
  const { year, month } = req.params;

  try {
    const transactions = await service.getTransactions(
      req.user.id,
      parseInt(month),
      parseInt(year)
    );

    const data = await getStatistics(transactions);

    res.status(200).json({
      status: "success",
      code: 200,
      data,
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const getBalance = async (req, res, next) => {
  try {
    const expensesArr = await service.getExpenses(req.user.id);
    const incomeArr = await service.getIncome(req.user.id);

    const expenses = expensesArr.length > 0 ? expensesArr[0].expenses : 0;
    const income = incomeArr.length > 0 ? incomeArr[0].income : 0;

    res.status(200).json({
      status: "success",
      code: 200,
      data: { expenses, income, balance: income - expenses },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

const transactionCtrl = {
  get,
  getById,
  add,
  update,
  getStats,
  getBalance,
};

export default transactionCtrl;
