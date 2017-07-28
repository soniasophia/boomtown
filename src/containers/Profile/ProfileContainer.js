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
    loading: PropTypes.bool.isRequired
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
      id  
      fullname
      bio
      email
      items {
        id
        title
        description
        imageurl
        tags
        created
        available
        borrower {
            id
            fullname
        }
        itemowner {
            id
            email
            fullname
        }
      }
      borrowed {
          id
          title
          itemowner {
            id
            fullname
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
