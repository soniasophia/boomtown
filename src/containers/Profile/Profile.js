import React from 'react';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';
import './styles.css';

const getItemsBorrowed = (userData, itemsData) => {
    const borrowed = itemsData.filter(item => userData.id === item.borrower);
    return borrowed.length;
};

const getItemsShared = (userData, itemsData) => {
    const shared = itemsData.filter(item => userData.id === item.itemOwner.id);
    return shared.length;
};

const itemsCurrentlyBorrowed = (userData, itemsData) => {
    const borrowed = itemsData.filter(item => userData.id === item.borrower);
    return borrowed.map(item => {
        return (
            <li>{item.title} from {item.itemOwner.fullName}</li>
        );
    });
};


const Profile = ({ userData, itemsData }) => (
    <div className="profileWrapper">

        <Card>
            <div className="userInfo">
                <CardTitle title={userData.fullName} subtitle={userData.bio} className="userName" />

                <div className="currentlyBorrowing">
                    <ul>
                        <CardTitle title="Currently borrowing:" subtitle={itemsCurrentlyBorrowed(userData, itemsData)} />
                    </ul>
                </div>
            </div>

            <div className="userItems">
                <CardTitle title={getItemsShared(userData, itemsData)} subtitle="Items shared" />
                <CardTitle title={getItemsBorrowed(userData, itemsData)} subtitle="Items borrowed" />
            </div>
            <CardHeader
                className="gravatar-Image"
                avatar={<Gravatar email={userData.email} size={170} />}
            />
        </Card>

    </div>
);

Profile.propTypes = {
    itemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
    userData: PropTypes.objectOf.isRequired
};

export default Profile;
