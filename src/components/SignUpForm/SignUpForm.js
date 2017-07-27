import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { grey900 } from 'material-ui/styles/colors';
import './styles.css';

const style = {
    height: 440,
    width: 450,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    underlineStyle: {
        color: grey900
    },
    errorStyle: {
        color: grey900
    },
};

const SignUpForm = ({ signUpUser }) => (
    <div className="signUpForm">
        <Paper style={style} zDepth={3}>
            <h2>No Account With This Email.</h2>
            <p>The email you provided is not registered. Would you like to use it to join and start sharing with everyone?</p>

            <form onSubmit={signUpUser} autoComplete="off">
                <TextField
                    hintText="Your Name"
                    floatingLabelText="Your Name"
                    errorText="This field is required."
                    errorStyle={style.errorStyle}
                /><br />

                <TextField
                    hintText="Tell us about yourself!"
                    floatingLabelText="Tell us about yourself!"
                    errorText="This field is required."
                    multiLine={true}
                    errorStyle={style.errorStyle}
                    rows={3}
                /><br />
                <div className="signupButtons">
                    <FlatButton label="NO THANKS" />
                    <FlatButton label="JOIN" primary type="submit" />
                </div>
            </form>
        </Paper>
    </div>
);

export default SignUpForm;
