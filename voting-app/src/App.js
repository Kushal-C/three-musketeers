import { Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";

import { electionStore } from "./store/electionStore";
import { VoterCreation } from "./components/VoterCreation";
import { ElectionCreation } from "./components/ElectionCreation";
import { CaptureVotes } from "./components/CaptureVotes";
import './App.css';
import { ElectionBallotContainer } from "./containers/ElectionBallotContainer";
import { VoterCreationContainer } from "./containers/VoterCreationContainer";

function App() {
  return (
    <div className="App">
      <Provider store={electionStore}>
        <Switch>
          <Route path="/home"> <CaptureVotes/> </Route>
          <Route path="/voter-creation"> <VoterCreationContainer /> </Route>
          <Route path="/election-creation"> <ElectionCreation /> </Route>
          <Route path="/capture-votes"> <CaptureVotes /> </Route>
          <Route path="/vote"> <ElectionBallotContainer /> </Route>
          <Route path="/"> <CaptureVotes/> </Route>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
