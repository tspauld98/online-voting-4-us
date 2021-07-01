import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { votingAppStore } from "../stores/votingAppStore"
import { ElectionToolContainer } from '../containers/ElectionToolContainer';
import { CaptureVoteContainer } from '../containers/CaptureVoteContainer';

export const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Provider store={votingAppStore}>
          
          <Route path="/" exact>
              <ElectionToolContainer />
          </Route>

          <Route path="/capture-vote">
              <CaptureVoteContainer />
          </Route>

          </Provider>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
