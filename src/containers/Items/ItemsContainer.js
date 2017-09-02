import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import Items from './Items';
import Borrow from '../Borrow/';
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
        return (
            <div className="itemsContainer">
                <Items itemsData={filteredItemsData} />
                {this.props.showModal && <Borrow />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.items.loading,
        itemsData: state.items.itemsData,
        filterValues: state.items.filterValues,
        showModal: state.items.showBorrowModal
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

ItemsContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    filterValues: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.objectOf(PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            _typename: PropTypes.string,
            available: PropTypes.bool,
            borrower: PropTypes.string,
            created: PropTypes.string,
            description: PropTypes.string,
            id: PropTypes.string,
            imageurl: PropTypes.string,
            itemowner: PropTypes.objectOf(PropTypes.shape({
                _typename: PropTypes.string,
                bio: PropTypes.string,
                email: PropTypes.string,
                fullname: PropTypes.string,
                id: PropTypes.string,
                tags: PropTypes.objectOf(PropTypes.shape({
                    _typename: PropTypes.string,
                    title: PropTypes.string
                })),
                title: PropTypes.string
            }))
        }))
    })).isRequired
};

const ItemsContainerWithData = graphql(getItems)(ItemsContainer);
export default connect(mapStateToProps)(ItemsContainerWithData);

