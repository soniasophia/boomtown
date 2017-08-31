import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import './styles.css';

const Borrow = ({ showModal, hideModal, dispatch, ownerName, borrowItem }) => (
    <Dialog
        title="Borrow Item"
        modal
        open={showModal}
        actions={[
            <FlatButton
                label="No Thanks"
                primary
                onTouchTap={() => dispatch(hideModal(false))}
            />,
            <RaisedButton
                label="Borrow"
                primary
                disabled
                onTouchTap={() => dispatch(hideModal(false))}
            />
        ]}
    >
        Would you like to request to borrow this item?
        <br />
    </Dialog>
);

Borrow.propTypes = {
    dispatch: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    ownerName: PropTypes.string.isRequired,
    borrowItem: PropTypes.func.isRequired
};

export default connect()(Borrow);
