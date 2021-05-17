import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Redirect, useLocation } from "react-router-dom";
import useWindowSize from "./util/useWindowSize";
import BottomNavbar from "./components/BottomNavbar";
import PersonContextProvider from "./contexts/PersonContext";
import PostContextProvider from "./contexts/PostContext";
import MediaContextProvider from "./contexts/MediaContext";
import HomeHeader from "./components/HomeHeader";
import RightSidebar from "./RightSidebar";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Registration from "./components/Registration";

function App() {
  const [width] = useWindowSize();
  const url = document.location.pathname;
  //const url = useLocation().pathname;
  const headerTitle = "Home";

  return (
    <PersonContextProvider>
      <Router>
            { width > 500 && url !== "/registration" && <Navbar /> }
            { width <= 500 && url !== "/registration" && <BottomNavbar /> }
            <div className="container">
              { url !== "/registration" && <HomeHeader title={ headerTitle } /> }
              <PostContextProvider>
                <MediaContextProvider>
                  <Route path="/" exact>
                    <Redirect to="/home" />
                  </Route>
                  <Route path="/home" exact>
                    <Feed />
                  </Route>
                  <Route path="/profile/:id" exact>
                    <Profile />
                  </Route>
                </MediaContextProvider>
              </PostContextProvider>
              <Route path="/registration" exact>
                <Registration />
            </Route>
            </div>
            { width > 1018 && url !== "/registration" && <RightSidebar /> }
      </Router>
    </PersonContextProvider>
  );
}

export default App;