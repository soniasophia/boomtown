import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import { FirebaseAuth, FirebaseDB } from '../../config/firebase';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

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

        if (this.props.authenticated) {
            return (
                <Redirect to={'/'} />
            );
        }

        return (
            <div className="login">
                <div className="loginForm">
                    <Login
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
