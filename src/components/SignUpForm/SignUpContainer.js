import React, { Component } from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { FirebaseAuth } from '../../config/firebase';
import { updateFullnameField, updateBioField, updateEmailField, updatePasswordField } from '../../redux/modules/forms';

class SignUpContainer extends Component {
    login = ({ email, password }) => {
        FirebaseAuth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
            });
    }

    handleEmail = (event) => {
        this.props.dispatch(updateEmailField(event.target.value));
    }

    handlePassword = (event) => {
        this.props.dispatch(updatePasswordField(event.target.value));
    }

    handleFullname = (event) => {
        this.props.dispatch(updateFullnameField(event.target.value));
    }

    handleBio = (event) => {
        this.props.dispatch(updateBioField(event.target.value));
    }


    signUpUser = (e) => {
        e.preventDefault();
        this.props.mutate({
            variables: {
                fullname: this.props.updateFullnameField,
                bio: this.props.updateBioField,
                email: this.props.updateEmailField,
                password: this.props.updatePasswordField
            }
        }).then(({ data }) => {
            console.log('got data', data);
            this.login({
                email: this.props.updateEmailField,
                password: this.props.updatePasswordField
            });
        }).catch((error) => {
            console.log('there was an error', error);
        });
    }


    render() {
        const signUpForm = this.signUpForm;
        const authenticated = this.props.authenticated;

        if (authenticated) {
            return (<Redirect to="/" />);
        } else {
            return (
                <div>
                    <SignUpForm
                        signUpUser={(e) => {
                            this.signUpUser(e);
                        }}

                        handleFullname={(e) => {
                            this.handleFullname(e);
                        }}

                        handleBio={(e) => {
                            this.handleBio(e);
                        }}

                        handleEmail={(e) => {
                            this.handleEmail(e);
                        }}

                        handlePassword={(e) => {
                            this.handlePassword(e);
                        }}

                        signUpForm={signUpForm}
                    />
                </div>
            );
        }
    }
}

const addUser = gql`
    mutation addUser (
        $fullname: String!
        $email: String!
        $bio: String
        $password: String!
        ) {
        addUser(
            fullname: $fullname
            email: $email
            bio: $bio
            password: $password
        ) {
            fullname
            email
            bio
        }
    }
`;

SignUpContainer.propTypes = {
    updateFullnameField: PropTypes.string.isRequired,
    updateBioField: PropTypes.string.isRequired,
    updateEmailField: PropTypes.string.isRequired,
    updatePasswordField: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    updateFullnameField: state.forms.fullnameField,
    updateBioField: state.forms.bioField,
    updateEmailField: state.forms.emailField,
    updatePasswordField: state.forms.passwordField,
    authenticated: state.auth.loginProfile,
    signUpForm: state.forms
});

const SignUpWithData = graphql(addUser)(SignUpContainer);
export default connect(mapStateToProps)(SignUpWithData);
