import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import HeaderBar from '../../components/HeaderBar';
import { Link } from 'react-router-dom';

import './styles.css';

const Layout = ({ children }) => (
    <div className="appContentWrapper">
        <HeaderBar />
        <div className="appContent">
            {children}
        </div>
        <Link to="/share">
            <FloatingActionButton className="shareButton" backgroundColor="#000">
                <ContentAdd />
            </FloatingActionButton>
        </Link>
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
