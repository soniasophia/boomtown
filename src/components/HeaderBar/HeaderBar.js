import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';
import logo from '../../images/boomtown-logo.svg';
import FilterList from '../FilterList/FilterList';
import './styles.css';


const HeaderBar = () => (
    <div className="appHeader">
        <AppBar
            style={{ backgroundColor: white }}
            iconElementLeft={<a href="/"> <img className="AppbarLogo" src={logo} alt="Boomtown Logo" /></a>}

            title={
                <FilterList />
            }
        >
            <div className="appButtons">
                <RaisedButton label="My Profile" primary={true} className="profileButton" />
                <FlatButton label="Logout" secondary={true} className="logoutButton" />
            </div>
        </AppBar >
    </div>
);

export default HeaderBar;

