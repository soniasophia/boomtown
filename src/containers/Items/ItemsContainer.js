import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Items from './Items';
import Loader from '../../components/Loader';


class ItemsContainer extends Component {

    filterItemsByTags(filterValues) {
        const items = this.props.data.items;

        if (filterValues.length) {
            return items.filter(item => item.tags.find(tag => filterValues.includes(tag.title)));
        }
        return items;
    }

    render() {
        if (this.props.data.loading) return <Loader />;
        const { filterValues } = this.props;
        const filteredItemsData = this.filterItemsByTags(filterValues);
        return <Items itemsData={filteredItemsData} />;
    }
}

ItemsContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    // data: PropTypes.shape({
    //     loading: PropTypes.bool.isRequired
    // }).isRequired,
    // items: PropTypes.shape({
    //     available: PropTypes.bool.isRequired,
    //     borrower: PropTypes.string.isRequired,
    //     created: PropTypes.number.isRequired,
    //     description: PropTypes.string.isRequired,
    //     id: PropTypes.number.isRequired,
    //     imageurl: PropTypes.string.isRequired,
    //     itemowner: PropTypes.object.isRequired,
    //     tags: PropTypes.string.isRequired,
    //     title: PropTypes.string.isRequired
    // }).isRequired,
    filterValues: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps(state) {
    return {
        loading: state.items.loading,
        itemsData: state.items.itemsData,
        filterValues: state.items.filterValues
    };
}

const getItems = gql`
    query fetchItems {
        items {
            id
            title
            description
            imageurl
            tags {
                title
            }
            itemowner {
                id
                bio
                fullname
                email
            }
            created
            available
            borrower {
                fullname
            }
        }
    }
`;
const ItemsContainerWithData = graphql(getItems)(ItemsContainer);
export default connect(mapStateToProps)(ItemsContainerWithData);

