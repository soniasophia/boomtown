import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { white } from 'material-ui/styles/colors';
import logo from '../../images/boomtown-logo.svg';
import './styles.css';

const HeaderBar = () => (
    <div className="appHeader">
        <AppBar
            iconElementLeft={<img src={logo} alt="logo" />}
            iconElementRight={<FlatButton label="Logout" className="logoutButton" />}
            style={{ backgroundColor: white }}
        />
    </div>
);

export default HeaderBar;
