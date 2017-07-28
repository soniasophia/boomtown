import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './styles.css';


const Share = ({ handleSubmit, handleImageUpload, selectImage }) => {
    let uploadInput = false;

    return (
        <div>
            <h1>Share stuff</h1>

            <form onSubmit={handleSubmit}>
                <RaisedButton
                    label="Select an Image"
                    onClick={() => selectImage(uploadInput)}
                />
                <input
                    onChange={handleImageUpload}
                    ref={(input) => { uploadInput = input; }}
                    hidden
                    type="file"
                    id="input"
                />

            </form>
        </div>
    );
};


export default Share;
