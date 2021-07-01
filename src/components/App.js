import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Layout } from './Layout';
import { Header } from './Header';
import { Splash } from './Splash';

import { votingAppStore } from "../stores/votingAppStore"
import { RegistrationToolContainer } from '../containers/RegistrationToolContainer';
import { ElectionToolContainer } from '../containers/ElectionToolContainer';
import { CaptureVoteContainer } from '../containers/CaptureVoteContainer';

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
            <Route path="/vote">
              {/* workflow 2 goes here */}
            </Route>
            <Route path="/manageElections">
                <ElectionToolContainer />
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
}

export default App;
