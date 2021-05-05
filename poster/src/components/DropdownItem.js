const DropdownItem = (props) => {
  return (
    <a href={props.href} className="dropdown-item">
      {props.text}
    </a>
  );
};

export default DropdownItem;
