import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";

import { Layout } from "./Layout";
import { Header } from "./Header";
import { Splash } from "./Splash";

import { votingAppStore } from "../stores/votingAppStore";
import { RegistrationToolContainer } from "../containers/RegistrationToolContainer";
import { CaptureVoteContainer } from "../containers/CaptureVoteContainer";
import { ElectionListContainer } from "../containers/ElectionListContainer";
import { ElectionFormContainer } from "../containers/ElectionFormContainer";
import { ElectionResultsContainer } from "../containers/ElectionResultsContainer";

export const App = () => {
  return (
    <Provider store={votingAppStore}>
      <Router>
        <Layout>
          <Header />
          <main>
            <Switch>
              <Route path="/home">
                <Splash />
              </Route>
              <Route path="/register">
                <RegistrationToolContainer />
              </Route>
              <Route path="/vote/ballot/:ballotId">
                <CaptureVoteContainer />
              </Route>
              <Route path="/manageElections">
                <ElectionListContainer />
              </Route>
              <Route path="/createElection">
                <ElectionFormContainer />
              </Route>
              <Route path="/viewElectionResults/:electionId">
                <ElectionResultsContainer />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </Switch>
          </main>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
