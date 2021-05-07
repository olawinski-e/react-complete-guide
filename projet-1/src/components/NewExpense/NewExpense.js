import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const [showNewExpense, setShowNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowNewExpense(false);
  };

  const addNewExpenseHandler = () => {
    setShowNewExpense(true);
  };

  const stopAddNewExpense = () => {
    setShowNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!showNewExpense && (
        <button onClick={addNewExpenseHandler}>Add new Expense</button>
      )}
      {showNewExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddNewExpense}
        />
      )}
    </div>
  );
};
