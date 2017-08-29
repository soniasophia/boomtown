import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
} from 'material-ui/Stepper';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { Field, reduxForm } from 'redux-form';
import './styles.css';

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
    }) =>
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />;

const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
}) =>
    <SelectField
        multiple={true}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom}
    />;

const itemTags = [
    { id: 2, title: 'Household Items' },
    { id: 3, title: 'Physical Media' },
    { id: 4, title: 'Electronics' },
    { id: 5, title: 'Musical Instruments' },
    { id: 6, title: 'Recreational Equipment' },
    { id: 7, title: 'Sporting Goods' },
    { id: 8, title: 'Tools' }
];

let Share = ({ addNewItem, handleImageUpload, selectImage, shareForm, stepIndex, renderStepActions }) => {
    let uploadInput = false;

    const renderMenuItems = (tags) => {
        return (tags.map((tag) => (
            <MenuItem
                key={tag.title}
                insetChildren={true}
                checked={shareForm && shareForm.values.tags.includes(tag)}
                value={tag}
                primaryText={tag.title}
            />
        )));
    };

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
                <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addNewItem();
                    }}>
                        <Stepper activeStep={stepIndex} orientation="vertical">
                            <Step>
                                <StepLabel>Add an image</StepLabel>
                                <StepContent>
                                    <p>We live in a visual culture. Upload an image of the item you're sharing.</p>
                                    <RaisedButton
                                        label="Select an image"
                                        onClick={() => selectImage(uploadInput)}
                                    />
                                    <input
                                        onChange={handleImageUpload}
                                        ref={(input) => { uploadInput = input; }}
                                        hidden
                                        type="file"
                                        id="input"
                                    />
                                    {renderStepActions(0)}
                                </StepContent>
                            </Step>
                            <Step>
                                <StepLabel>Add a title and description</StepLabel>
                                <StepContent>
                                    <p>Describe the item to entice borrowers.</p>
                                    <Field
                                        name="title"
                                        label="Item Title"
                                        component={renderTextField}
                                    />
                                    <Field
                                        name="description"
                                        label="Item Description"
                                        component={renderTextField}
                                    />
                                    {renderStepActions(1)}
                                </StepContent>
                            </Step>
                            <Step>
                                <StepLabel>Categorize your item</StepLabel>
                                <StepContent>
                                    <p>Let us know what type of item it is!</p>
                                    <Field
                                        name="tags"
                                        label="Item Categories"
                                        component={renderSelectField}
                                    >
                                        {renderMenuItems(itemTags)}
                                    </Field>
                                    {renderStepActions(2)}
                                </StepContent>
                            </Step>
                            <Step>
                                <StepLabel>Confirm your things!</StepLabel>
                                <StepContent>
                                    <p>Is it all ready to share?</p>
                                    {renderStepActions(3)}
                                </StepContent>
                            </Step>
                        </Stepper>

                        {/* <h1>Add an Image</h1>
                    <p>We live in a visual culture. Upload an image of the item you're sharing.</p>
                    <RaisedButton
                        label="Select an Image"
                        onClick={() => selectImage(uploadInput)}
                    /><br />
                    <h1>Add a Title & Description</h1>
                    <Field
                        component={renderTextField}
                        label="Item Title"
                        name="shareTitle"
                    /><br />
                    <Field
                        component={renderTextField}
                        label="Item Description"
                        name="shareDescription"
                    /><br />
                    <h1>Categorize Your Item</h1>
                    <Field
                        name="itemTags"
                        component={renderSelectField}
                        label="Categorize Your Item"
                    >
                        {renderMenuItems(itemTags)}
                    </Field>
                    <input
                        onChange={handleImageUpload}
                        ref={(input) => { uploadInput = input; }}
                        hidden
                        type="file"
                        id="input"
                    />

                    <h1>Confirm Things!</h1>
                    <RaisedButton
                        label="Share New Item"
                        type="submit"
                    /> */}
                    </form>
                </div>
            </div>
        </div>
    );
};

Share = reduxForm({
    // a unique name for the form
    form: 'share'
})(Share);

export default Share;
