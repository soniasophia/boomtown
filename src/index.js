import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ApolloProvider } from 'react-apollo';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
import createStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import client from './config/apolloClient';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';
import Routes from './routes';
import { FirebaseAuth, FirebaseDB } from './config/firebase';
import { setUserLogin } from './redux/modules/auth';

FirebaseAuth.onAuthStateChanged((user) => {
    if (user) {
        createStore.dispatch(setUserLogin(user.uid));

    // var displayName = user.displayName;
    // var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    // ...
    } else {
    // User is signed out.
        createStore.dispatch(setUserLogin(false));
    }
});

injectTapEventPlugin();

const Boomtown = () => (
    <ApolloProvider client={client} store={createStore}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </MuiThemeProvider>
    </ApolloProvider>
);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
