import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { white } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../images/boomtown-logo.svg';
import './styles.css';

import { selectFilterItems } from '../../redux/modules/items';
import FilterList from '../FilterList';
import { FirebaseAuth } from '../../config/firebase';


const HeaderBar = ({ filterValues, dispatch, authenticated }) => {
    if (authenticated) {
        return (
            <div className="appHeader">
                <AppBar
                    style={{ backgroundColor: white }}
                    iconElementLeft={
                        <Link to={'/'} >
                            <img className="AppbarLogo" src={logo} alt="Boomtown Logo" />
                        </Link>
                        }

                    title={
                        <FilterList
                            dispatch={dispatch}
                            handleChange={selectFilterItems}
                            filterValues={filterValues}
                        />
                    }
                >
                    <div className="appButtons">
                        {authenticated && <Link to={`profile/${authenticated}`}>
                            <RaisedButton
                                label="My Profile"
                                className="profileButton"
                                backgroundColor="rgb(129, 212, 250)"
                                labelColor="white"
                            />
                        </Link>}
                        <FlatButton
                            onTouchTap={() => FirebaseAuth.signOut()}
                            label="Logout"
                            className="logoutButton"
                            backgroundColor="#333333"
                            hoverColor="#9a9a9a"
                        />
                    </div>
                </AppBar>
            </div>
        );
    } else {
        return null;
    }
};

HeaderBar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filterValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    authenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        filterValues: state.items.filterValues,
        authenticated: state.auth.loginProfile
    };
}

export default connect(mapStateToProps)(HeaderBar);

