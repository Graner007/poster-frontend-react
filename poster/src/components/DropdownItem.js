import { Link } from "react-router-dom";

const DropdownItem = (props) => {
  return (
    <Link to={props.href} className="dropdown-item">
      {props.text}
    </Link>
  );
};

export default DropdownItem;
