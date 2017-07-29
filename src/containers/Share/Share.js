import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Gravatar from 'react-gravatar';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import './styles.css';
import TextField from 'material-ui/TextField';


const Share = ({ handleSubmit, handleImageUpload, selectImage }) => {
    let uploadInput = false;

    return (
        <div className="newItemContainer">
            <div className="newItemCard">
                <Card>
                    <CardMedia>
                        <img src="https://www.europuppy.com/wp-content/uploads/x266-1024x640.jpg.pagespeed.ic.C2bnRbDKmK.jpg" alt="" />
                    </CardMedia>

                    <CardHeader
                        title="Item Owner"
                        subtitle="Time created"
                        avatar={<Gravatar email="fakeemail@gmail.com" className="gravatarImage" />}
                    />

                    <CardTitle title="New Item Title" subtitle="New Tags" />

                    <CardText>
                        New item description.
                    </CardText>
                </Card>
            </div>


            <div className="newItemForm">
                <form onSubmit={handleSubmit}>
                    <RaisedButton
                        label="Select an Image"
                        onClick={() => selectImage(uploadInput)}
                    /><br />
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Floating Label Text"
                        className="shareTitle"
                    /><br />
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Floating Label Text"
                        className="shareDescription"
                    /><br />
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Floating Label Text"
                    /><br />
                    <input
                        onChange={handleImageUpload}
                        ref={(input) => { uploadInput = input; }}
                        hidden
                        type="file"
                        id="input"
                    />
                </form>
            </div>
        </div>
    );
};


export default Share;
