import ApolloClient, { createNetworkInterface } from 'react-apollo';
import applyMiddleware from 'apollo-client';

import { FirebaseAuth } from './firebase';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:5000/graphql'
});

networkInterface.use([{
    async applyMiddleware(req, next) {
        if (!req.options.headers) {
            req.options.headers = {}; // Create the header object if needed
        }
        const token = await FirebaseAuth.currentUser.getIdToken(true);
        req.options.headers['Authorization'] = token;
        next();
    }
}]);

const client = new ApolloClient({ networkInterface });

export default client;

