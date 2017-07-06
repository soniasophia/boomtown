import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { white } from 'material-ui/styles/colors';
import logo from '../../images/boomtown-logo.svg';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <div className="appHeader">
            <AppBar
                iconElementLeft={<img src={logo} alt="logo" />}
                style={{ backgroundColor: white }}
            />
        </div>
        <div className="appContent">
            {children}
        </div>
        <footer className="appFooter">
            <p>© 2017 Boomtown Corp. All Rights Reserved</p>
        </footer>
    </div>
);

Layout.defaultProps = {
    children: null
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
