import React from "react";
import classes from "./header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className={classes.header}>
      <a href="/">
        <img
          className={classes.header__logo}
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </a>
      {/* search section */}
      <div className={classes.header__search}>
        <input type="text" className={classes.header__searchInput} />
        <SearchIcon className={classes.header__searchIcon} />
      </div>
      {/* nav section */}

      <div className={classes.header__nav}>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Hello Geust</span>
          <span className={classes.header__optionLineTwo}>Sign In</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Returns</span>
          <span className={classes.header__optionLineTwo}>& Orders</span>
        </div>
        <div className={classes.header__option}>
          <span className={classes.header__optionLineOne}>Your</span>
          <span className={classes.header__optionLineTwo}>Prime</span>
        </div>
        <div className={classes.header__optionBasket}>
          <ShoppingBasketIcon />
          <span
            className={`${classes.header__optionLineTwo} ${classes.header__basketCount}`}
          >
          0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
