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

    filterItemsByTags(filterValues) {
        const items = this.props.itemsData;
        let result = [];

        if (filterValues) {
            result = items.filter(item => item.tags.find(tag => filterValues.includes(tag)));
        }
        return result.length > 0 ? result : items;
    }

    render() {
        if (this.props.loading) return <Loader />;
        const { filterValues } = this.props;
        const filteredItemsData = this.filterItemsByTags(filterValues);
        return <Items itemsData={filteredItemsData} />;
    }
}

ItemsContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    filterValues: PropTypes.arrayOf(PropTypes.string).isRequired
};

function mapStateToProps(state) {
    return {
        loading: state.items.loading,
        itemsData: state.items.itemsData,
        filterValues: state.items.filterValues
    };
}

export default connect(mapStateToProps)(ItemsContainer);
