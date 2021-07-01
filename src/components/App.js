import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { votingAppStore } from "../stores/votingAppStore"
import { ElectionToolContainer } from '../containers/ElectionToolContainer';

export const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/">
            <Provider store={votingAppStore}>
              <ElectionToolContainer />
            </Provider>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
