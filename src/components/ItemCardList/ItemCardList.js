import React from 'react';
import './styles.css';
import ItemCard from '../../components/ItemCard';

const ItemCardList = ({ itemsData }) => (
    <div>
        {itemsData.map(itemData => (
            <ItemCard key={itemData.id} itemDetails={itemData} />
        ))}
    </div>
);

export default ItemCardList;
