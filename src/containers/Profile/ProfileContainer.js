import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Items from '../../containers/Items/Items';
import Profile from './Profile';
import Loader from '../../components/Loader';


class ProfileContainer extends Component {

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
        tags {
            title
        }
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

ProfileContainer.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.objectOf(PropTypes.shape({
        fetchMore: PropTypes.func.isRequired,
        items: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        networkStatus: PropTypes.number.isRequired,
        refetch: PropTypes.func.isRequired,
        startPolling: PropTypes.func.isRequired,
        stopPolling: PropTypes.func.isRequired,
        subscribeToMore: PropTypes.func.isRequired,
        updateQuery: PropTypes.func.isRequired,
        variables: PropTypes.object.isRequired,
        user: PropTypes.objectOf(PropTypes.shape({
            bio: PropTypes.string.isRequired,
            borrowed: PropTypes.arrayOf(PropTypes.object).isRequired,
            email: PropTypes.string.isRequired,
            fullname: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(PropTypes.object).isRequired
        }))
    })).isRequired,
};

const profileContainerWithData = graphql(getUsers, {
    options: props => ({
        variables: { id: props.match.params.id }
    }),
})(ProfileContainer);

export default connect()(profileContainerWithData);
