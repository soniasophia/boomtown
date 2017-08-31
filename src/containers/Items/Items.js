import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ItemCardList from '../../components/ItemCardList';


const Items = ({ itemsData }) => (
    <ItemCardList itemsData={itemsData} />
);

Items.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.shape({
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
    })).isRequired
};

export default Items;
