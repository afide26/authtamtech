import ChallengeOne from "./Views/ChallengeOne";
import ChallengeTwo from "./Views/ChallengeTwo";
import ChallengeThree from "./Views/ChallengeThree";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./Views/Navbar";
import Home from "./Views/Home";
import Welcome from "./Views/Welcome";
import Privacy from "./Views/Privacy";


function App() {
  return (

    <Router>
      <div className="navbar page-title">
        <Navbar/>
      </div>
      <Switch>
        <Route exact path="/">
          <Welcome/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/challengeone">
          <ChallengeOne/>
        </Route>
        <Route path="/challengetwo">
          <ChallengeTwo/>
        </Route>
        <Route path="/challengethree">
          <ChallengeThree/>
        </Route>
        <Route path="/privacy-policy">
          <Privacy/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
