import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { VoterCreation } from "./components/VoterCreation";
import { ElectionCreation } from "./components/ElectionCreation";
import { CaptureVotes } from "./components/CaptureVotes";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/voter-creation">
            <VoterCreation />
          </Route>
          <Route path="/election-creation">
            <ElectionCreation />
          </Route>
          <Route path="/capture-votes">
            <CaptureVotes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
