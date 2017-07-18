import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';


//import action creator to dispatch the action on the onChange

import './styles.css';


// const FilterList = ({className, filterValues, dispatch, onChangeAction }) => { }
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

    // handleChange = (event, index, filterValues) => this.props.dispatch(selectFilterItems(filterValues));

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


// function mapStateToProps(state) {
//     return {
//         filterValues: state.items.filterValues
//     };
// }

export default connect()(FilterList);
