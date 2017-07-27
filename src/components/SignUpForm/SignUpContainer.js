import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SignUpForm from './SignUpForm';
import { FirebaseAuth } from '../../config/firebase';

class SignUpContainer extends Component {
    login = ({ email, password }) => {
        // email = 'testuser3@gmail.com';
        // password = 'password';

        FirebaseAuth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            console.log(error);
        });
    }

    signUpUser = (e) => {
        e.preventDefault();
        this.props.mutate({
            variables: { fullname: 'testuser', bio: 'test user bio', email: 'testuser2000@gmail.com', password: 'password' }
        }).then(({ data }) => {
            console.log('got data', data);
            this.login({ email: 'testuser2000@gmail.com', password: 'password' });
        }).catch((error) => {
            console.log('there was an error', error);
        });
    }


    render() {
        return (
            <div>
                <SignUpForm signUpUser={(event) => this.signUpUser(event)} />
            </div>
        );
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

const SignUpWithData = graphql(addUser)(SignUpContainer);
export default SignUpWithData;
