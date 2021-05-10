import React from "react";
import mealsImg from "./../../assets/meals.jpeg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="a table full of food" />
      </div>
    </>
  );
};
