import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {checkUser} from '../../redux/modules/auth';
import PropTypes from 'prop-types';
import {push} from 'connected-react-router';

const PrivateRoute = ({component: Component, ...rest}) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  useEffect(() => dispatch(checkUser()), [dispatch]);
  console.log('isAuthenticated', isAuthenticated);
  if (isAuthenticated) {
    push('/login');
  }
  return (
    <Route
      {...rest}
      render={props => <Component {...props}>
        {rest.children}
      </Component>}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func
};

export default PrivateRoute;
