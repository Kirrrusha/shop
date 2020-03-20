import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import {checkUser} from '../../redux/modules/auth';
import PropTypes from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  useEffect(() => dispatch(checkUser()), [dispatch]);
  return (
    <Route
      {...rest}
      render={props => isAuthenticated ? (
          <Component {...props} />
        ) :
        (
          <Redirect to="/login"/>
        )}
    />
  )
};

PrivateRoute.propTypes = {
  component: PropTypes.func
};

export default PrivateRoute;
