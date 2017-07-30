import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import HeaderBar from '../../components/HeaderBar';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <HeaderBar />
        <div className="appContent">
            {children}
        </div>
        {(window.location.pathname === '/') ?
            <Link to={'/share'}>
                <FloatingActionButton className="shareButton" backgroundColor="#000">
                    <ContentAdd />
                </FloatingActionButton>
            </Link> : null}
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
