import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";

const Logout = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  useEffect(() => {
    axios.post("/auth/logout").then(() => setLoggedOut(true));
  }, []);

  return <div>{loggedOut && <Redirect to="/" />}</div>;
};

export default Logout;
