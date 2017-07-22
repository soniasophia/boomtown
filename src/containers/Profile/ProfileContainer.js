import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Items from '../../containers/Items/Items';
import Profile from './Profile';
import Loader from '../../components/Loader';

// import { fetchUserData } from '../../redux/modules/profile';
// import { fetchItems } from '../../redux/modules/items';

class ProfileContainer extends Component {

    // componentDidMount() {
    //     this.props.dispatch(fetchUserData(this.props.match.params.id));
    //     this.props.dispatch(fetchItems(this.props.match.params.id));
    // }

    render() {
        if (this.props.data.loading) return <Loader />;
        return (
            <div className="profile">
                <div>
                    <Profile userData={this.props.data.user} />
                </div>
                <div>
                    <Items itemsData={this.props.data.user.items} />
                </div>
            </div>
        );
    }
}

ProfileContainer.propTypes = {
    myProfile: PropTypes.objectOf.isRequired,
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    specificUserItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.objectOf.isRequired
};

function mapStateToProps(state) {
    return {
        // loading: state.profile.loading,
        // myProfile: state.profile.myProfile,
        // itemsData: state.items.itemsData,
        // specificUserItems: state.items.specificUserItems
    };
}

const getUsers = gql`
  query fetchUsers($id: ID!) {
    user(id: $id) {
      fullName
      bio
      email
      items {
        id
        title
        description
        imageUrl
        tags
        createdOn
        available
        borrower {
            fullName
        }
        itemOwner {
            id
            email
            fullName
        }
      }
      borrowed {
          id
          title
          itemOwner {
            fullName
          }
      }
    }
    
  }
`;

const profileContainerWithData = graphql(getUsers, {
    options: props => ({
        variables: { id: props.match.params.id }
    }),
})(ProfileContainer);

export default connect(mapStateToProps)(profileContainerWithData);
