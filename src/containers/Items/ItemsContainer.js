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
        fetch('http://localhost:3001/items')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    itemsData: data,
                    loading: false
                });
            }).catch(error => console.log(error));
    }

    render() {
        if (this.state.loading) return <Loader />;
        return <Items itemsData={this.state.itemsData} />;
    }
}

export default ItemsContainer;
