import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import { showBorrowModal } from '../../redux/modules/items';
import './styles.css';

// const statusOfItem = (itemDetails) => {
//     let itemStatus = '';
//     const fakeId = 'LAi9TYWxgGhbjgHu1Sm6ZvB1tRP2';
//     if (itemDetails.borrower) {
//         if (itemDetails.itemowner.id === fakeId) {
//             const borrower = itemDetails.borrower.fullname;
//             itemStatus = `Lent to ${borrower}`;
//         } else {
//             itemStatus = 'Unavailable';
//         }
//     }
//     return itemStatus;
// };


const ItemCard = ({ itemDetails, dispatch, authenticated }) => {
    const getTags = (itemDetails.tags.map(tag => tag.title).join(', '));

    return (
        <li className="itemCardWrapper">
            <Card>
                <CardMedia overlay={
                    (itemDetails.borrower) ?
                        <CardTitle subtitle={
                            (itemDetails.itemowner.id === authenticated) ?
                            `Lent to ${itemDetails.borrower.fullname}`
                            :
                            'Unavailable'
                        }
                        />
                        : null
               }>
                    <img src={itemDetails.imageurl} alt={itemDetails.title} />
                </CardMedia>

                <Link to={`/profile/${itemDetails.itemowner.id}`}>
                    <CardHeader
                        title={itemDetails.itemowner.fullname}
                        subtitle={moment(itemDetails.created, 'YYYYMMDD').fromNow()}
                        avatar={<Gravatar email={itemDetails.itemowner.email} className="gravatarImage" />}
                    />
                </Link>

                <CardTitle title={itemDetails.title} subtitle={getTags} />

                <CardText>
                    {itemDetails.description}
                </CardText>

                <CardActions>
                    {(itemDetails.borrower || itemDetails.itemowner.id === authenticated) ? null :
                    <FlatButton
                        label="Borrow"
                        className="borrowButton"
                        onTouchTap={() => dispatch(showBorrowModal(
                                itemDetails.id,
                                itemDetails.itemowner.fullname,
                                true
                            ))
                        }
                    />
                    }
                </CardActions>
            </Card>
        </li>
    );
};

ItemCard.propTypes = {
    itemDetails: PropTypes.shape({
        available: PropTypes.bool,
        borrower: PropTypes.string,
        created: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string,
        imageurl: PropTypes.string,
        itemowner: PropTypes.object,
        tags: PropTypes.array,
        title: PropTypes.string
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    authenticated: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    authenticated: state.auth.loginProfile
});

export default connect(mapStateToProps)(ItemCard);
