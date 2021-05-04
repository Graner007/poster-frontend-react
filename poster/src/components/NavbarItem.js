import { Link } from "react-router-dom";

const NavbarItem = (props) => {
  return (
    <Link to={props.to}>
      <div className="navbar-item">
        <div className="navbar-item-icon">{props.icon}</div>
        <div className="navbar-item-text">{props.text}</div>
      </div>
    </Link>
  );
};

export default NavbarItem;
