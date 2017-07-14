import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Items from './Items';
import Loader from '../../components/Loader';

import { fetchItems } from '../../redux/modules/items';


class ItemsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchItems());
    }

    render() {
        if (this.props.loading) return <Loader />;
        return <Items itemsData={this.props.itemsData} />;
    }
}

ItemsContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};
//TODO specify an array of what .. array of objects

function mapStateToProps(state) {
    return {
        loading: state.items.loading,
        itemsData: state.items.itemsData
    };
}

export default connect(mapStateToProps)(ItemsContainer);
