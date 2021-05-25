import React from "react";
import { Link } from "react-router-dom";

import classes from "./NoQuotesFound.module.css";

export const NoQuotesFound = () => {
  return (
    <div className={classes.noQuotes}>
      <p>No quotes found!</p>
      <Link to="/new-quote" className="btn">
        Add a Quote
      </Link>
    </div>
  );
};
