import React, { Component } from 'react';
import Items from './Items';
import Loader from '../../components/Loader';

class ItemsContainer extends Component {

    constructor() {
        super();

        this.state = {
            loading: true,
            itemsData: []

        };
    }

    componentDidMount() {


    }

    render() {
        if (this.state.loading) return <Loader />;
        return <Items />;
    }
}

export default ItemsContainer;
