import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Routes from './routes';

injectTapEventPlugin();

const Boomtown = () => (
    <Provider store={createStore}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </MuiThemeProvider>
    </Provider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
