import { Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";

import { electionStore } from "./store/electionStore";
import { ElectionCreation } from "./components/ElectionCreation";
import { CaptureVotes } from "./components/CaptureVotes";
import { Header } from "./components/Header";
import './App.css';
import { ElectionBallotContainer } from "./containers/ElectionBallotContainer";
import { VoterCreationContainer } from "./containers/VoterCreationContainer";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Provider store={electionStore}>
          <Switch>
            <Route path="/voter-creation"> <VoterCreationContainer className="voters"/></Route>
            <Route path="/election-creation"> <ElectionCreation/></Route>
            <Route path="/capture-votes"> <CaptureVotes /></Route>
            <Route path="/vote"> <ElectionBallotContainer/></Route>
            <Route path="/"> <CaptureVotes/> </Route>
          </Switch>
        </Provider>
      </div>
    </div>
  );
}

export default App;
