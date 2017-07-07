import React from 'react';
import './styles.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const ItemCard = ({ itemDetails }) => (
    <Card>
        <CardMedia>
            <img src={itemDetails.imageUrl} alt={itemDetails.title} />
        </CardMedia>

        <CardHeader
            title={itemDetails.itemOwner.fullName}
            subtitle={itemDetails.createdOn}
            avatar="images/jsa-128.jpg"
        />

        <CardTitle title={itemDetails.title} subtitle={itemDetails.tags} />

        <CardText>
            <p>{itemDetails.description}</p>
        </CardText>

        <CardActions>
            <FlatButton label="Borrow" />
        </CardActions>
    </Card>
);

export default ItemCard;
