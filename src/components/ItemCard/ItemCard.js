import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import './styles.css';

const statusOfItem = (itemDetails) => {
    let itemStatus = '';
    const fakeId = 'LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2';
    if (itemDetails.borrower) {
        if (itemDetails.itemOwner.id === fakeId) {
            const borrower = itemDetails.borrower.fullName;
            itemStatus = `Lent to ${borrower}`;
        } else {
            itemStatus = 'Unavailable';
        }
    }
    return itemStatus;
};


const ItemCard = ({ itemDetails }) => {
    const getTags = itemDetails.tags.join(', ');

    return (
        <li className="itemCardWrapper">
            <Card>
                <CardMedia overlay={
                    (!itemDetails.available) ?
                        <CardTitle subtitle={statusOfItem(itemDetails)} className="itemStatus" />
                    : null
               }>
                    <img src={itemDetails.imageUrl} alt={itemDetails.title} />
                </CardMedia>

                <Link to={`/profile/${itemDetails.itemOwner.id}`}>
                    <CardHeader
                        title={itemDetails.itemOwner.fullName}
                        subtitle={moment.unix(itemDetails.createdOn).fromNow()}
                        avatar={<Gravatar email={itemDetails.itemOwner.email} className="gravatarImage" />}
                    />
                </Link>

                <CardTitle title={itemDetails.title} subtitle={getTags} />

                <CardText>
                    {itemDetails.description}
                </CardText>

                <CardActions>
                    {(itemDetails.available) ?
                        <FlatButton label="Borrow" className="borrowButton" />
                    : null}
                </CardActions>
            </Card>
        </li>
    );
};

ItemCard.propTypes = {
    itemDetails: PropTypes.shape({
        available: PropTypes.bool,
        borrower: PropTypes.string,
        createdOn: PropTypes.number,
        description: PropTypes.string,
        id: PropTypes.number,
        imageUrl: PropTypes.string,
        itemOwner: PropTypes.object,
        tags: PropTypes.array,
        title: PropTypes.string
    }).isRequired
};

export default ItemCard;
