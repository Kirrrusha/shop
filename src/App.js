import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {Route, Switch} from 'react-router-dom';
import store from './redux/store';
import {history} from './redux/history';
import './assets/styles/App.scss';
import Login from './components/pages/Login';
import AdminPanel from './components/pages/AdminPanel';
import UserPanel from './components/pages/UserPanel';
import PrivateRoute from './components/common/PrivateRoute';

const App = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={UserPanel}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/admin" component={AdminPanel}/>
      </Switch>
    </ConnectedRouter>
  </Provider>;

export default App;
