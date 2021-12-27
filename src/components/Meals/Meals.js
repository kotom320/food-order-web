import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailavleMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailavleMeals />
    </Fragment>
  );
};
export default Meals;
