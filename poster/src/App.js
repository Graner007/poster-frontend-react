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
import Index from "./components/Index";

function App() {
  const [width] = useWindowSize();
  const url = document.location.pathname;
  //const url = useLocation().pathname;
  const headerTitle = "Home";
  const denyUrls = ["/registration", "/login", "/"];

  return (
    <PersonContextProvider>
      <Router>
            { width > 500 && !denyUrls.includes(url) && <Navbar /> }
            { width <= 500 && !denyUrls.includes(url) && <BottomNavbar /> }
            <div className="container">
              { !denyUrls.includes(url) && <HomeHeader title={ headerTitle } /> }
              <PostContextProvider>
                <MediaContextProvider>
                  <Route path="/" exact>
                    <Index />
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
            { width > 1018 && !denyUrls.includes(url) && <RightSidebar /> }
      </Router>
    </PersonContextProvider>
  );
}

export default App;