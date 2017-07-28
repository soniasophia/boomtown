import React from 'react';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
import PropTypes from 'prop-types';
import './styles.css';
import ItemCardList from '../../components/ItemCardList';


const Items = ({ itemsData }) => (
    // <div>
    <ItemCardList itemsData={itemsData} />
    // </div>
);

Items.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Items;
