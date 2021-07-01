import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { votingAppStore } from "../stores/votingAppStore"
import { ElectionListContainer } from '../containers/ElectionListContainer';
import { ElectionFormContainer } from '../containers/ElectionFormContainer';
import { CommonHeader } from '../components/CommonHeader';

export const App = () => {
  return (
    <Provider store={votingAppStore}>
      <Router>
      <main>
        <Switch>
        <Route path="/election-list">
              <ElectionListContainer />
          </Route>
          <Route path="/create-election-form">
              <ElectionFormContainer />
          </Route>
          <Route path="/">
            <CommonHeader title="Homepage" />
          </Route>
        </Switch>
      </main>
    </Router>
    </Provider>
    
  );
}

export default App;
