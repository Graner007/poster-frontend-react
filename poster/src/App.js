import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";
import useWindowSize from "./util/useWindowSize";
import BottomNavbar from "./components/BottomNavbar";

function App() {
  const [width, height] = useWindowSize();

  return (
    <Router>
      <div className="App">
        {width > 500 && <Navbar />}
        {width <= 500 && <BottomNavbar />}
      </div>
    </Router>
  );
}

export default App;
