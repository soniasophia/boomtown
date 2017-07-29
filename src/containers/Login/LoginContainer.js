import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import { FirebaseAuth } from '../../config/firebase';
import { showLoginError, redirectToSignUp } from '../../redux/modules/auth';
import { updateEmailField, updatePasswordField } from '../../redux/modules/forms';


class LoginContainer extends Component {

    login = ({ email, password }) => {
        FirebaseAuth.signInWithEmailAndPassword(email, password).catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/user-not-found') {
                this.props.dispatch(redirectToSignUp(true));
            } else {
                // this.props.dispatch(showLoginError(true));
            }
        });
    }

    handleEmail = (event) => {
        this.props.dispatch(updateEmailField(event.target.value));
    }

    handlePassword = (event) => {
        this.props.dispatch(updatePasswordField(event.target.value));
    }

    redirect = () => {
        this.props.dispatch(redirectToSignUp(false));
        this.props.redirect();
    }

    join = () => {
        
    }


    render() {
        // this.login({ email: 'testuser3@gmail.com', password: 'password' });
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { authenticated, redirectToSignUp, ...props } = this.props;

        if (this.props.authenticated) {
            return (
                <Redirect to={from} />
            );
        }

        if (this.props.redirectToSignUp) {
            return (
                <Redirect to={'/signup'} />
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
                            this.login({ email: this.props.updateEmailField, password: this.props.updatePasswordField });
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
    authenticated: PropTypes.bool.isRequired,
    // forms: PropTypes.string.isRequired,
    emailField: PropTypes.string.isRequired,
    passwordField: PropTypes.string.isRequired,
    redirectToSignUp: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    showLoginError: state.auth.showLoginError,
    authenticated: state.auth.loginProfile,
    updateEmailField: state.forms.emailField,
    updatePasswordField: state.forms.passwordField,
    redirectToSignUp: state.auth.goToSignUp
});

export default connect(mapStateToProps)(LoginContainer);
