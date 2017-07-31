import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Share from './Share';
import { setItemImageUrl } from '../../redux/modules/share';
import { FirebaseAuth, FirebaseStorage } from '../../config/firebase';

class ShareContainer extends Component {

    // reset = () => {
    //     this.props.dispatch(resetFields());
    // }

    selectImage = (fileInput) => {
        this.fileInput = this.fileInput || fileInput;
        this.fileInput.click();
    }

    handleImageUpload = () => {
        const cloud = FirebaseStorage.ref();
        const userId = FirebaseAuth.currentUser.uid;
        const fileName = this.fileInput.files[0].name;
        // TODO: this.props.dispatch(startImageUpload());

        cloud.child(`images/${userId}/${fileName}`)
            .put(this.fileInput.files[0])
            .then(result => {
                console.log(result);
                this.props.dispatch(setItemImageUrl(result.metadata.downloadURLs[0]));
            }).catch((error) => {
                console.log(error);
                // TODO
            });
    }

    addNewItem = (e) => {
        e.preventDefault();
        console.log(this.props.shareForm.values.itemTags);
        this.props.mutate({
            variables: {
                title: `${this.props.shareForm.values.shareTitle}`,
                description: `${this.props.shareForm.values.shareDescription}`,
                imageurl: `${this.props.imageurl}`,
                itemowner: `${this.props.authenticated}`,
                tags: this.props.shareForm.values.itemTags.map((itemTag) => {
                    return { id: itemTag.id };
                })
            }
        }).then(({ data }) => {
            console.log('got data', data);
        }).catch((error) => {
            console.log('there was an error', error);
        });
    }


    render() {
        return (
            <Share
                selectImage={this.selectImage}
                handleImageUpload={this.handleImageUpload}
                addNewItem={this.addNewItem}
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
        imageurl: state.imageurl.imageField
    };
}

const shareContainerWithData = graphql(addItem)(ShareContainer);
export default connect(mapStateToProps)(shareContainerWithData);

