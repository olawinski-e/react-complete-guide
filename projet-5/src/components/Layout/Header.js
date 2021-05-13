import React from "react";
import mealsImg from "./../../assets/meals.jpeg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

export const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </>
  );
};
