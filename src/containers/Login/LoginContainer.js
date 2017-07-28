import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import { FirebaseAuth } from '../../config/firebase';
import { showLoginError } from '../../redux/modules/auth';
import { updateEmailField, updatePasswordField } from '../../redux/modules/forms';


class LoginContainer extends Component {

    handleEmail = (event) => {
        this.props.dispatch(updateEmailField(event.target.value));
    }

    handlePassword = (event) => {
        this.props.dispatch(updatePasswordField(event.target.value));
    }

    login = ({ email, password }) => {
        FirebaseAuth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            if (error.code === 'auth/user-not-found') {
                // USER DOES NOT EXIST, MUST SIGN UP
                // TODO: this.props.dispatch(showJoinModal(true));
            } else {
                // THERE WAS AN ERROR, SHOW A MESSAGE
                // TODO: this.props.dispatch(showLoginError(true));
            }
        });
    }

    render() {
        // this.login({ email: 'testuser3@gmail.com', password: 'password' });
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { authenticated, loginFormValues, ...props } = this.props;

        if (this.props.authenticated) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <div className="login">
                <div className="loginForm">
                    <Login
                        {...props}
                        // join={this.join}
                        // reset={this.reset}
                        login={(e) => {
                            e.preventDefault();
                            this.login({ email: 'testuser3@gmail.com', password: 'password' });
                        }}
                        handleEmail={(e) => {
                            this.handleEmail(e);
                        }}
                        handlePassword={(e) => {
                            this.handlePassword(e);
                        }}
                    />
                </div>
            </div>
        );
    }
}

LoginContainer.propTypes = {
    dispatch: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    showLoginError: state.auth.showLoginError,
    authenticated: state.auth.loginProfile,
    updateEmailField: state.forms.emailField,
    updatePasswordField: state.forms.passwordField
});

export default connect(mapStateToProps)(LoginContainer);
