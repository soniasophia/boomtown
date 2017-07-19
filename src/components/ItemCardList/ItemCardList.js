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
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ItemCardList;
