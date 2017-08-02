import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { grey900 } from 'material-ui/styles/colors';
import './styles.css';

const style = {
    // height: 460,
    // width: 470,
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

const SignUpForm = ({ signUpUser, signUpForm, handleFullname, handleBio, handleEmail, handlePassword }) => (
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
                    className="userName"
                    onChange={handleFullname}
                /><br />

                <TextField
                    hintText="Tell us about yourself!"
                    floatingLabelText="Tell us about yourself!"
                    errorText="This field is required."
                    multiLine={true}
                    errorStyle={style.errorStyle}
                    rows={3}
                    className="userBio"
                    onChange={handleBio}
                /><br />

                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    errorText="This field is required."
                    errorStyle={style.errorStyle}
                    rows={3}
                    className="userEmail"
                    onChange={handleEmail}
                /><br />

                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    errorText="This field is required."
                    errorStyle={style.errorStyle}
                    rows={3}
                    className="userPassword"
                    onChange={handlePassword}
                    type="password"
                /><br />

                <div className="signupButtons">
                    <FlatButton label="No Thanks" href="/login" />
                    <FlatButton label="Join" primary type="submit" />
                </div>
            </form>
        </Paper>
    </div>
);

SignUpForm.propTypes = {
    signUpUser: PropTypes.func.isRequired,
    handleFullname: PropTypes.string.isRequired,
    handleBio: PropTypes.string.isRequired,
    handleEmail: PropTypes.string.isRequired,
    handlePassword: PropTypes.string.isRequired
};

export default SignUpForm;
