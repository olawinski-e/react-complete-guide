import React from "react";
import { AvailableMeals } from "./AvailableMeals";
import { MealsSummary } from "./MealsSummary";

export const Meals = () => {
  return (
    <div>
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
};
