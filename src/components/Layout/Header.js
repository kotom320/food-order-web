import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <haeder className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </haeder>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt=""/>
      </div>
    </React.Fragment>
  );
};

export default Header;
