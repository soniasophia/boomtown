import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Loader from '../../components/Loader';

import { fetchUserData } from '../../redux/modules/profile';
import { fetchItems } from '../../redux/modules/items';

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchUserData(this.props.match.params.id));
        this.props.dispatch(fetchItems());
    }

    // filterItemsByUser() {

    //     // return just the items that belog to the use in an array
    // }

    render() {
        // const filteredItems = filterItemsByUser();
        if (this.props.loading) return <Loader />;
        return <Profile userData={this.props.myProfile} itemsData={this.props.itemsData} />;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.profile.loading,
        myProfile: state.profile.myProfile,
        itemsData: state.items.itemsData
    };
}

export default connect(mapStateToProps)(ProfileContainer);
