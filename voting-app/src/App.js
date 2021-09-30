import { Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";

import { electionStore } from "./store/electionStore";
import { VoterCreation } from "./components/VoterCreation";
import { ElectionCreation } from "./components/ElectionCreation";
import { CaptureVotes } from "./components/CaptureVotes";
import './App.css';
import { ElectionBallotContainer } from "./containers/ElectionBallotContainer";

const voters= [
  {
      id: 1,
      firstName: "Bob",
      lastName: "Petit",
      address: "123 Random Street",
      city: "San Francisco",
      birthdate: "01-01-1990",
      email: "bobby_p@gmail.com",
      phone: "1234567890",
  },
  {
      id: 2,
      firstName: "Pob",
      lastName: "Betit",
      address: "321 Street Random",
      city: "Francisco San",
      birthdate: "10-10-2000",
      email: "pobby_b@gmail.com",
      phone: "0987654321",
  },
  
];

function App() {
  return (
    <div className="App">
      <Provider store={electionStore}>
        <Switch>
          <Route path="/home"> <CaptureVotes/> </Route>
          <Route path="/voter-creation"> <VoterCreation voters={voters} /> </Route>
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
