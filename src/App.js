import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import MainContainer from './main/controllers/MainContainer';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainContainer} />
          </Switch>
          <Route exact path="/main" component={MainContainer} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
