import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Borrow from './Borrow';
import { showBorrowModal, hideBorrowModal } from '../../redux/modules/items';

class BorrowModalContainer extends Component {

    borrowItem = (e) => {
        e.preventDefault();
        this.props.mutate({
            variables: {
                id: this.props.itemid,
                borrower: this.props.authenticated
            }
        }).then(({ data }) => {
            this.props.dispatch(hideBorrowModal(false));
        }).catch((error) => {
            console.log('There was an error', error);
        });
    }

    render() {
        return (
            <Borrow
                showModal={this.props.showModal}
                hideModal={hideBorrowModal}
                borrowItem={this.borrowItem}
                ownerName={this.props.ownerName}
            />
        );
    }
}

const borrowItem = gql`
    mutation borrowItem(
        $id: ID!
        $borrower: ID!
        ) { borrowItem(
            id: $id
            borrower: $borrower
        ){
        id
        }
    }
`;

BorrowModalContainer.propTypes = {
    authenticated: PropTypes.string.isRequired,
    itemid: PropTypes.string.isRequired,
    mutate: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    ownerName: PropTypes.string.isRequired,
    showModal: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    authenticated: state.auth.loginProfile,
    showModal: state.items.showBorrowModal,
    itemid: state.items.itemid,
    ownerName: state.items.itemowner
});

const BorrowModalWithData = graphql(borrowItem)(BorrowModalContainer);
export default connect(mapStateToProps)(BorrowModalWithData);

