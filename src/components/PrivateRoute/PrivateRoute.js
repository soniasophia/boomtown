import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            authenticated
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }}
                />
        )}
    />
);

PrivateRoute.propTypes = {
    authenticated: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    location: PropTypes.objectOf(PropTypes.shape({
        hash: PropTypes.string,
        key: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string
    })).isRequired
};

const mapStateToProps = state => ({
    authenticated: state.auth.loginProfile
});

export default connect(mapStateToProps)(PrivateRoute);
