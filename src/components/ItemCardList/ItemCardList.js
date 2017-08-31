import React from 'react';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';
import './styles.css';
import ItemCard from '../../components/ItemCard';

const ItemCardList = ({ itemsData }) => (
    <Masonry
        className={'itemCardListWrapper'}
        elementType={'ul'}
    >
        {itemsData.map(itemData => (
            <ItemCard key={itemData.id} itemDetails={itemData} />
            ))}

    </Masonry>
);

ItemCardList.propTypes = {
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

export default ItemCardList;
