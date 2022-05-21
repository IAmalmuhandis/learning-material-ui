import classes from "./_navigation.module.scss";
import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <hr />
      <Logo />
      <input
        type="checkbox"
        className={classes.navigation__checkbox}
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className={classes.navigation__button}>
        <span className={classes.navigation__icon}>&nbsp;</span>
      </label>
      <div className={classes.navigation__background}>&nbsp;</div>
      <nav className={classes.navigation__nav}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <Link to="/" className={classes.navigation__link}>
              Home
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/" className={classes.navigation__link}>
              Northino TV
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/" className={classes.navigation__link}>
              Northino Store
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/" className={classes.navigation__link}>
              Northino Tech
            </Link>
          </li>

          <li className={classes.navigation__item}>
            <Link to="/" className={classes.navigation__link}>
              About Us
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link to="/" className={classes.navigation__link}>
              Contact Us
            </Link>
          </li>
          <li
            className={classes.navigation__item + " " + classes.navigation__btn}
          >
            <Button btnText="Sign In" />
          </li>
        </ul>
      </nav>
      {/* <h1>sign</h1> */}
    </div>
  );
};
export default Navigation;
