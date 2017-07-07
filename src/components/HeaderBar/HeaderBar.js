import React from 'react';
import AppBar from 'material-ui/AppBar';
import { white } from 'material-ui/styles/colors';
import logo from '../../images/boomtown-logo.svg';
import './styles.css';

const HeaderBar = () => (
    <div className="appHeader">
        <AppBar
            iconElementLeft={<img src={logo} alt="logo" />}
            style={{ backgroundColor: white }}
        />
    </div>
);

export default HeaderBar;
