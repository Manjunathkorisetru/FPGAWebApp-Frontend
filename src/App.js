import "./App.css";
import NavBar from "./components/NavBar";
//import Post from "./components/Post";
import SpecificationsPage from "./pages/Specifications/SpecificationsPage";
//import Xilinx from "./pages/Xilinx";
import Home from "./pages/Home";
import Visualization from "./pages/Visualization/Visualization";
//import XilinxViz from "./pages/XilinxViz";

import DeviceComparison from "./pages/Comparison/DeviceComparison";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />

          <Route
            path="/SpecificationsPage"
            component={SpecificationsPage}
            exact
          />

          <Route path="/VisualizationPage" component={Visualization} exact />

          <Route path="/comparison" component={DeviceComparison} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
