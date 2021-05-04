import { Link } from "react-router-dom";

const NavbarItem = (props) => {
  return (
    <Link className="navbar-item" to={props.to}>
      <div className="navbar-item-elements">
        <div className="navbar-item-icon">{props.icon}</div>
        <div className="navbar-item-text">{props.text}</div>
      </div>
    </Link>
  );
};

export default NavbarItem;
