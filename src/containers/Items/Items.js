import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ItemCardList from '../../components/ItemCardList';


const Items = ({ itemsData }) => (
    <ItemCardList itemsData={itemsData} />
);

Items.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Items;
