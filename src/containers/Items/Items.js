import React from 'react';
import './styles.css';
import ItemCardList from '../../components/ItemCardList';


const Items = ({ itemsData }) => {
    return (
        <ItemCardList itemsData={itemsData} />
    )
}

export default Items;
