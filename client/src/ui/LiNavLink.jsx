import { NavLink } from "react-router-dom";
import "../css/ui/LiLink.module.css";
const LiLink = (props) => {
  return (
    <li>
      <NavLink to={props.to} className={props.className}>
        <span>{props.linkName}</span>
      </NavLink>
    </li>
  );
};

export default LiLink;
