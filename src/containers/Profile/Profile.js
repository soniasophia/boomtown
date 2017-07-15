import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
// import Gravatar from 'react-gravatar';
import './styles.css';

const Profile = ({ userData }) => (
    <div className="profileWrapper">

        <Card>
            <div className="userInfo">
                <CardTitle title={userData.fullName} className="userName" />
                <CardText className="userBio">
                    {userData.bio}
                </CardText>
            </div>

            <div className="userItems">
                <CardTitle title="0" subtitle="Items shared" />
                <CardTitle title="0" subtitle="Items borrowed" />
            </div>
            <CardHeader
                avatar={<Gravatar email={userData.email} className="gravatarImage" />}
            />
        </Card>

    </div>
);

export default Profile;
