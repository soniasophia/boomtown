import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import './styles.css';

const Borrow = ({ showBorrowModal, hideBorrowModal, dispatch }) => (
    <Dialog
        title="Borrow Item"
        modal
        open={showBorrowModal}
        actions={[
            <FlatButton
                label="No Thanks"
                primary
                onTouchTap={() => dispatch(hideBorrowModal(false))}
            />,
            <RaisedButton
                label="Borrow"
                primary
                disabled
                onTouchTap={() => dispatch(hideBorrowModal(false))}
            />
        ]}
    >
        Would you like to request to borrow this item?
        <br />
    </Dialog>
);

Borrow.propTypes = {
    dispatch: PropTypes.func.isRequired,
    showBorrowModal: PropTypes.func.isRequired,
    hideBorrowModal: PropTypes.func.isRequired
};

export default connect()(Borrow);
