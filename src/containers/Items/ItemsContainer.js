import React, { Component } from 'react';
import { connect } from 'react-redux';

import Items from './Items';
import Loader from '../../components/Loader';

import { fetchItems } from '../../redux/actions';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchItems());
    }

    render() {
        if (this.props.loading) return <Loader />;
        return <Items itemsData={this.props.itemsData} />;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.items.loading,
        itemsData: state.items.itemsData
    };
}

export default connect(mapStateToProps)(ItemsContainer);
