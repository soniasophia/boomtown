import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Borrow from './Borrow';
import { showBorrowModal } from '../../redux/modules/items';

class BorrowModalContainer extends Component {

  // borrowItem = (e) => {
  //   e.preventDefault();
  //   this.props.mutate({
  //     variables: {
        
  //     }
  //   })
  // }

    render() {
        return (
            <Borrow
                showBorrowModal={this.props.showBorrowModal}
                hideBorrowModal={showBorrowModal}
            />
        );
    }
}

BorrowModalContainer.propTypes = {
    showBorrowModal: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    showBorrowModal: state.items.borrowModalDisplayed
});

export default connect(mapStateToProps)(BorrowModalContainer);

