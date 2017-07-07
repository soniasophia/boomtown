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
        Promise.all(['http://localhost:3001/items', 'http://localhost:3001/users'].map(url => (
            fetch(url).then(response => response.json())
        ))).then(json => {
            const [items, users] = json;
            const itemsWithOwners = items.map(item => {
                const itemOwner = users.filter(user => user.id === item.itemOwner);
                item.itemOwner = itemOwner[0];
                
                return item;
            });

            this.setState({
                itemsData: itemsWithOwners,
                loading: false
            });
        });



    //     fetch('http://localhost:3001/items')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 itemsData: data,
    //                 loading: false
    //             });
    //         }).catch(error => console.log(error));
    }

    render() {
        if (this.state.loading) return <Loader />;
        return <Items itemsData={this.state.itemsData} />;
    }
}

export default ItemsContainer;
