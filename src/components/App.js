import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import store from '../redux/store';
import {history} from '../redux/history';
import '../assets/styles/App.scss';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import PrivateRoute from './common/PrivateRoute';
import UserPanel from './pages/UserPanel';


const App = () =>
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute path="/admin" component={AdminPanel}/>
        <Route path="/" component={UserPanel} />
      </Switch>
    </Router>
  </Provider>;

export default App;
