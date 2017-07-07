import React from 'react';
import Masonry from 'react-masonry-component';
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

export default ItemCardList;
