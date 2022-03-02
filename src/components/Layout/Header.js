import classes from "./Header.module.css";
import React from "react";
import mealsImage from "../../assets/images/meals.jpeg"

const Header = (props)=>{

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>All Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes["main-image"]}>
                <img alt="Meals" src={mealsImage}></img>
            </div>
        </React.Fragment>
    );
}

export default Header;