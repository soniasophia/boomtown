import React, { Component } from 'react';
import Share from './Share';
import { FirebaseAuth, FirebaseStorage } from '../../config/firebase';

class ShareContainer extends Component {

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
            // TODO: this.props.dispatch(setItemImageUrl(result.metadata.downloadURLs[0]));
            // this.handleNext();
        }).catch(() => {
            // TODO
        });
    }

    handleSubmit = () => {
        const {
            itemTitle,
            itemDescription,
        } = this.itemsData
    }


    render() {
        return (
            <Share
                selectImage={this.selectImage}
                handleImageUpload={this.handleImageUpload}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default ShareContainer;

