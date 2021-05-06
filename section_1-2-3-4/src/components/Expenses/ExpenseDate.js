import React from "react";
import "./ExpenseDate.css";

export const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__year">{year}</p>
      <p className="expense-date__day">{day}</p>
    </div>
  );
};
