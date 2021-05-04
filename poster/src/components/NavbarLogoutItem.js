import { ReactComponent as ThreeDots } from "../icons/threedots.svg";

const NavbarLogoutItem = (props) => {
  return (
    <div className="navbar-logout-container">
      <img
        src={props.src}
        className="navbar-profile-picture"
        alt={props.name}
      />
      <div className="navbar-profile-name">{props.name}</div>
      <div className="navbar-profile-dots">{<ThreeDots />}</div>
    </div>
  );
};

export default NavbarLogoutItem;
