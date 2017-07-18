import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';
import { connect } from 'react-redux';
import logo from '../../images/boomtown-logo.svg';
import './styles.css';

import { selectFilterItems } from '../../redux/modules/items';
import FilterList from '../FilterList';


const HeaderBar = ({ filterValues, dispatch }) => (
    <div className="appHeader">
        <AppBar
            style={{ backgroundColor: white }}
            iconElementLeft={<a href="/"><img className="AppbarLogo" src={logo} alt="Boomtown Logo" /></a>}

            title={
                <FilterList
                    dispatch={dispatch}
                    handleChange={selectFilterItems}
                    filterValues={filterValues}
                />
            }
        >
            <div className="appButtons">
                <RaisedButton label="My Profile" primary={true} className="profileButton" />
                <FlatButton label="Logout" secondary={true} className="logoutButton" />
            </div>
        </AppBar >
    </div>
);

function mapStateToProps(state) {
    return {
        filterValues: state.items.filterValues
    };
}

export default connect(mapStateToProps)(HeaderBar);

