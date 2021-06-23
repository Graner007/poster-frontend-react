import NavbarItem from "./NavbarItem";
import NavbarLogoutItem from "./NavbarLogoutItem";
import { ReactComponent as HomeIcon } from "../icons/homeicon.svg";
import { ReactComponent as SearchIcon } from "../icons/searchicon.svg";
import { ReactComponent as ProfileIcon } from "../icons/profileicon.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios
      .get("/profile")
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => console.error(err));
  }, [person.id]);

  return (
    <div className="navbar">
      <div className="navbar-item-container">
        <NavbarItem to="/home" icon={<HomeIcon />} text="Home" />
        <NavbarItem to="/explore" icon={<SearchIcon />} text="Explore" />
        <NavbarItem
          to={"/profile/" + person.id}
          icon={<ProfileIcon />}
          text="Profile"
        />
      </div>
      <NavbarLogoutItem
        profileImageId={person.profileImageId}
        name={person.username}
      />
    </div>
  );
};

export default Navbar;
