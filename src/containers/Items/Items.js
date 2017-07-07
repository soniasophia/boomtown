import React from 'react';
import './styles.css';
import ItemCardList from '../../components/ItemCardList';

const Items = ({ itemsData }) => (
    <div>
        <ul>
            {itemsData.map(itemData => (
                <ItemCardList key={itemData.id} itemsData={itemsData} />
            ))}
        </ul>
    </div>
);

export default Items;
