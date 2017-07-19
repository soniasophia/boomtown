import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';

import './styles.css';


const FilterList = ({ dispatch, filterValues, handleChange }) => {
    const tags = [
        'Electronics',
        'Household Items',
        'Musical Instruments',
        'Physical Media',
        'Recreational Equipment',
        'Sporting Goods',
        'Tools'
    ];


    return (
        <SelectField
            multiple={true}
            hintText="Filter by tag"
            value={filterValues}
            onChange={(event, index, values) => dispatch(handleChange(values))}
            className="filterBar"
        >
            {tags.map((tag) => (
                <MenuItem
                    key={tag}
                    insetChildren={true}
                    checked={filterValues && filterValues.indexOf(tag) > -1}
                    value={tag}
                    primaryText={tag}
                />
          ))}
        </SelectField>
    );
};

FilterList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    filterValues: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChange: PropTypes.func.isRequired
};

export default connect()(FilterList);
