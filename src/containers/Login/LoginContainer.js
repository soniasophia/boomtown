import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import { FirebaseAuth } from '../../config/firebase';

class LoginContainer extends Component {

    static propTypes = {
    };

    login = ({ email, password }) => {
        // email = 'testuser3@gmail.com';
        // password = 'password';

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
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    showLoginError: state.auth.showLoginError,
    authenticated: state.auth.loginProfile
});

export default connect(mapStateToProps)(LoginContainer);
