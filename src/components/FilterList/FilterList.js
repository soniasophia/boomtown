import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

//import action creator to dispatch the action on the onChange

import './styles.css';

const names = [
    'Electronics',
    'Household Items',
    'Musical Instruments',
    'Physical Media',
    'Recreational Equipment',
    'Sporting Goods',
    'Tools',
];

// change to functional stateless component
export default class FilterList extends Component {
    state = {
        values: [],
    };

    handleChange = (event, index, values) => this.setState({ values });

    menuItems(values) {
        return names.map((name) => (
            <MenuItem
                key={name}
                insetChildren={true}
                checked={values && values.indexOf(name) > -1}
                value={name}
                primaryText={name}
            />
    ));
    }

    render() {
        const { values } = this.state;
        return (
            <SelectField
                multiple={true}
                hintText="Filter by tag"
                value={values}
                onChange={this.handleChange} //dispatch action to update store
                className="filterBar"
            >
                {this.menuItems(values)}
            </SelectField>
        );
    }
}
