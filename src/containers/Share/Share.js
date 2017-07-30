import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Gravatar from 'react-gravatar';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
// import { Step, Stepper, StepLabel, StepContent } from 'material-ui/Stepper';
import './styles.css';


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
                    <h1>Add an Image</h1>
                    <p>We live in a visual culture. Upload an image of the item you're sharing.</p>
                    <RaisedButton
                        label="Select an Image"
                        onClick={() => selectImage(uploadInput)}
                    /><br />
                    <h1>Add a Title & Description</h1>
                    <TextField
                        hintText="Item Title"
                        floatingLabelText="Item Title"
                        className="shareTitle"
                    /><br />
                    <TextField
                        hintText="Item Description"
                        floatingLabelText="Item Description"
                        className="shareDescription"
                    /><br />
                    <h1>Categorize Your Item</h1>
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
