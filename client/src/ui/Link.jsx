import { Link } from "react-router-dom";
import classes from "../css/Link.module.css";
export const SingleLink = (props) => {
  return (
    <Link className={`${classes.listItem} ${props.className}`} to={props.to}>
      {props.children}
    </Link>
  );
};
