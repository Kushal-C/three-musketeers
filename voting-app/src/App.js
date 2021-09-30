import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";

import { electionStore } from "./store/electionStore";
import { VoterCreation } from "./components/VoterCreation";
import { ElectionCreation } from "./components/ElectionCreation";
import { ElectionBallot } from "./components/ElectionBallot";
import { CaptureVotes } from "./components/CaptureVotes";
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={electionStore}>
        <Switch>
          <Route path="/home"> <CaptureVotes/> </Route>
          <Route path="/voter-creation"> <VoterCreation /> </Route>
          <Route path="/election-creation"> <ElectionCreation /> </Route>
          <Route path="/capture-votes"> <CaptureVotes /> </Route>
          <Route path="/vote"> <ElectionBallot /> </Route>
          <Route path="/"> <CaptureVotes/> </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
