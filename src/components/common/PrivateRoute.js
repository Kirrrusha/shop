import React, {useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {checkUser} from '../../redux/modules/auth';
import PropTypes from 'prop-types';
import {CircularProgress} from '@material-ui/core';

const PrivateRoute = ({component: Component, ...rest}) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  // eslint-disable-next-line
  useEffect(() => dispatch(checkUser()), []);
  return (
    <>
      {isAuthenticated === null ? <CircularProgress
          style={{
            display: 'block',
            position: 'absolute', zIndex: 5,
            transform: 'translate(-50%, -50%)',
            top: '50%', right: '50%'
          }}/> :
        <Route
          {...rest}
          render={props => isAuthenticated !== null && isAuthenticated ? (
              <Component {...props} />
            ) :
            (
              <Redirect to="/login"/>
            )}
        />
      }
    </>
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func
};

export default PrivateRoute;
