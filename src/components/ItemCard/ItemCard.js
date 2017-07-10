import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import './styles.css';

const ItemCard = ({ itemDetails }) => (
    <li className="itemCardWrapper">
        <Card>
            <CardMedia>
                <img src={itemDetails.imageUrl} alt={itemDetails.title} />
            </CardMedia>
            
            <div className="authorInfo">
                <Gravatar email={itemDetails.itemOwner.email} />

                <CardHeader
                    title={itemDetails.itemOwner.fullName}
                    subtitle={itemDetails.createdOn}
                />
            </div>

            <CardTitle title={itemDetails.title} subtitle={itemDetails.tags} />

            <CardText>
                <p>{itemDetails.description}</p>
            </CardText>

            <CardActions>
                <FlatButton label="Borrow" />
            </CardActions>
        </Card>
    </li>
);

export default ItemCard;
