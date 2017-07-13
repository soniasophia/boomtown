import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import { white } from 'material-ui/styles/colors';
import logo from '../../images/boomtown-logo.svg';
import './styles.css';

const HeaderBar = () => (
    <div className="appHeader">
        <AppBar
            iconElementLeft={<img className="AppbarLogo" src={logo} alt="Boomtown Logo" />}

            title={
                <SelectField
                    floatingLabelText="Filter by tag"
                    className="filterBar"
                >
                    <MenuItem value={null} primaryText="Electronics" />
                    <MenuItem value={false} primaryText="Household Items" />
                    <MenuItem value={true} primaryText="Musical Instruments" />
                    <MenuItem value={true} primaryText="Physical Media" />
                    <MenuItem value={true} primaryText="Recreational Equipment" />
                    <MenuItem value={true} primaryText="Sporting Goods" />
                    <MenuItem value={true} primaryText="Tools" />
                </SelectField>
            }
            style={{ backgroundColor: white }}
        >

            <div className="appButtons">
                <RaisedButton label="My Profile" primary={true} className="profileButton" />
                <FlatButton label="Logout" secondary={true} className="logoutButton" />
            </div>
        </AppBar >
    </div>
);

export default HeaderBar;

