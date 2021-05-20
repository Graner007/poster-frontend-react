import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import useWindowSize from "./util/useWindowSize";
import BottomNavbar from "./components/BottomNavbar";
import PersonContextProvider from "./contexts/PersonContext";
import PostContextProvider from "./contexts/PostContext";
import MediaContextProvider from "./contexts/MediaContext";
import HomeHeader from "./components/HomeHeader";
import RightSidebar from "./RightSidebar";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Index from "./components/Index";
import Login from "./components/Login";
import EditProfile from "./components/EditProfile";

function App() {
  const [width] = useWindowSize();
  const url = document.location.pathname;
  //const url = useLocation().pathname;
  const headerTitle = "Home";
  const contentRoutes = ["/registration", "/login", "/"];

  return (
    <PersonContextProvider>
      <PostContextProvider>
       <MediaContextProvider>
        <Router>
          { !contentRoutes.includes(url) && width > 500 && <Navbar /> }
          { !contentRoutes.includes(url) && width <= 500 && <BottomNavbar /> }
          { contentRoutes.includes(url) && 
            <div className="content">
              <Switch>
                  <Route path="/login" exact>
                    <Login />
                  </Route>
                  <Route path="/">
                    <Index />
                  </Route>
              </Switch>
            </div> }
            { !contentRoutes.includes(url) && 
              <div className="container"> 
                <HomeHeader title={ headerTitle } />
                <Route path="/home" exact>
                    <Feed />
                  </Route>
                  <Route path="/profile/:id" exact>
                    <Profile />
                  </Route>
                  <Route path="/settings/profile" exact>
                    <EditProfile />
                  </Route>
              </div> }
          { width > 1018 && !contentRoutes.includes(url) && <RightSidebar /> }
        </Router>
        </MediaContextProvider>
      </PostContextProvider>
    </PersonContextProvider>
  );
}

export default App;