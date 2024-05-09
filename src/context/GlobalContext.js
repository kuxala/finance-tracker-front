import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [err, setErr] = useState(null);
  //calculate income
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => setErr(err.response.data.message));
    getIncomes();
  };
  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`);
    setIncomes(response.data);
  };
  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });
    return totalIncome;
  };

  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income)
      .catch((err) => setErr(err.response.data.message));
    getExpenses();
  };
  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`);
    setExpenses(response.data);
  };
  const deleteExpense = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    let totalExpenses = 0;
    expenses.forEach((expense) => {
      totalExpenses = totalExpenses + expense.amount;
    });
    return totalExpenses;
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };
  const transactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a,b) =>{
        return new Date(b.createdAt) - new Date(a.createdAt)
    })
    return history.slice(0,3)
  }
  const allTransactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a,b) =>{
        return new Date(b.createdAt) - new Date(a.createdAt)
    })
    return history
  }
  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncome,
        expenses,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        allTransactionHistory
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
