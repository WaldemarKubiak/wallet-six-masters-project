import mongoose from "mongoose";
import Transaction from "../schemas/transaction.model.js";

const getTransactionById = async (id) => {
  return Transaction.findOne(
    { _id: id },
    { createdAt: 0, updatedAt: 0, owner: 0, _id: 0 }
  );
};

const addTransaction = async ({
  date,
  income,
  category,
  comment,
  sum,
  owner,
}) => {
  return Transaction.create({ date, income, category, comment, sum, owner });
};

const getTransactions = async (userId, month, year) => {
  const ObjectId = mongoose.Types.ObjectId;
  const userIdAsObjectId = new ObjectId(userId);

  return Transaction.aggregate([
    {
      $match: {
        owner: userIdAsObjectId,
        $expr: {
          $and: [
            { $eq: [{ $month: "$date" }, month] },
            { $eq: [{ $year: "$date" }, year] },
          ],
        },
      },
    },
    { $project: { createdAt: 0, updatedAt: 0, owner: 0 } },
    { $sort: { date: -1 } },
  ]);
};

const updateTransaction = (id, fields) => {
  return Transaction.findByIdAndUpdate({ _id: id }, fields, { new: true });
};

const getExpenses = async (userId) => {
  const ObjectId = mongoose.Types.ObjectId;
  const userIdAsObjectId = new ObjectId(userId);

  const pipeline = [
    {
      $match: {
        owner: userIdAsObjectId,
        income: false,
      },
    },
    {
      $group: {
        _id: "$owner",
        expenses: {
          $sum: "$sum",
        },
      },
    },
    { $project: { _id: 0 } },
  ];

  const result = Transaction.aggregate(pipeline);

  return result;
};

const getIncome = async (userId) => {
  const ObjectId = mongoose.Types.ObjectId;
  const userIdAsObjectId = new ObjectId(userId);

  const pipeline = [
    {
      $match: {
        owner: userIdAsObjectId,
        income: true,
      },
    },
    {
      $group: {
        _id: "$owner",
        income: {
          $sum: "$sum",
        },
      },
    },
    { $project: { _id: 0 } },
  ];

  const result = Transaction.aggregate(pipeline);

  return result;
};

const service = {
  getTransactions,
  getTransactionById,
  addTransaction,
  updateTransaction,
  getExpenses,
  getIncome,
};

export default service;
