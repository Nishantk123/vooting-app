import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Verification from "./component/Verification";
import Evm from "./component/Evm";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/verification" component={Verification} />
        <Route exact path= "/evm" component={Evm}/> 
      </div>
    </Router>
  );
}

export default App;
