import React from 'react';
import PropTypes from 'prop-types';
import HeaderBar from '../../components/HeaderBar';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <HeaderBar />
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
