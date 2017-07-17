import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';

import { selectFilterItems } from '../../redux/modules/items';

//import action creator to dispatch the action on the onChange

import './styles.css';

const tags = [
    'Electronics',
    'Household Items',
    'Musical Instruments',
    'Physical Media',
    'Recreational Equipment',
    'Sporting Goods',
    'Tools'
];

// change to functional stateless component
class FilterList extends Component {

    handleChange = (event, index, filterValues) => this.props.dispatch(selectFilterItems(filterValues));

    menuItems(filterValues) {
        return tags.map((tag) => (
            <MenuItem
                key={tag}
                insetChildren={true}
                checked={filterValues && filterValues.indexOf(tag) > -1}
                value={tag}
                primaryText={tag}
            />
    ));
    }

    render() {
        const { filterValues } = this.props;
        return (
            <SelectField
                multiple={true}
                hintText="Filter by tag"
                value={filterValues}
                onChange={this.handleChange} //dispatch action to update store
                className="filterBar"
            >
                {this.menuItems(filterValues)}
            </SelectField>
        );
    }
}

function mapStateToProps(state) {
    return {
        filterValues: state.items.filterValues
    };
}

export default connect(mapStateToProps)(FilterList);
