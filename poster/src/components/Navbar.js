import NavbarItem from "./NavbarItem";
import NavbarLogoutItem from "./NavbarLogoutItem";
import { ReactComponent as HomeIcon } from "../icons/homeicon.svg";
import { ReactComponent as SearchIcon } from "../icons/searchicon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item-container">
        <NavbarItem to="/home" icon={<HomeIcon />} text="Home" />
        <NavbarItem to="/explore" icon={<SearchIcon />} text="Explore" />
      </div>

      {/*TODO: Implement with login and registration */}
      <NavbarLogoutItem
        src="https://i.picsum.photos/id/198/200/200.jpg?hmac=3UdulfE9DTCNBECOusB2ignsI8T-XhkGI-M0P2BMJm8"
        name="John"
      />
    </div>
  );
};

export default Navbar;
