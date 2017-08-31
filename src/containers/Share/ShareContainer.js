import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Share from './Share';
import { FirebaseAuth, FirebaseStorage } from '../../config/firebase';
import { updateStepIndex, setItemImageUrl, finishForm, resetShareForm } from '../../redux/modules/share';

class ShareContainer extends Component {

    handleNext = () => {
        const { stepIndex } = this.props;
        return this.props.dispatch(updateStepIndex(stepIndex + 1));
    }

    handlePrev = (stepIndex) => {
        if (stepIndex > 0) {
            return this.props.dispatch(updateStepIndex(stepIndex - 1));
        }
        return this.props.dispatch(updateStepIndex(stepIndex));
    }

    selectImage = (fileInput) => {
        this.fileInput = this.fileInput || fileInput;
        this.fileInput.click();
    }

    handleImageUpload = () => {
        const cloud = FirebaseStorage.ref();
        const userId = FirebaseAuth.currentUser.uid;
        const fileName = this.fileInput.files[0].name;

        cloud.child(`images/${userId}/${fileName}`)
            .put(this.fileInput.files[0])
            .then(result => {
                console.log(result);
                this.props.dispatch(setItemImageUrl(result.metadata.downloadURLs[0]));
            }).catch((error) => {
                console.log(error);
            });
    }

    addNewItem = () => {
        this.props.dispatch(finishForm(true));
        this.props.mutate({
            variables: {
                title: `${this.props.shareForm.values.title}`,
                description: `${this.props.shareForm.values.description}`,
                imageurl: `${this.props.imageurl}`,
                itemowner: `${this.props.authenticated}`,
                tags: this.props.shareForm.values.tags.map((tag) => {
                    return { id: tag.id };
                })
            }
        }).then(({ data }) => {
            console.log('got data', data);
        }).catch((error) => {
            console.log('there was an error', error);
        });
    }

    renderStepActions = (step) => {
        const { stepIndex } = this.props;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 3 ? 'Finish' : 'Next'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={stepIndex === 3 ? () => this.addNewItem() : () => this.handleNext()}
                    style={{ marginRight: 12 }}
                />
                { step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={() => this.handlePrev()}
                    />
                ) }
            </div>
        );
    }


    render() {
        const { stepIndex, finished } = this.props;

        if (finished) {
            this.props.dispatch(resetShareForm());
            return (
                <Redirect to={'/'} />
            );
        }

        return (
            <Share
                selectImage={this.selectImage}
                handleImageUpload={this.handleImageUpload}
                addNewItem={this.addNewItem}
                stepIndex={stepIndex}
                renderStepActions={this.renderStepActions}
            />
        );
    }
}

const addItem = gql`
    mutation addItem (
        $title: String!
        $description: String!
        $imageurl:String!
        $itemowner: String!
        $tags: [AssignedTag]!
)
{
  addItem(
    title: $title
    description: $description
    imageurl: $imageurl
    itemowner: $itemowner
    tags: $tags
  ) {
      title
      description
      imageurl
      itemowner {
        id
      }
      tags {
        title
      }
  }
}
`;

function mapStateToProps(state) {
    return {
        authenticated: state.auth.loginProfile,
        shareForm: state.form.share,
        imageurl: state.share.imageField,
        finished: state.share.finished,
        stepIndex: state.share.stepIndex
    };
}

ShareContainer.propTypes = {
    stepIndex: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    finished: PropTypes.bool.isRequired,
    mutate: PropTypes.func.isRequired,
    imageurl: PropTypes.string.isRequired,
    authenticated: PropTypes.string.isRequired
};

const shareContainerWithData = graphql(addItem)(ShareContainer);
export default connect(mapStateToProps)(shareContainerWithData);

