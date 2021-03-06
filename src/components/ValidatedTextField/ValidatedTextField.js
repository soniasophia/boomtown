import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import { blueGrey900 } from 'material-ui/styles/colors';

const styles = {
    fieldStyle: {
        width: '100%'
    },
    errorStyle: {
        color: blueGrey900,
        position: 'absolute',
        bottom: '-0.42rem'
    },
    underlineStyle: {
        borderColor: blueGrey900
    }
};

const ValidatedTextField = ({ label, onChange, type }) => (
    <TextField
        style={styles.fieldStyle}
        hintText={label}
        floatingLabelText={label}
        errorStyle={styles.errorStyle}
        underlineFocusStyle={styles.underlineStyle}
        onChange={(e) => onChange(e)}
        type={type}
    />
);

ValidatedTextField.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default ValidatedTextField;
