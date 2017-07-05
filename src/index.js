import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Items from './containers/Items';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import Profile from './containers/Profile';
import Share from './containers/Share';

injectTapEventPlugin();

const Boomtown = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>
            <Items />
        </Layout>
    </MuiThemeProvider>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
