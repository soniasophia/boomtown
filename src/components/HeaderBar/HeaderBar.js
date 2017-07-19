import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';
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

            title={(window.location.pathname === '/') ?
                <FilterList
                    dispatch={dispatch}
                    handleChange={selectFilterItems}
                    filterValues={filterValues}
                /> : null
            }
        >
            <div className="appButtons">
                <RaisedButton label="My Profile" className="profileButton" />
                <FlatButton label="Logout" className="logoutButton" />
            </div>
        </AppBar >
    </div>
);

HeaderBar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filterValues: PropTypes.arrayOf(PropTypes.string).isRequired
};

function mapStateToProps(state) {
    return {
        filterValues: state.items.filterValues
    };
}

export default connect(mapStateToProps)(HeaderBar);

